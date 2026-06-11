import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumbs, PageHeading, Surface } from "../../index";

const meta = {
  title: "Components/Breadcrumbs",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Surface padding="lg" className="max-w-4xl space-y-6">
      <Breadcrumbs
        items={[
          { id: "customers", label: "Customers", href: "#" },
          { id: "northstar", label: "Northstar Manufacturing", href: "#" },
          { id: "monitoring", label: "Monitoring review", current: true },
        ]}
      />
      <PageHeading
        eyebrow="Monitoring review"
        title="Review what needs attention next"
        description="Breadcrumbs show location inside a workspace without becoming the main navigation."
      />
    </Surface>
  ),
};
