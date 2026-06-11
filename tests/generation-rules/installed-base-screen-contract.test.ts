import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const readJson = <T>(path: string): T =>
  JSON.parse(readFileSync(join(root, path), "utf8")) as T;

const readText = (path: string) => readFileSync(join(root, path), "utf8");

type InstalledBaseScreenContract = {
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
  headerForbidden: string[];
  requiredViewFilterBarZones: string[];
  requiredViews: string[];
  requiredFilterTriggers: string[];
  requiredAdvancedFilters: string[];
  filterValues: Record<string, string[]>;
  filterRules: {
    labels: string;
    iconsAllowed: boolean;
    emojisAllowed: boolean;
    multipleValuesSelectable: boolean;
    clearAllRequired: boolean;
  };
  requiredGrouping: string[];
  requiredAttentionGroup: string;
  requiredColumns: string[];
  requiredAssetColumnElements: string[];
  requiredLocationElements: string[];
  requiredCoverageElements: string[];
  requiredStatusElements: string[];
  requiredStatusIcons: Record<string, string>;
  requiredAssetStates: string[];
  thirdPartyAssetRules: Record<string, string | boolean>;
  requiredPanelSections: string[];
  requiredPanelHeaderFields: string[];
  requiredTabs: string[];
  tabRoles: Record<string, string>;
  allowedPanelActions: string[];
  overlayPanelBehavior: Record<string, string | number | boolean>;
  requiredInteractions: string[];
  requiredContextPreservation: string[];
  factInterpretationSeparation: {
    Health: string[];
    Intelligence: string[];
    duplicationAllowed: boolean;
  };
  progressiveDecisionDisclosure: Record<string, string | boolean | string[]>;
  componentMapping: Record<string, string>;
  visualRules: {
    density: string;
    surface: string;
    layout: string;
    listWidth: string;
    forbidden: string[];
  };
  forbidden: { global: string[] };
};

const contract = readJson<InstalledBaseScreenContract>(
  "contracts/screen-contracts/installed-base-intelligence.contract.json",
);

const guideline = readText(
  "guidelines/reference/screen-contracts/installed-base-intelligence.md",
);

const expectExactValues = (actual: string[], expected: string[]) => {
  expect(actual).toEqual(expected);
  expect(new Set(actual).size).toBe(actual.length);
};

