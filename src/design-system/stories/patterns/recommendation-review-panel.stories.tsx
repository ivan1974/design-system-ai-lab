import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  RecommendationCard,
  RecommendationReviewPanel,
} from "../../index";

const meta = {
  title: "Design System/Patterns/RecommendationReviewPanel",
  component: RecommendationReviewPanel,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    reviewScope: { control: "text" },
    reviewStatus: { control: "text" },
    sourceContext: { control: "text" },
    validationStatus: { control: "text" },
    customerReadiness: { control: "text" },
    proofContext: { control: "text" },
    className: { control: "text" },
  },
  args: {
    title: "Recommendations requiring review",
    description:
      "Review priority, source evidence and readiness before customer use.",
    reviewScope: "Renewal preparation",
    reviewStatus: "Needs review",
    sourceContext:
      "Recommendations based on monitored assets and service history",
    validationStatus: "Review before customer use",
    customerReadiness: "Not customer-ready",
    proofContext: "Internal proof, not customer-ready",
    badges: [
      { label: "Needs review", tone: "warning" },
      { label: "Customer-ready proof missing", tone: "warning" },
    ],
    children: (
      <>
        <RecommendationCard
          title="Prepare customer-ready proof before renewal discussion"
          recommendation="Turn closed service actions into a customer-ready value proof summary before the renewal meeting."
          rationale="The renewal discussion needs evidence of completed actions and customer-relevant outcomes, not only internal service activity."
          priority="high"
          readiness="needs_review"
          scope="Renewal preparation"
          evidenceSummary="Three service actions were closed, but customer-ready proof has not been prepared."
          sourceScope="Closed service actions from the last 90 days"
          sourceStrength="medium"
          proofStatus="Internal proof, not customer-ready"
          validationStatus="Proof review needed"
          expectedOutcome="Stronger renewal discussion after proof consolidation"
        />
        <RecommendationCard
          title="Review connectivity recovery before customer update"
          recommendation="Review affected assets and source evidence before sharing the recovery plan with the customer."
          rationale="Partial monitoring coverage can weaken trust if visibility limits are not explained before the customer discussion."
          priority="medium"
          readiness="needs_review"
          scope="Critical Power > UPS Room A"
          assetContext="UPS Room A and gateway-linked assets"
          evidenceSummary="17 of 25 known assets are currently monitored."
          sourceScope="CompanyName monitored assets only"
          sourceStrength="partial"
          freshness="18 hours ago"
          validationStatus="Review before customer use"
          expectedOutcome="Clearer customer communication after source review"
        />
      </>
    ),
  },
} satisfies Meta<typeof RecommendationReviewPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AssetRecommendationReview: Story = {
  args: {
    title: "Asset recommendations requiring expert review",
    description:
      "Review source evidence and validation status before customer use.",
    reviewScope: "Site A > Medium voltage room",
    reviewStatus: "Expert validation needed",
    sourceContext:
      "Lifecycle registry, service history and partial monitoring data",
    validationStatus: "Validate with CompanyName expert before customer use",
    customerReadiness: "Needs review",
    proofContext: "Expected outcome, not proven value",
    badges: [
      { label: "Expert review", tone: "warning" },
      { label: "Source partial", tone: "warning" },
    ],
    children: (
      <RecommendationCard
        title="Validate modernization option for aging switchgear"
        recommendation="Review the modernization option for the aging SM6 switchgear before the next customer planning session."
        rationale="Lifecycle status, service history and partial Health signals suggest modernization may reduce operational exposure."
        priority="high"
        readiness="needs_review"
        scope="Site A > Medium voltage room"
        assetContext="SM6 24kV feeder group"
        evidenceSummary="Lifecycle status is aging, two corrective interventions were logged in 12 months and Health visibility is partial."
        source="Lifecycle registry, service history and partial monitoring data"
        sourceStrength="partial"
        interpretation="The recommendation is an Intelligence interpretation and should not be presented as source-system truth."
        validationStatus="Validate with CompanyName expert"
        expectedOutcome="Expected reduction of operational exposure after expert review"
      />
    ),
  },
};

