import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const storyDir = path.join(rootDir, "src/design-system/stories/golden");
const goldenDir = path.join(rootDir, "guidelines/examples/golden");

const activeGoldenExamples = [
  "customer-monitoring.App.tsx",
  "renewal-risk-review.App.tsx",
  "asset-recommendation-review.App.tsx",
  "installed-base-intelligence.App.tsx",
];

const removedGoldenExamples = [
  "qbr-readiness.App.tsx",
  "installed-base-explorer.App.tsx",
];

describe("generation rules: golden Storybook alignment", () => {
  it("keeps active golden examples available for Storybook", () => {
    for (const example of activeGoldenExamples) {
      expect(fs.existsSync(path.join(goldenDir, example)), `${example} is missing`).toBe(true);
    }
  });

  it("does not keep removed golden examples", () => {
    for (const example of removedGoldenExamples) {
      expect(fs.existsSync(path.join(goldenDir, example)), `${example} should stay removed`).toBe(false);
    }
  });

  it("does not import removed golden examples from Storybook stories", () => {
    const storyFiles = fs.existsSync(storyDir)
      ? fs.readdirSync(storyDir).filter((fileName) => fileName.endsWith(".stories.tsx"))
      : [];

    for (const storyFile of storyFiles) {
      const content = fs.readFileSync(path.join(storyDir, storyFile), "utf-8");
      for (const removedExample of removedGoldenExamples) {
        expect(content, `${storyFile} imports removed ${removedExample}`).not.toContain(
          removedExample.replace(".tsx", ""),
        );
      }
    }
  });
});
