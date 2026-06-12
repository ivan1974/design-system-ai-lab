import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");

const types = read("src/design-system/types/installed-base.ts");
const list = read("src/design-system/patterns/installed-base-list.tsx");
const row = read("src/design-system/patterns/asset-inventory-row.tsx");
const listGuideline = read("guidelines/reference/patterns/installed-base-list.md");
const rowGuideline = read("guidelines/reference/patterns/asset-inventory-row.md");
const story = read("src/design-system/stories/screen-architecture/installed-base-list.stories.tsx");

const expectedColumns = ["Asset", "Type", "Location", "Coverage", "Health", "Status", "Action"];
const expectedStates = [
  "connected-oem",
  "connected-oem-with-alert",
  "connected-oem-with-connectivity-issue",
  "non-connected-oem",
  "non-connected-oem-with-service-history",
  "third-party",
];

describe("generation rules: installed base list", () => {
  it("defines the seven exact columns", () => {
    for (const column of expectedColumns) {
      expect(types).toContain(column);
      expect(listGuideline).toContain(column);
      expect(rowGuideline).toContain(column);
    }

    expect(types).toContain("installedBaseColumns");
    expect(list).toContain("installedBaseColumns");
  });

  it("defines and demonstrates the six asset states", () => {
    for (const state of expectedStates) {
      expect(types).toContain(state);
      expect(rowGuideline).toContain(state);
      expect(story).toContain(state);
    }
  });

  it("implements Building to Electrical Area to Room to Asset grouping", () => {
    for (const label of ["Building", "Electrical Area", "Room", "Asset"]) {
      expect(listGuideline).toContain(label);
    }

    expect(types).toContain("InstalledBaseBuildingGroup");
    expect(types).toContain("InstalledBaseElectricalAreaGroup");
    expect(types).toContain("InstalledBaseRoomGroup");
    expect(list).toContain("building.electricalAreas");
    expect(list).toContain("area.rooms");
    expect(list).toContain("room.assets");
  });

  it("implements the attention required group", () => {
    expect(list).toContain("Attention required");
    expect(list).toContain("active-alert");
    expect(list).toContain("connectivity-issue");
    expect(listGuideline).toContain("Attention required");
  });

  it("enforces the third-party rule in the row component", () => {
    expect(row).toContain("state !== \"third-party\"");
    expect(row).toContain("connectivity: \"unknown\"");
    expect(row).toContain("coverage: \"no-coverage\"");
    expect(row).toContain("health: \"unknown\"");
    expect(row).toContain("status: \"no-record\"");
    expect(rowGuideline).toContain("No exception is allowed");
  });

  it("uses DS primitives and avoids local UI drift", () => {
    for (const source of [list, row]) {
      expect(source).not.toContain("components/ui");
      expect(source).not.toContain("@radix-ui");
      expect(source).not.toContain("internal/primitives");
    }

    expect(list).toContain("Table");
    expect(row).toContain("StatusIndicator");
    expect(row).toContain("SemanticTag");
    expect(row).toContain("SemanticPill");
    expect(row).not.toContain("ConnectivityLabel");
    expect(row).not.toContain("CoverageTag");
    expect(row).not.toContain("HealthPill");
    expect(row).not.toContain("StatusWithIcon");
  });
});
