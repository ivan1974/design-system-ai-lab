import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceRiskSummary } from "../../index";

const meta = {
  title: "Patterns/ServiceRiskSummary",
  component: ServiceRiskSummary,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    riskLevel: "critical",
    riskSummary: "Connectivity visibility is partial for a critical room.",
    affectedScope: "UPS Room A",
    customerImpact: "Reduced visibility before review.",
    serviceImpact: "Manual follow-up required.",
    sourceContext: "Monitoring data",
    sourceStrength: "partial",
    freshness: "2h",
    validationStatus: "internal-review-needed",
    recommendedReview: "Validate affected scope and ownership.",
  },
} satisfies Meta<typeof ServiceRiskSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Critical: Story = {};

export const Warning: Story = {
  args: {
    riskLevel: "warning",
    sourceStrength: "single-source",
    validationStatus: "not-reviewed",
  },
};
