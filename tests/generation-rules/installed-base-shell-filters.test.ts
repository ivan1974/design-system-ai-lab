import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type ScreenContract = {
  requiredMainNavigationElements: string[];
  requiredHeaderElements: string[];
  requiredViews: string[];
  requiredFilterTriggers: string[];
  requiredAdvancedFilters: string[];
  filterRules: {
    labels: string;
    iconsAllowed: boolean;
    emojisAllowed: boolean;
    multipleValuesSelectable: boolean;
    clearAllRequired: boolean;
  };
};

const contract = readJson<ScreenContract>("contracts/screen-contracts/installed-base-intelligence.contract.json");
const mainNavigation = read("src/design-system/components/main-navigation.tsx");
const header = read("src/design-system/patterns/installed-base-header.tsx");
const viewFilterBar = read("src/design-system/patterns/installed-base-view-filter-bar.tsx");
const allFiltersPanel = read("src/design-system/patterns/all-filters-panel.tsx");
const types = read("src/design-system/types/installed-base.ts");

describe("generation rules: installed base shell and filters", () => {
  it("keeps main navigation limited to global navigation elements", () => {
    for (const element of contract.requiredMainNavigationElements) {
      expect(read("guidelines/reference/screen-architecture/main-navigation.md")).toContain(element);
    }

    expect(mainNavigation).toContain("Input");
    expect(mainNavigation).toContain("Button");
    expect(mainNavigation).toContain("productName = \"Workspace\"");
    expect(mainNavigation).toContain("searchPlaceholder = \"Search\"");
    expect(mainNavigation).not.toContain("Installed Base Intelligence");
    expect(mainNavigation).not.toContain("Search assets, sites, documents");
  });

  it("keeps installed base header aligned to the five required elements", () => {
    const guideline = read("guidelines/reference/screen-architecture/installed-base-header.md");

    for (const element of contract.requiredHeaderElements) {
      expect(guideline).toContain(element);
    }

    expect(header).toContain("PageHeading");
    expect(header).toContain("Reference Campus");
    expect(header).toContain("Asset Portfolio");
    expect(header).not.toContain("KPIs");
  });

  it("uses exact views and quick filter triggers", () => {
    for (const view of contract.requiredViews) {
      expect(types).toContain(view.toLowerCase());
      expect(read("guidelines/reference/screen-architecture/installed-base-view-filter-bar.md")).toContain(view);
    }

    for (const trigger of contract.requiredFilterTriggers) {
      expect(read("guidelines/reference/screen-architecture/installed-base-view-filter-bar.md")).toContain(trigger);
    }

    expect(viewFilterBar).toContain("SegmentedControl");
    expect(viewFilterBar).toContain("Button");
  });

  it("uses exact advanced filter categories and multi-select rules", () => {
    const guideline = read("guidelines/reference/screen-architecture/all-filters-panel.md");

    for (const category of contract.requiredAdvancedFilters) {
      expect(types).toContain(category);
      expect(guideline).toContain(category);
    }

    expect(contract.filterRules.multipleValuesSelectable).toBe(true);
    expect(contract.filterRules.clearAllRequired).toBe(true);
    expect(contract.filterRules.iconsAllowed).toBe(false);
    expect(contract.filterRules.emojisAllowed).toBe(false);
    expect(allFiltersPanel).toContain("SidePanel");
    expect(allFiltersPanel).toContain("Checkbox");
    expect(allFiltersPanel).toContain("Clear All");
  });

  it("does not create local shadcn or internal primitive imports", () => {
    for (const source of [mainNavigation, header, viewFilterBar, allFiltersPanel]) {
      expect(source).not.toContain("components/ui");
      expect(source).not.toContain("@radix-ui");
      expect(source).not.toContain("internal/primitives");
    }
  });
});
