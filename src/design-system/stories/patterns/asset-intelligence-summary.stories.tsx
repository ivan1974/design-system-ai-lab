import type { Meta, StoryObj } from "@storybook/react-vite";
import { AssetIntelligenceSummary } from "../../index";

const meta = {
  title: "Patterns/AssetIntelligenceSummary",
  component: AssetIntelligenceSummary,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    assetScope: "Site A · Medium voltage room",
    assetContext: "Feeder group",
    lifecycleContext: "Aging asset group with recent interventions",
    healthSignals: "Thermal trend and service history are available.",
    intelligenceInterpretation: "Review source limits before sharing.",
    sourceContext: "Monitoring data and service history",
    sourceScope: "Connected assets only",
    sourceStrength: "partial",
    freshness: "2h",
    validationStatus: "internal-review-needed",
    readiness: "needs-review",
  },
} satisfies Meta<typeof AssetIntelligenceSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NeedsReview: Story = {};

export const CustomerReady: Story = {
  args: {
    sourceStrength: "validated",
    validationStatus: "customer-ready",
    readiness: "customer-ready",
  },
};
