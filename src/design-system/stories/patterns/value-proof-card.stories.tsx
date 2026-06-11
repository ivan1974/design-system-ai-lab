import type { Meta, StoryObj } from "@storybook/react-vite";
import { ValueProofCard } from "../../index";

const meta = {
  title: "Patterns/ValueProofCard",
  component: ValueProofCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    period: { control: "text" },
    customerObjective: { control: "text" },
    proofStatus: { control: "text" },
    proofReadiness: { control: "text" },
    validationStatus: { control: "text" },
    sourceContext: { control: "text" },
    expectedOutcome: { control: "text" },
  },
  args: {
    period: "Last 90 days",
    customerObjective: "Improve service visibility before renewal",
    proofStatus: "Customer-ready summary incomplete",
    proofReadiness: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    sourceContext: "Closed service actions from the last 90 days",
    expectedOutcome: "Reduced renewal risk after proof consolidation",
    badges: [
      { label: "Proof review needed", tone: "warning" },
      { label: "Internal proof", tone: "warning" },
    ],
    proofPoints: [
      {
        label: "Closed actions",
        value:
          "12 service actions closed during the period, pending customer-ready synthesis.",
      },
      {
        label: "Resolved connectivity issues",
        value:
          "4 disconnected assets recovered across the main site and ready for proof review.",
      },
      {
        label: "Expected renewal impact",
        value:
          "Expected to support renewal confidence after proof review; not yet validated as proven value.",
      },
    ],
  },
} satisfies Meta<typeof ValueProofCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CompleteValueProof: Story = {
  args: {
    period: "Last quarter",
    customerObjective: "Show continuous service value",
    proofStatus: "Customer-ready",
    proofReadiness: "Customer-ready proof",
    validationStatus: "Reviewed for customer use",
    sourceContext: "Validated service outcomes from the last quarter",
    expectedOutcome: undefined,
    badges: [
      { label: "Ready for QBR", tone: "success" },
      { label: "Customer-ready", tone: "success" },
    ],
    proofPoints: [
      {
        label: "Availability protected",
        value: "No unplanned downtime recorded on monitored critical assets.",
      },
      {
        label: "Actions completed",
        value: "18 actions completed and documented in the service plan.",
      },
      {
        label: "Recommendations followed",
        value: "8 recommendations accepted or planned by the customer.",
      },
    ],
  },
};

export const MinimalProof: Story = {
  args: {
    title: "Service outcomes",
    description: "A compact proof card can focus only on proof points.",
    period: undefined,
    customerObjective: undefined,
    proofStatus: undefined,
    proofReadiness: undefined,
    validationStatus: undefined,
    sourceContext: undefined,
    expectedOutcome: undefined,
    badges: [],
    proofPoints: [
      {
        label: "Closed alerts",
        value: "6 alerts closed during the period.",
      },
      {
        label: "Completed actions",
        value: "4 customer actions completed.",
      },
    ],
  },
};

export const RenewalProofGap: Story = {
  args: {
    period: "Last 90 days",
    customerObjective: "Prepare renewal discussion",
    proofStatus: "Needs consolidation",
    proofReadiness: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    sourceContext: "Closed service actions and unresolved recommendations",
    expectedOutcome: "Stronger renewal discussion after proof consolidation",
    badges: [
      { label: "Renewal watch", tone: "warning" },
      { label: "Proof gap", tone: "danger" },
      { label: "Review needed", tone: "warning" },
    ],
    proofPoints: [
      {
        label: "Missing executive summary",
        value:
          "Closed actions and resolved incidents are available but not yet summarized for customer use.",
      },
      {
        label: "Recommendations not prioritized",
        value:
          "The customer has not received a ranked view of recommended next steps.",
      },
      {
        label: "Expected renewal impact",
        value:
          "Expected to reduce renewal uncertainty once proof is reviewed and customer-ready.",
      },
    ],
  },
};

export const TrustSensitiveProof: Story = {
  args: {
    period: "Last 90 days",
    customerObjective: "Confirm service value before renewal decision",
    proofStatus: "Customer-ready summary incomplete",
    proofReadiness: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    sourceContext: "Closed service actions from the last 90 days",
    expectedOutcome: "Reduced renewal risk after proof consolidation",
    badges: [
      { label: "Proof review needed", tone: "warning" },
      { label: "Internal proof", tone: "warning" },
      { label: "Expected outcome", tone: "neutral" },
    ],
    proofPoints: [
      {
        label: "Closed actions",
        value:
          "12 service actions closed during the period, pending customer-ready synthesis.",
      },
      {
        label: "Expected renewal impact",
        value:
          "Expected to support renewal confidence after proof review; not yet validated as proven value.",
      },
    ],
  },
};

export const QbrDraftProof: Story = {
  args: {
    period: "Current quarter",
    customerObjective: "Show service progress and clarify next priorities",
    proofStatus: "QBR-ready draft",
    proofReadiness: "Draft proof, not final customer-ready proof",
    validationStatus: "Review before customer use",
    sourceContext: "Service review notes and monitoring coverage summary",
    expectedOutcome: "Clearer customer discussion after final review",
    badges: [
      { label: "QBR draft", tone: "primary" },
      { label: "Review needed", tone: "warning" },
    ],
    proofPoints: [
      {
        label: "Service continuity",
        value:
          "Critical alerts were reviewed and linked to follow-up actions before the customer review.",
      },
      {
        label: "Operational visibility",
        value:
          "Monitoring coverage and disconnected assets are visible for the customer discussion, pending final review.",
      },
    ],
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <ValueProofCard
      aria-label="Value proof for renewal preparation"
      data-testid="storybook-value-proof-card"
      period="Last 90 days"
      customerObjective="Improve service visibility before renewal"
      proofStatus="Customer-ready summary incomplete"
      proofReadiness="Internal proof, not customer-ready"
      validationStatus="Proof review needed"
      sourceContext="Closed service actions from the last 90 days"
      expectedOutcome="Reduced renewal risk after proof consolidation"
      badges={[
        { label: "Proof review needed", tone: "warning" },
        { label: "Internal proof", tone: "warning" },
      ]}
      proofPoints={[
        {
          label: "Closed actions",
          value:
            "12 service actions closed during the period, pending customer-ready synthesis.",
        },
        {
          label: "Expected renewal impact",
          value:
            "Expected to support renewal confidence after proof review; not yet validated as proven value.",
        },
      ]}
    />
  ),
};