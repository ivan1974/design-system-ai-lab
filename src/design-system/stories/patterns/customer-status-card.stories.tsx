import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomerStatusCard } from "../../index";

const meta = {
  title: "Design System/Patterns/CustomerStatusCard",
  component: CustomerStatusCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    customerName: { control: "text" },
    plan: { control: "text" },
    contract: { control: "text" },
    accountOwner: { control: "text" },
    renewalDate: { control: "text" },
    assetsCovered: { control: "text" },
    coverage: { control: "text" },
    customerObjective: { control: "text" },
    sourceContext: { control: "text" },
    validationStatus: { control: "text" },
    proofReadiness: { control: "text" },
  },
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    contract: "#CR-2024-441",
    accountOwner: "Sarah Moreau",
    renewalDate: "Aug 5, 2026",
    assetsCovered: "25 assets — 3 sites",
    coverage: "68% connected",
    customerObjective: "Improve service visibility before renewal",
    sourceContext: "Monitored assets only",
    validationStatus: "Review before customer use",
    badges: [
      { label: "Active plan", tone: "primary" },
      { label: "Connectivity partial", tone: "warning" },
      { label: "Renewal in 62 days", tone: "neutral" },
      { label: "Review needed", tone: "warning" },
    ],
  },
} satisfies Meta<typeof CustomerStatusCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HighRiskCustomer: Story = {
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    contract: "#CR-2024-441",
    accountOwner: "Sarah Moreau",
    renewalDate: "Aug 5, 2026",
    assetsCovered: "25 assets — 3 sites",
    coverage: "52% connected",
    customerObjective: "Improve service visibility before renewal",
    sourceContext: "Monitored assets only",
    validationStatus: "Review before customer use",
    proofReadiness: "Internal proof, not customer-ready",
    badges: [
      { label: "Critical risk", tone: "danger" },
      { label: "Connectivity partial", tone: "warning" },
      { label: "Renewal watch", tone: "warning" },
      { label: "Proof review needed", tone: "warning" },
    ],
  },
};

export const HealthyCustomer: Story = {
  args: {
    customerName: "North Valley Hospital",
    plan: "Essential service plan",
    contract: "#CR-2025-118",
    accountOwner: "Lina Patel",
    renewalDate: "Nov 18, 2026",
    assetsCovered: "50 assets — 4 sites",
    coverage: "96% connected",
    customerObjective: "Maintain high continuity for critical care services",
    sourceContext: "Monitored assets only",
    validationStatus: "Reviewed for customer use",
    proofReadiness: "Customer-ready proof available",
    badges: [
      { label: "Healthy", tone: "success" },
      { label: "Active plan", tone: "primary" },
      { label: "Customer-ready", tone: "success" },
    ],
  },
};

export const TrustSensitiveCustomerContext: Story = {
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    contract: "#CR-2024-441",
    accountOwner: "Sarah Moreau",
    renewalDate: "Aug 5, 2026",
    assetsCovered: "25 assets — 3 sites",
    coverage: "68% connected",
    customerObjective: "Improve service visibility before renewal",
    sourceContext: "Monitored assets only",
    validationStatus: "Review before customer use",
    proofReadiness: "Internal proof, not customer-ready",
    badges: [
      { label: "Connectivity partial", tone: "warning" },
      { label: "Source partial", tone: "warning" },
      { label: "Proof review needed", tone: "warning" },
    ],
  },
};

export const RecommendationReviewContext: Story = {
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    contract: "#CR-2024-441",
    accountOwner: "Sarah Moreau",
    renewalDate: "Aug 5, 2026",
    assetsCovered: "25 assets — 3 sites",
    coverage: "68% connected",
    customerObjective: "Clarify next actions and evidence before renewal",
    sourceContext: "Known installed base and monitored assets",
    validationStatus: "Recommendation review needed",
    proofReadiness: "Customer-ready proof missing",
    badges: [
      { label: "Needs review", tone: "warning" },
      { label: "Proof review needed", tone: "warning" },
    ],
  },
};

export const WithExtraItems: Story = {
  args: {
    customerName: "Greenfield Industries",
    plan: "Advanced service plan",
    accountOwner: "Sarah Moreau",
    coverage: "68% connected",
    customerObjective: "Improve service visibility before renewal",
    badges: [{ label: "Account owner review required", tone: "warning" }],
    extraItems: [
      { label: "Last QBR", value: "May 12, 2026" },
      { label: "Next touchpoint", value: "Jun 18, 2026" },
    ],
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <CustomerStatusCard
      aria-label="Customer status for Greenfield Industries"
      data-testid="storybook-customer-status-card"
      customerName="Greenfield Industries"
      plan="Advanced service plan"
      contract="#CR-2024-441"
      accountOwner="Sarah Moreau"
      renewalDate="Aug 5, 2026"
      assetsCovered="25 assets — 3 sites"
      coverage="68% connected"
      customerObjective="Improve service visibility before renewal"
      sourceContext="Monitored assets only"
      validationStatus="Review before customer use"
      badges={[
        { label: "Active plan", tone: "primary" },
        { label: "Connectivity partial", tone: "warning" },
      ]}
    />
  ),
};
