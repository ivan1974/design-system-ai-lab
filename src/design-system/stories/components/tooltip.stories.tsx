import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tooltip } from "../..";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    content: "Shows the latest known operational state.",
    side: "top",
    align: "center",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContextualHelp: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary" size="sm">Status help</Button>
    </Tooltip>
  ),
};
