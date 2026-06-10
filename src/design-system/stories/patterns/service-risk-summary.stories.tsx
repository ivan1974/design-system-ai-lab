import type { Meta, StoryObj } from "@storybook/react-vite";
import { ServiceRiskSummary } from "../../index";

const meta = {
  title: "Design System/Patterns/ServiceRiskSummary",
  component: ServiceRiskSummary,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    riskLevel: {
      control: "select",
      options: ["critical", "warning", "info"],
    },
    riskSummary: { control: "text" },
    affectedScope: { control: "text" },
    customerImpact: { control: "text" },
    serviceImpact: { control: "text" },
    sourceContext: { control: "text" },
    sourceStrength: { control: "text" },
    freshness: { control: "text" },
    validationStatus: { control: "text" },
    recommendedReview: { control: "text" },
  },
  args: {
    riskLevel: "critical",
    riskSummary:
      "Critical assets are no longer monitored before the renewal discussion.",
    affectedScope: "Critical Power > UPS Room A",
    customerImpact: "Customer visibility is reduced for critical power assets.",
    serviceImpact: "Remote monitoring and proactive support are limited.",
    sourceContext: "Monitoring platform and known installed base",
    sourceStrength: "partial",
    freshness: "Last update 18 hours ago",
    validationStatus: "Review before customer communication",
    recommendedReview:
      "Review connectivity recovery and customer communication before QBR.",
    badges: [
      { label: "Critical service risk", tone: "danger" },
      { label: "Review needed", tone: "warning" },
    ],
  },
} satisfies Meta<typeof ServiceRiskSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CriticalMonitoringGap: Story = {
  args: {
    riskLevel: "critical",
    riskSummary:
      "Critical assets are no longer monitored before the renewal discussion.",
    affectedScope: "Critical Power > UPS Room A",
    customerImpact: "Customer visibility is reduced for critical power assets.",
    serviceImpact: "Remote monitoring and proactive support are limited.",
    sourceContext: "Monitoring platform and known installed base",
    sourceStrength: "partial",
    freshness: "Last update 18 hours ago",
    validationStatus: "Review before customer communication",
    recommendedReview:
      "Review connectivity recovery and customer communication before QBR.",
    badges: [
      { label: "Critical service risk", tone: "danger" },
      { label: "Review needed", tone: "warning" },
      { label: "Source partial", tone: "warning" },
    ],
  },
};

export const RenewalProofRisk: Story = {
  args: {
    riskLevel: "warning",
    riskSummary: "Service proof is incomplete before the customer review.",
    affectedScope: "Renewal preparation",
    customerImpact:
      "The customer may not see completed service outcomes clearly.",
    serviceImpact: "CSM needs to consolidate proof before the review.",
    sourceContext: "Closed service actions from the last 90 days",
    sourceStrength: "medium",
    freshness: "Current renewal preparation period",
    validationStatus: "Proof review needed",
    recommendedReview:
      "Review proof gaps and assigned follow-up actions before renewal discussion.",
    badges: [
      { label: "Proof review needed", tone: "warning" },
      { label: "Renewal watch", tone: "warning" },
    ],
  },
};

export const AssetIntelligenceRisk: Story = {
  args: {
    riskLevel: "warning",
    riskSummary:
      "Asset intelligence interpretation may affect the customer recommendation but needs expert review.",
    affectedScope: "Site A > Medium voltage room",
    customerImpact:
      "Customer recommendation could be premature if source limits are not explained.",
    serviceImpact:
      "Service team needs expert validation before customer-facing modernization discussion.",
    sourceContext:
      "Lifecycle registry, service history and partial Health signals",
    sourceStrength: "partial",
    freshness: "Last updated 18 hours ago",
    validationStatus: "Validate with CompanyName expert before customer use",
    recommendedReview:
      "Review source evidence and Intelligence interpretation before customer discussion.",
    badges: [
      { label: "Expert review", tone: "warning" },
      { label: "Source partial", tone: "warning" },
    ],
  },
};

export const InformationalServiceRisk: Story = {
  args: {
    riskLevel: "info",
    riskSummary:
      "Monthly recommendations are available but have not been reviewed yet.",
    affectedScope: "Service recommendations",
    customerImpact:
      "The next customer discussion may miss useful next-step guidance.",
    serviceImpact:
      "CSM should select relevant recommendations before the review.",
    sourceContext: "Monthly service report and recommendation history",
    sourceStrength: "medium",
    freshness: "Current monthly report",
    validationStatus: "Review before customer use",
    recommendedReview:
      "Review recommendation relevance before the next customer meeting.",
    badges: [
      { label: "Review recommended", tone: "primary" },
      { label: "Customer guidance", tone: "neutral" },
    ],
  },
};

export const WithExtraItems: Story = {
  args: {
    riskLevel: "warning",
    riskSummary: "Connectivity recovery needs review before customer update.",
    affectedScope: "Critical Power > UPS Room A",
    customerImpact: "Customer visibility remains limited until recovery is reviewed.",
    serviceImpact: "Remote support needs to validate recovery status.",
    sourceContext: "Monitoring platform",
    sourceStrength: "partial",
    validationStatus: "Review before customer communication",
    badges: [{ label: "Review needed", tone: "warning" }],
    extraItems: [
      { label: "Review owner", value: "Remote support team" },
      { label: "Next checkpoint", value: "Tomorrow 10:00" },
    ],
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <ServiceRiskSummary
      aria-label="Service risk summary for critical monitoring gap"
      data-testid="storybook-service-risk-summary"
      riskLevel="critical"
      riskSummary="Critical assets are no longer monitored before the renewal discussion."
      affectedScope="Critical Power > UPS Room A"
      customerImpact="Customer visibility is reduced for critical power assets."
      serviceImpact="Remote monitoring and proactive support are limited."
      sourceContext="Monitoring platform and known installed base"
      sourceStrength="partial"
      freshness="Last update 18 hours ago"
      validationStatus="Review before customer communication"
      recommendedReview="Review connectivity recovery and customer communication before QBR."
      badges={[
        { label: "Critical service risk", tone: "danger" },
        { label: "Review needed", tone: "warning" },
      ]}
    />
  ),
};