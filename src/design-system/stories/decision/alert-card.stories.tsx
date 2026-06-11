import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlertCard, Button } from "../../index";

const meta = {
  title: "Decision/AlertCard",
  component: AlertCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    severity: "critical",
    title: "Abnormal temperature trend detected",
    equipment: "UPS system",
    description: "Telemetry shows a rising internal temperature while load remains stable.",
    recommendation: "Review the evidence and schedule a technical inspection.",
    evidenceSummary: "Temperature trend is increasing while load remains stable.",
    source: "Live telemetry",
    sourceScope: "Connected UPS assets",
    sourceStrength: "partial",
    freshness: "2h",
    validationStatus: "internal-review-needed",
    action: <Button size="sm">Open</Button>,
    className: "w-160",
  },
} satisfies Meta<typeof AlertCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Critical: Story = {};

export const Warning: Story = {
  args: {
    severity: "warning",
    sourceStrength: "single-source",
    validationStatus: "not-reviewed",
  },
};
