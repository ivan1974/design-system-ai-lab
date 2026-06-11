import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Heading, PageHeading, SectionHeading, Text } from "../../index";

const meta = {
  title: "Components/Typography",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Hierarchy: Story = {
  render: () => (
    <div className="max-w-4xl space-y-10">
      <PageHeading
        eyebrow="Customer workspace"
        title="Review what needs attention next"
        description="Use PageHeading for the main screen title. It creates the strongest hierarchy and should appear once per screen."
        actions={
          <div className="flex gap-3">
            <Button variant="secondary">Export</Button>
            <Button>Create action</Button>
          </div>
        }
      />

      <SectionHeading
        eyebrow="Monitoring"
        title="Priority customer signals"
        description="Use SectionHeading for major sections that group decision-critical content."
      />

      <div className="space-y-4">
        <Heading level={3} size="subsection">Selected asset context</Heading>
        <Text>
          Use Text for readable body copy and descriptions. The default body text is larger than caption text and should carry supporting context.
        </Text>
        <Text variant="muted">
          Use muted text for secondary or less important supporting information.
        </Text>
        <Text variant="caption" className="font-medium uppercase tracking-[0.08em]">
          Caption metadata
        </Text>
      </div>
    </div>
  ),
};

export const HeadingSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <Heading level={1} size="page">Page heading</Heading>
      <Heading level={2} size="section">Section heading</Heading>
      <Heading level={3} size="subsection">Subsection heading</Heading>
    </div>
  ),
};

export const TextVariants: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <Text>Body text explains the context required to make a decision.</Text>
      <Text variant="muted">Muted text carries secondary metadata or lower-emphasis content.</Text>
      <Text variant="caption">Caption text is for compact metadata, timestamps and small labels.</Text>
    </div>
  ),
};
