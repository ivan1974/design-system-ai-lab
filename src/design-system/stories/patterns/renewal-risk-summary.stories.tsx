import type { Meta, StoryObj } from "@storybook/react-vite";
import { RenewalRiskSummary } from "../../index";

const meta = {
  title: "Patterns/RenewalRiskSummary",
  component: RenewalRiskSummary,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    customerName: { control: "text" },
    renewalDate: { control: "text" },
    renewalWindow: { control: "text" },
    plan: { control: "text" },
    contract: { control: "text" },
    renewalReadiness: { control: "text" },
    valueProofStatus: { control: "text" },
    recommendationsReviewed: { control: "text" },
    overdueActions: { control: "text" },
    renewalRiskReason: { control: "text" },
    customerObjective: { control: "text" },
    proofReadiness: { control: "text" },
    validationStatus: { control: "text" },
    sourceContext: { control: "text" },
  },
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    contract: "#CR-2024-441",
    renewalWindow: "62 days",
    renewalDate: "Aug 5, 2026",
    renewalReadiness: "Medium",
    valueProofStatus: "Incomplete",
    recommendationsReviewed: "42%",
    overdueActions: "3 high-priority actions",
    renewalRiskReason:
      "Value proof is incomplete and mitigation actions are overdue",
    customerObjective: "Confirm service value before renewal decision",
    proofReadiness: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    sourceContext: "Closed service actions from the last 90 days",
    badges: [
      { label: "Renewal watch", tone: "warning" },
      { label: "Value proof incomplete", tone: "danger" },
      { label: "Proof review needed", tone: "warning" },
    ],
  },
} satisfies Meta<typeof RenewalRiskSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CriticalRenewalRisk: Story = {
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    contract: "#CR-2024-441",
    renewalWindow: "45 days",
    renewalDate: "Jul 19, 2026",
    renewalReadiness: "Low",
    valueProofStatus: "Not ready",
    recommendationsReviewed: "18%",
    overdueActions: "7 overdue actions",
    renewalRiskReason:
      "Value proof is missing and several mitigation actions are overdue.",
    customerObjective: "Understand service outcomes before renewal decision",
    proofReadiness: "Expected outcomes, not proven",
    validationStatus: "Proof review needed",
    sourceContext: "Closed service actions and open action plan",
    badges: [
      { label: "Critical renewal risk", tone: "danger" },
      { label: "Value proof missing", tone: "danger" },
      { label: "Needs validation", tone: "warning" },
    ],
  },
};

export const ReadyForRenewal: Story = {
  args: {
    customerName: "North Valley Hospital",
    plan: "Essential service plan",
    contract: "#CR-2025-118",
    renewalWindow: "94 days",
    renewalDate: "Sep 6, 2026",
    renewalReadiness: "High",
    valueProofStatus: "Customer-ready",
    recommendationsReviewed: "91%",
    overdueActions: "0 overdue actions",
    renewalRiskReason: "No critical renewal blocker identified.",
    customerObjective: "Maintain service continuity for critical care services",
    proofReadiness: "Customer-ready proof available",
    validationStatus: "Reviewed for customer use",
    sourceContext: "Validated service outcomes from the last 90 days",
    badges: [
      { label: "Renewal ready", tone: "success" },
      { label: "Customer-ready proof", tone: "success" },
    ],
  },
};

export const TrustSensitiveRenewalContext: Story = {
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    contract: "#CR-2024-441",
    renewalWindow: "62 days",
    renewalDate: "Aug 5, 2026",
    renewalReadiness: "Medium",
    valueProofStatus: "Incomplete",
    recommendationsReviewed: "5 of 12",
    overdueActions: "3 high-priority actions",
    renewalRiskReason:
      "Value proof is incomplete and mitigation actions are overdue",
    customerObjective: "Confirm service value before renewal decision",
    proofReadiness: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    sourceContext: "Closed service actions from the last 90 days",
    badges: [
      { label: "Renewal watch", tone: "warning" },
      { label: "Proof review needed", tone: "warning" },
      { label: "Internal proof", tone: "warning" },
    ],
  },
};

export const RecommendationReviewContext: Story = {
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    contract: "#CR-2024-441",
    renewalWindow: "62 days",
    renewalReadiness: "Medium",
    valueProofStatus: "Incomplete",
    recommendationsReviewed: "42%",
    overdueActions: "3 high-priority actions",
    renewalRiskReason:
      "Recommendations and value proof need review before the renewal discussion.",
    customerObjective: "Clarify next actions and evidence before renewal",
    proofReadiness: "Customer-ready proof missing",
    validationStatus: "Recommendation and proof review needed",
    sourceContext: "Known installed base and closed service actions",
    badges: [
      { label: "Needs review", tone: "warning" },
      { label: "Customer-ready proof missing", tone: "warning" },
    ],
  },
};

export const WithExtraItems: Story = {
  args: {
    customerName: "Greenfield Industries",
    renewalWindow: "62 days",
    renewalReadiness: "Medium",
    valueProofStatus: "Incomplete",
    renewalRiskReason: "Mitigation actions need ownership before the QBR.",
    proofReadiness: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    badges: [{ label: "Mitigation needed", tone: "warning" }],
    extraItems: [
      { label: "Sponsor", value: "Maintenance director" },
      { label: "Next meeting", value: "Jun 24, 2026" },
    ],
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <RenewalRiskSummary
      aria-label="Renewal risk summary for Greenfield Industries"
      data-testid="storybook-renewal-risk-summary"
      customerName="Greenfield Industries"
      plan="Advanced service plan"
      contract="#CR-2024-441"
      renewalWindow="62 days"
      renewalDate="Aug 5, 2026"
      renewalReadiness="Medium"
      valueProofStatus="Incomplete"
      recommendationsReviewed="42%"
      overdueActions="3 high-priority actions"
      renewalRiskReason="Value proof is incomplete and mitigation actions are overdue"
      customerObjective="Confirm service value before renewal decision"
      proofReadiness="Internal proof, not customer-ready"
      validationStatus="Proof review needed"
      sourceContext="Closed service actions from the last 90 days"
      badges={[
        { label: "Renewal watch", tone: "warning" },
        { label: "Proof review needed", tone: "warning" },
      ]}
    />
  ),
};