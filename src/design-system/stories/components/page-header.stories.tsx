import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, PageHeader } from "../../index";

const meta = {
  title: "Components/PageHeader",
  component: PageHeader,
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
    title: "Customer monitoring",
    description:
      "Understand the customer situation, identify priority risks and decide next actions.",
    actions: <Button>Review recommendations</Button>,
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMultipleActions: Story = {
  args: {
    title: "Renewal risk review",
    description:
      "Prepare the renewal discussion with value proof, open risks and recommended actions.",
    actions: (
      <>
        <Button variant="secondary">Review proof gap</Button>
        <Button>Prepare value summary</Button>
      </>
    ),
  },
};

export const AssetVisibilityReview: Story = {
  args: {
    title: "Asset visibility review",
    description:
      "Review asset scope, connectivity gaps and source strength before planning follow-up actions.",
    actions: <Button>Review asset recommendation</Button>,
  },
};

export const ProofGapReview: Story = {
  args: {
    title: "Proof gap review",
    description:
      "Check source evidence and proof gaps before preparing the customer-ready value summary.",
    actions: <Button variant="secondary">Review proof gap</Button>,
  },
};

export const WithoutActions: Story = {
  args: {
    title: "Service value proof",
    description:
      "Review service outcomes, internal proof and customer-ready evidence for the period.",
    actions: undefined,
  },
};

export const WithResponsiveActions: Story = {
  args: {
    title: "Customer-ready value preparation",
    description:
      "Review proof gaps, source evidence and recommended follow-up actions before the QBR discussion.",
    actions: (
      <>
        <Button variant="secondary">Review source evidence</Button>
        <Button variant="secondary">Review proof gap</Button>
        <Button>Prepare value summary</Button>
      </>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Custom header width",
    description:
      "PageHeader supports className for layout composition in generated screens.",
    actions: <Button variant="secondary">Review</Button>,
    className: "max-w-5xl",
  },
};

export const WithNativeHeaderProps: Story = {
  render: () => (
    <PageHeader
      aria-label="Customer monitoring page header"
      data-testid="storybook-page-header"
      title="Customer monitoring"
      description="PageHeader accepts native header attributes for accessibility and testing."
      actions={<Button>Review recommendations</Button>}
    />
  ),
};