export const RenewalRecommendationReview: Story = {
  args: {
    title: "Renewal recommendations requiring review",
    description:
      "Review proof gaps and customer-readiness before the renewal discussion.",
    reviewScope: "Renewal preparation",
    reviewStatus: "Proof review needed",
    sourceContext: "Closed service actions and recommendation history",
    validationStatus: "Review before customer use",
    customerReadiness: "Not customer-ready",
    proofContext: "Internal proof, not customer-ready",
    actions: <Button variant="secondary">Create proof follow-up action</Button>,
    badges: [
      { label: "Proof review needed", tone: "warning" },
      { label: "Not customer-ready", tone: "warning" },
    ],
    children: (
      <>
        <RecommendationCard
          title="Prepare customer-ready value proof summary"
          recommendation="Turn closed service actions into a customer-ready value proof summary before the renewal meeting."
          rationale="The customer needs clear evidence of completed actions and outcomes before renewal."
          priority="high"
          readiness="needs_review"
          scope="Renewal preparation"
          evidenceSummary="12 actions were closed during the period, but proof has not been consolidated."
          sourceScope="Closed service actions from the last 90 days"
          sourceStrength="medium"
          proofStatus="Internal proof, not customer-ready"
          validationStatus="Proof review needed"
          expectedOutcome="Expected to reduce renewal uncertainty after proof review"
        />
        <RecommendationCard
          title="Review unresolved recommendations with service team"
          recommendation="Review unresolved service recommendations before deciding what to share in the customer renewal discussion."
          rationale="Unresolved recommendations could weaken confidence if they are not prioritized or explained."
          priority="medium"
          readiness="needs_review"
          scope="Renewal preparation"
          evidenceSummary="5 of 12 recommendations have been reviewed."
          sourceScope="Recommendation history and service notes"
          sourceStrength="partial"
          proofStatus="Customer-ready proof missing"
          validationStatus="Review before customer use"
        />
      </>
    ),
  },
};

export const CustomerReadyRecommendationReview: Story = {
  args: {
    title: "Customer-ready recommendations",
    description:
      "Recommendations reviewed and ready for customer discussion.",
    reviewScope: "QBR preparation",
    reviewStatus: "Reviewed for customer use",
    sourceContext: "Validated service outcomes and reviewed recommendations",
    validationStatus: "Reviewed for customer use",
    customerReadiness: "Customer-ready",
    proofContext: "Customer-ready proof available",
    badges: [
      { label: "Customer-ready", tone: "success" },
      { label: "Reviewed", tone: "success" },
    ],
    children: (
      <RecommendationCard
        title="Share validated service continuity improvement plan"
        recommendation="Present the continuity improvement plan during the QBR as a validated service value proof point."
        rationale="The plan is supported by completed actions, reviewed evidence and customer-relevant outcomes."
        priority="medium"
        readiness="customer_ready"
        scope="QBR preparation"
        customerContext="Customer requested clearer evidence of avoided risk and completed follow-up."
        evidenceSummary="Closed actions, service notes and review outputs are validated for customer discussion."
        sourceScope="Last 90 days"
        sourceStrength="high"
        proofStatus="Customer-ready proof"
        validationStatus="Customer-ready"
      />
    ),
  },
};

export const WithExtraItems: Story = {
  args: {
    title: "Recommendation review with extra metadata",
    description:
      "Use extra items for concise review metadata specific to the generated screen.",
    reviewScope: "Customer review preparation",
    reviewStatus: "Needs review",
    sourceContext: "Service history and monitored asset data",
    validationStatus: "Review before customer use",
    customerReadiness: "Needs review",
    badges: [{ label: "Needs review", tone: "warning" }],
    extraItems: [
      { label: "Review owner", value: "CSM" },
      { label: "Next checkpoint", value: "Before QBR preparation" },
    ],
    children: (
      <RecommendationCard
        title="Review service recommendations before customer meeting"
        recommendation="Select and validate the most relevant recommendations before the customer review."
        rationale="The customer needs a focused view of next steps, not a raw list of recommendations."
        priority="medium"
        readiness="needs_review"
        scope="Customer review preparation"
        evidenceSummary="Several recommendations are available but not yet prioritized for the customer."
        validationStatus="Review before customer use"
      />
    ),
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <RecommendationReviewPanel
      aria-label="Recommendations requiring review"
      data-testid="storybook-recommendation-review-panel"
      title="Recommendations requiring review"
      description="Review priority, source evidence and readiness before customer use."
      reviewScope="Renewal preparation"
      reviewStatus="Needs review"
      sourceContext="Recommendations based on monitored assets and service history"
      validationStatus="Review before customer use"
      customerReadiness="Not customer-ready"
      proofContext="Internal proof, not customer-ready"
      badges={[
        { label: "Needs review", tone: "warning" },
        { label: "Customer-ready proof missing", tone: "warning" },
      ]}
    >
      <RecommendationCard
        title="Prepare customer-ready proof before renewal discussion"
        recommendation="Turn closed service actions into a customer-ready value proof summary before the renewal meeting."
        rationale="The renewal discussion needs evidence of completed actions and customer-relevant outcomes."
        priority="high"
        readiness="needs_review"
        scope="Renewal preparation"
        evidenceSummary="Three service actions were closed, but customer-ready proof has not been prepared."
        proofStatus="Internal proof, not customer-ready"
        validationStatus="Proof review needed"
      />
    </RecommendationReviewPanel>
  ),
};