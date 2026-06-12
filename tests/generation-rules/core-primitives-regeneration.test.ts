import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type TargetSurface = {
  targetPublicSurface: Record<string, string[]>;
};

type RegenerationPlan = {
  orderedLayers: Array<{ id: string; targetComponents?: string[]; exitCriteria: string[] }>;
};

type ComponentsContract = {
  targetMakeSurface: Record<string, string[]>;
};

type PropsContract = {
  components: Record<string, Record<string, string[]>>;
};

const targetSurface = readJson<TargetSurface>("contracts/v0.8-target-surface.contract.json");
const regenerationPlan = readJson<RegenerationPlan>("contracts/v0.8-regeneration-plan.contract.json");
const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const propsContract = readJson<PropsContract>("contracts/props.contract.json");
const spec = read("docs/audit/v0.8.0-core-primitives-regeneration-spec.md");
const coreLayer = regenerationPlan.orderedLayers.find((layer) => layer.id === "core-primitives");

const expectedCorePrimitives = [
  "Button",
  "Card",
  "Table",
  "Tabs",
  "Divider",
  "Dialog",
  "Popover",
  "Tooltip",
  "Checkbox",
  "Field",
  "Input",
  "Label",
  "Select",
  "Textarea",
];

describe("generation rules: v0.8 core primitives regeneration readiness", () => {
  it("keeps core primitives aligned across target surface, components contract and regeneration plan", () => {
    expect(targetSurface.targetPublicSurface.coreComponents).toEqual([
      "Button",
      "Card",
      "Table",
      "Tabs",
      "Divider",
      "Dialog",
      "Popover",
      "Tooltip",
      "Forms",
    ]);

    for (const componentName of expectedCorePrimitives) {
      expect(componentsContract.targetMakeSurface.coreComponents, `${componentName} missing from targetMakeSurface`).toContain(componentName);
      expect(coreLayer?.targetComponents, `${componentName} missing from regeneration plan`).toContain(componentName);
      expect(spec, `${componentName} missing from regeneration spec`).toContain(componentName);
    }
  });

  it("keeps foundations locked before core regeneration", () => {
    expect(regenerationPlan.orderedLayers[0]?.id).toBe("foundations");
    expect(regenerationPlan.orderedLayers[1]?.id).toBe("core-primitives");
    expect(spec).toContain("Foundation lock");
    expect(spec).toContain("src/design-system/foundations/tokens.css");
    expect(spec).toContain("src/design-system/tokens.css");
  });

  it("documents generation-relevant props for core primitives already under contract", () => {
    expect(propsContract.components.Button.variant).toEqual(["primary", "secondary", "ghost", "danger", "outline"]);
    expect(propsContract.components.Button.size).toEqual(["sm", "md", "lg", "icon"]);
    expect(propsContract.components.Tabs.variant).toEqual(["underline", "contained"]);
    expect(propsContract.components.Tabs.size).toEqual(["sm", "md"]);
  });

  it("keeps core primitives free from business semantics", () => {
    expect(spec).toContain("Core primitives should not provide");
    expect(spec).toContain("business labels");
    expect(spec).toContain("source strength semantics");
    expect(spec).toContain("proof readiness semantics");
    expect(spec).toContain("decision ownership");
  });

  it("requires token consumption rather than new token sources", () => {
    expect(spec).toContain("Any core primitive change must consume existing `--ec-*` tokens");
    expect(spec).toContain("It must not introduce a new token source");
  });
});
