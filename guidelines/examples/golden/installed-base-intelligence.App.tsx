import { useMemo, useState } from "react";
import {
  AllFiltersPanel,
  AssetDetailAnalysisPanel,
  InstalledBaseHeader,
  InstalledBaseList,
  InstalledBaseViewFilterBar,
  MainNavigation,
  WorkspaceShell,
} from "design-system-ai-lab";
import type {
  AssetDetailTab,
  InstalledBaseAsset,
  InstalledBaseBuildingGroup,
  InstalledBaseFilterGroup,
  InstalledBaseFilterTrigger,
  InstalledBaseView,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export type InstalledBaseIntelligenceScenario =
  | "default"
  | "all-filters-open"
  | "asset-detail-overview-open"
  | "asset-detail-health-open"
  | "asset-detail-intelligence-open"
  | "third-party-asset-selected"
  | "connectivity-issue-selected"
  | "active-alert-selected"
  | "non-connected-with-service-history-selected";

export type InstalledBaseIntelligenceAppProps = {
  scenario?: InstalledBaseIntelligenceScenario;
};

export const installedBaseGoldenAssets: InstalledBaseAsset[] = [
  { id: "connected-oem", state: "connected-oem", name: "Main MV switchgear", reference: "MV-001", description: "Primary incoming equipment", type: "MV Switchgear", building: "Building A", electricalArea: "Electrical Area 01", room: "Room MV-01", connectivity: "connected", coverage: "premium-service-plan-advanced", health: "good", status: "live-telemetry", statusDate: "Today" },
  { id: "active-alert", state: "connected-oem-with-alert", name: "LV distribution board", reference: "LV-204", description: "Distribution equipment with active alert", type: "LV Switchgear", building: "Building A", electricalArea: "Electrical Area 01", room: "Room MV-01", connectivity: "connected", coverage: "premium-service-plan-essential", health: "poor", status: "active-alert", statusDate: "2h ago", attentionRequired: true },
  { id: "connectivity-issue", state: "connected-oem-with-connectivity-issue", name: "Cooling unit", reference: "COOL-09", description: "Cooling equipment telemetry interrupted", type: "Cooling", building: "Building A", electricalArea: "Electrical Area 01", room: "Room MV-01", connectivity: "not-connected", coverage: "advanced-service-plan", health: "fair", status: "connectivity-issue", statusDate: "Yesterday", attentionRequired: true },
  { id: "non-connected-oem", state: "non-connected-oem", name: "UPS system", reference: "UPS-101", description: "Non-connected protected power system", type: "UPS", building: "Building A", electricalArea: "Electrical Area 01", room: "Room UPS-02", connectivity: "not-connected", coverage: "premium-service-plan-essential", health: "unknown", status: "no-record" },
  { id: "service-history", state: "non-connected-oem-with-service-history", name: "Transformer", reference: "TR-20", description: "Non-connected equipment with service history", type: "Transformer", building: "Building A", electricalArea: "Electrical Area 01", room: "Room UPS-02", connectivity: "not-connected", coverage: "advanced-service-plan", health: "good", status: "last-service-visit", statusDate: "2026-05-18" },
  { id: "third-party", state: "third-party", name: "Third-party PDU", reference: "PDU-TP-7", description: "Externally supplied power distribution unit", type: "PDU", building: "Building A", electricalArea: "Electrical Area 01", room: "Room UPS-02", connectivity: "connected", coverage: "premium-service-plan-advanced", health: "excellent", status: "live-telemetry" },
];

export const installedBaseGoldenGroups: InstalledBaseBuildingGroup[] = [
  {
    building: "Building A",
    electricalAreas: [
      {
        electricalArea: "Electrical Area 01",
        rooms: [
          { room: "Room MV-01", assets: installedBaseGoldenAssets.slice(0, 3) },
          { room: "Room UPS-02", assets: installedBaseGoldenAssets.slice(3) },
        ],
      },
    ],
  },
];

export const installedBaseGoldenFilters: InstalledBaseFilterGroup[] = [
  { category: "Health", options: ["Critical", "Poor", "Fair", "Good", "Excellent", "Unknown"].map((label) => ({ label, value: label })) },
  { category: "Connectivity", options: ["Connected", "Non-connected", "Unknown"].map((label) => ({ label, value: label })) },
  { category: "Coverage", options: ["Premium Service Plan Advanced", "Premium Service Plan Essential", "Advanced Service Plan", "No Coverage"].map((label) => ({ label, value: label })) },
  { category: "DPP", options: ["With Digital Product Passport", "Without Digital Product Passport"].map((label) => ({ label, value: label })) },
  { category: "Status", options: ["Live Telemetry", "Active Alert", "Connectivity Issue", "Last Service Visit", "No Record"].map((label) => ({ label, value: label })) },
  { category: "Age", options: ["< 5 years", "5–9 years", "10+ years"].map((label) => ({ label, value: label })) },
  { category: "Location", options: ["Building A", "Electrical Area 01", "Room MV-01", "Room UPS-02"].map((label) => ({ label, value: label })) },
  { category: "Asset Type", options: ["MV Switchgear", "LV Switchgear", "UPS", "Cooling", "Transformer", "PDU"].map((label) => ({ label, value: label })) },
  { category: "Contract Type", options: ["Premium Service Plan Advanced", "Premium Service Plan Essential", "Advanced Service Plan", "No Coverage"].map((label) => ({ label, value: label })) },
];

function assetForScenario(scenario: InstalledBaseIntelligenceScenario) {
  if (scenario === "third-party-asset-selected") return installedBaseGoldenAssets.find((asset) => asset.id === "third-party");
  if (scenario === "connectivity-issue-selected") return installedBaseGoldenAssets.find((asset) => asset.id === "connectivity-issue");
  if (scenario === "active-alert-selected") return installedBaseGoldenAssets.find((asset) => asset.id === "active-alert");
  if (scenario === "non-connected-with-service-history-selected") return installedBaseGoldenAssets.find((asset) => asset.id === "service-history");
  if (scenario.includes("asset-detail")) return installedBaseGoldenAssets[0];
  return undefined;
}

function tabForScenario(scenario: InstalledBaseIntelligenceScenario): AssetDetailTab {
  if (scenario === "asset-detail-health-open") return "health";
  if (scenario === "asset-detail-intelligence-open") return "intelligence";
  return "overview";
}

export default function InstalledBaseIntelligenceApp({ scenario = "default" }: InstalledBaseIntelligenceAppProps) {
  const [view, setView] = useState<InstalledBaseView>("list");
  const [filtersOpen, setFiltersOpen] = useState(scenario === "all-filters-open");
  const [selectedAsset, setSelectedAsset] = useState<InstalledBaseAsset | undefined>(() => assetForScenario(scenario));
  const [selectedTab, setSelectedTab] = useState<AssetDetailTab>(() => tabForScenario(scenario));

  const detailOpen = Boolean(selectedAsset);
  const recommendations = useMemo(() => [{ title: "Review asset priority", rationale: "Current signals should be reviewed against site criticality before follow-up.", nextStep: "Schedule Service" }], []);

  function handleFilterSelect(filter: InstalledBaseFilterTrigger) {
    if (filter === "all-filters") setFiltersOpen(true);
  }

  return (
    <main className="min-h-screen bg-(--ec-color-background)" data-testid="installed-base-intelligence-screen">
      <WorkspaceShell>
        <MainNavigation />
        <div className="grid gap-6 p-6">
          <InstalledBaseHeader buildingCount={1} electricalRoomCount={2} />
          <InstalledBaseViewFilterBar activeView={view} onViewChange={setView} onFilterSelect={handleFilterSelect} />
          <InstalledBaseList groups={installedBaseGoldenGroups} onSelectAsset={(asset) => { setSelectedAsset(asset); setSelectedTab("overview"); }} />
        </div>
        <AllFiltersPanel open={filtersOpen} onClose={() => setFiltersOpen(false)} filterGroups={installedBaseGoldenFilters} />
        {selectedAsset ? (
          <AssetDetailAnalysisPanel
            open={detailOpen}
            onClose={() => setSelectedAsset(undefined)}
            asset={selectedAsset}
            activeTab={selectedTab}
            onTabChange={setSelectedTab}
            recommendations={recommendations}
            history={[{ title: "Last service visit", date: "2026-05-18", description: "Service history is available for review." }]}
            documents={[{ title: "Service report", description: "Latest available service document", meta: "PDF" }]}
          />
        ) : null}
      </WorkspaceShell>
    </main>
  );
}
