import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ActionRow,
  Button,
  Card,
  CompactMetric,
  ComponentHierarchy,
  ComponentHierarchyItem,
  DocumentRow,
  EvidenceRow,
  KeyValueList,
  KeyValueRow,
  MetricStrip,
  PriorityPill,
  SectionBlock,
  SectionStack,
  SemanticTag,
  SignalRow,
  SourceStrengthPill,
  StatusPill,
  Timeline,
  TimelineItem,
} from "../../index";

const meta = {
  title: "Components/Compact Workspace Primitives",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const KeyValueListAndRow: Story = {
  render: () => (
    <Card title="KeyValueList / KeyValueRow" description="Use for compact factual attributes, not for interpretation.">
      <KeyValueList columns={2}>
        <KeyValueRow label="Site" value="Lyon DC" />
        <KeyValueRow label="Scope" value="Connected assets only" helper="Visibility is partial." />
        <KeyValueRow label="Plan" value="CompanyName Advanced" />
        <KeyValueRow label="Last update" value="18 hours ago" />
      </KeyValueList>
    </Card>
  ),
};

export const SemanticTagStory: Story = {
  name: "SemanticTag",
  render: () => (
    <Card title="SemanticTag" description="Use for semantic categories or compact qualifiers.">
      <div className="flex flex-wrap gap-2">
        <SemanticTag>MV Switchgear</SemanticTag>
        <SemanticTag tone="primary">CompanyName Advanced</SemanticTag>
        <SemanticTag tone="success">Customer-ready</SemanticTag>
        <SemanticTag tone="warning">Review needed</SemanticTag>
        <SemanticTag tone="danger">Critical scope</SemanticTag>
      </div>
    </Card>
  ),
};

export const StatusPillStory: Story = {
  name: "StatusPill",
  render: () => (
    <Card title="StatusPill" description="Use for visible state. Do not use as evidence by itself.">
      <div className="flex flex-wrap gap-2">
        <StatusPill>Not monitored live</StatusPill>
        <StatusPill tone="primary">In review</StatusPill>
        <StatusPill tone="success">Validated</StatusPill>
        <StatusPill tone="warning">Review needed</StatusPill>
        <StatusPill tone="danger">Critical</StatusPill>
      </div>
    </Card>
  ),
};

export const PriorityPillStory: Story = {
  name: "PriorityPill",
  render: () => (
    <Card title="PriorityPill" description="Use for action or risk priority.">
      <div className="flex flex-wrap gap-2">
        <PriorityPill priority="high" />
        <PriorityPill priority="medium" />
        <PriorityPill priority="low" />
      </div>
    </Card>
  ),
};

export const SourceStrengthPillStory: Story = {
  name: "SourceStrengthPill",
  render: () => (
    <Card title="SourceStrengthPill" description="Use to make trust level explicit without inventing confidence.">
      <div className="flex flex-wrap gap-2">
        <SourceStrengthPill strength="strong" />
        <SourceStrengthPill strength="partial" />
        <SourceStrengthPill strength="needs_review" />
        <SourceStrengthPill strength="internal" />
        <SourceStrengthPill strength="customer_ready" />
        <SourceStrengthPill strength="unknown" />
      </div>
    </Card>
  ),
};

export const CompactMetricStory: Story = {
  name: "CompactMetric",
  render: () => (
    <Card title="CompactMetric" description="Use for secondary signals. Use MetricCard only for primary decision KPIs.">
      <div className="max-w-xs">
        <CompactMetric label="Temperature" value="41°C" helper="Updated 18h ago" tone="warning" />
      </div>
    </Card>
  ),
};

export const MetricStripStory: Story = {
  name: "MetricStrip",
  render: () => (
    <Card title="MetricStrip" description="Use to group compact operational signals.">
      <MetricStrip columns={4}>
        <CompactMetric label="Load" value="82%" tone="warning" />
        <CompactMetric label="Temperature" value="41°C" tone="warning" />
        <CompactMetric label="Pressure" value="Low" tone="danger" />
        <CompactMetric label="Freshness" value="18h" />
      </MetricStrip>
    </Card>
  ),
};

export const EvidenceRowStory: Story = {
  name: "EvidenceRow",
  render: () => (
    <Card title="EvidenceRow" description="Use for factual support, source context and validation state.">
      <EvidenceRow
        label="Service report"
        description="Internal observation requiring expert validation before customer communication."
        source="Service report"
        sourceScope="Asset-level observation"
        sourceStrength="partial"
        freshness="12 days"
        validationStatus="Review needed"
      />
    </Card>
  ),
};

export const SignalRowStory: Story = {
  name: "SignalRow",
  render: () => (
    <Card title="SignalRow" description="Use for observed signals and compact measured states.">
      <SignalRow
        label="Observed signal"
        value="Needs review"
        description="Source scope is partial and should not be presented as full monitoring."
      />
    </Card>
  ),
};

export const ActionRowStory: Story = {
  name: "ActionRow",
  render: () => (
    <Card title="ActionRow" description="Use for owned, dated and prioritized follow-through.">
      <ActionRow
        title="Validate recommendation"
        owner="Account owner"
        dueDate="2026-06-14"
        priority="high"
        status="todo"
        context="Customer communication remains blocked until validation is complete."
        action={<Button size="sm">Open</Button>}
      />
    </Card>
  ),
};

export const TimelineStory: Story = {
  name: "Timeline / TimelineItem",
  render: () => (
    <Card title="Timeline / TimelineItem" description="Use when sequence matters.">
      <Timeline>
        <TimelineItem title="Service visit completed" date="12 days ago" description="Observation documented internally." />
        <TimelineItem title="Recommendation review opened" date="Today" description="Expert validation requested." />
      </Timeline>
    </Card>
  ),
};

export const DocumentRowStory: Story = {
  name: "DocumentRow",
  render: () => (
    <Card title="DocumentRow" description="Use for auditable documents without creating a card for every file.">
      <DocumentRow
        title="Visit report"
        description="Internal document, not customer-ready yet."
        meta="PDF · Internal proof"
        action={<Button variant="secondary" size="sm">Open</Button>}
      />
    </Card>
  ),
};

export const ComponentHierarchyStory: Story = {
  name: "ComponentHierarchy / ComponentHierarchyItem",
  render: () => (
    <Card title="ComponentHierarchy / ComponentHierarchyItem" description="Use for asset/component relationships when hierarchy matters.">
      <ComponentHierarchy>
        <ComponentHierarchyItem name="Parent asset" status={<StatusPill tone="warning">Partial source</StatusPill>}>
          <ComponentHierarchyItem level={1} name="Observed component" status={<StatusPill>Not monitored live</StatusPill>} />
        </ComponentHierarchyItem>
      </ComponentHierarchy>
    </Card>
  ),
};

export const CombinedExample: Story = {
  render: () => (
    <Card title="Combined compact workspace example" description="Compact primitives can be assembled without card saturation.">
      <SectionStack>
        <SectionBlock title="Facts and status">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <SemanticTag>MV Switchgear</SemanticTag>
              <StatusPill tone="warning">Review needed</StatusPill>
              <SourceStrengthPill strength="partial" />
            </div>
            <KeyValueList columns={2}>
              <KeyValueRow label="Site" value="Lyon DC" />
              <KeyValueRow label="Scope" value="Connected assets only" />
            </KeyValueList>
          </div>
        </SectionBlock>

        <SectionBlock title="Signals and action">
          <MetricStrip columns={3}>
            <CompactMetric label="Load" value="82%" tone="warning" />
            <CompactMetric label="Temperature" value="41°C" tone="warning" />
            <CompactMetric label="Freshness" value="18h" />
          </MetricStrip>
          <EvidenceRow label="Service report" description="Internal observation requiring validation." source="Service report" sourceStrength="partial" validationStatus="Review needed" />
          <ActionRow title="Validate recommendation" owner="Account owner" dueDate="2026-06-14" priority="high" status="todo" action={<PriorityPill priority="high" />} />
        </SectionBlock>
      </SectionStack>
    </Card>
  ),
};
