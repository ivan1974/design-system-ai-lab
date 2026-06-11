import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../..";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {
    size: "md",
    label: "Connectivity issue",
    description: "Include assets with interrupted telemetry.",
    defaultChecked: true,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilterValue: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
    label: "No coverage",
    description: "Show assets without service coverage.",
  },
};
