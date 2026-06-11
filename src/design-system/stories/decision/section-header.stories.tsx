import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, SectionHeader } from "../../index";

const meta = {
  title: "Decision/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    className: { control: "text" },
  },
  args: {
    title: "Priority alerts",
    description:
      "Risks and blockers requiring customer or service team action.",
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAction: Story = {
  args: {
    title: "Recommended actions",
    description:
      "Next steps to reduce customer risk and clarify ownership.",
    actions: <Button variant="secondary">Review plan</Button>,
  },
};

export const WithMultipleActions: Story = {
  args: {
    title: "Renewal risk review",
    description:
      "Prepare the renewal discussion with value proof and mitigation actions.",
    actions: (
      <>
        <Button variant="secondary">Export summary</Button>
        <Button>Create action</Button>
      </>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Service value proof",
    description: undefined,
    actions: undefined,
  },
};

export const CustomerMonitoringSection: Story = {
  args: {
    title: "Customer situation",
    description:
      "Current account context, service coverage and monitoring status.",
    actions: <Button variant="secondary">Open details</Button>,
    className: "max-w-5xl",
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Custom section header width",
    description:
      "SectionHeader supports className for layout composition.",
    actions: <Button variant="secondary">Review</Button>,
    className: "max-w-4xl",
  },
};

export const WithNativeHeaderProps: Story = {
  render: () => (
    <SectionHeader
      aria-label="Priority alerts section header"
      data-testid="storybook-section-header"
      title="Priority alerts"
      description="SectionHeader accepts native header attributes."
      actions={<Button variant="secondary">Review alerts</Button>}
      className="max-w-5xl"
    />
  ),
};

export const AssetVisibilitySection: Story = {
  args: {
    title: "Asset visibility gaps",
    description:
      "Risks that may limit confidence in the current service status.",
    actions: <Button variant="secondary">Review source evidence</Button>,
    className: "max-w-5xl",
  },
};

export const ValueProofSection: Story = {
  args: {
    title: "Customer-ready proof blockers",
    description:
      "Proof gaps that may weaken the renewal discussion.",
    actions: <Button variant="secondary">Review proof gaps</Button>,
    className: "max-w-5xl",
  },
};

export const HumanValidationSection: Story = {
  args: {
    title: "Human validation actions",
    description:
      "Actions that require expert review before customer use.",
    actions: <Button variant="secondary">Validate with expert</Button>,
    className: "max-w-5xl",
  },
};