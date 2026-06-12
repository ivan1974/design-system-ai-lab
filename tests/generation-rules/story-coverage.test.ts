import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type ComponentRegistry = {
  sourceOfTruth?: string;
  components: Array<{
    name: string;
    genAIStatus: "preferred" | "allowed" | "use-with-care" | "internal-only" | "deprecated" | "blocked-for-genai";
  }>;
};

type StoryCoverageContract = {
  coverageStatusValues: string[];
  entries: Array<{
    component: string;
    coverageStatus: "covered" | "justified";
    story: string | null;
    coveredVariants: string[];
    coveredRules: string[];
    requiredForRelease: boolean;
    noStoryRationale?: string;
  }>;
};

type ComponentsContract = {
  preferredForNewGeneration: string[];
};

const registry = readJson<ComponentRegistry>("contracts/component-registry.contract.json");
const storyCoverage = readJson<StoryCoverageContract>("contracts/story-coverage.contract.json");
const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const coverageByComponent = new Map(storyCoverage.entries.map((entry) => [entry.component, entry]));

const runtimeStatuses = new Set(["preferred", "allowed"]);
const v08TargetReset = registry.sourceOfTruth === "contracts/v0.8-target-surface.contract.json";

function runtimeComponents() {
  return registry.components.filter((entry) => runtimeStatuses.has(entry.genAIStatus));
}

describe("generation rules: Storybook coverage contract", () => {
  it("defines only supported coverage statuses", () => {
    expect(storyCoverage.coverageStatusValues).toEqual(["covered", "justified"]);
  });

  it("covers every preferred or allowed component with a story or explicit rationale", () => {
    for (const component of runtimeComponents()) {
      expect(coverageByComponent.has(component.name), `${component.name} is missing from story coverage contract`).toBe(true);
    }
  });

  it("does not track unknown components", () => {
    const registryNames = new Set(registry.components.map((component) => component.name));

    for (const entry of storyCoverage.entries) {
      expect(registryNames.has(entry.component), `${entry.component} is not in component registry`).toBe(true);
    }
  });

  it("requires covered entries to reference an existing story that uses the component", () => {
    for (const entry of storyCoverage.entries.filter((entry) => entry.coverageStatus === "covered")) {
      expect(entry.story, `${entry.component} needs a story path`).toBeTruthy();
      expect(fs.existsSync(path.join(rootDir, entry.story as string)), `${entry.story} is missing`).toBe(true);

      const storySource = read(entry.story as string);
      expect(storySource, `${entry.story} does not use ${entry.component}`).toContain(entry.component);
    }
  });

  it("requires justified entries to provide an explicit no-story rationale", () => {
    for (const entry of storyCoverage.entries.filter((entry) => entry.coverageStatus === "justified")) {
      expect(entry.story, `${entry.component} should not point to a missing story`).toBeNull();
      expect(entry.noStoryRationale, `${entry.component} needs a noStoryRationale`).toBeTruthy();
      expect((entry.noStoryRationale ?? "").length, `${entry.component} noStoryRationale is too short`).toBeGreaterThan(30);
    }
  });

  it("requires release-critical entries to document variants or rules", () => {
    for (const entry of storyCoverage.entries.filter((entry) => entry.requiredForRelease)) {
      expect(
        entry.coveredVariants.length + entry.coveredRules.length,
        `${entry.component} must document covered variants or covered rules`,
      ).toBeGreaterThan(0);
    }
  });

  it("keeps preferred components covered and defers release relevance during target reset", () => {
    const preferredComponents = registry.components.filter((component) => component.genAIStatus === "preferred");
    const targetPreferred = new Set(componentsContract.preferredForNewGeneration);

    for (const component of preferredComponents) {
      const coverage = coverageByComponent.get(component.name);
      expect(coverage, `${component.name} is missing coverage`).toBeTruthy();

      if (!v08TargetReset || !targetPreferred.has(component.name)) {
        expect(coverage?.requiredForRelease, `${component.name} should be release-relevant`).toBe(true);
      }
    }
  });
});
