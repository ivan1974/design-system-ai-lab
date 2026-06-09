import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Button, PanelBody, PanelFooter, PanelHeader, SlideOverPanel, Text } from "../../index";

const meta = {
  title: "Design System/Components/SlideOverPanel",
  component: SlideOverPanel,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SlideOverPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

function SlideOverPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen p-10">
      <Button onClick={() => setOpen(true)}>Open slide-over</Button>
      <SlideOverPanel open={open} onOpenChange={setOpen} size="lg" modal>
        <div className="flex h-full flex-col">
          <PanelHeader
            title="Review selected item"
            description="This panel slides from the right and preserves the workspace behind it."
            onClose={() => setOpen(false)}
          />
          <PanelBody className="flex-1 overflow-y-auto">
            <Text>Use SlideOverPanel for overlay detail review on constrained screens or optional side inspection.</Text>
          </PanelBody>
          <PanelFooter>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button>Confirm</Button>
            </div>
          </PanelFooter>
        </div>
      </SlideOverPanel>
    </div>
  );
}

export const Default: Story = {
  render: () => <SlideOverPreview />,
};
