import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlertCard, Button } from "../../index";

const meta = {
  title: "Decision/AlertCard",
  component: AlertCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    severity: {
      control: "select",
      options: ["critical", "warning", "info"],
    },
    title: { control: "text" },
    equipment: { control: "text" },
    scope: { control: "text" },
    description: { control: "text" },
    recommendation: { control: "text" },
    evidenceSummary: { control: "text" },
    source: { control: "text" },
    sourceScope: { control: "text" },
    sourceStrength: { control: "text" },
    freshness: { control: "text" },
    validationStatus: { control: "text" },
    className: { control: "text" },
  },
  args: {
    severity: "critical",
    title: "Abnormal temperature trend detected",
    equipment: "Galaxy VXL UPS",
    description:
      "Live telemetry shows rising internal temperature on a critical UPS string while load remains stable.",
    recommendation:
      "Review the thermal evidence and schedule a technical inspection within 48 hours.",
    evidenceSummary:
      "Temperature trend is increasing while UPS load remains stable.",
    source: "Live telemetry",
    sourceScope: "Connected UPS assets",
    sourceStrength: "high",
    freshness: "18 hours ago",
    validationStatus: "Human review needed",
    className: "w-180",
  },
} satisfies Meta<typeof AlertCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SeverityLevels: Story = {
  render: () => (
    <div className="w-180 space-y-3">
      <AlertCard
        severity="critical"
        title="Critical equipment is no longer monitored"
        equipment="Main LV switchboard"
        description="The customer may lose visibility on a critical asset before the service team communicates the issue."
        recommendation="Escalate to the support team today and schedule a connectivity review within 48 hours."
        sourceScope="CompanyName monitored assets only"
        sourceStrength="partial"
        freshness="18 hours ago"
        validationStatus="Review before customer use"
      />

      <AlertCard
        severity="warning"
        title="Partial connectivity weakens asset visibility"
        scope="Critical Power > UPS Room A"
        description="The monitoring view does not cover all critical UPS assets, which limits confidence in the current service status."
        recommendation="Review affected assets and plan a connectivity recovery action before the next customer discussion."
        evidenceSummary="17 of 25 known assets are currently monitored."
        sourceScope="CompanyName monitored assets only"
        sourceStrength="partial"
        freshness="18 hours ago"
        validationStatus="Review before customer use"
      />

      <AlertCard
        severity="info"
        title="Source evidence is available for review"
        scope="Service recommendations"
        description="New source evidence can support the next customer discussion, but it should be reviewed before customer use."
        recommendation="Review the source evidence and decide which points should be included in the customer summary."
        source="Service monitoring and Account owner review log"
        sourceStrength="medium"
        validationStatus="Review needed"
      />
    </div>
  ),
};

export const AssetConnectivityAlert: Story = {
  args: {
    severity: "warning",
    title: "Partial connectivity weakens asset visibility",
    scope: "Critical Power > UPS Room A",
    description:
      "The monitoring view does not cover all critical UPS assets, which limits confidence in the current service status.",
    recommendation:
      "Review affected assets and plan a connectivity recovery action before the next customer discussion.",
    evidenceSummary: "17 of 25 known assets are currently monitored.",
    sourceScope: "CompanyName monitored assets only",
    sourceStrength: "partial",
    freshness: "18 hours ago",
    validationStatus: "Review before customer use",
    className: "w-180",
  },
};

export const EvidenceAwareAlert: Story = {
  args: {
    severity: "critical",
    title: "Thermal pattern requires review",
    equipment: "Galaxy VXL UPS",
    description:
      "The asset shows rising internal temperature while load and room ambient conditions remain stable.",
    recommendation:
      "Review thermal evidence and schedule inspection of the cooling fan assembly.",
    evidenceSummary:
      "Internal temperature increased by 11% over 45 days while UPS load remained stable.",
    source: "Live telemetry and connected asset benchmark",
    sourceScope: "Connected UPS assets",
    sourceStrength: "high",
    freshness: "Today",
    validationStatus: "Human review needed",
    className: "w-180",
  },
};

export const ValueProofGapAlert: Story = {
  args: {
    severity: "critical",
    title: "Expected value is not proven yet",
    scope: "Value proof preparation",
    description:
      "The expected impact of the recommendation is not backed by completed actions or validated customer-ready evidence.",
    recommendation:
      "Create a proof follow-up action before using this point in the renewal discussion.",
    sourceScope: "Closed service actions",
    sourceStrength: "partial",
    validationStatus: "Expected outcome, not proven",
    className: "w-180",
  },
};

export const HumanValidationRequired: Story = {
  args: {
    severity: "warning",
    title: "Asset recommendation needs expert validation",
    equipment: "SM6 24kV Bus Coupler",
    description:
      "The recommendation is based on Intelligence interpretation of multiple Health signals and should be reviewed before customer use.",
    recommendation:
      "Validate the recommendation with a CompanyName expert before creating the customer action plan.",
    evidenceSummary:
      "Load, busbar temperature, SF6 pressure and insulation signals are simultaneously outside expected ranges.",
    source: "Live telemetry and connected asset benchmark",
    sourceStrength: "high",
    validationStatus: "Human validation needed",
    className: "w-180",
  },
};

export const WithCustomAction: Story = {
  render: () => (
    <AlertCard
      severity="warning"
      title="Connectivity review should be planned"
      scope="UPS Room B"
      description="Partial telemetry limits visibility on one legacy UPS string and associated battery cabinets."
      recommendation="Review source evidence before creating the customer follow-up action."
      sourceScope="Known installed base"
      sourceStrength="partial"
      validationStatus="Create action after review"
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
    <AlertCard
      aria-label="Critical alert on monitored equipment"
      data-testid="storybook-alert-card"
      severity="critical"
      title="Critical equipment is no longer monitored"
      equipment="Main HVAC control unit"
      description="The customer has no visibility on a critical asset since the latest monitoring interruption."
      recommendation="Escalate to support today and inform the customer proactively."
      sourceScope="CompanyName monitored assets only"
      sourceStrength="partial"
      freshness="18 hours ago"
      validationStatus="Review before customer use"
      className="w-180"
    />
  ),
};