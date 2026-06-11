import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  PageHeader,
  PageHeading,
  SectionHeader,
  SectionHeading,
  Text,
} from "../../index";

const meta = {
  title: "Components/Heading system",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageAndSectionHierarchy: Story = {
  render: () => (
    <div className="max-w-5xl space-y-12">
      <PageHeading
        eyebrow="Customer monitoring"
        title="Review what needs attention next"
        description="Use PageHeading or PageHeader once per screen to establish the strongest visual hierarchy."
        actions={
          <div className="flex gap-3">
            <Button variant="secondary">Export</Button>
            <Button>Create action</Button>
          </div>
        }
      />

      <div className="space-y-8">
        <SectionHeading
          eyebrow="Monitoring"
          title="Priority customer signals"
          description="Use SectionHeading or SectionHeader for major workspace areas. It should be clearly smaller than the page title but stronger than subsection content."
          actions={<Button variant="secondary" size="sm">Filter</Button>}
        />

        <div className="rounded-(--ec-radius-lg) border border-(--ec-color-border-soft) bg-(--ec-color-surface) p-8">
          <Text>
            Content surfaces should feel spacious and readable. Typography should make page, section and local content levels easy to distinguish.
          </Text>
        </div>
      </div>
    </div>
  ),
};

export const WrapperComponents: Story = {
  render: () => (
    <div className="max-w-5xl space-y-12">
      <PageHeader
        eyebrow="Renewal risk review"
        title="Close proof gaps before renewal"
        description="PageHeader is now aligned with PageHeading and supports an eyebrow, description and actions."
        actions={<Button>Create mitigation action</Button>}
      />

      <SectionHeader
        eyebrow="Proof readiness"
        title="Customer-ready evidence"
        description="SectionHeader is now aligned with SectionHeading."
        actions={<Button variant="secondary" size="sm">Review</Button>}
      />
    </div>
  ),
};
