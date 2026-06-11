import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, RecommendationCard } from "../../index";

const meta = {
  title: "Decision/RecommendationCard",
  component: RecommendationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    recommendation: { control: "text" },
    rationale: { control: "text" },
    scope: { control: "text" },
    priority: {
      control: "select",
      options: ["high", "medium", "low"],
    },
    assetContext: { control: "text" },
    customerContext: { control: "text" },
    evidenceSummary: { control: "text" },
    source: { control: "text" },
    sourceScope: { control: "text" },
    sourceStrength: { control: "text" },
    freshness: { control: "text" },
    interpretation: { control: "text" },
    validationStatus: { control: "text" },
    readiness: {
      control: "select",
      options: ["internal", "needs_review", "customer_ready"],
    },
    proofStatus: { control: "text" },
    expectedOutcome: { control: "text" },
    className: { control: "text" },
  },
  args: {
    title: "Recover connectivity before the customer review",
    recommendation:
      "Plan a connectivity recovery action for UPS Room A before the next customer discussion.",
    rationale:
      "Partial monitoring coverage weakens confidence in the current service status for critical power assets.",
    scope: "Critical Power > UPS Room A",
    priority: "high",
    evidenceSummary: "17 of 25 known assets are currently monitored.",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "partial",
    freshness: "18 hours ago",
    validationStatus: "Review before customer use",
    readiness: "needs_review",
    className: "w-180",
  },
} satisfies Meta<typeof RecommendationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ReadinessAndPriorityLevels: Story = {
  render: () => (
    <div className="w-180 space-y-3">
      <RecommendationCard
        title="Review internal modernization hypothesis"
        recommendation="Review whether modernization should be considered for the aging medium voltage feeder group."
        rationale="Lifecycle status and recent service history suggest a possible modernization opportunity, but evidence is not ready for customer discussion."
        scope="Site A > Medium voltage room"
        priority="medium"
        assetContext="SM6 24kV feeder group"
        evidenceSummary="Lifecycle status is aging and two corrective interventions were logged in 12 months."
        source="Lifecycle registry and service history"
        sourceStrength="medium"
        validationStatus="Internal review needed"
        readiness="internal"
      />

      <RecommendationCard
        title="Validate connectivity recovery recommendation"
        recommendation="Plan a connectivity recovery action for UPS Room A before the next customer discussion."
        rationale="Partial monitoring coverage weakens confidence in the current service status for critical power assets."
        scope="Critical Power > UPS Room A"
        priority="high"
        evidenceSummary="17 of 25 known assets are currently monitored."
        sourceScope="CompanyName monitored assets only"
        sourceStrength="partial"
        freshness="18 hours ago"
        validationStatus="Review before customer use"
        readiness="needs_review"
      />

      <RecommendationCard
        title="Share validated service continuity recommendation"
        recommendation="Share the validated continuity improvement plan during the next QBR."
        rationale="Closed service actions and reviewed customer objectives support a customer-ready discussion."
        scope="QBR preparation"
        priority="medium"
        customerContext="Customer wants clearer evidence of avoided risk and completed actions."
        evidenceSummary="Three service actions are closed and validated for customer discussion."
        sourceScope="Last 90 days"
        sourceStrength="high"
        proofStatus="Customer-ready proof"
        validationStatus="Customer-ready"
        readiness="customer_ready"
      />
    </div>
  ),
};

export const HighPriorityNeedsReview: Story = {
  args: {
    title: "Recover connectivity before the customer review",
    recommendation:
      "Plan a connectivity recovery action for UPS Room A before the next customer discussion.",
    rationale:
      "Partial monitoring coverage weakens confidence in the current service status for critical power assets.",
    scope: "Critical Power > UPS Room A",
    priority: "high",
    evidenceSummary: "17 of 25 known assets are currently monitored.",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "partial",
    freshness: "18 hours ago",
    validationStatus: "Review before customer use",
    readiness: "needs_review",
    className: "w-180",
  },
};

