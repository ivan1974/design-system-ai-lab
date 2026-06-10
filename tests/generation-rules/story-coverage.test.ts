import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const criticalStoryPath = path.join(
  rootDir,
  "src/design-system/stories/v0.5.1-critical-generation.stories.tsx",
);

const criticalComponents = [
  "WorkspaceShell",
  "PageHeading",
  "FilterBar",
  "MasterDetailLayout",
  "WorkspaceDetailPanel",
  "ListContainer",
  "ReviewQueueRow",
  "ActionRow",
  "AlertCard",
  "EvidenceRow",
  "RecommendationCard",
  "SourceStrengthPill",
  "AssetIntelligenceSummary",
  "RecommendationReviewPanel",
  "ValueProofCard",
  "RenewalRiskSummary",
];

describe("generation rules: Storybook coverage", () => {
  it("keeps the v0.5.1 critical generation story", () => {
    expect(fs.existsSync(criticalStoryPath)).toBe(true);
  });

  it.each(criticalComponents)("covers %s in the critical generation story", (componentName) => {
    const source = fs.readFileSync(criticalStoryPath, "utf-8");

    expect(source).toContain(componentName);
  });
});
