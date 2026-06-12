import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type TargetSurfaceContract = {
  canonicalTokenFile: string;
  doNotCreate: string[];
  targetPublicSurface: Record<string, string[]>;
  deprecatedPublicSurface: string[];
  scope: { makeFacing: string[]; codeToRegenerateAfterReset: string[] };
  positiveGenerationProofs: string[];
};

const targetSurface = readJson<TargetSurfaceContract>("contracts/v0.8-target-surface.contract.json");
const architectureGuideline = read("guidelines/reference/architecture/v0.8-target-surface.md");
const runtimeSelection = read("guidelines/runtime/component-selection.md");
const visualRules = read("guidelines/runtime/visual-rules.md");

const makeFacingFilesToScan = [
  "guidelines/reference/architecture/v0.8-target-surface.md",
  "guidelines/runtime/component-selection.md",
  "guidelines/runtime/visual-rules.md",
  "guidelines/tokens.md",
  "guidelines/styles.md",
  "contracts/components.contract.json",
  "contracts/component-registry.contract.json",
  "contracts/props.contract.json",
  "contracts/visual-rules.contract.json",
];

const deprecatedSemanticWrappers = [
  "HealthPill",
  "CoverageTag",
  "DppTag",
  "ConnectivityLabel",
  "StatusWithIcon",
  "PriorityPill",
  "PriorityLabel",
  "ProofStatus",
  "SourceStrengthPill",
  "StatusPill",
];

describe("generation rules: v0.8 target surface reset", () => {
  it("defines the target surface contract as the source of truth", () => {
    expect(targetSurface.canonicalTokenFile).toBe("src/design-system/foundations/tokens.css");
    expect(targetSurface.doNotCreate).toContain("src/design-system/tokens.css");
    expect(targetSurface.scope.makeFacing).toContain("guidelines/examples/golden");
    expect(targetSurface.scope.codeToRegenerateAfterReset).toContain("src/design-system/index.ts");
  });

  it("defines the four semantic display primitives", () => {
    expect(targetSurface.targetPublicSurface.semanticDisplay).toEqual([
      "SemanticTag",
      "SemanticPill",
      "StatusIndicator",
      "MetaLabel",
    ]);

    for (const primitive of targetSurface.targetPublicSurface.semanticDisplay) {
      expect(architectureGuideline).toContain(primitive);
      expect(runtimeSelection).toContain(primitive);
    }
  });

  it("marks legacy semantic wrappers as deprecated public surface", () => {
    for (const componentName of deprecatedSemanticWrappers) {
      expect(targetSurface.deprecatedPublicSurface).toContain(componentName);
    }
  });

  it("keeps target generation proofs explicit", () => {
    expect(targetSurface.positiveGenerationProofs).toEqual(["Installed Base Intelligence", "Customer Monitoring"]);
    expect(architectureGuideline).toContain("Installed Base remains the strict contractual screen");
    expect(architectureGuideline).toContain("Customer Monitoring becomes the second generation proof");
  });

  it("keeps the prototype visual system global", () => {
    expect(visualRules).toContain("all-active-ds-surface");
    expect(visualRules).toContain("white-first");
    expect(visualRules).toContain("--ec-color-primary");
  });

  it("does not recommend deprecated semantic wrappers in target runtime files", () => {
    for (const relativePath of makeFacingFilesToScan) {
      const content = read(relativePath);
      for (const componentName of deprecatedSemanticWrappers) {
        if (relativePath === "contracts/v0.8-target-surface.contract.json") {
          continue;
        }
        expect(content, `${relativePath} should not recommend ${componentName}`).not.toMatch(
          new RegExp(`preferred|approved|Prefer|Use.*${componentName}|${componentName}.*->`),
        );
      }
    }
  });
});
