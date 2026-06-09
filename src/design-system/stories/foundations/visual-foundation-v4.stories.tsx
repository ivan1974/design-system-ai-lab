import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import {
  Button,
  DetailPanel,
  DetailPanelBody,
  DetailPanelHeader,
  FilterBar,
  Heading,
  MasterDetailLayout,
  SectionBlock,
  SectionStack,
  SignalRow,
  StatusPill,
  Text,
  WorkspaceShell,
} from "../../index";

const meta = {
  title: "Foundations/Visual foundation v4",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const rows = [
  {
    id: "northstar",
    label: "Northstar Manufacturing",
    description: "EcoCare Advanced · QBR in 6 days · 54% connected",
    status: "Critical monitoring gap",
    tone: "danger" as const,
  },
  {
    id: "greenfield",
    label: "Greenfield Industries",
    description: "EcoCare Standard · Monthly review in 12 days · 68% connected",
    status: "Proof not ready",
    tone: "warning" as const,
  },
  {
    id: "summit",
    label: "Summit Energy Group",
    description: "EcoCare Advanced · QBR in 35 days · 92% connected",
    status: "Monitoring healthy",
    tone: "success" as const,
  },
];

function VisualFoundationPreview() {
  const [selectedId, setSelectedId] = useState(rows[0].id);
  const selected = rows.find((row) => row.id === selectedId) ?? rows[0];

  return (
    <WorkspaceShell
      header={
        <div className="space-y-2">
          <Text variant="caption" className="font-medium text-(--ec-color-primary)">v0.4 visual foundation</Text>
          <Heading level={1} size="page">Modern operational workspace surfaces</Heading>
          <Text className="max-w-2xl">
            Soft workspace background, raised controls, subtle selected rows and a focused detail panel.
          </Text>
        </div>
      }
      controls={
        <FilterBar
          title="Monitoring scope"
          description="Customers sorted by decision priority and next customer touchpoint."
          resultCount="3 customers shown"
          actions={
            <div className="flex gap-2">
              <Button variant="secondary">Export</Button>
              <Button>Add action</Button>
            </div>
          }
        />
      }
    >
      <MasterDetailLayout
        detailWidth="lg"
        list={
          <SectionBlock title="Customer queue" description="Hover and selected states are now part of the row primitive.">
            {rows.map((row) => (
              <SignalRow
                key={row.id}
                label={row.label}
                description={row.description}
                value={<StatusPill tone={row.tone}>{row.status}</StatusPill>}
                interactive
                selected={selectedId === row.id}
                onClick={() => setSelectedId(row.id)}
              />
            ))}
          </SectionBlock>
        }
        detail={
          <DetailPanel>
            <DetailPanelHeader
              title={selected.label}
              description={selected.description}
              meta={<StatusPill tone={selected.tone}>{selected.status}</StatusPill>}
              actions={<Button variant="secondary" size="sm">Close later</Button>}
            />
            <DetailPanelBody>
              <SectionStack gap="md">
                <SectionBlock title="Visual intent">
                  <Text>
                    The panel should feel elevated and focused without heavy glassmorphism. The green primary color is reserved for confidence, action and selected states.
                  </Text>
                </SectionBlock>
                <SectionBlock title="Next action">
                  <Button>Review selected customer</Button>
                </SectionBlock>
              </SectionStack>
            </DetailPanelBody>
          </DetailPanel>
        }
      />
    </WorkspaceShell>
  );
}

export const Default: Story = {
  render: () => <VisualFoundationPreview />,
};
