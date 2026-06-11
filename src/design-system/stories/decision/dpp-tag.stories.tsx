import type { Meta, StoryObj } from "@storybook/react-vite";

import { DppTag } from "../../decision/dpp-tag";

const meta = {
  title: "Decision/DppTag",
  component: DppTag,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "select",
      options: ["dpp-enabled", "no-dpp"],
    },
  },
  args: { value: "dpp-enabled" },
} satisfies Meta<typeof DppTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {};

export const NoDpp: Story = {
  args: { value: "no-dpp" },
};
