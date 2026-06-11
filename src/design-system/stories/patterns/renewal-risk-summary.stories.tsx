import type { Meta, StoryObj } from "@storybook/react-vite";
import { RenewalRiskSummary } from "../../index";

const meta = {
  title: "Patterns/RenewalRiskSummary",
  component: RenewalRiskSummary,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    customerName: "Greenfield Industries",
    renewalDate: "2026-09-30",
    renewalWindow: "90 days",
    plan: "Premium Service Plan Advanced",
    renewalReadiness: "needs-review",
    valueProofStatus: "Internal proof available",
    recommendationsReviewed: "2 of 4",
    overdueActions: "1",
    renewalRiskReason: "Value proof requires review.",
    customerObjective: "Improve continuity planning",
    proofReadiness: "internal-proof",
    validationStatus: "internal-review-needed",
    sourceContext: "Service history and review notes",
  },
} satisfies Meta<typeof RenewalRiskSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NeedsReview: Story = {};

export const CustomerReady: Story = {
  args: {
    renewalReadiness: "customer-ready",
    proofReadiness: "customer-ready-proof",
    validationStatus: "customer-ready",
  },
};
