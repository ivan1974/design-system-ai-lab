import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AssetDetailAnalysisPanel, Button } from "../..";
import type { InstalledBaseAsset } from "../..";

const asset: InstalledBaseAsset = {
  id: "a1",
  state: "connected-oem-with-alert",
  name: "Main MV switchgear",
  reference: "MV-001",
  description: "Primary incoming equipment with monitored condition signals",
  type: "MV Switchgear",
  building: "Building A",
  electricalArea: "Electrical Area 01",
  room: "Room MV-01",
  connectivity: "connected",
  coverage: "premium-service-plan-advanced",
  health: "poor",
  status: "active-alert",
  statusDate: "2h ago",
  attentionRequired: true,
};

function AssetDetailExample() {
  const [open, setOpen] = useState(true);
  return (
    <div className="p-6">
      <Button onClick={() => setOpen(true)}>Open asset detail</Button>
      <AssetDetailAnalysisPanel
        open={open}
        onClose={() => setOpen(false)}
        asset={asset}
        history={[
          { title: "Active alert detected", date: "Today", description: "Observed telemetry crossed configured threshold." },
          { title: "Last service visit", date: "2026-05-18", description: "Inspection completed and report attached." },
        ]}
        documents={[
          { title: "Service report", description: "Latest field service report", meta: "PDF · 2026-05-18" },
          { title: "Asset passport", description: "Reference and lifecycle data", meta: "PDF · Current" },
        ]}
        recommendations={[
          {
            title: "Schedule a service review",
            rationale: "The asset combines poor health with an active alert and should be reviewed against site criticality.",
            nextStep: "Schedule Service",
          },
        ]}
      />
    </div>
  );
}

const meta = {
  title: "Screen Architecture/Asset Detail Analysis Panel",
  component: AssetDetailAnalysisPanel,
} satisfies Meta<typeof AssetDetailAnalysisPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OpenPanel: Story = {
  render: () => <AssetDetailExample />,
};
