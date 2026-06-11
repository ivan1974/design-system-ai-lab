import type { Meta, StoryObj } from "@storybook/react-vite";
import { InstalledBaseList } from "../..";
import type { InstalledBaseBuildingGroup } from "../..";

const groups: InstalledBaseBuildingGroup[] = [
  {
    building: "Building A",
    electricalAreas: [
      {
        electricalArea: "Electrical Area 01",
        rooms: [
          {
            room: "Room MV-01",
            assets: [
              { id: "a1", state: "connected-oem", name: "Main MV switchgear", reference: "MV-001", description: "Primary incoming equipment", type: "MV Switchgear", building: "Building A", electricalArea: "Electrical Area 01", room: "Room MV-01", connectivity: "connected", coverage: "premium-service-plan-advanced", health: "good", status: "live-telemetry", statusDate: "Today" },
              { id: "a2", state: "connected-oem-with-alert", name: "LV distribution board", reference: "LV-204", description: "Distribution equipment with active alert", type: "LV Switchgear", building: "Building A", electricalArea: "Electrical Area 01", room: "Room MV-01", connectivity: "connected", coverage: "premium-service-plan-essential", health: "poor", status: "active-alert", statusDate: "2h ago", attentionRequired: true },
              { id: "a3", state: "connected-oem-with-connectivity-issue", name: "Cooling unit", reference: "COOL-09", description: "Cooling equipment telemetry interrupted", type: "Cooling", building: "Building A", electricalArea: "Electrical Area 01", room: "Room MV-01", connectivity: "not-connected", coverage: "advanced-service-plan", health: "fair", status: "connectivity-issue", statusDate: "Yesterday", attentionRequired: true },
            ],
          },
          {
            room: "Room UPS-02",
            assets: [
              { id: "a4", state: "non-connected-oem", name: "UPS system", reference: "UPS-101", description: "Non-connected protected power system", type: "UPS", building: "Building A", electricalArea: "Electrical Area 01", room: "Room UPS-02", connectivity: "not-connected", coverage: "premium-service-plan-essential", health: "unknown", status: "no-record" },
              { id: "a5", state: "non-connected-oem-with-service-history", name: "Transformer", reference: "TR-20", description: "Non-connected equipment with service history", type: "Transformer", building: "Building A", electricalArea: "Electrical Area 01", room: "Room UPS-02", connectivity: "not-connected", coverage: "advanced-service-plan", health: "good", status: "last-service-visit", statusDate: "2026-05-18" },
              { id: "a6", state: "third-party", name: "Third-party PDU", reference: "PDU-TP-7", description: "Externally supplied power distribution unit", type: "PDU", building: "Building A", electricalArea: "Electrical Area 01", room: "Room UPS-02", connectivity: "connected", coverage: "premium-service-plan-advanced", health: "excellent", status: "live-telemetry" },
            ],
          },
        ],
      },
    ],
  },
];

const meta = {
  title: "Screen Architecture/Installed Base List",
  component: InstalledBaseList,
} satisfies Meta<typeof InstalledBaseList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GroupedInventory: Story = {
  args: {
    groups,
  },
};
