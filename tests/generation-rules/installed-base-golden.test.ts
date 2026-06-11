import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const goldenPath = path.join(rootDir, "guidelines/examples/golden/installed-base-intelligence.App.tsx");
const golden = fs.readFileSync(goldenPath, "utf-8");

const requiredComponents = [
  "WorkspaceShell",
  "MainNavigation",
  "InstalledBaseHeader",
  "InstalledBaseViewFilterBar",
  "InstalledBaseList",
  "AllFiltersPanel",
  "AssetDetailAnalysisPanel",
];

const requiredStates = [
  "connected-oem",
  "connected-oem-with-alert",
  "connected-oem-with-connectivity-issue",
  "non-connected-oem",
  "non-connected-oem-with-service-history",
  "third-party",
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

describe("generation rules: Installed Base Intelligence golden example", () => {
  it("exists as a golden app", () => {
    expect(fs.existsSync(goldenPath)).toBe(true);
    expect(golden).toContain("export default function InstalledBaseIntelligenceApp");
  });

  it("uses the approved screen-level components", () => {
    for (const component of requiredComponents) {
      expect(golden).toContain(component);
    }
  });

  it("covers all six installed base asset states", () => {
    for (const state of requiredStates) {
      expect(golden).toContain(state);
    }
  });

  it("covers all required screen scenarios", () => {
    for (const scenario of requiredScenarios) {
      expect(golden).toContain(scenario);
    }
  });

  it("does not introduce local design-system drift", () => {
    expect(golden).not.toContain("components/ui");
    expect(golden).not.toContain("@radix-ui");
    expect(golden).not.toContain("internal/primitives");
  });
});
