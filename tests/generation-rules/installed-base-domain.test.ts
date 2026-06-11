import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const readJson = <T>(path: string): T =>
  JSON.parse(readFileSync(join(root, path), "utf8")) as T;

type InstalledBaseDomainContract = {
  name: string;
  version: string;
  source: string;
  screenContext: string;
  assetHierarchy: string[];
  assetFamilies: string[];
  assetStates: string[];
  connectivityValues: string[];
  filterConnectivityValues: string[];
  healthValues: string[];
  coverageValues: string[];
  dppValues: string[];
  filterDppValues: string[];
  statusLabels: string[];
  filterStatusValues: string[];
  statusIcons: Record<string, string>;
  ageValues: string[];
  thirdPartyAssetRules: {
    connectivity: string;
    coverage: string;
    health: string;
    status: string;
    exceptionsAllowed: boolean;
  };
  attentionRequiredRule: {
    groupLabel: string;
    triggers: string[];
    placement: string;
  };
  factInterpretationSeparation: {
    Health: string[];
    Intelligence: string[];
    duplicationAllowed: boolean;
  };
  progressiveDecisionDisclosure: {
    principle: string;
    levels: string[];
    defaultDisclosure: string;
  };
};

const contract = readJson<InstalledBaseDomainContract>(
  "contracts/installed-base-domain.contract.json",
);

const expectExactValues = (actual: string[], expected: string[]) => {
  expect(actual).toEqual(expected);
  expect(new Set(actual).size).toBe(actual.length);
};

describe("Installed Base domain contract", () => {
  it("defines the Installed Base screen context", () => {
    expect(contract.name).toBe("installed-base-domain");
    expect(contract.version).toBe("0.7.0-alpha.0");
    expect(contract.screenContext).toBe("installed-base-intelligence");
    expect(contract.source).toBe("guidelines/source/domain-models/installed-base.md");
  });

  it("locks the installed base hierarchy", () => {
    expectExactValues(contract.assetHierarchy, [
      "Building",
      "Electrical Area",
      "Room",
      "Asset",
    ]);
  });

  it("locks all supported asset families", () => {
    expectExactValues(contract.assetFamilies, [
      "MV Switchgear",
      "LV Switchgear",
      "UPS",
      "Cooling",
      "Transformer",
      "Busway",
      "PDU",
      "Battery System",
    ]);
  });

  it("locks the six required asset states", () => {
    expectExactValues(contract.assetStates, [
      "connected-schneider",
      "connected-schneider-with-alert",
      "connected-schneider-with-connectivity-issue",
      "non-connected-schneider",
      "non-connected-schneider-with-service-history",
      "third-party",
    ]);
  });

  it("locks display and filter connectivity values", () => {
    expectExactValues(contract.connectivityValues, [
      "Connected",
      "Not connected",
      "Unknown",
    ]);

    expectExactValues(contract.filterConnectivityValues, [
      "Connected",
      "Non-connected",
    ]);
  });

  it("locks health, coverage and DPP values", () => {
    expectExactValues(contract.healthValues, [
      "Critical",
      "Poor",
      "Fair",
      "Good",
      "Excellent",
      "Unknown",
    ]);

    expectExactValues(contract.coverageValues, [
      "EcoCare Advanced",
      "EcoCare Essential",
      "Adv. Service Plan",
      "No Coverage",
    ]);

    expectExactValues(contract.dppValues, ["DPP Enabled", "No DPP"]);
    expectExactValues(contract.filterDppValues, [
      "With Digital Product Passport",
      "Without Digital Product Passport",
    ]);
  });

  it("locks status labels and status icons", () => {
    expectExactValues(contract.statusLabels, [
      "Live telemetry",
      "Active alert",
      "Connectivity issue",
      "Last service visit",
      "No record",
    ]);

    expect(contract.statusIcons).toEqual({
      "Live telemetry": "✓",
      "Active alert": "⚠",
      "Connectivity issue": "⚠",
      "Last service visit": "◷",
      "No record": "—",
    });
  });

  it("locks filter-only status and age values", () => {
    expectExactValues(contract.filterStatusValues, [
      "Live Telemetry",
      "Active Alert",
      "Last Service Visit",
      "No Record",
    ]);

    expectExactValues(contract.ageValues, ["< 5 years", "5–9 years", "10+ years"]);
  });

  it("makes third-party values mandatory with no exceptions", () => {
    expect(contract.thirdPartyAssetRules).toEqual({
      connectivity: "Unknown",
      coverage: "No Coverage",
      health: "Unknown",
      status: "No record",
      exceptionsAllowed: false,
    });
  });

  it("requires attention grouping for alert and connectivity issue assets", () => {
    expect(contract.attentionRequiredRule.groupLabel).toBe("Attention required");
    expect(contract.attentionRequiredRule.triggers).toEqual([
      "Active alert",
      "Connectivity issue",
    ]);
    expect(contract.attentionRequiredRule.placement).toBe("top-of-installed-base-list");
  });

  it("separates Health facts from Intelligence interpretation", () => {
    expect(contract.factInterpretationSeparation.duplicationAllowed).toBe(false);
    expect(contract.factInterpretationSeparation.Health).toContain("measurements");
    expect(contract.factInterpretationSeparation.Health).toContain("current condition");
    expect(contract.factInterpretationSeparation.Intelligence).toContain("recommendation");
    expect(contract.factInterpretationSeparation.Intelligence).toContain("action plan");
  });

  it("requires signal-first progressive decision disclosure", () => {
    expect(contract.progressiveDecisionDisclosure.principle).toBe(
      "Generated decision screens must reveal decision-critical information first, then expose evidence and explanation progressively.",
    );
    expectExactValues(contract.progressiveDecisionDisclosure.levels, [
      "signal",
      "decision",
      "evidence",
    ]);
    expect(contract.progressiveDecisionDisclosure.defaultDisclosure).toBe("signal-first");
  });
});
