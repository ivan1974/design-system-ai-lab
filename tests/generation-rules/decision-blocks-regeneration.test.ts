import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type TargetSurface = {
  targetPublicSurface: Record<string, string[]>;
  deprecatedPublicSurface: string[];
};

type RegenerationPlan = {
  orderedLayers: Array<{ id: string; targetComponents?: string[]; deleteOrInternalize?: string[] }>;
};

type ComponentsContract = {
  targetMakeSurface: Record<string, string[]>;
  plannedAfterRegeneration: string[];
  generationAliases: Record<string, { target?: string; transitional?: string[]; replaces?: string[] }>;
};

const targetSurface = readJson<TargetSurface>("contracts/v0.8-target-surface.contract.json");
const regenerationPlan = readJson<RegenerationPlan>("contracts/v0.8-regeneration-plan.contract.json");
const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const decisionLayer = regenerationPlan.orderedLayers.find((layer) => layer.id === "decision-blocks");
const publicIndex = read("src/design-system/index.ts");
const runtimeSelection = read("guidelines/runtime/component-selection.md");
const metricBlockSource = read("src/design-system/decision/metric-block.tsx");
const decisionBlockSource = read("src/design-system/decision/decision-block.tsx");
const evidenceBlockSource = read("src/design-system/decision/evidence-block.tsx");
const actionBlockSource = read("src/design-system/decision/action-block.tsx");
const metricBlockGuideline = read("guidelines/reference/decision/metric-block.md");
const decisionBlockGuideline = read("guidelines/reference/decision/decision-block.md");
const evidenceBlockGuideline = read("guidelines/reference/decision/evidence-block.md");
const actionBlockGuideline = read("guidelines/reference/decision/action-block.md");

const targetBlocks = ["MetricBlock", "DecisionBlock", "EvidenceBlock", "ActionBlock"];
const legacyCards = ["MetricCard", "AlertCard", "RecommendationCard", "ActionCard", "EvidenceCard"];

function exportedFromPublicIndex(componentName: string) {
  return new RegExp(`export\\s+\\{[^}]*\\b${componentName}\\b[^}]*\\}\\s+from`).test(publicIndex);
}

describe("generation rules: v0.8 decision block regeneration", () => {
  it("keeps decision target blocks aligned across contracts and plan", () => {
    for (const componentName of targetBlocks) {
      expect(targetSurface.targetPublicSurface.decision).toContain(componentName);
      expect(componentsContract.targetMakeSurface.decision).toContain(componentName);
      expect(decisionLayer?.targetComponents).toContain(componentName);
    }
  });

  it("exports decision target blocks from the public entry", () => {
    for (const componentName of targetBlocks) {
      expect(exportedFromPublicIndex(componentName), `${componentName} must be exported`).toBe(true);
    }
  });

  it("keeps legacy cards deprecated while transition remains possible", () => {
    for (const componentName of legacyCards) {
      expect(targetSurface.deprecatedPublicSurface).toContain(componentName);
    }

    expect(componentsContract.generationAliases.metricBlock.target).toBe("MetricBlock");
    expect(componentsContract.generationAliases.decisionBlock.target).toBe("DecisionBlock");
    expect(componentsContract.generationAliases.evidenceBlock.target).toBe("EvidenceBlock");
    expect(componentsContract.generationAliases.actionBlock.target).toBe("ActionBlock");
  });

  it("keeps runtime component selection pointed at decision blocks", () => {
    for (const componentName of targetBlocks) {
      expect(runtimeSelection).toContain(componentName);
    }

    expect(runtimeSelection).toContain("Do not keep separate cards only because content differs");
  });

  it("keeps MetricBlock tokenized and generic", () => {
    expect(metricBlockSource).toContain("export type MetricBlockTone");
    expect(metricBlockSource).toContain("--ec-color-primary-soft");
    expect(metricBlockSource).toContain("label: string");
    expect(metricBlockSource).toContain("value: ReactNode");
    expect(metricBlockSource).not.toContain("MetricCard");
  });

  it("keeps DecisionBlock structured around signal, recommendation, rationale and evidence", () => {
    expect(decisionBlockSource).toContain("signal?: ReactNode");
    expect(decisionBlockSource).toContain("recommendation?: ReactNode");
    expect(decisionBlockSource).toContain("rationale?: ReactNode");
    expect(decisionBlockSource).toContain("evidence?: ReactNode");
    expect(decisionBlockSource).not.toContain("RecommendationCard");
    expect(decisionBlockSource).not.toContain("AlertCard");
  });

  it("keeps EvidenceBlock explicit about source, strength, freshness and validation", () => {
    expect(evidenceBlockSource).toContain("source?: ReactNode");
    expect(evidenceBlockSource).toContain("sourceStrength?: ReactNode");
    expect(evidenceBlockSource).toContain("freshness?: ReactNode");
    expect(evidenceBlockSource).toContain("validationStatus?: ReactNode");
    expect(evidenceBlockSource).not.toContain("EvidenceCard");
  });

  it("keeps ActionBlock explicit about owner, due date, priority and status", () => {
    expect(actionBlockSource).toContain("owner: string");
    expect(actionBlockSource).toContain("dueDate?: string");
    expect(actionBlockSource).toContain("priority?: ActionPriority");
    expect(actionBlockSource).toContain("status?: ActionStatus");
    expect(actionBlockSource).not.toContain("ActionCard");
  });

  it("keeps decision block guidelines aligned with target replacements", () => {
    expect(metricBlockGuideline).toContain("Prefer this component over");
    expect(metricBlockGuideline).toContain("MetricCard");
    expect(decisionBlockGuideline).toContain("AlertCard");
    expect(decisionBlockGuideline).toContain("RecommendationCard");
    expect(evidenceBlockGuideline).toContain("EvidenceCard");
    expect(actionBlockGuideline).toContain("ActionCard");
  });

  it("keeps decision block guidance from hiding trust, rationale or ownership", () => {
    expect(metricBlockGuideline).toContain("Do not use `MetricBlock` as a recommendation container");
    expect(decisionBlockGuideline).toContain("Attach `EvidenceBlock` or `EvidenceRow` when the recommendation depends on proof");
    expect(evidenceBlockGuideline).toContain("Do not hide proof in tooltips or metadata only");
    expect(actionBlockGuideline).toContain("Include owner when the action is assigned");
  });
});
