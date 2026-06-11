import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AllFiltersPanel,
  InstalledBaseHeader,
  InstalledBaseViewFilterBar,
  MainNavigation,
  WorkspaceShell,
} from "../..";
import type { InstalledBaseFilterGroup, InstalledBaseFilterTrigger, InstalledBaseView } from "../..";

const filterGroups: InstalledBaseFilterGroup[] = [
  { category: "Health", options: ["Critical", "Poor", "Fair", "Good", "Excellent"].map((label) => ({ label, value: label })) },
  { category: "Connectivity", options: ["Connected", "Non-connected"].map((label) => ({ label, value: label })) },
  { category: "Coverage", options: ["Premium Service Plan Advanced", "Premium Service Plan Essential", "Advanced Service Plan", "No Coverage"].map((label) => ({ label, value: label })) },
  { category: "DPP", options: ["With Digital Product Passport", "Without Digital Product Passport"].map((label) => ({ label, value: label })) },
  { category: "Status", options: ["Live Telemetry", "Active Alert", "Last Service Visit", "No Record"].map((label) => ({ label, value: label })) },
  { category: "Age", options: ["< 5 years", "5–9 years", "10+ years"].map((label) => ({ label, value: label })) },
  { category: "Location", options: ["Building A", "Building B"].map((label) => ({ label, value: label })) },
  { category: "Asset Type", options: ["MV Switchgear", "UPS"].map((label) => ({ label, value: label })) },
  { category: "Contract Type", options: ["Premium Service Plan Advanced", "No Coverage"].map((label) => ({ label, value: label })) },
];

function InstalledBaseShellAndFiltersExample() {
  const [view, setView] = useState<InstalledBaseView>("list");
  const [filtersOpen, setFiltersOpen] = useState(false);

  function handleFilterSelect(filter: InstalledBaseFilterTrigger) {
    if (filter === "all-filters") {
      setFiltersOpen(true);
    }
  }

  return (
    <WorkspaceShell>
      <MainNavigation />
      <div className="grid gap-6 p-6">
        <InstalledBaseHeader buildingCount={3} electricalRoomCount={14} />
        <InstalledBaseViewFilterBar activeView={view} onViewChange={setView} onFilterSelect={handleFilterSelect} />
      </div>
      <AllFiltersPanel open={filtersOpen} onClose={() => setFiltersOpen(false)} filterGroups={filterGroups} />
    </WorkspaceShell>
  );
}

const meta = {
  title: "Screen Architecture/Installed Base Shell And Filters",
  component: InstalledBaseViewFilterBar,
} satisfies Meta<typeof InstalledBaseViewFilterBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ShellAndFilters: Story = {
  render: () => <InstalledBaseShellAndFiltersExample />,
};
