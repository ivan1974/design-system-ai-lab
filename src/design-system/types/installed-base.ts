export type InstalledBaseView = "list" | "geography" | "electrical";

export type InstalledBaseFilterTrigger = "location" | "asset-type" | "contract-type" | "all-filters";

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

export type InstalledBaseFilterOption = { label: string; value: string; checked?: boolean };
export type InstalledBaseFilterGroup = { category: InstalledBaseAdvancedFilterCategory; options: InstalledBaseFilterOption[] };

export type InstalledBaseAssetState =
  | "connected-oem"
  | "connected-oem-with-alert"
  | "connected-oem-with-connectivity-issue"
  | "non-connected-oem"
  | "non-connected-oem-with-service-history"
  | "third-party";

export type InstalledBaseAssetType = "MV Switchgear" | "LV Switchgear" | "UPS" | "Cooling" | "Transformer" | "Busway" | "PDU" | "Battery System";
export type InstalledBaseCoverage = "premium-service-plan-advanced" | "premium-service-plan-essential" | "advanced-service-plan" | "no-coverage";
export type InstalledBaseHealth = "critical" | "poor" | "fair" | "good" | "excellent" | "unknown";
export type InstalledBaseConnectivity = "connected" | "not-connected" | "unknown";
export type InstalledBaseOperationalStatus = "live-telemetry" | "active-alert" | "connectivity-issue" | "last-service-visit" | "no-record";

export type InstalledBaseAsset = {
  id: string;
  state: InstalledBaseAssetState;
  name: string;
  reference: string;
  description: string;
  type: InstalledBaseAssetType;
  building: string;
  electricalArea: string;
  room: string;
  connectivity: InstalledBaseConnectivity;
  coverage: InstalledBaseCoverage;
  health: InstalledBaseHealth;
  status: InstalledBaseOperationalStatus;
  statusDate?: string;
  actionLabel?: string;
  attentionRequired?: boolean;
};

export type InstalledBaseRoomGroup = { room: string; assets: InstalledBaseAsset[] };
export type InstalledBaseElectricalAreaGroup = { electricalArea: string; rooms: InstalledBaseRoomGroup[] };
export type InstalledBaseBuildingGroup = { building: string; electricalAreas: InstalledBaseElectricalAreaGroup[] };

export const installedBaseViews: Record<InstalledBaseView, string> = { list: "List", geography: "Geography", electrical: "Electrical" };
export const installedBaseFilterTriggers: Record<InstalledBaseFilterTrigger, string> = { "location": "Location", "asset-type": "Asset Type", "contract-type": "Contract Type", "all-filters": "All Filters" };
export const installedBaseAdvancedFilterCategories: InstalledBaseAdvancedFilterCategory[] = ["Health", "Connectivity", "Coverage", "DPP", "Status", "Age", "Location", "Asset Type", "Contract Type"];
export const installedBaseAssetStates: InstalledBaseAssetState[] = ["connected-oem", "connected-oem-with-alert", "connected-oem-with-connectivity-issue", "non-connected-oem", "non-connected-oem-with-service-history", "third-party"];
export const installedBaseColumns = ["Asset", "Type", "Location", "Coverage", "Health", "Status", "Action"] as const;
