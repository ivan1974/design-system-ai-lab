import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlertCard, Button, PriorityList } from "../../index";

const meta = {
  title: "Design System/Decision/PriorityList",
  component: PriorityList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    className: { control: "text" },
  },
  args: {
    title: "Priority alerts",
    description:
      "Risks and blockers requiring source review, validation or customer follow-up.",
    children: (
      <>
        <AlertCard
          severity="critical"
          title="Critical equipment no longer monitored"
          scope="Critical Power > UPS Room A"
          description="The customer may lose visibility on critical assets before the next service review."
          recommendation="Review affected assets and plan a connectivity recovery action before the customer discussion."
          evidenceSummary="17 of 25 known assets are currently monitored."
          sourceScope="CompanyName monitored assets only"
          sourceStrength="partial"
          freshness="18 hours ago"
          validationStatus="Review before customer use"
        />

        <AlertCard
          severity="warning"
          title="Renewal value proof is not customer-ready"
          scope="Renewal preparation"
          description="Recent service actions are not yet summarized in a customer-ready view."
          recommendation="Prepare a value summary before the renewal meeting."
          evidenceSummary="Three service actions were closed, but customer-ready proof has not been prepared."
          sourceScope="Closed service actions from the last 90 days"
          sourceStrength="medium"
          validationStatus="Internal proof, not customer-ready"
        />
      </>
    ),
  },
} satisfies Meta<typeof PriorityList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHeaderAction: Story = {
  args: {
    title: "Priority risks",
    description:
      "Signals requiring source review, proof review or validation before the next customer touchpoint.",
    actions: (
      <Button variant="secondary">
        Review risks
      </Button>
    ),
    children: (
      <>
        <AlertCard
          severity="critical"
          title="Monitoring gap on critical assets"
          scope="Critical Power > UPS Room A"
          description="Two critical assets are disconnected and currently not monitored."
          recommendation="Review affected assets and plan a connectivity recovery action before the customer discussion."
          evidenceSummary="17 of 25 known assets are currently monitored."
          sourceScope="CompanyName monitored assets only"
          sourceStrength="partial"
          freshness="18 hours ago"
          validationStatus="Review before customer use"
        />

        <AlertCard
          severity="warning"
          title="Recommendations not reviewed"
          scope="Monthly report"
          description="The customer has not reviewed the latest recommendations, which may weaken the next value discussion."
          recommendation="Prepare a short source-aware summary for the next customer meeting."
          source="Customer portal activity"
          sourceStrength="medium"
          validationStatus="Review before customer use"
        />
      </>
    ),
  },
};

export const AssetVisibilityGaps: Story = {
  args: {
    title: "Asset visibility gaps",
    description:
      "Risks that may limit confidence in the current service status.",
    actions: (
      <Button variant="secondary">
        Review source evidence
      </Button>
    ),
    className: "max-w-5xl",
    children: (
      <>
        <AlertCard
          severity="critical"
          title="Critical equipment no longer monitored"
          scope="Critical Power > UPS Room A"
          description="The customer may lose visibility on critical assets before the next service review."
          recommendation="Review affected assets and plan a connectivity recovery action before the customer discussion."
          evidenceSummary="17 of 25 known assets are currently monitored."
          sourceScope="CompanyName monitored assets only"
          sourceStrength="partial"
          freshness="18 hours ago"
          validationStatus="Review before customer use"
        />

        <AlertCard
          severity="warning"
          title="Partial source strength limits recommendation confidence"
          scope="Critical Power > UPS Room A"
          description="The current asset view combines live telemetry and manual inventory, which limits recommendation confidence."
          recommendation="Review source evidence before using the asset recommendation with the customer."
          sourceScope="Known installed base"
          sourceStrength="partial"
          validationStatus="Human review needed"
        />

        <AlertCard
          severity="info"
          title="Manual inventory needs confirmation"
          scope="Known installed base"
          description="Some asset records are based on manual inventory and may not reflect the current monitored scope."
          recommendation="Confirm the affected scope before preparing the customer-ready summary."
          source="Manual inventory"
          sourceStrength="limited for live health"
          validationStatus="Review needed"
        />
      </>
    ),
  },
};

