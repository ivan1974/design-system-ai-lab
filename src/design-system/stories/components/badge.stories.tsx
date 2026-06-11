import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../../index";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { tone: "primary", children: "Active plan" },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
