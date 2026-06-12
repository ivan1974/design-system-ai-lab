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

type ComponentsContract = {
  sourceOfTruth: string;
  targetMakeSurface: Record<string, string[]>;
  deprecatedMakeSurface: string[];
  plannedAfterRegeneration: string[];
};

type PropsContract = {
  sourceOfTruth: string;
  plannedAfterRegeneration: Record<string, Record<string, string[]>>;
  transitionalPropsMovedOutOfTarget: Record<string, string>;
};

const targetSurface = readJson<TargetSurfaceContract>("contracts/v0.8-target-surface.contract.json");
const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const propsContract = readJson<PropsContract>("contracts/props.contract.json");
const architectureGuideline = read("guidelines/reference/architecture/v0.8-target-surface.md");
const runtimeSelection = read("guidelines/runtime/component-selection.md");
const visualRules = read("guidelines/runtime/visual-rules.md");

const targetRuntimeFilesToScan = [
  "guidelines/reference/architecture/v0.8-target-surface.md",
  "guidelines/runtime/component-selection.md",
  "guidelines/runtime/visual-rules.md",
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

  it("aligns components and props contracts to the target surface source", () => {
    expect(componentsContract.sourceOfTruth).toBe("contracts/v0.8-target-surface.contract.json");
    expect(propsContract.sourceOfTruth).toBe("contracts/v0.8-target-surface.contract.json");
    expect(componentsContract.targetMakeSurface.semanticDisplay).toEqual(targetSurface.targetPublicSurface.semanticDisplay);
    expect(Object.keys(propsContract.plannedAfterRegeneration)).toEqual(["MetricBlock", "DecisionBlock", "EvidenceBlock", "ActionBlock"]);
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
      expect(componentsContract.deprecatedMakeSurface).toContain(componentName);
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

  it("does not recommend deprecated semantic wrappers in target runtime guidance", () => {
    for (const relativePath of targetRuntimeFilesToScan) {
      const content = read(relativePath);
      for (const componentName of deprecatedSemanticWrappers) {
        expect(content, `${relativePath} should not route generation to ${componentName}`).not.toMatch(
          new RegExp(`Prefer\\s+${componentName}|Use\\s+${componentName}|${componentName}\\s+->`),
        );
      }
    }
  });
});
