import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type Layer = {
  id: string;
  targetComponents?: string[];
  targetPatterns?: string[];
  deleteOrInternalize?: string[];
};

type Plan = {
  sourceOfTruth: string;
  strategy: string[];
  orderedLayers: Layer[];
  releaseExitCriteria: string[];
};

type Target = {
  targetPublicSurface: Record<string, string[]>;
  deprecatedPublicSurface: string[];
  positiveGenerationProofs: string[];
};

const plan = readJson<Plan>("contracts/v0.8-regeneration-plan.contract.json");
const target = readJson<Target>("contracts/v0.8-target-surface.contract.json");
const guideline = read("guidelines/reference/architecture/v0.8-regeneration-plan.md");
const roadmap = read("docs/audit/v0.8.0-full-make-kit-rationalization-roadmap.md");
const layers = new Map(plan.orderedLayers.map((layer) => [layer.id, layer]));

describe("generation rules: v0.8 regeneration plan", () => {
  it("uses the target surface contract as source of truth", () => {
    expect(plan.sourceOfTruth).toBe("contracts/v0.8-target-surface.contract.json");
    expect(guideline).toContain("contracts/v0.8-target-surface.contract.json");
  });

  it("keeps the strategic pivot explicit", () => {
    expect(plan.strategy).toContain("do-not-polish-legacy");
    expect(plan.strategy).toContain("regenerate-target-layers-in-order");
    expect(roadmap).toContain("Target surface first");
    expect(roadmap).toContain("Code regeneration third");
  });

  it("defines the required regeneration layers", () => {
    expect(plan.orderedLayers.map((layer) => layer.id)).toEqual([
      "foundations",
      "core-primitives",
      "semantic-display",
      "composition",
      "decision-blocks",
      "screen-patterns",
      "examples-and-benchmarks",
    ]);
  });

  it("aligns semantic display with the target surface", () => {
    expect(layers.get("semantic-display")?.targetComponents).toEqual(target.targetPublicSurface.semanticDisplay);
    expect(layers.get("semantic-display")?.deleteOrInternalize).toContain("StatusPill");
    expect(target.deprecatedPublicSurface).toContain("StatusPill");
  });

  it("aligns composition with the target surface", () => {
    const compositionTargets = layers.get("composition")?.targetComponents ?? [];
    for (const componentName of target.targetPublicSurface.composition) {
      expect(compositionTargets).toContain(componentName);
    }
  });

  it("aligns decision blocks with the target grammar", () => {
    expect(layers.get("decision-blocks")?.targetComponents).toContain("DecisionBlock");
    expect(layers.get("decision-blocks")?.targetComponents).toContain("EvidenceBlock");
    expect(layers.get("decision-blocks")?.targetComponents).toContain("ActionBlock");
    expect(layers.get("decision-blocks")?.deleteOrInternalize).toContain("RecommendationCard");
  });

  it("keeps generation proofs explicit", () => {
    expect(layers.get("screen-patterns")?.targetPatterns).toEqual(target.positiveGenerationProofs);
    expect(guideline).toContain("Installed Base remains the strict contractual screen");
    expect(guideline).toContain("Customer Monitoring becomes the second generation proof");
  });

  it("keeps release checks explicit", () => {
    expect(plan.releaseExitCriteria).toContain("npm run check passes");
    expect(plan.releaseExitCriteria).toContain("npm run build-storybook passes");
  });
});
