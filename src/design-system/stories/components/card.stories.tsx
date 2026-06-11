import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Card } from "../../index";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    title: "Context summary",
    description: "A compact content container.",
    children: <Badge tone="primary">Active</Badge>,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
