import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type ComponentsContract = {
  approvedImports: Record<string, string[]>;
  preferredForNewGeneration: string[];
  legacyOrUseWithCare: Array<{ component: string; reason: string }>;
  deprecatedMakeSurface?: string[];
  targetMakeSurface?: Record<string, string[]>;
  plannedAfterRegeneration?: string[];
};

type PropsContract = {
  components: Record<string, Record<string, string[]>>;
  globalPropRule: { doNotInventValuesFor: string[] };
};

type ComponentRegistry = {
  defaults: { [key: string]: unknown };
  components: Array<{ name: string; guideline: string; genAIStatus: string }>;
};

const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const propsContract = readJson<PropsContract>("contracts/props.contract.json");
const componentRegistry = readJson<ComponentRegistry>("contracts/component-registry.contract.json");
const publicIndex = read("src/design-system/index.ts");

const approvedImports = new Set(Object.values(componentsContract.approvedImports).flat());
const legacyComponents = new Set(componentsContract.legacyOrUseWithCare.map((entry) => entry.component));
const deprecatedMakeSurface = new Set(componentsContract.deprecatedMakeSurface ?? []);
const plannedAfterRegeneration = new Set(componentsContract.plannedAfterRegeneration ?? []);
const guidelineByComponent = new Map(componentRegistry.components.map((entry) => [entry.name, entry.guideline]));
const targetMakeSurface = new Set(Object.values(componentsContract.targetMakeSurface ?? {}).flat());

const allowedPascalCaseTokens = new Set([
  ...approvedImports,
  ...deprecatedMakeSurface,
  ...plannedAfterRegeneration,
  "OK",
  "Submit",
  "CreateActionDialogValues",
  "DetailPanelTab",
  "DetailPanelTabsProps",
  "HTMLDivElement",
  "HTMLInputElement",
  "HTMLLabelElement",
  "HTMLSelectElement",
  "HTMLTextAreaElement",
  "KPI",
  "Next",
  "ReactNode",
  "RecommendationReadiness",
  "SourceStrength",
  "ValidationStatus",
  "WorkspaceDetailPanelMode",
  "WorkspaceDetailPanelProps",
]);

const promptFiles = [
  "guidelines/prompts/customer-monitoring.md",
  "guidelines/prompts/renewal-risk-review.md",
  "guidelines/prompts/asset-recommendation-review.md",
];

const highImpactReferenceFiles = [
  "guidelines/reference/decision/alert-card.md",
  "guidelines/reference/decision/recommendation-card.md",
  "guidelines/reference/decision/action-card.md",
  "guidelines/reference/patterns/renewal-risk-summary.md",
  "guidelines/reference/patterns/service-risk-summary.md",
  "guidelines/reference/patterns/value-proof-card.md",
  "guidelines/reference/patterns/connectivity-coverage-card.md",
  "guidelines/reference/patterns/customer-review-readiness-card.md",
  "guidelines/reference/patterns/customer-status-card.md",
  "guidelines/reference/patterns/create-action-dialog.md",
  "guidelines/reference/components/tabs.md",
  "guidelines/reference/components/dialog.md",
  "guidelines/reference/forms/input.md",
  "guidelines/reference/forms/select.md",
  "guidelines/reference/components/page-header.md",
  "guidelines/reference/components/metric-card.md",
  "guidelines/reference/decision/metric-grid.md",
];

const requiredSections = [
  "## Purpose",
  "## Use this component when",
  "## Do not use this component when",
  "## Prefer this component over",
  "## Never generate",
  "## Required props",
  "## Controlled values",
  "## GenAI generation rules",
  "## Common generation failures",
  "## Repair prompt",
  "## Related stories",
  "## Related contracts",
];

function isExportedComponent(componentName: string) {
  return new RegExp(`export\\s+\\{[^}]*\\b${componentName}\\b[^}]*\\}\\s+from`).test(publicIndex);
}

function resolveGuideline(componentName: string) {
  return guidelineByComponent.get(componentName);
}

