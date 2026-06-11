import type { Meta, StoryObj } from "@storybook/react-vite";

import { HealthPill } from "../../decision/health-pill";

const meta = {
  title: "Design System/Decision/HealthPill",
  component: HealthPill,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    health: {
      control: "select",
      options: ["critical", "poor", "fair", "good", "excellent", "unknown"],
    },
  },
  args: { health: "good" },
} satisfies Meta<typeof HealthPill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Good: Story = {};

export const Unknown: Story = {
  args: { health: "unknown" },
};
