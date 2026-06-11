import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, RecommendationCard } from "../../index";

const meta = {
  title: "Decision/RecommendationCard",
  component: RecommendationCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    title: "Recover connectivity before review",
    recommendation: "Plan a connectivity recovery action for UPS Room A.",
    rationale: "Connectivity evidence is partial and should be reviewed before external communication.",
    scope: "UPS Room A",
    priority: "high",
    assetContext: "Critical Power",
    customerContext: "Upcoming review",
    evidenceSummary: "17 of 25 known assets are currently monitored.",
    source: "Monitoring data",
    sourceScope: "Connected assets only",
    sourceStrength: "partial",
    freshness: "2h",
    interpretation: "The gap may reduce operational visibility.",
    validationStatus: "internal-review-needed",
    readiness: "needs-review",
    proofReadiness: "internal-proof",
    expectedOutcome: "Recovered visibility before review.",
    action: <Button size="sm">Open</Button>,
    className: "w-180",
  },
} satisfies Meta<typeof RecommendationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NeedsReview: Story = {};

export const CustomerReady: Story = {
  args: {
    sourceStrength: "validated",
    validationStatus: "customer-ready",
    readiness: "customer-ready",
    proofReadiness: "customer-ready-proof",
  },
};
