import type { Meta, StoryObj } from "@storybook/react-vite";

import { ConnectivityLabel } from "../../decision/connectivity-label";

const meta = {
  title: "Design System/Decision/ConnectivityLabel",
  component: ConnectivityLabel,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "select",
      options: ["connected", "not-connected", "unknown"],
    },
  },
  args: { value: "connected" },
} satisfies Meta<typeof ConnectivityLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Connected: Story = {};

export const Unknown: Story = {
  args: { value: "unknown" },
};
