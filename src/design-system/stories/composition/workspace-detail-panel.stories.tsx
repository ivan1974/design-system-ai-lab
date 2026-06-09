import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import {
  AssetQueueRow,
  Button,
  ListContainer,
  MasterDetailLayout,
  PageHeading,
  SectionBlock,
  SectionStack,
  StatusPill,
  Text,
  WorkspaceDetailPanel,
  WorkspaceShell,
} from "../../index";

const meta = {
  title: "Design System/Composition/WorkspaceDetailPanel",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function WorkspaceDetailPanelPreview() {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState<"inline" | "overlay">("inline");

  const detail = (
    <WorkspaceDetailPanel
      open={open}
      onOpenChange={setOpen}
      mode={mode}
      title="SM6 Bus Coupler"
      description="Selected asset detail. The panel can close inline or slide in as an overlay."
      meta={<StatusPill tone="warning">Review needed</StatusPill>}
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="secondary" size="sm">Add note</Button>
          <Button size="sm">Assign validation</Button>
        </div>
      }
    >
      <SectionStack>
        <SectionBlock title="Source context">
          <Text>Monitoring signal is partial and needs expert review before customer use.</Text>
        </SectionBlock>
        <SectionBlock title="Decision">
          <Text>Close the panel to give more room to the central workspace.</Text>
        </SectionBlock>
      </SectionStack>
    </WorkspaceDetailPanel>
  );

  return (
    <WorkspaceShell
      header={
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <PageHeading
            eyebrow="Interactive panel"
            title="Workspace detail panel"
          />
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => setMode(mode === "inline" ? "overlay" : "inline")}>{mode === "inline" ? "Use overlay" : "Use inline"}</Button>
            <Button onClick={() => setOpen(!open)}>{open ? "Close panel" : "Open panel"}</Button>
          </div>
        </div>
      }
    >
      <MasterDetailLayout
        detailMode={mode}
        detailOpen={open}
        onDetailOpenChange={setOpen}
        detailWidth="lg"
        list={
          <SectionBlock title="Asset queue">
            <ListContainer>
              <AssetQueueRow assetName="SM6 Bus Coupler" site="Lyon DC" statusLabel="Review needed" statusTone="warning" priority="high" sourceStrength="partial" selected />
              <AssetQueueRow assetName="Galaxy VX UPS" site="Lyon DC" statusLabel="Warning signal" statusTone="warning" priority="high" sourceStrength="partial" />
              <AssetQueueRow assetName="LV Switchboard A2" site="Grenoble Plant" statusLabel="Monitored" statusTone="success" sourceStrength="strong" />
            </ListContainer>
          </SectionBlock>
        }
        detail={detail}
      />
    </WorkspaceShell>
  );
}

export const Default: Story = {
  render: () => <WorkspaceDetailPanelPreview />,
};
