import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../../index";

const meta = {
  title: "Design System/Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "success", "warning", "danger", "primary"],
    },
    children: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
  args: {
    tone: "primary",
    children: "Active plan",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="danger">Danger</Badge>
      <Badge tone="primary">Primary</Badge>
    </div>
  ),
};

export const CustomerStatusExamples: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge tone="primary">Active plan</Badge>
      <Badge tone="danger">Critical risk</Badge>
      <Badge tone="warning">Connectivity partial</Badge>
      <Badge tone="neutral">Renewal in 62 days</Badge>
      <Badge tone="success">Actions completed</Badge>
    </div>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    tone: "warning",
    children: "Needs review",
    className: "uppercase tracking-tight",
  },
};

export const WithNativeSpanProps: Story = {
  render: () => (
    <Badge
      aria-label="Customer status: active plan"
      data-testid="storybook-badge"
      tone="primary"
    >
      Active plan
    </Badge>
  ),
};