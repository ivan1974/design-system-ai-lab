export type InstalledBaseView = "list" | "geography" | "electrical";

export type InstalledBaseFilterTrigger =
  | "location"
  | "asset-type"
  | "contract-type"
  | "all-filters";

export type InstalledBaseAdvancedFilterCategory =
  | "Health"
  | "Connectivity"
  | "Coverage"
  | "DPP"
  | "Status"
  | "Age"
  | "Location"
  | "Asset Type"
  | "Contract Type";

export type InstalledBaseFilterOption = {
  label: string;
  value: string;
  checked?: boolean;
};

export type InstalledBaseFilterGroup = {
  category: InstalledBaseAdvancedFilterCategory;
  options: InstalledBaseFilterOption[];
};

export const installedBaseViews: Record<InstalledBaseView, string> = {
  list: "List",
  geography: "Geography",
  electrical: "Electrical",
};

export const installedBaseFilterTriggers: Record<InstalledBaseFilterTrigger, string> = {
  "location": "Location",
  "asset-type": "Asset Type",
  "contract-type": "Contract Type",
  "all-filters": "All Filters",
};

export const installedBaseAdvancedFilterCategories: InstalledBaseAdvancedFilterCategory[] = [
  "Health",
  "Connectivity",
  "Coverage",
  "DPP",
  "Status",
  "Age",
  "Location",
  "Asset Type",
  "Contract Type",
];