describe("Installed Base Intelligence screen contract", () => {
  it("defines a closed Installed Base Intelligence screen contract", () => {
    expect(contract.screen).toBe("InstalledBaseIntelligence");
    expect(contract.version).toBe("0.7.0-alpha.0");
    expect(contract.complianceMode).toBe("closed");
    expect(contract.undefinedElementsAllowed).toBe(false);
  });

  it("links all Sprint 1 source artifacts", () => {
    expect(contract.sources).toEqual({
      referenceAnalysis: "docs/audit/v0.7.0-installed-base-reference-analysis.md",
      prototypeReference: "guidelines/source/prototypes/installed-base-intelligence-reference.md",
      domainGuideline: "guidelines/source/domain-models/installed-base.md",
      domainContract: "contracts/installed-base-domain.contract.json",
      screenGuideline: "guidelines/reference/screen-contracts/installed-base-intelligence.md",
    });
  });

  it("requires exactly five primary layers in order", () => {
    expectExactValues(contract.requiredLayers, [
      "MainNavigation",
      "InstalledBaseHeader",
      "InstalledBaseViewFilterBar",
      "InstalledBaseList",
      "AssetDetailAnalysisPanel",
    ]);
  });

  it("requires exactly five Main Navigation elements", () => {
    expectExactValues(contract.requiredMainNavigationElements, [
      "Schneider Electric Logo",
      "Product Name",
      "Global Search",
      "Help",
      "User Menu",
    ]);

    expect(contract.mainNavigationText.productName).toBe("Installed Base Intelligence");
    expect(contract.mainNavigationText.searchPlaceholder).toBe(
      "Search assets, sites, documents",
    );
    expect(contract.mainNavigationForbidden).toContain("Filters");
    expect(contract.mainNavigationForbidden).toContain("KPIs");
  });

  it("resolves the Page Header inconsistency as exactly five elements", () => {
    expectExactValues(contract.requiredHeaderElements, [
      "Context Pill",
      "Site Context",
      "Portfolio Title",
      "Portfolio Scope Summary",
      "Asset Intelligence",
    ]);

    expect(contract.headerInconsistencyResolution.decision).toBe(
      "v0.7.0 requires exactly five Page Header elements.",
    );
    expect(contract.headerText.assetIntelligence).toBe(
      "Component hierarchy + intelligence enabled",
    );
  });

  it("requires exactly two view and filter zones", () => {
    expectExactValues(contract.requiredViewFilterBarZones, ["Left Zone", "Right Zone"]);
  });

  it("requires exactly three views and four filter triggers", () => {
    expectExactValues(contract.requiredViews, ["List", "Geography", "Electrical"]);
    expectExactValues(contract.requiredFilterTriggers, [
      "Location",
      "Asset Type",
      "Contract Type",
      "All Filters",
    ]);
  });

  it("requires exactly nine advanced filter categories", () => {
    expectExactValues(contract.requiredAdvancedFilters, [
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

    expect(contract.filterRules).toEqual({
      labels: "text-only",
      iconsAllowed: false,
      emojisAllowed: false,
      multipleValuesSelectable: true,
      clearAllRequired: true,
    });
  });

  it("requires Building to Electrical Area to Room to Asset grouping", () => {
    expectExactValues(contract.requiredGrouping, [
      "Building",
      "Electrical Area",
      "Room",
      "Asset",
    ]);
    expect(contract.requiredAttentionGroup).toBe("Attention required");
  });

  it("requires exactly seven Installed Base List columns", () => {
    expectExactValues(contract.requiredColumns, [
      "Asset",
      "Type",
      "Location",
      "Coverage",
      "Health",
      "Status",
      "Action",
    ]);
  });

  it("requires exact column internals", () => {
    expectExactValues(contract.requiredAssetColumnElements, [
      "Connectivity Label",
      "Asset Name",
      "Asset Reference",
      "Asset Description",
    ]);
    expectExactValues(contract.requiredLocationElements, [
      "Building",
      "Electrical Area",
      "Room",
    ]);
    expectExactValues(contract.requiredCoverageElements, [
      "Service Coverage",
      "DPP Status",
    ]);
    expectExactValues(contract.requiredStatusElements, ["Status Label", "Status Date"]);
  });

  it("requires status icons and all six asset states", () => {
    expect(contract.requiredStatusIcons).toEqual({
      "Live telemetry": "✓",
      "Active alert": "⚠",
      "Connectivity issue": "⚠",
      "Last service visit": "◷",
      "No record": "—",
    });

    expectExactValues(contract.requiredAssetStates, [
      "connected-schneider",
      "connected-schneider-with-alert",
      "connected-schneider-with-connectivity-issue",
      "non-connected-schneider",
      "non-connected-schneider-with-service-history",
      "third-party",
    ]);
  });

  it("locks third-party asset values", () => {
    expect(contract.thirdPartyAssetRules).toEqual({
      connectivity: "Unknown",
      coverage: "No Coverage",
      health: "Unknown",
      status: "No record",
      exceptionsAllowed: false,
    });
  });

  it("requires exactly four panel sections, six tabs and three actions", () => {
    expectExactValues(contract.requiredPanelSections, [
      "Panel Header",
      "Tab Navigation",
      "Tab Content",
      "Action Area",
    ]);

    expectExactValues(contract.requiredTabs, [
      "Overview",
      "Health",
      "Intelligence",
      "Passport",
      "History",
      "Documents",
    ]);

    expectExactValues(contract.allowedPanelActions, [
      "Schedule Service",
      "Download Report",
      "Contact Expert",
    ]);
  });

  it("requires strict overlay and panel behavior", () => {
    expect(contract.overlayPanelBehavior.overlayColor).toBe("rgba(0, 0, 0, 0.45)");
    expect(contract.overlayPanelBehavior.backgroundBlur).toBe("4px");
    expect(contract.overlayPanelBehavior.overlayZIndex).toBe(200);
    expect(contract.overlayPanelBehavior.panelZIndex).toBe(300);
    expect(contract.overlayPanelBehavior.panelMinWidth).toBe("360px");
    expect(contract.overlayPanelBehavior.panelMaxWidth).toBe("500px");
    expect(contract.overlayPanelBehavior.escapeCloses).toBe(true);
  });

  it("requires all critical interactions and context preservation", () => {
    expect(contract.requiredInteractions).toContain("asset-row-selection-opens-detail-panel");
    expect(contract.requiredInteractions).toContain("background-scroll-locked-when-panel-open");
    expect(contract.requiredInteractions).toContain("action-area-remains-sticky");
    expect(contract.requiredInteractions).toContain("clear-all-clears-filter-values");

    expectExactValues(contract.requiredContextPreservation, [
      "Active View",
      "Active Filters",
      "Selected Asset",
      "Selected Tab",
    ]);
  });

  it("requires Health and Intelligence separation", () => {
    expect(contract.factInterpretationSeparation.duplicationAllowed).toBe(false);
    expect(contract.factInterpretationSeparation.Health).toContain("measurements");
    expect(contract.factInterpretationSeparation.Health).toContain("current condition");
    expect(contract.factInterpretationSeparation.Intelligence).toContain("recommendations");
    expect(contract.factInterpretationSeparation.Intelligence).toContain("action plan");
  });

  it("requires progressive decision disclosure", () => {
    expect(contract.progressiveDecisionDisclosure.principle).toBe(
      "Generated decision screens must reveal decision-critical information first, then expose evidence and explanation progressively.",
    );
    expect(contract.progressiveDecisionDisclosure.levels).toEqual([
      "signal",
      "decision",
      "evidence",
    ]);
    expect(contract.progressiveDecisionDisclosure.defaultDisclosure).toBe("signal-first");
  });

  it("requires DS-only table-first operational density", () => {
    expect(contract.visualRules.density).toBe("high");
    expect(contract.visualRules.surface).toBe("white-first");
    expect(contract.visualRules.layout).toBe("table-first");
    expect(contract.visualRules.forbidden).toContain("hero dashboards");
    expect(contract.visualRules.forbidden).toContain("card stacks replacing inventory tables");
  });

  it("forbids local components and undefined additions", () => {
    expect(contract.forbidden.global).toContain("local components");
    expect(contract.forbidden.global).toContain("additional filters");
    expect(contract.forbidden.global).toContain("additional columns");
    expect(contract.forbidden.global).toContain("additional tabs");
    expect(contract.forbidden.global).toContain("additional actions");
  });

  it("keeps the Markdown screen contract aligned with the JSON contract", () => {
    for (const layer of contract.requiredLayers) {
      expect(guideline).toContain(layer);
    }

    for (const tab of contract.requiredTabs) {
      expect(guideline).toContain(tab);
    }

    for (const action of contract.allowedPanelActions) {
      expect(guideline).toContain(action);
    }

    expect(guideline).toContain("Generated decision screens must reveal decision-critical information first");
  });
});
