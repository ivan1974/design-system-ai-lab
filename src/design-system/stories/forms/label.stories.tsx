import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Label } from "../../index";

const meta = {
  title: "Design System/Forms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    htmlFor: { control: "text" },
    className: { control: "text" },
  },
  args: {
    children: "Owner",
    htmlFor: "owner",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <Label htmlFor="owner">Owner</Label>
      <Input id="owner" placeholder="CSM" />
    </div>
  ),
};

export const CustomerActionLabels: Story = {
  render: () => (
    <div className="w-120 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="action-title">Action title</Label>
        <Input
          id="action-title"
          placeholder="Plan connectivity review with the customer"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="action-owner">Owner</Label>
        <Input id="action-owner" placeholder="CSM" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="action-due-date">Due date</Label>
        <Input id="action-due-date" type="date" />
      </div>
    </div>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    children: "Uppercase label",
    htmlFor: "custom-label",
    className: "uppercase tracking-tight",
  },
};

export const WithNativeLabelProps: Story = {
  render: () => (
    <Label
      htmlFor="native-label-example"
      aria-label="Customer action owner label"
      data-testid="storybook-label"
    >
      Owner
    </Label>
  ),
};