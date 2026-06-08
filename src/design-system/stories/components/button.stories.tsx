import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../components/button";

const meta = {
  title: "Design System/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Create action",
    variant: "primary",
    size: "md",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Create action",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Review plan",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Cancel",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    children: "Remove action",
    variant: "danger",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Action unavailable",
    disabled: true,
  },
};

export const MakeReadyTrigger: Story = {
  name: "Make-ready trigger",
  render: () => (
    <div className="space-y-3">
      <Button>Create action</Button>
      <p className="max-w-md text-sm text-(--ec-color-text-secondary)">
        Button supports ref forwarding and can be used directly as a Radix
        trigger through Dialog.
      </p>
    </div>
  ),
};