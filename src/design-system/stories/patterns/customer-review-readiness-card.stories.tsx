import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomerReviewReadinessCard } from "../../index";

const meta = {
  title: "Design System/Patterns/CustomerReviewReadinessCard",
  component: CustomerReviewReadinessCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    customerName: { control: "text" },
    reviewType: { control: "text" },
    reviewDate: { control: "text" },
    customerObjective: { control: "text" },
    reviewReadiness: { control: "text" },
    proofReadiness: { control: "text" },
    recommendationReadiness: { control: "text" },
    riskStatus: { control: "text" },
    actionReadiness: { control: "text" },
    validationStatus: { control: "text" },
    sourceContext: { control: "text" },
  },
  args: {
    customerName: "Greenfield Industries",
    reviewType: "Renewal discussion",
    reviewDate: "Jun 24, 2026",
    customerObjective: "Confirm service value before renewal decision",
    reviewReadiness: "Needs review",
    proofReadiness: "Internal proof, not customer-ready",
    recommendationReadiness: "Recommendations need source review",
    riskStatus: "Three renewal blockers need review",
    actionReadiness: "Proof follow-up action not assigned",
    validationStatus: "Review before customer use",
    sourceContext:
      "Closed service actions and monitored assets from the last 90 days",
    badges: [
      { label: "Needs review", tone: "warning" },
      { label: "Proof review needed", tone: "warning" },
    ],
  },
} satisfies Meta<typeof CustomerReviewReadinessCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RenewalDiscussionReadiness: Story = {
  args: {
    customerName: "Greenfield Industries",
    reviewType: "Renewal discussion",
    reviewDate: "Jun 24, 2026",
    customerObjective: "Confirm service value before renewal decision",
    reviewReadiness: "Needs review",
    proofReadiness: "Internal proof, not customer-ready",
    recommendationReadiness: "Recommendations need source review",
    riskStatus: "Three renewal blockers need review",
    actionReadiness: "Proof follow-up action not assigned",
    validationStatus: "Review before customer use",
    sourceContext:
      "Closed service actions and monitored assets from the last 90 days",
    badges: [
      { label: "Needs review", tone: "warning" },
      { label: "Proof review needed", tone: "warning" },
      { label: "Not customer-ready", tone: "warning" },
    ],
  },
};

export const QbrPreparationReadiness: Story = {
  args: {
    customerName: "North Valley Hospital",
    reviewType: "QBR",
    reviewDate: "Sep 12, 2026",
    customerObjective: "Show continuous service value and next priorities",
    reviewReadiness: "Customer-ready after final review",
    proofReadiness: "QBR-ready draft",
    recommendationReadiness: "Recommendations reviewed, final wording needed",
    riskStatus: "No critical blocker for the review",
    actionReadiness: "Preparation actions assigned",
    validationStatus: "Final review before customer use",
    sourceContext:
      "Service outcomes, reviewed recommendations and monitoring summary from the current quarter",
    badges: [
      { label: "QBR draft", tone: "primary" },
      { label: "Final review needed", tone: "warning" },
    ],
  },
};

export const CustomerReadyReview: Story = {
  args: {
    customerName: "North Valley Hospital",
    reviewType: "QBR",
    reviewDate: "Sep 12, 2026",
    customerObjective: "Show continuous service value and next priorities",
    reviewReadiness: "Customer-ready",
    proofReadiness: "Customer-ready proof available",
    recommendationReadiness: "Recommendations reviewed for customer use",
    riskStatus: "No critical blocker for the review",
    actionReadiness: "Preparation actions complete",
    validationStatus: "Reviewed for customer use",
    sourceContext:
      "Reviewed service outcomes and recommendations from the last quarter",
    badges: [
      { label: "Customer-ready", tone: "success" },
      { label: "Reviewed", tone: "success" },
    ],
  },
};

export const ServiceReviewWithOpenRisks: Story = {
  args: {
    customerName: "Greenfield Industries",
    reviewType: "Service review",
    reviewDate: "Jun 18, 2026",
    customerObjective: "Clarify service risks and next operational priorities",
    reviewReadiness: "Needs review",
    proofReadiness: "Internal proof, not customer-ready",
    recommendationReadiness: "Asset recommendations need expert validation",
    riskStatus: "Connectivity and asset visibility risks need review",
    actionReadiness: "Validation actions need ownership",
    validationStatus: "Human validation needed",
    sourceContext:
      "Monitoring data, partial asset Health signals and service notes",
    badges: [
      { label: "Human validation needed", tone: "warning" },
      { label: "Open risks", tone: "danger" },
    ],
  },
};

export const WithExtraItems: Story = {
  args: {
    customerName: "Greenfield Industries",
    reviewType: "Renewal discussion",
    reviewReadiness: "Needs review",
    proofReadiness: "Internal proof, not customer-ready",
    recommendationReadiness: "Recommendations need review",
    validationStatus: "Review before customer use",
    badges: [{ label: "Needs review", tone: "warning" }],
    extraItems: [
      { label: "Review owner", value: "CSM" },
      { label: "Next checkpoint", value: "Before QBR preparation" },
    ],
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <CustomerReviewReadinessCard
      aria-label="Customer review readiness for Greenfield Industries"
      data-testid="storybook-customer-review-readiness-card"
      customerName="Greenfield Industries"
      reviewType="Renewal discussion"
      reviewDate="Jun 24, 2026"
      customerObjective="Confirm service value before renewal decision"
      reviewReadiness="Needs review"
      proofReadiness="Internal proof, not customer-ready"
      recommendationReadiness="Recommendations need source review"
      riskStatus="Three renewal blockers need review"
      actionReadiness="Proof follow-up action not assigned"
      validationStatus="Review before customer use"
      sourceContext="Closed service actions and monitored assets from the last 90 days"
      badges={[
        { label: "Needs review", tone: "warning" },
        { label: "Proof review needed", tone: "warning" },
      ]}
    />
  ),
};