export const LowPriorityCustomerReady: Story = {
  args: {
    title: "Share portal adoption reminder",
    recommendation:
      "Mention the available portal recommendations during the next customer exchange.",
    rationale:
      "The recommendation is supported by reviewed portal activity, but it is not urgent for the next operational decision.",
    scope: "Customer engagement",
    priority: "low",
    customerContext:
      "Customer has access to the latest monthly recommendations but has not opened all of them.",
    evidenceSummary:
      "Portal activity and recommendation availability were reviewed by the Account owner.",
    source: "Customer portal activity",
    sourceStrength: "medium",
    validationStatus: "Customer-ready",
    readiness: "customer_ready",
    className: "w-180",
  },
};

export const AssetIntelligenceRecommendation: Story = {
  args: {
    title: "Validate modernization option for aging switchgear",
    recommendation:
      "Review the modernization option for the aging SM6 switchgear before the next customer planning session.",
    rationale:
      "Lifecycle status, service history and partial Health signals suggest modernization may reduce operational exposure.",
    scope: "Site A > Medium voltage room",
    priority: "high",
    assetContext: "SM6 24kV feeder group",
    evidenceSummary:
      "Lifecycle status is aging, two corrective interventions were logged in 12 months and Health visibility is partial.",
    source: "Lifecycle registry, service history and partial monitoring data",
    sourceStrength: "partial",
    interpretation:
      "The recommendation is an Intelligence interpretation and should not be presented as source-system truth.",
    validationStatus: "Validate with CompanyName expert",
    readiness: "needs_review",
    className: "w-180",
  },
};

export const ValueProofRecommendation: Story = {
  args: {
    title: "Prepare customer-ready proof before renewal discussion",
    recommendation:
      "Turn the closed service actions into a customer-ready value proof summary before the renewal meeting.",
    rationale:
      "The renewal discussion needs evidence of completed actions and customer-relevant outcomes, not only internal service activity.",
    scope: "Renewal preparation",
    priority: "high",
    evidenceSummary:
      "Three service actions were closed, but customer-ready proof has not been prepared.",
    sourceScope: "Closed service actions from the last 90 days",
    sourceStrength: "medium",
    proofStatus: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    readiness: "needs_review",
    className: "w-180",
  },
};

export const CustomerReadyRecommendation: Story = {
  args: {
    title: "Share validated continuity improvement plan",
    recommendation:
      "Present the continuity improvement plan during the QBR as a validated service value proof point.",
    rationale:
      "The plan is supported by completed actions, reviewed evidence and customer-relevant outcomes.",
    scope: "QBR preparation",
    priority: "medium",
    customerContext:
      "Customer requested clearer evidence of avoided risk and completed follow-up.",
    evidenceSummary:
      "Closed actions, service notes and review outputs are validated for customer discussion.",
    sourceScope: "Last 90 days",
    sourceStrength: "high",
    proofStatus: "Customer-ready proof",
    validationStatus: "Customer-ready",
    readiness: "customer_ready",
    className: "w-180",
  },
};

export const WithAction: Story = {
  render: () => (
    <RecommendationCard
      title="Recover connectivity before the customer review"
      recommendation="Plan a connectivity recovery action for UPS Room A before the next customer discussion."
      rationale="Partial monitoring coverage weakens confidence in the current service status for critical power assets."
      scope="Critical Power > UPS Room A"
      priority="high"
      evidenceSummary="17 of 25 known assets are currently monitored."
      sourceScope="CompanyName monitored assets only"
      sourceStrength="partial"
      freshness="18 hours ago"
      validationStatus="Review before customer use"
      readiness="needs_review"
      action={
        <Button variant="secondary" size="sm">
          Review evidence
        </Button>
      }
      className="w-180"
    />
  ),
};

export const WithNativeArticleProps: Story = {
  render: () => (
    <RecommendationCard
      aria-label="Recommendation to recover connectivity before customer review"
      data-testid="storybook-recommendation-card"
      title="Recover connectivity before the customer review"
      recommendation="Plan a connectivity recovery action for UPS Room A before the next customer discussion."
      rationale="Partial monitoring coverage weakens confidence in the current service status for critical power assets."
      scope="Critical Power > UPS Room A"
      priority="high"
      evidenceSummary="17 of 25 known assets are currently monitored."
      sourceScope="CompanyName monitored assets only"
      sourceStrength="partial"
      freshness="18 hours ago"
      validationStatus="Review before customer use"
      readiness="needs_review"
      className="w-180"
    />
  ),
};