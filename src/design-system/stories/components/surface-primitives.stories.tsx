import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Divider,
  Heading,
  ListContainer,
  SignalRow,
  Surface,
  Text,
  Toolbar,
  Well,
} from "../../index";

const meta = {
  title: "Components/Surface primitives",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Surfaces: Story = {
  render: () => (
    <div className="grid max-w-5xl gap-6 md:grid-cols-2">
      <Surface variant="plain">
        <Heading level={3} size="subsection">Plain surface</Heading>
        <Text>Use for content that does not need a visible boundary.</Text>
      </Surface>
      <Surface variant="bordered">
        <Heading level={3} size="subsection">Bordered surface</Heading>
        <Text>Use as the default structured container.</Text>
      </Surface>
      <Surface variant="muted">
        <Heading level={3} size="subsection">Muted surface</Heading>
        <Text>Use for secondary context or quiet grouping.</Text>
      </Surface>
      <Surface variant="selected">
        <Heading level={3} size="subsection">Selected surface</Heading>
        <Text>Use for selected context or meaningful emphasis.</Text>
      </Surface>
    </div>
  ),
};

export const Wells: Story = {
  render: () => (
    <div className="grid max-w-5xl gap-4 md:grid-cols-2">
      <Well tone="neutral"><Text>Neutral well for quiet context.</Text></Well>
      <Well tone="primary"><Text>Primary well for selected or confidence context.</Text></Well>
      <Well tone="warning"><Text>Warning well for review-needed context.</Text></Well>
      <Well tone="danger"><Text>Danger well for blocker context.</Text></Well>
    </div>
  ),
};

export const ListsAndToolbar: Story = {
  render: () => (
    <div className="max-w-5xl space-y-8">
      <Toolbar
        leading={
          <div>
            <Heading level={2} size="section">Customer queue</Heading>
            <Text>Toolbar groups scope controls without becoming a dashboard card.</Text>
          </div>
        }
        trailing={
          <>
            <Button variant="secondary">Export</Button>
            <Button>Create action</Button>
          </>
        }
      />

      <ListContainer>
        <SignalRow label="Northstar Manufacturing" description="EcoCare Advanced · QBR in 6 days" value="Review needed" />
        <SignalRow label="Greenfield Industries" description="Monthly review in 12 days" value="Proof not ready" />
        <SignalRow label="Summit Energy Group" description="Monitoring healthy" value="Current" />
      </ListContainer>

      <Surface>
        <Heading level={3} size="subsection">Divider</Heading>
        <Text>Use dividers to separate related content without adding shadows.</Text>
        <div className="py-4"><Divider /></div>
        <Text variant="muted">Secondary content continues after a soft divider.</Text>
      </Surface>
    </div>
  ),
};
