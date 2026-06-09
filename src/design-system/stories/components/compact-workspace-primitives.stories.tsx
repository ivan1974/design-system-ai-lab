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
  title: "Design System/Components/Compact Workspace Primitives",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CompactWorkspacePrimitives: Story = {
  render: () => (
    <Card title="Compact workspace primitives" description="Facts, statuses, evidence, actions and history without card saturation.">
      <SectionStack>
        <SectionBlock title="Facts and status">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <SemanticTag>MV Switchgear</SemanticTag>
              <SemanticTag tone="primary">EcoCare Advanced</SemanticTag>
              <StatusPill tone="warning">Review needed</StatusPill>
              <SourceStrengthPill strength="partial" />
            </div>
            <KeyValueList columns={2}>
              <KeyValueRow label="Site" value="Lyon DC" />
              <KeyValueRow label="Scope" value="Connected assets only" />
            </KeyValueList>
          </div>
        </SectionBlock>

        <SectionBlock title="Signals and evidence">
          <MetricStrip columns={3}>
            <CompactMetric label="Load" value="82%" tone="warning" />
            <CompactMetric label="Temperature" value="41°C" tone="warning" />
            <CompactMetric label="Freshness" value="18h" />
          </MetricStrip>
          <SignalRow label="Observed signal" value="Needs review" description="Source scope is partial." />
          <EvidenceRow label="Service report" description="Internal observation requiring validation." source="Service report" sourceStrength="partial" validationStatus="Review needed" />
        </SectionBlock>

        <SectionBlock title="Hierarchy, history and action">
          <ComponentHierarchy>
            <ComponentHierarchyItem name="Parent asset" status={<StatusPill tone="warning">Partial source</StatusPill>}>
              <ComponentHierarchyItem level={1} name="Observed component" status={<StatusPill>Not live monitored</StatusPill>} />
            </ComponentHierarchyItem>
          </ComponentHierarchy>
          <Timeline>
            <TimelineItem title="Service visit" date="12 days ago" description="Observation documented internally." />
          </Timeline>
          <DocumentRow title="Visit report" meta="Internal document" action={<Button variant="secondary" size="sm">Open</Button>} />
          <ActionRow title="Validate recommendation" owner="CSM" dueDate="2026-06-14" priority="high" status="todo" action={<PriorityPill priority="high" />} />
        </SectionBlock>
      </SectionStack>
    </Card>
  ),
};
