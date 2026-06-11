import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const readJson = <T>(path: string): T =>
  JSON.parse(readFileSync(join(root, path), "utf8")) as T;
const readText = (path: string) => readFileSync(join(root, path), "utf8");

type ScreenContract = {
  screen: string;
  version: string;
  complianceMode: string;
  undefinedElementsAllowed: boolean;
  sources: Record<string, string>;
  requiredLayers: string[];
  requiredMainNavigationElements: string[];
  mainNavigationText: Record<string, string>;
  mainNavigationForbidden: string[];
  requiredHeaderElements: string[];
  headerInconsistencyResolution: Record<string, string>;
  headerText: Record<string, string>;
  requiredViewFilterBarZones: string[];
  requiredViews: string[];
  requiredFilterTriggers: string[];
  requiredAdvancedFilters: string[];
  filterRules: Record<string, boolean | string>;
  requiredGrouping: string[];
  requiredAttentionGroup: string;
  requiredColumns: string[];
  requiredAssetColumnElements: string[];
  requiredStatusIcons: Record<string, string>;
  requiredAssetStates: string[];
  thirdPartyAssetRules: Record<string, string | boolean>;
  requiredPanelSections: string[];
  requiredTabs: string[];
  allowedPanelActions: string[];
  overlayPanelBehavior: Record<string, string | number | boolean>;
  requiredInteractions: string[];
  requiredContextPreservation: string[];
  factInterpretationSeparation: { Health: string[]; Intelligence: string[]; duplicationAllowed: boolean };
  progressiveDecisionDisclosure: Record<string, string | boolean | string[]>;
  visualRules: { density: string; surface: string; layout: string; forbidden: string[] };
  forbidden: { global: string[] };
};

const contract = readJson<ScreenContract>(
  "contracts/screen-contracts/installed-base-intelligence.contract.json",
);
const guideline = readText(
  "guidelines/reference/screen-contracts/installed-base-intelligence.md",
);

const expectExact = (actual: string[], expected: string[]) => {
  expect(actual).toEqual(expected);
  expect(new Set(actual).size).toBe(actual.length);
};