export const ProofBlockerPriorities: Story = {
  args: {
    title: "Customer-ready proof blockers",
    description:
      "Proof gaps that may weaken the renewal discussion.",
    actions: (
      <Button variant="secondary">
        Review proof gaps
      </Button>
    ),
    className: "max-w-5xl",
    children: (
      <>
        <AlertCard
          severity="critical"
          title="Expected value is not proven yet"
          scope="Renewal preparation"
          description="Expected service value is not backed by completed actions or customer-ready proof."
          recommendation="Create a proof follow-up action before using this point in the renewal discussion."
          sourceScope="Closed service actions"
          sourceStrength="partial"
          validationStatus="Expected outcome, not proven"
        />

        <AlertCard
          severity="warning"
          title="Internal proof is not customer-ready"
          scope="Value proof preparation"
          description="Internal service evidence needs customer-ready synthesis before it can support the renewal discussion."
          recommendation="Prepare and validate the customer-ready proof summary before the QBR."
          evidenceSummary="Three service actions are closed, but the customer-ready summary is missing."
          validationStatus="Internal proof, not customer-ready"
        />

        <AlertCard
          severity="info"
          title="Source evidence is available for review"
          scope="Service outcomes"
          description="Closed service actions can support the renewal story after proof review."
          recommendation="Select the strongest proof points for the customer-ready summary."
          sourceScope="Closed service actions from the last 90 days"
          sourceStrength="medium"
          validationStatus="Proof review needed"
        />
      </>
    ),
  },
};

export const WithoutHeader: Story = {
  args: {
    title: undefined,
    description: undefined,
    actions: undefined,
    children: (
      <>
        <AlertCard
          severity="warning"
          title="Customer follow-up delayed"
          scope="Action plan"
          description="A high-priority customer action has not been updated."
          recommendation="Clarify ownership and share the updated timeline."
          validationStatus="Owner update needed"
        />

        <AlertCard
          severity="info"
          title="New recommendations available"
          scope="Service report"
          description="New service recommendations are available for review."
          recommendation="Select the most relevant recommendations for the next QBR."
          source="Service report"
          validationStatus="Review before customer use"
        />
      </>
    ),
  },
};

export const RenewalRiskPriorities: Story = {
  args: {
    title: "Renewal risk priorities",
    description:
      "Issues that could weaken the renewal discussion if not addressed.",
    actions: (
      <Button>
        Create mitigation action
      </Button>
    ),
    className: "max-w-5xl",
    children: (
      <>
        <AlertCard
          severity="critical"
          title="Value proof not ready"
          scope="Renewal preparation"
          description="The customer has not received a clear summary of outcomes, closed actions and recommendations completed."
          recommendation="Prepare a customer-ready value proof summary before the renewal meeting."
          evidenceSummary="Three service actions are closed, but customer-ready proof has not been prepared."
          sourceScope="Closed service actions from the last 90 days"
          sourceStrength="medium"
          validationStatus="Internal proof, not customer-ready"
        />

        <AlertCard
          severity="warning"
          title="Overdue actions remain visible"
          scope="Customer action plan"
          description="Three high-priority actions are overdue and could reduce customer confidence."
          recommendation="Assign owners, update due dates and communicate the revised plan."
          validationStatus="Ownership review needed"
        />

        <AlertCard
          severity="info"
          title="Monthly recommendations can support renewal"
          scope="Monitoring report"
          description="The latest recommendations can help show continuous service value after review."
          recommendation="Review and select the most relevant recommendations for the renewal discussion."
          source="Monitoring report"
          validationStatus="Review before customer use"
        />
      </>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Custom priority list width",
    description:
      "PriorityList supports className for layout composition in generated screens.",
    className: "max-w-4xl",
    children: (
      <AlertCard
        severity="warning"
        title="Connectivity review required"
        scope="Gateway-02"
        description="The monitoring signal is incomplete and needs review."
        recommendation="Plan a connectivity check with the support team."
        sourceScope="CompanyName monitored assets only"
        sourceStrength="partial"
        validationStatus="Review needed"
      />
    ),
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <PriorityList
      aria-label="Customer priority risks"
      data-testid="storybook-priority-list"
      title="Priority alerts"
      description="PriorityList accepts native section attributes."
      className="max-w-5xl"
    >
      <AlertCard
        severity="critical"
        title="Critical equipment no longer monitored"
        scope="Critical Power > UPS Room A"
        description="The customer may lose visibility on critical assets before the next service review."
        recommendation="Review affected assets and plan a connectivity recovery action before the customer discussion."
        evidenceSummary="17 of 25 known assets are currently monitored."
        sourceScope="CompanyName monitored assets only"
        sourceStrength="partial"
        freshness="18 hours ago"
        validationStatus="Review before customer use"
      />

      <AlertCard
        severity="warning"
        title="Renewal proof incomplete"
        scope="Renewal preparation"
        description="The value proof summary is not ready yet."
        recommendation="Prepare the summary before the renewal discussion."
        validationStatus="Internal proof, not customer-ready"
      />
    </PriorityList>
  ),
};