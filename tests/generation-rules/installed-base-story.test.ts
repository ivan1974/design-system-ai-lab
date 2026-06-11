import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const storyPath = path.join(rootDir, "src/design-system/stories/screen-contracts/installed-base-intelligence.stories.tsx");
const story = fs.readFileSync(storyPath, "utf-8");

const requiredStories = [
  "Default",
  "AllFiltersOpen",
  "AssetDetailOverviewOpen",
  "AssetDetailHealthOpen",
  "AssetDetailIntelligenceOpen",
  "ThirdPartyAssetSelected",
  "ConnectivityIssueSelected",
  "ActiveAlertSelected",
  "NonConnectedWithServiceHistorySelected",
];

const requiredScenarios = [
  "default",
  "all-filters-open",
  "asset-detail-overview-open",
  "asset-detail-health-open",
  "asset-detail-intelligence-open",
  "third-party-asset-selected",
  "connectivity-issue-selected",
  "active-alert-selected",
  "non-connected-with-service-history-selected",
];

describe("generation rules: Installed Base Intelligence Storybook proof", () => {
  it("creates a screen-contract Storybook story", () => {
    expect(fs.existsSync(storyPath)).toBe(true);
    expect(story).toContain("Screen Contracts/Installed Base Intelligence");
    expect(story).toContain("InstalledBaseIntelligenceApp");
  });

  it("defines all required story variants", () => {
    for (const storyName of requiredStories) {
      expect(story).toContain(`export const ${storyName}`);
    }
  });

  it("maps story variants to all required scenarios", () => {
    for (const scenario of requiredScenarios) {
      expect(story).toContain(`scenario: \"${scenario}\"`);
    }
  });

  it("adds play functions for screen proof", () => {
    const playFunctionCount = (story.match(/play:/g) ?? []).length;
    expect(playFunctionCount).toBeGreaterThanOrEqual(requiredStories.length);
    expect(story).toContain("expectScreen");
    expect(story).toContain("expectPanel");
  });

  it("keeps Storybook taxonomy under Screen Contracts", () => {
    expect(story).toContain('title: "Screen Contracts/Installed Base Intelligence"');
    expect(story).not.toContain("Design System/");
  });
});
