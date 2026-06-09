import type { Meta, StoryObj } from "@storybook/react-vite";

import { PanelClose, Surface, Text } from "../../index";

const meta = {
  title: "Design System/Components/PanelClose",
  component: PanelClose,
  parameters: { layout: "padded" },
} satisfies Meta<typeof PanelClose>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Surface className="flex max-w-md items-center justify-between">
      <Text>Close action for panels and slide-over surfaces.</Text>
      <PanelClose />
    </Surface>
  ),
};
