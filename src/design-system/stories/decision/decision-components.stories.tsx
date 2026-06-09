import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ActionCard,
  ActionList,
  ActionRow,
  AlertCard,
  Button,
  Card,
  MetricCard,
  MetricGrid,
  PriorityList,
  RecommendationCard,
  SectionHeader,
  StatusSummary,
} from "../../index";

const meta = {
  title: "Design System/Decision/Decision Components",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ActionCardStory: Story = {
  name: "ActionCard",
  render: () => (
    <ActionCard
      title="Validate recommendation before customer communication"
      owner="CSM"
      dueDate="2026-06-14"
      priority="high"
      status="todo"
      context="Use ActionCard for a highlighted action, not for dense action queues."
      validationStatus="Expert validation needed"
    />
  ),
};

export const ActionRowStory: Story = {
  name: "ActionRow",
  render: () => (
    <Card title="ActionRow" description="Use ActionRow inside dense lists or workspace detail panels.">
      <ActionRow
        title="Assign expert validation"
        owner="CSM"
        dueDate="2026-06-14"
        priority="high"
        status="todo"
        action={<Button size="sm">Open</Button>}
      />
    </Card>
  ),
};

export const AlertCardStory: Story = {
  name: "AlertCard",
  render: () => (
    <AlertCard
      severity="critical"
      title="Critical asset requires review"
      scope="Connected assets only"
      description="Observed signals indicate a critical condition in the monitored scope."
      evidenceSummary="Service report and monitoring signal require expert validation."
      recommendation="Review with service expert before customer-facing communication."
      source="Monitoring and service report"
      sourceScope="Partial asset scope"
      sourceStrength="partial"
      freshness="18 hours"
      validationStatus="Review needed"
      action={<Button size="sm">Assign review</Button>}
    />
  ),
};

export const RecommendationCardStory: Story = {
  name: "RecommendationCard",
  render: () => (
    <RecommendationCard
      title="Recommendation requiring validation"
      recommendation="Plan an expert review before sharing the recommendation externally."
      rationale="The signal is meaningful but the source scope is partial."
      scope="SM6 Bus Coupler"
      priority="high"
      evidenceSummary="Monitoring signal and service visit report point to the same component."
      source="Monitoring and service report"
      sourceScope="Connected assets only"
      sourceStrength="partial"
      freshness="18 hours"
      readiness="needs_review"
      validationStatus="Expert validation needed"
      expectedOutcome="Reduced risk of delayed intervention"
      action={<Button size="sm">Review</Button>}
    />
  ),
};

export const MetricGridStory: Story = {
  name: "MetricGrid / MetricCard",
  render: () => (
    <MetricGrid columns={3}>
      <MetricCard label="Critical risks" value="3" helper="Primary decision KPI" trend="Needs review" trendTone="warning" />
      <MetricCard label="Actions overdue" value="2" helper="Owned follow-through" trend="Blocked" trendTone="danger" />
      <MetricCard label="Validated proof" value="7" helper="Customer-ready proof points" trend="Improving" trendTone="success" />
    </MetricGrid>
  ),
};

export const StatusSummaryStory: Story = {
  name: "StatusSummary",
  render: () => (
    <StatusSummary
      title="Simple status summary"
      description="Use StatusSummary for simple summaries. Prefer compact patterns for workspace details."
      badges={[{ label: "Simple summary", tone: "neutral" }]}
      items={[
        { label: "Scope", value: "Customer account" },
        { label: "Readiness", value: "Internal review needed" },
        { label: "Next step", value: "Assign owner" },
      ]}
    />
  ),
};

export const ListComponentsStory: Story = {
  name: "PriorityList / ActionList / SectionHeader",
  render: () => (
    <div className="space-y-4">
      <SectionHeader title="Decision lists" description="Use list wrappers for grouped decision content." />
      <PriorityList>
        <AlertCard
          severity="warning"
          title="Proof gap"
          description="The expected outcome is not yet customer-ready proof."
          recommendation="Validate evidence before QBR."
        />
      </PriorityList>
      <ActionList>
        <ActionCard
          title="Prepare proof validation"
          owner="CSM"
          dueDate="2026-06-14"
          priority="medium"
          status="in_progress"
        />
      </ActionList>
    </div>
  ),
};