describe("generation rules: documentation and contract alignment", () => {
  it.each(componentsContract.preferredForNewGeneration)("contract component %s is exported", (componentName) => {
    expect(isExportedComponent(componentName), `${componentName} must be exported during transition`).toBe(true);
  });

  it.each([...approvedImports])("approved import %s is exported or explicitly legacy-rationalized", (componentName) => {
    expect(isExportedComponent(componentName) || legacyComponents.has(componentName) || deprecatedMakeSurface.has(componentName)).toBe(true);
  });

  it.each(componentRegistry.components.filter((entry) => entry.genAIStatus === "preferred"))(
    "preferred component $name has a guideline",
    ({ name, guideline }) => {
      expect(guideline, `${name} must define a guideline`).toBeTruthy();
      expect(fs.existsSync(path.join(rootDir, guideline)), `${name} guideline ${guideline} is missing`).toBe(true);
    },
  );

  it.each(componentRegistry.components.filter((entry) => targetMakeSurface.has(entry.name) && fs.existsSync(path.join(rootDir, entry.guideline))))(
    "target component $name guideline uses required sections when regenerated",
    ({ guideline }) => {
      const content = read(guideline);
      const isRegenerated = requiredSections.every((section) => content.includes(section));
      const isExplicitlyTransitional =
        content.includes("v0.7.0") ||
        content.includes("target composition") ||
        content.includes("screen-contract led") ||
        content.includes("# Interactive panels");
      expect(isRegenerated || isExplicitlyTransitional, `${guideline} must be regenerated or explicitly transitional`).toBe(true);
    },
  );

  it.each(Object.entries(propsContract.components))(
    "controlled values for %s appear in its guideline when documented",
    (componentName, props) => {
      const guideline = resolveGuideline(componentName);
      if (!guideline || !fs.existsSync(path.join(rootDir, guideline))) {
        return;
      }

      const content = read(guideline);
      for (const values of Object.values(props)) {
        if (values.length === 0) {
          continue;
        }
        for (const value of values) {
          expect(content, `${guideline} must document controlled value ${value}`).toContain(value);
        }
      }
    },
  );

  it("setup remains focused on package setup and points to contracts", () => {
    const setup = read("guidelines/setup.md");
    expect(setup).toContain("## Install");
    expect(setup).toContain("## Required imports");
    expect(setup).toContain("## Stylesheet import");
    expect(setup).toContain("## Public entry points");
    expect(setup).toContain("contracts/package.contract.json");
    expect(setup).toContain("contracts/props.contract.json");
  });

  it("reference folder defines a runtime boundary", () => {
    const referenceReadme = read("guidelines/reference/README.md");
    const boundary = read("guidelines/reference/reference-boundaries.md");

    expect(referenceReadme).toContain("not the default Figma Make reading path");
    expect(referenceReadme).toContain("guidelines/reference/reference-boundaries.md");

    for (const guideline of highImpactReferenceFiles) {
      expect(boundary, `${guideline} should be covered by the boundary matrix`).toContain(guideline);
    }
  });

  it("screen architecture reference does not replace runtime guidance", () => {
    const content = read("guidelines/reference/screen-architecture/README.md");

    expect(content).toContain("not the default Figma Make runtime path");
    expect(content).toContain("guidelines/runtime/generation-flow.md");
    expect(content).not.toContain("guidelines/prompts/");
    expect(content).not.toContain("guidelines/examples/golden/");
  });

  it("reference guidelines do not recommend unknown PascalCase package components", () => {
    const guidelineDirs = [
      "guidelines/reference/components",
      "guidelines/reference/decision",
      "guidelines/reference/forms",
      "guidelines/reference/patterns",
      "guidelines/reference/screen-architecture",
    ];

    for (const guidelineDir of guidelineDirs) {
      for (const fileName of fs.readdirSync(path.join(rootDir, guidelineDir)).filter((fileName) => fileName.endsWith(".md"))) {
        const relativePath = path.join(guidelineDir, fileName);
        const references = [...read(relativePath).matchAll(/`([A-Z][A-Za-z0-9]+)`/g)].map((match) => match[1]);
        for (const componentName of references) {
          expect(allowedPascalCaseTokens.has(componentName), `${relativePath} references unknown PascalCase token ${componentName}`).toBe(true);
        }
      }
    }
  });

  it.each(promptFiles)("%s does not reference obsolete components", (promptFile) => {
    const content = read(promptFile);
    for (const pattern of [/\bPageHeader\b/, /\bSlideOverPanel\b/, /\bPanelHeader\b/, /\bPanelBody\b/, /\bPanelFooter\b/, /\bPanelClose\b/, /(?<!Workspace)\bDetailPanel\b/]) {
      expect(content).not.toMatch(pattern);
    }
  });
});
