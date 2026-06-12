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

type PropsContract = {
  components: Record<string, Record<string, string[]>>;
};

type ComponentsContract = {
  generationAliases: Record<string, { preferred?: string; replaces?: string[] }>;
};

const targetSurface = readJson<TargetSurface>("contracts/v0.8-target-surface.contract.json");
const regenerationPlan = readJson<RegenerationPlan>("contracts/v0.8-regeneration-plan.contract.json");
const propsContract = readJson<PropsContract>("contracts/props.contract.json");
const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const semanticLayer = regenerationPlan.orderedLayers.find((layer) => layer.id === "semantic-display");

const publicIndex = read("src/design-system/index.ts");
const runtimeSelection = read("guidelines/runtime/component-selection.md");
const semanticTagSource = read("src/design-system/decision/semantic-tag.tsx");
const semanticPillSource = read("src/design-system/decision/semantic-pill.tsx");
const statusIndicatorSource = read("src/design-system/decision/status-indicator.tsx");
const metaLabelSource = read("src/design-system/decision/meta-label.tsx");
const semanticTagGuideline = read("guidelines/reference/decision/semantic-tag.md");
const semanticPillGuideline = read("guidelines/reference/decision/semantic-pill.md");
const statusIndicatorGuideline = read("guidelines/reference/decision/status-indicator.md");
const metaLabelGuideline = read("guidelines/reference/decision/meta-label.md");

const tones = ["neutral", "muted", "primary", "info", "success", "warning", "danger"];
const semanticTargets = ["SemanticTag", "SemanticPill", "StatusIndicator", "MetaLabel"];
const legacyWrappers = [
  "HealthPill",
  "CoverageTag",
  "DppTag",
  "ConnectivityLabel",
  "StatusWithIcon",
  "PriorityPill",
  "SourceStrengthPill",
  "StatusPill",
];

function exportedFromPublicIndex(componentName: string) {
  return new RegExp(`export\\s+\\{[^}]*\\b${componentName}\\b[^}]*\\}\\s+from`).test(publicIndex);
}

describe("generation rules: v0.8 semantic display regeneration", () => {
  it("keeps the semantic display target surface small", () => {
    expect(targetSurface.targetPublicSurface.semanticDisplay).toEqual(semanticTargets);
    expect(semanticLayer?.targetComponents).toEqual(targetSurface.targetPublicSurface.semanticDisplay);
  });

  it("exports only target semantic display primitives from the public entry", () => {
    for (const componentName of semanticTargets) {
      expect(exportedFromPublicIndex(componentName), `${componentName} must remain public`).toBe(true);
    }

    for (const wrapperName of legacyWrappers) {
      expect(exportedFromPublicIndex(wrapperName), `${wrapperName} must not return to the public entry`).toBe(false);
    }
  });

  it("marks legacy semantic wrappers for deletion or internalization", () => {
    for (const wrapperName of legacyWrappers) {
      expect(targetSurface.deprecatedPublicSurface).toContain(wrapperName);
      expect(semanticLayer?.deleteOrInternalize).toContain(wrapperName);
    }
  });

  it("keeps runtime selection pointed at target semantic primitives", () => {
    for (const componentName of semanticTargets) {
      expect(runtimeSelection).toContain(componentName);
    }

    expect(runtimeSelection).toContain("Do not generate or recommend");
    for (const wrapperName of legacyWrappers) {
      expect(runtimeSelection).toContain(wrapperName);
    }
  });

  it("keeps replacement aliases explicit in components contract", () => {
    expect(componentsContract.generationAliases.semanticTag.preferred).toBe("SemanticTag");
    expect(componentsContract.generationAliases.semanticTag.replaces).toEqual(["CoverageTag", "DppTag"]);
    expect(componentsContract.generationAliases.semanticPill.preferred).toBe("SemanticPill");
    expect(componentsContract.generationAliases.semanticPill.replaces).toEqual(["HealthPill", "StatusPill", "PriorityPill", "SourceStrengthPill"]);
    expect(componentsContract.generationAliases.statusIndicator.preferred).toBe("StatusIndicator");
    expect(componentsContract.generationAliases.statusIndicator.replaces).toEqual(["ConnectivityLabel", "StatusWithIcon"]);
    expect(componentsContract.generationAliases.metaLabel.preferred).toBe("MetaLabel");
  });

  it("keeps semantic tones controlled through props contract", () => {
    expect(propsContract.components.SemanticTag.tone).toEqual(tones);
    expect(propsContract.components.SemanticPill.tone).toEqual(tones);
    expect(propsContract.components.StatusIndicator.tone).toEqual(tones);
    expect(propsContract.components.MetaLabel.tone).toEqual(["neutral", "muted", "primary", "success", "warning", "danger"]);
  });

  it("keeps semantic tag and pill tokenized and structurally distinct", () => {
    expect(semanticTagSource).toContain("border px-2 py-0.5");
    expect(semanticTagSource).toContain("--ec-color-primary-border");
    expect(semanticPillSource).toContain("rounded-(--ec-radius-pill)");
    expect(semanticPillSource).toContain("px-2.5 py-1");
  });

  it("keeps status indicator label and icon aligned to tone", () => {
    expect(statusIndicatorSource).toContain("dotClasses[tone]");
    expect(statusIndicatorSource).toContain("toneClasses[tone]");
    expect(statusIndicatorSource).toContain("meta?: ReactNode");
    expect(statusIndicatorSource).not.toContain("color-only");
  });

  it("keeps metalabel as inline metadata, not status", () => {
    expect(metaLabelSource).toContain("label?: ReactNode");
    expect(metaLabelSource).toContain("value?: ReactNode");
    expect(metaLabelSource).toContain("separator?: ReactNode");
    expect(metaLabelGuideline).toContain("Use `MetaLabel` for supporting context only");
  });

  it("keeps semantic guidance aligned with replacements", () => {
    expect(semanticTagGuideline).toContain("CoverageTag");
    expect(semanticTagGuideline).toContain("DppTag");
    expect(semanticPillGuideline).toContain("HealthPill");
    expect(semanticPillGuideline).toContain("StatusPill");
    expect(statusIndicatorGuideline).toContain("ConnectivityLabel");
    expect(statusIndicatorGuideline).toContain("StatusWithIcon");
  });

  it("keeps semantic guidance from hiding proof or trust context", () => {
    expect(semanticTagGuideline).toContain("Do not use tags as the only trust or validation signal");
    expect(semanticPillGuideline).toContain("Do not use pills as proof or evidence containers");
    expect(statusIndicatorGuideline).toContain("Do not communicate status by color alone");
    expect(metaLabelGuideline).toContain("Keep source scope, freshness and validation readable when they affect trust");
  });
});
