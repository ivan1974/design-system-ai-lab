import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, PanelFooter, Text } from "../../index";

const meta = {
  title: "Design System/Components/PanelFooter",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-w-2xl overflow-hidden rounded-(--ec-radius-lg) border border-(--ec-color-border-soft)">
      <PanelFooter>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Text variant="muted">Next action: assign validation owner.</Text>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Add note</Button>
            <Button size="sm">Assign</Button>
          </div>
        </div>
      </PanelFooter>
    </div>
  ),
};
