import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, PanelHeader, StatusPill } from "../../index";

const meta = {
  title: "Components/PanelHeader",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-w-2xl overflow-hidden rounded-(--ec-radius-lg) border border-(--ec-color-border-soft)">
      <PanelHeader
        title="Main switchboard"
        description="Selected item detail. Source limits appear before interpretation."
        meta={<StatusPill tone="warning">Review needed</StatusPill>}
        actions={<Button variant="secondary" size="sm">Open action</Button>}
      />
    </div>
  ),
};
