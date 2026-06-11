import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, Input } from "../../index";

const meta = {
  title: "Forms/Field",
  component: Field,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    label: "Owner",
    htmlFor: "owner",
    helper: "Assign a clear owner.",
    children: <Input id="owner" placeholder="Owner" />,
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithInput: Story = {};
