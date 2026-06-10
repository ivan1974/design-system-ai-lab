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
const guidelineByComponent = new Map(componentRegistry.components.map((entry) => [entry.name, entry.guideline]));

const allowedPascalCaseTokens = new Set([
  ...approvedImports,
  "OK",
  "Submit",
  "CreateActionDialogValues",
  "DetailPanelTab",
  "DetailPanelTabsProps",
  "DialogCloseProps",
  "DialogFooterProps",
  "DialogProps",
  "FieldProps",
  "InputProps",
  "LabelProps",
  "SelectProps",
  "TextareaProps",
  "AssetIntelligenceReadiness",
  "AssetIntelligenceSummaryMode",
  "CustomerReadiness",
  "CustomerStatusCardMode",
  "HumanValidationRequirement",
  "ProofReadiness",
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
  "guidelines/prompts/qbr-readiness.md",
  "guidelines/prompts/installed-base-explorer.md",
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
  it.each(Object.keys(propsContract.components))("contract component %s is exported", (componentName) => {
    expect(isExportedComponent(componentName)).toBe(true);
  });

  it.each([...approvedImports])("approved import %s is exported or explicitly legacy-rationalized", (componentName) => {
    expect(isExportedComponent(componentName) || legacyComponents.has(componentName)).toBe(true);
  });

  it.each(componentsContract.preferredForNewGeneration)("preferred component %s has a guideline", (componentName) => {
    const guideline = resolveGuideline(componentName);
    expect(guideline).toBeTruthy();
    expect(fs.existsSync(path.join(rootDir, guideline))).toBe(true);
  });

  it.each(componentsContract.preferredForNewGeneration)("preferred component %s guideline uses required sections", (componentName) => {
    const guideline = resolveGuideline(componentName);
    expect(guideline).toBeTruthy();
    const content = read(guideline);
    for (const section of requiredSections) expect(content).toContain(section);
  });

  it.each(Object.entries(propsContract.components))("controlled values for %s appear in its guideline when documented", (componentName, propContract) => {
    const guideline = resolveGuideline(componentName);
    if (!guideline) return;
    const content = read(guideline);
    for (const [propName, values] of Object.entries(propContract)) {
      expect(content).toContain(propName);
      for (const value of values) expect(content).toContain(value);
    }
  });

  it("setup prop value rule mirrors the props contract global rule", () => {
    const setup = read("guidelines/setup.md");
    for (const propName of propsContract.globalPropRule.doNotInventValuesFor) expect(setup).toContain(propName);
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
