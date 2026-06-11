import { describe, expect, it } from "vitest";
import { defaultTargetPaths, readGenerationRuleTargets } from "./test-targets";

const targets = readGenerationRuleTargets();

const expectedGoldenExamples = [
  "guidelines/examples/golden/customer-monitoring.App.tsx",
  "guidelines/examples/golden/renewal-risk-review.App.tsx",
  "guidelines/examples/golden/asset-recommendation-review.App.tsx",
];

const forbiddenGoldenExampleSnippets = [
  "sourceStrength=\"strong\"",
  "readiness=\"needs_review\"",
  "readiness=\"customer_ready\"",
  "customerReadiness=\"Not customer-ready yet\"",
  "customerReadiness=\"Customer-ready\"",
  "status=\"in_progress\"",
  "validationStatus=\"Review before customer use\"",
  "validationStatus=\"Proof review needed\"",
  "validationStatus=\"Expert review needed\"",
  "validationStatus=\"Expert validation needed\"",
  "proofReadiness=\"Internal proof, not customer-ready\"",
  "proofReadiness=\"Customer-ready proof available\"",
  "CompanyName",
  "PageHeader",
];

const forbiddenGoldenExamplePatterns = [
  /import\s*\{[^}]*\bDetailPanel\b[^}]*\}\s*from\s*"design-system-ai-lab"/s,
  /<DetailPanel\b/,
  /<\/DetailPanel>/,
];

const requiredArchitectureComponents = [
  "WorkspaceShell",
  "PageHeading",
  "MasterDetailLayout",
  "WorkspaceDetailPanel",
  "ListContainer",
];

const requiredDecisionSignals = [
  "sourceStrength=\"partial\"",
  "validationStatus=\"internal-review-needed\"",
  "ActionRow",
];

describe("generation rules: golden examples", () => {
  it("uses active v0.6.0 examples directly as the golden fixtures", () => {
    expect(defaultTargetPaths).toEqual(expectedGoldenExamples);
  });

  it("loads all golden examples", () => {
    expect(targets).toHaveLength(expectedGoldenExamples.length);
  });

  it.each(targets)("$path exports a default App", (target) => {
    expect(target.content).toMatch(/export\s+default\s+function\s+App\s*\(/);
  });

  it.each(targets)("$path is a visible App.tsx screen", (target) => {
    expect(target.content).toMatch(/<main\b/);
    expect(target.content).toMatch(/min-h-screen/);
  });

  it.each(targets)("$path imports only from the public package root", (target) => {
    expect(target.content).toContain('from "design-system-ai-lab"');
    expect(target.content).toContain('import "design-system-ai-lab/styles.css"');
    expect(target.content).not.toMatch(/from "\.\.?\//);
    expect(target.content).not.toMatch(/from "src\//);
  });

  it.each(targets)("$path uses current workspace architecture", (target) => {
    for (const component of requiredArchitectureComponents) {
      expect(target.content).toContain(component);
    }
  });

  it.each(targets)("$path keeps trust, validation and actionability visible", (target) => {
    for (const signal of requiredDecisionSignals) {
      expect(target.content).toContain(signal);
    }
  });

  it.each(targets)("$path avoids obsolete or deprecated golden-example snippets", (target) => {
    for (const snippet of forbiddenGoldenExampleSnippets) {
      expect(target.content).not.toContain(snippet);
    }
  });

  it.each(targets)("$path avoids obsolete or deprecated golden-example components", (target) => {
    for (const pattern of forbiddenGoldenExamplePatterns) {
      expect(target.content).not.toMatch(pattern);
    }
  });
});
