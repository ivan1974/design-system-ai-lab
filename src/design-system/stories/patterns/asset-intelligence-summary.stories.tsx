import type { Meta, StoryObj } from "@storybook/react-vite";
import { AssetIntelligenceSummary } from "../../index";

const meta = {
  title: "Patterns/AssetIntelligenceSummary",
  component: AssetIntelligenceSummary,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    assetScope: { control: "text" },
    assetContext: { control: "text" },
    lifecycleContext: { control: "text" },
    healthSignals: { control: "text" },
    intelligenceInterpretation: { control: "text" },
    sourceContext: { control: "text" },
    sourceScope: { control: "text" },
    sourceStrength: { control: "text" },
    freshness: { control: "text" },
    validationStatus: { control: "text" },
    readiness: {
      control: "select",
      options: ["internal", "needs_review", "customer_ready"],
    },
  },
  args: {
    assetScope: "Site A > Medium voltage room",
    assetContext: "SM6 24kV feeder group",
    lifecycleContext: "Aging asset group with recent corrective interventions",
    healthSignals:
      "Partial Health visibility: thermal trend and service history available",
    intelligenceInterpretation:
      "Modernization may reduce operational exposure, but evidence needs expert review.",
    sourceContext:
      "Lifecycle registry, service history and partial monitoring data",
    sourceScope: "Known installed base and CompanyName monitored assets",
    sourceStrength: "partial",
    freshness: "Last updated 18 hours ago",
    validationStatus: "Validate with CompanyName expert before customer use",
    readiness: "needs_review",
    badges: [
      { label: "Needs review", tone: "warning" },
      { label: "Source partial", tone: "warning" },
    ],
  },
} satisfies Meta<typeof AssetIntelligenceSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NeedsExpertReview: Story = {
  args: {
    assetScope: "Site A > Medium voltage room",
    assetContext: "SM6 24kV feeder group",
    lifecycleContext: "Aging asset group with recent corrective interventions",
    healthSignals:
      "Partial Health visibility: thermal trend and service history available",
    intelligenceInterpretation:
      "Modernization may reduce operational exposure, but evidence needs expert review.",
    sourceContext:
      "Lifecycle registry, service history and partial monitoring data",
    sourceScope: "Known installed base and CompanyName monitored assets",
    sourceStrength: "partial",
    freshness: "Last updated 18 hours ago",
    validationStatus: "Validate with CompanyName expert before customer use",
    readiness: "needs_review",
    badges: [
      { label: "Needs review", tone: "warning" },
      { label: "Source partial", tone: "warning" },
    ],
  },
};

export const InternalExploration: Story = {
  args: {
    assetScope: "Site B > Low voltage distribution",
    assetContext: "Aging switchboard group",
    lifecycleContext: "Lifecycle status suggests internal review may be useful",
    healthSignals:
      "Limited Health visibility: service history available, live monitoring incomplete",
    intelligenceInterpretation:
      "Internal hypothesis only: asset renewal planning may need exploration.",
    sourceContext: "Lifecycle registry and manual service records",
    sourceScope: "Known installed base only",
    sourceStrength: "manual and partial",
    freshness: "Reviewed last week",
    validationStatus: "Internal review needed",
    readiness: "internal",
    badges: [
      { label: "Internal", tone: "neutral" },
      { label: "Manual source", tone: "warning" },
    ],
  },
};

export const CustomerReadyAssetContext: Story = {
  args: {
    assetScope: "Critical Power > UPS Room A",
    assetContext: "UPS and power distribution assets",
    healthSignals: "Connectivity restored and latest Health indicators reviewed",
    intelligenceInterpretation:
      "Connectivity recovery can be presented as part of the service continuity review.",
    sourceContext: "Monitoring data and service review notes",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "high",
    freshness: "Reviewed today",
    validationStatus: "Reviewed for customer use",
    readiness: "customer_ready",
    badges: [
      { label: "Customer-ready", tone: "success" },
      { label: "Reviewed", tone: "success" },
    ],
  },
};

export const ConnectivityAndAssetVisibility: Story = {
  args: {
    assetScope: "Critical Power > UPS Room A",
    assetContext: "UPS Room A and gateway-linked assets",
    healthSignals:
      "Connectivity partial: 17 of 25 known assets currently monitored",
    intelligenceInterpretation:
      "Connectivity recovery should be reviewed before customer-facing recommendations are prepared.",
    sourceContext: "Monitoring platform and known installed base",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "partial",
    freshness: "Last update 18 hours ago",
    validationStatus: "Review before customer use",
    readiness: "needs_review",
    badges: [
      { label: "Connectivity partial", tone: "warning" },
      { label: "Review needed", tone: "warning" },
    ],
  },
};

export const WithExtraItems: Story = {
  args: {
    assetScope: "Site A > Medium voltage room",
    assetContext: "SM6 24kV feeder group",
    healthSignals: "Partial Health visibility available",
    intelligenceInterpretation:
      "Modernization hypothesis should be reviewed before customer discussion.",
    sourceContext: "Lifecycle registry and service history",
    sourceStrength: "partial",
    validationStatus: "Expert review required",
    readiness: "needs_review",
    badges: [{ label: "Expert review", tone: "warning" }],
    extraItems: [
      { label: "Review owner", value: "Service Manager" },
      { label: "Next checkpoint", value: "Before QBR preparation" },
    ],
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <AssetIntelligenceSummary
      aria-label="Asset intelligence summary for medium voltage room"
      data-testid="storybook-asset-intelligence-summary"
      assetScope="Site A > Medium voltage room"
      assetContext="SM6 24kV feeder group"
      lifecycleContext="Aging asset group with recent corrective interventions"
      healthSignals="Partial Health visibility: thermal trend and service history available"
      intelligenceInterpretation="Modernization may reduce operational exposure, but evidence needs expert review."
      sourceContext="Lifecycle registry, service history and partial monitoring data"
      sourceScope="Known installed base and CompanyName monitored assets"
      sourceStrength="partial"
      freshness="Last updated 18 hours ago"
      validationStatus="Validate with CompanyName expert before customer use"
      readiness="needs_review"
      badges={[
        { label: "Needs review", tone: "warning" },
        { label: "Source partial", tone: "warning" },
      ]}
    />
  ),
};