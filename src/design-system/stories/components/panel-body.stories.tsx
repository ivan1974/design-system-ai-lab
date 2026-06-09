import type { Meta, StoryObj } from "@storybook/react-vite";

import { PanelBody, SectionBlock, Text } from "../../index";

const meta = {
  title: "Design System/Components/PanelBody",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-w-2xl overflow-hidden rounded-(--ec-radius-lg) border border-(--ec-color-border-soft)">
      <PanelBody>
        <SectionBlock title="Evidence">
          <Text>PanelBody provides the spacious scrollable content area for detail review.</Text>
        </SectionBlock>
        <SectionBlock title="Next decision">
          <Text>Use it inside WorkspaceDetailPanel or SlideOverPanel content.</Text>
        </SectionBlock>
      </PanelBody>
    </div>
  ),
};
