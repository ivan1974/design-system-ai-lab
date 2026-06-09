import type { Meta, StoryObj } from "@storybook/react-vite";
import InstalledBaseExplorer from "../../../../guidelines/examples/golden/installed-base-explorer.App";

const meta = {
  title: "Design System/Golden Examples/Installed Base Explorer",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Screen: Story = {
  render: () => <InstalledBaseExplorer />,
};
