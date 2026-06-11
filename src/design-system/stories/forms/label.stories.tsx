import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Label } from "../../index";

const meta = {
  title: "Forms/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { children: "Owner", htmlFor: "owner" },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithInput: Story = { render: () => <div className="w-96 space-y-2"><Label htmlFor="owner">Owner</Label><Input id="owner" placeholder="Owner" /></div> };