describe("Installed Base Intelligence screen contract", () => {
  it("defines a closed screen contract", () => {
    expect(contract.screen).toBe("InstalledBaseIntelligence");
    expect(contract.version).toBe("0.7.0-alpha.0");
    expect(contract.complianceMode).toBe("closed");
    expect(contract.undefinedElementsAllowed).toBe(false);
  });

  it("links all Sprint 1 source artifacts", () => {
    expect(contract.sources.domainContract).toBe("contracts/installed-base-domain.contract.json");
    expect(contract.sources.screenGuideline).toBe(
      "guidelines/reference/screen-contracts/installed-base-intelligence.md",
    );
  });

  it("requires the exact primary layers", () => {
    expectExact(contract.requiredLayers, [
      "MainNavigation",
      "InstalledBaseHeader",
      "InstalledBaseViewFilterBar",
      "InstalledBaseList",
      "AssetDetailAnalysisPanel",
    ]);
  });

  it("requires exact navigation and header elements", () => {
    expectExact(contract.requiredMainNavigationElements, [
      "Reference Company Logo",
      "Product Name",
      "Global Search",
      "Help",
      "User Menu",
    ]);
    expect(contract.mainNavigationText.productName).toBe("Installed Base Intelligence");
    expect(contract.mainNavigationForbidden).toContain("Filters");

    expectExact(contract.requiredHeaderElements, [
      "Context Pill",
      "Site Context",
      "Portfolio Title",
      "Portfolio Scope Summary",
      "Asset Intelligence",
    ]);
    expect(contract.headerInconsistencyResolution.decision).toBe(
      "v0.7.0 requires exactly five Page Header elements.",
    );
  });

  it("requires exact views, filters and filter rules", () => {
    expectExact(contract.requiredViewFilterBarZones, ["Left Zone", "Right Zone"]);
    expectExact(contract.requiredViews, ["List", "Geography", "Electrical"]);
    expectExact(contract.requiredFilterTriggers, [
      "Location",
      "Asset Type",
      "Contract Type",
      "All Filters",
    ]);
    expectExact(contract.requiredAdvancedFilters, [
      "Health",
      "Connectivity",
      "Coverage",
      "DPP",
      "Status",
      "Age",
      "Location",
      "Asset Type",
      "Contract Type",
    ]);
    expect(contract.filterRules.clearAllRequired).toBe(true);
  });

  it("requires exact grouping, columns and asset states", () => {
    expectExact(contract.requiredGrouping, ["Building", "Electrical Area", "Room", "Asset"]);
    expect(contract.requiredAttentionGroup).toBe("Attention required");
    expectExact(contract.requiredColumns, [
      "Asset",
      "Type",
      "Location",
      "Coverage",
      "Health",
      "Status",
      "Action",
    ]);
    expectExact(contract.requiredAssetColumnElements, [
      "Connectivity Label",
      "Asset Name",
      "Asset Reference",
      "Asset Description",
    ]);
    expectExact(contract.requiredAssetStates, [
      "connected-oem",
      "connected-oem-with-alert",
      "connected-oem-with-connectivity-issue",
      "non-connected-oem",
      "non-connected-oem-with-service-history",
      "third-party",
    ]);
  });

  it("requires status icons and third-party rules", () => {
    expect(contract.requiredStatusIcons).toEqual({
      "Live telemetry": "✓",
      "Active alert": "⚠",
      "Connectivity issue": "⚠",
      "Last service visit": "◷",
      "No record": "—",
    });
    expect(contract.thirdPartyAssetRules).toEqual({
      connectivity: "Unknown",
      coverage: "No Coverage",
      health: "Unknown",
      status: "No record",
      exceptionsAllowed: false,
    });
  });

  it("requires exact panel sections, tabs and actions", () => {
    expectExact(contract.requiredPanelSections, [
      "Panel Header",
      "Tab Navigation",
      "Tab Content",
      "Action Area",
    ]);
    expectExact(contract.requiredTabs, [
      "Overview",
      "Health",
      "Intelligence",
      "Passport",
      "History",
      "Documents",
    ]);
    expectExact(contract.allowedPanelActions, [
      "Schedule Service",
      "Download Report",
      "Contact Expert",
    ]);
  });

  it("requires overlay behavior, interactions and preserved context", () => {
    expect(contract.overlayPanelBehavior.overlayColor).toBe("rgba(0, 0, 0, 0.45)");
    expect(contract.overlayPanelBehavior.overlayZIndex).toBe(200);
    expect(contract.overlayPanelBehavior.panelZIndex).toBe(300);
    expect(contract.overlayPanelBehavior.escapeCloses).toBe(true);
    expect(contract.requiredInteractions).toContain("action-area-remains-sticky");
    expectExact(contract.requiredContextPreservation, [
      "Active View",
      "Active Filters",
      "Selected Asset",
      "Selected Tab",
    ]);
  });

  it("requires Health and Intelligence separation", () => {
    expect(contract.factInterpretationSeparation.duplicationAllowed).toBe(false);
    expect(contract.factInterpretationSeparation.Health).toContain("measurements");
    expect(contract.factInterpretationSeparation.Intelligence).toContain("recommendations");
  });

  it("requires progressive disclosure and operational density", () => {
    expect(contract.progressiveDecisionDisclosure.defaultDisclosure).toBe("signal-first");
    expect(contract.visualRules.density).toBe("high");
    expect(contract.visualRules.layout).toBe("table-first");
    expect(contract.visualRules.forbidden).toContain("hero dashboards");
  });

  it("forbids undefined local additions", () => {
    expect(contract.forbidden.global).toContain("local components");
    expect(contract.forbidden.global).toContain("additional filters");
    expect(contract.forbidden.global).toContain("additional columns");
    expect(contract.forbidden.global).toContain("additional tabs");
    expect(contract.forbidden.global).toContain("additional actions");
  });

  it("keeps Markdown aligned with JSON essentials", () => {
    for (const layer of contract.requiredLayers) expect(guideline).toContain(layer);
    for (const tab of contract.requiredTabs) expect(guideline).toContain(tab);
    for (const action of contract.allowedPanelActions) expect(guideline).toContain(action);
    expect(guideline).toContain("Generated decision screens must reveal decision-critical information first");
  });
});
