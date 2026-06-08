import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricCard, MetricGrid } from "../../index";

const meta = {
  title: "Design System/Decision/MetricGrid",
  component: MetricGrid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: "select",
      options: [2, 3, 4],
    },
    className: {
      control: "text",
    },
  },
  args: {
    columns: 3,
    children: (
      <>
        <MetricCard
          label="Connected equipment"
          value="68%"
          helper="17 of 25 assets monitored"
          trend="-12%"
          trendTone="warning"
          sourceScope="Schneider monitored assets only"
          sourceStrength="partial"
          freshness="18 hours ago"
        />
        <MetricCard
          label="Open critical alerts"
          value="2"
          helper="Both require customer communication this week"
          source="Service monitoring"
          freshness="Today"
        />
        <MetricCard
          label="Overdue actions"
          value="3"
          helper="High-priority actions with no owner update"
          validationStatus="Ownership review needed"
        />
      </>
    ),
  },
} satisfies Meta<typeof MetricGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomerMonitoringMetrics: Story = {
  args: {
    columns: 3,
    className: "max-w-5xl",
    children: (
      <>
        <MetricCard
          label="Connected equipment"
          value="68%"
          helper="17 of 25 assets monitored"
          trend="-12%"
          trendTone="warning"
          sourceScope="Schneider monitored assets only"
          sourceStrength="partial"
          freshness="18 hours ago"
        />
        <MetricCard
          label="Open critical alerts"
          value="2"
          helper="Both require customer communication this week"
          source="Service monitoring"
          freshness="Today"
        />
        <MetricCard
          label="Overdue actions"
          value="3"
          helper="High-priority actions with no owner update"
          validationStatus="Ownership review needed"
        />
      </>
    ),
  },
};

export const AssetVisibilityMetrics: Story = {
  args: {
    columns: 4,
    className: "max-w-6xl",
    children: (
      <>
        <MetricCard
          label="Connected assets"
          value="385"
          helper="Live or recent telemetry available"
          source="DCIM / BMS integration"
          sourceScope="Known installed base"
          sourceStrength="high"
          freshness="18 hours ago"
        />
        <MetricCard
          label="Partially connected assets"
          value="59"
          helper="Some telemetry or component visibility is missing"
          sourceScope="Known installed base"
          sourceStrength="partial"
          validationStatus="Review before customer use"
        />
        <MetricCard
          label="Non-connected assets"
          value="10"
          helper="Manual inventory and service reports only"
          source="Manual inventory"
          sourceStrength="limited for live health"
          validationStatus="Not live-monitored"
        />
        <MetricCard
          label="Critical disconnected assets"
          value="3"
          helper="Priority review needed before the next service meeting"
          sourceScope="Critical power rooms"
          validationStatus="Action planning needed"
        />
      </>
    ),
  },
};

export const RenewalMetrics: Story = {
  args: {
    columns: 2,
    className: "max-w-4xl",
    children: (
      <>
        <MetricCard
          label="Renewal readiness"
          value="Medium"
          helper="Value proof needs to be consolidated"
          validationStatus="Not customer-ready"
        />
        <MetricCard
          label="Recommendations reviewed"
          value="42%"
          helper="5 of 12 recommendations reviewed"
          trend="+12%"
          trendTone="success"
          source="CSM review log"
          freshness="This quarter"
        />
      </>
    ),
  },
};

export const ValueProofMetrics: Story = {
  args: {
    columns: 3,
    className: "max-w-5xl",
    children: (
      <>
        <MetricCard
          label="Customer-ready proof items"
          value="3"
          helper="Validated proof points ready for customer discussion"
          sourceScope="Last 90 days"
          sourceStrength="high"
          validationStatus="Customer-ready"
        />
        <MetricCard
          label="Internal proof items"
          value="6"
          helper="Needs synthesis before customer communication"
          sourceScope="Closed service actions"
          validationStatus="Internal only"
        />
        <MetricCard
          label="Proof gaps"
          value="4"
          helper="Expected outcomes not yet validated by completed actions"
          validationStatus="Follow-up needed"
        />
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    className: "max-w-4xl",
    children: (
      <>
        <MetricCard
          label="Renewal readiness"
          value="Medium"
          helper="Value proof needs to be consolidated"
          validationStatus="Not customer-ready"
        />
        <MetricCard
          label="Recommendations reviewed"
          value="42%"
          helper="5 of 12 recommendations reviewed"
          trend="+12%"
          trendTone="success"
        />
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    className: "max-w-5xl",
    children: (
      <>
        <MetricCard
          label="Connected equipment"
          value="68%"
          helper="17 of 25 assets monitored"
          trend="-12%"
          trendTone="warning"
          sourceScope="Schneider monitored assets only"
          sourceStrength="partial"
        />
        <MetricCard
          label="Open critical alerts"
          value="2"
          helper="Customer communication required"
        />
        <MetricCard
          label="Overdue actions"
          value="3"
          helper="Ownership must be clarified"
          validationStatus="Owner update needed"
        />
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    className: "max-w-6xl",
    children: (
      <>
        <MetricCard
          label="Connected assets"
          value="68%"
          helper="17 of 25 assets"
          sourceScope="Monitored assets only"
          sourceStrength="partial"
        />
        <MetricCard
          label="Critical alerts"
          value="2"
          helper="Immediate review"
        />
        <MetricCard
          label="Overdue actions"
          value="3"
          helper="Actions delayed"
          validationStatus="Ownership review needed"
        />
        <MetricCard
          label="Renewal timing"
          value="62d"
          helper="Before renewal"
        />
      </>
    ),
  },
};

export const EmptyStateStructure: Story = {
  render: () => (
    <MetricGrid
      aria-label="Empty metrics grid"
      data-testid="storybook-metric-grid-empty"
      className="max-w-5xl"
    >
      <div className="rounded-(--ec-radius-md) border border-dashed border-(--ec-color-border) bg-(--ec-color-surface) p-4 text-sm text-(--ec-color-text-muted)">
        No decision metrics available yet.
      </div>
      <div className="rounded-(--ec-radius-md) border border-dashed border-(--ec-color-border) bg-(--ec-color-surface) p-4 text-sm text-(--ec-color-text-muted)">
        Add customer, asset or service context to generate indicators.
      </div>
      <div className="rounded-(--ec-radius-md) border border-dashed border-(--ec-color-border) bg-(--ec-color-surface) p-4 text-sm text-(--ec-color-text-muted)">
        Connect source data before showing trust-sensitive metrics.
      </div>
    </MetricGrid>
  ),
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <MetricGrid
      aria-label="Customer monitoring metrics"
      data-testid="storybook-metric-grid"
      columns={3}
      className="max-w-5xl"
    >
      <MetricCard
        label="Monitoring coverage"
        value="68%"
        helper="17 assets monitored out of 25 known assets"
        sourceScope="Schneider monitored assets only"
        sourceStrength="partial"
      />
      <MetricCard
        label="Risk level"
        value="High"
        helper="Connectivity issue affects critical power visibility"
        validationStatus="Review needed"
      />
      <MetricCard
        label="Recommended next steps"
        value="4"
        helper="Actions need owner and target timing before follow-through"
      />
    </MetricGrid>
  ),
};