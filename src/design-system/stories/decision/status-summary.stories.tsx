import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, StatusSummary } from "../../index";

const meta = {
  title: "Design System/Decision/StatusSummary",
  component: StatusSummary,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    columns: {
      control: "select",
      options: [2, 3, 4],
    },
    className: { control: "text" },
  },
  args: {
    title: "Source context",
    description:
      "Short metadata to review before interpreting the recommendation.",
    columns: 3,
    badges: [
      { label: "Source partial", tone: "warning" },
      { label: "Review needed", tone: "warning" },
    ],
    items: [
      { label: "Source", value: "Service monitoring" },
      { label: "Source scope", value: "CompanyName monitored assets only" },
      { label: "Source strength", value: "Partial" },
      { label: "Freshness", value: "18 hours ago" },
      { label: "Validation status", value: "Review before customer use" },
      { label: "Readiness", value: "Needs review" },
    ],
  },
} satisfies Meta<typeof StatusSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SourceEvidenceContext: Story = {
  args: {
    title: "Source context",
    description:
      "Short metadata to review before interpreting the recommendation.",
    columns: 3,
    badges: [
      { label: "Source partial", tone: "warning" },
      { label: "Review needed", tone: "warning" },
    ],
    items: [
      { label: "Source", value: "Service monitoring" },
      { label: "Source scope", value: "CompanyName monitored assets only" },
      { label: "Source strength", value: "Partial" },
      { label: "Freshness", value: "18 hours ago" },
      { label: "Validation status", value: "Review before customer use" },
      { label: "Readiness", value: "Needs review" },
    ],
  },
};

export const RecommendationMetadata: Story = {
  args: {
    title: "Recommendation context",
    description:
      "Short recommendation metadata before reviewing rationale.",
    columns: 2,
    badges: [
      { label: "High priority", tone: "danger" },
      { label: "Needs review", tone: "warning" },
    ],
    items: [
      { label: "Priority", value: "High" },
      { label: "Readiness", value: "Needs review" },
      { label: "Scope", value: "Critical Power > UPS Room A" },
      { label: "Validation status", value: "Review before customer use" },
    ],
  },
};

export const OperationalReviewContext: Story = {
  args: {
    title: "Service review context",
    description:
      "Key context before reviewing risks and recommended actions.",
    columns: 3,
    badges: [
      { label: "Review needed", tone: "warning" },
      { label: "Active plan", tone: "primary" },
    ],
    items: [
      { label: "Owner", value: "Account owner" },
      { label: "Review date", value: "Jun 24, 2026" },
      { label: "Scope", value: "3 sites" },
      { label: "Last update", value: "18 hours ago" },
      { label: "Source strength", value: "Partial" },
      { label: "Validation status", value: "Review before customer use" },
    ],
  },
};

export const ProofMetadata: Story = {
  args: {
    title: "Proof context",
    description:
      "Short proof metadata before reviewing customer-ready value evidence.",
    columns: 2,
    badges: [
      { label: "Internal only", tone: "warning" },
      { label: "Proof review needed", tone: "warning" },
    ],
    items: [
      { label: "Proof status", value: "Internal proof, not customer-ready" },
      { label: "Proof scope", value: "Closed service actions" },
      { label: "Readiness", value: "Needs review" },
      { label: "Validation status", value: "Proof review needed" },
    ],
  },
};

export const AssetMetadata: Story = {
  args: {
    title: "Asset context",
    description:
      "Short asset metadata when no dedicated coverage pattern is needed.",
    columns: 3,
    badges: [
      { label: "Source partial", tone: "warning" },
      { label: "Human validation needed", tone: "warning" },
    ],
    items: [
      { label: "Site", value: "Site A" },
      { label: "Zone", value: "Critical Power" },
      { label: "Asset group", value: "UPS Room A" },
      { label: "Source scope", value: "Known installed base" },
      { label: "Source strength", value: "Partial" },
      { label: "Validation status", value: "Review before customer use" },
    ],
  },
};

export const WithoutBadges: Story = {
  args: {
    title: "Service context",
    description: "A summary can be displayed without status badges.",
    badges: [],
    columns: 3,
    items: [
      { label: "Customer", value: "Greenfield Industries" },
      { label: "Service plan", value: "Advanced" },
      { label: "Account owner", value: "Sarah Moreau" },
    ],
  },
};

export const WithRichValues: Story = {
  args: {
    title: "Review status",
    description:
      "Values can include React content when a richer display is useful.",
    badges: [{ label: "Review needed", tone: "warning" }],
    columns: 3,
    items: [
      {
        label: "Validation",
        value: <Badge tone="warning">Review needed</Badge>,
      },
      {
        label: "Priority",
        value: <Badge tone="danger">High priority</Badge>,
      },
      {
        label: "Readiness",
        value: <Badge tone="warning">Needs review</Badge>,
      },
    ],
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Custom summary spacing",
    description:
      "StatusSummary supports className for the internal content layout.",
    className: "pt-1",
    badges: [{ label: "Custom layout", tone: "primary" }],
    items: [
      { label: "Source", value: "Service monitoring" },
      { label: "Freshness", value: "18 hours ago" },
      { label: "Validation", value: "Review needed" },
    ],
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <StatusSummary
      aria-label="Source context summary"
      data-testid="storybook-status-summary"
      title="Source context"
      description="StatusSummary accepts native section attributes through Card."
      className="pt-1"
      badges={[
        { label: "Source partial", tone: "warning" },
        { label: "Review needed", tone: "warning" },
      ]}
      items={[
        { label: "Source", value: "Service monitoring" },
        { label: "Source strength", value: "Partial" },
        { label: "Validation status", value: "Review before customer use" },
      ]}
    />
  ),
};