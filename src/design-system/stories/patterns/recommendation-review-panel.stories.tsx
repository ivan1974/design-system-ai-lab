import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, RecommendationCard, RecommendationReviewPanel } from "../../index";

const meta = {
  title: "Patterns/RecommendationReviewPanel",
  component: RecommendationReviewPanel,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    title: "Recommendations requiring review",
    description: "Review priority, source evidence and readiness.",
    reviewScope: "Renewal preparation",
    reviewStatus: "Needs review",
    sourceContext: "Monitoring data and service history",
    validationStatus: "internal-review-needed",
    customerReadiness: "needs-review",
    proofReadiness: "internal-proof",
    humanValidation: "required",
    actions: <Button size="sm">Validate</Button>,
    children: (
      <RecommendationCard
        title="Recover connectivity"
        recommendation="Plan a recovery action for the affected room."
        rationale="Connectivity evidence is partial."
        scope="UPS Room A"
        priority="high"
        evidenceSummary="17 of 25 known assets are currently monitored."
        sourceStrength="partial"
        validationStatus="internal-review-needed"
        readiness="needs-review"
        proofReadiness="internal-proof"
      />
    ),
  },
} satisfies Meta<typeof RecommendationReviewPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NeedsReview: Story = {};
