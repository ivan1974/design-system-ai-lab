import { describe, expect, it } from "vitest";
import { defaultTargetPaths, readGenerationRuleTargets } from "./test-targets";

const targets = readGenerationRuleTargets();

const expectedGoldenExamples = [
  "guidelines/examples/golden/customer-monitoring.App.tsx",
  "guidelines/examples/golden/renewal-risk-review.App.tsx",
  "guidelines/examples/golden/asset-recommendation-review.App.tsx",
  "guidelines/examples/golden/qbr-readiness.App.tsx",
  "guidelines/examples/golden/installed-base-explorer.App.tsx",
];

describe("generation rules: golden examples", () => {
  it("uses guidelines examples directly as the golden fixtures", () => {
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
});
