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

const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const propsContract = readJson<PropsContract>("contracts/props.contract.json");
const publicIndex = read("src/design-system/index.ts");

const approvedImports = new Set(Object.values(componentsContract.approvedImports).flat());
const legacyComponents = new Set(componentsContract.legacyOrUseWithCare.map((entry) => entry.component));
const filesWithExplicitAntiPatternExamples = new Set(["guidelines/decision/review-queue-row.md"]);

const guidelineByComponent: Record<string, string> = {
  ActionCard: "guidelines/decision/action-card.md",
  ActionList: "guidelines/decision/action-list.md",
  ActionRow: "guidelines/decision/action-row.md",
  AlertCard: "guidelines/decision/alert-card.md",
  AssetIntelligenceSummary: "guidelines/patterns/asset-intelligence-summary.md",
  Badge: "guidelines/components/badge.md",
  Breadcrumbs: "guidelines/components/breadcrumbs.md",
  Button: "guidelines/components/button.md",
  Card: "guidelines/components/card.md",
  CompactMetric: "guidelines/components/compact-metric.md",
  ComponentHierarchy: "guidelines/patterns/component-hierarchy.md",
  ConnectivityCoverageCard: "guidelines/patterns/connectivity-coverage-card.md",
  CreateActionDialog: "guidelines/patterns/create-action-dialog.md",
  CustomerReviewReadinessCard: "guidelines/patterns/customer-review-readiness-card.md",
  CustomerStatusCard: "guidelines/patterns/customer-status-card.md",
  Divider: "guidelines/components/divider.md",
  DocumentRow: "guidelines/components/document-row.md",
  EvidenceRow: "guidelines/decision/evidence-row.md",
  Field: "guidelines/forms/field.md",
  FilterBar: "guidelines/screen-architecture/filter-bar.md",
  HeaderTabs: "guidelines/components/header-tabs.md",
  Input: "guidelines/forms/input.md",
  KeyValueList: "guidelines/components/key-value-list.md",
  Label: "guidelines/forms/label.md",
  ListContainer: "guidelines/components/list-container.md",
  MasterDetailLayout: "guidelines/screen-architecture/master-detail-layout.md",
  MetricCard: "guidelines/components/metric-card.md",
  MetricGrid: "guidelines/decision/metric-grid.md",
  MetricStrip: "guidelines/components/metric-strip.md",
  PageHeader: "guidelines/components/page-header.md",
  PageHeading: "guidelines/components/page-heading.md",
  PriorityList: "guidelines/decision/priority-list.md",
  PriorityPill: "guidelines/decision/priority-pill.md",
  RecommendationCard: "guidelines/decision/recommendation-card.md",
  RecommendationReviewPanel: "guidelines/patterns/recommendation-review-panel.md",
  RenewalRiskSummary: "guidelines/patterns/renewal-risk-summary.md",
  ReviewQueueRow: "guidelines/decision/review-queue-row.md",
  SecondaryNavigation: "guidelines/components/secondary-navigation.md",
  SectionBlock: "guidelines/screen-architecture/section-stack.md",
  SectionHeader: "guidelines/decision/section-header.md",
  SectionStack: "guidelines/screen-architecture/section-stack.md",
  Select: "guidelines/forms/select.md",
  SemanticTag: "guidelines/decision/semantic-tag.md",
  ServiceRiskSummary: "guidelines/patterns/service-risk-summary.md",
  SignalRow: "guidelines/decision/signal-row.md",
  SourceStrengthPill: "guidelines/decision/source-strength-pill.md",
  StatusPill: "guidelines/decision/status-pill.md",
  StatusSummary: "guidelines/decision/status-summary.md",
  Surface: "guidelines/components/surface.md",
  Tabs: "guidelines/components/tabs.md",
  Textarea: "guidelines/forms/textarea.md",
  Toolbar: "guidelines/components/toolbar.md",
  ValueProofCard: "guidelines/patterns/value-proof-card.md",
  Well: "guidelines/components/well.md",
  WorkspaceDetailPanel: "guidelines/screen-architecture/workspace-detail-panel.md",
  WorkspaceShell: "guidelines/screen-architecture/workspace-shell.md",
};

const sharedGuidelineByComponent: Record<string, string> = {
  AssetQueueRow: "guidelines/patterns/queue-row-patterns.md",
  CustomerQueueRow: "guidelines/patterns/queue-row-patterns.md",
  RecommendationQueueRow: "guidelines/patterns/queue-row-patterns.md",
  RiskQueueRow: "guidelines/patterns/queue-row-patterns.md",
};

const allowedPascalCaseTokens = new Set([
  ...approvedImports,
  ...Object.keys(guidelineByComponent),
  ...Object.keys(sharedGuidelineByComponent),
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
  return guidelineByComponent[componentName] ?? sharedGuidelineByComponent[componentName];
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
    const content = read(resolveGuideline(componentName));
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

  it("guidelines do not recommend unknown PascalCase package components", () => {
    const guidelineDirs = ["guidelines/components", "guidelines/decision", "guidelines/forms", "guidelines/patterns", "guidelines/screen-architecture"];
    for (const guidelineDir of guidelineDirs) {
      for (const fileName of fs.readdirSync(path.join(rootDir, guidelineDir)).filter((fileName) => fileName.endsWith(".md"))) {
        const relativePath = path.join(guidelineDir, fileName);
        if (filesWithExplicitAntiPatternExamples.has(relativePath)) continue;
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
