import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../components/button";
import { SidePanel } from "../../composition/side-panel";

const meta = {
  title: "Composition/SidePanel",
  component: SidePanel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
    closeOnOverlay: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
    lockBackgroundScroll: { control: "boolean" },
  },
  args: {
    open: true,
    title: "Asset detail",
    description: "Review the selected operational object without losing list context.",
    closeOnOverlay: true,
    closeOnEscape: true,
    lockBackgroundScroll: true,
    onClose: () => undefined,
    children: null,
  },
} satisfies Meta<typeof SidePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Analysis: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open ?? true);

    return (
      <div className="min-h-screen bg-(--ec-color-surface-muted) p-8">
        <Button onClick={() => setOpen(true)}>Open panel</Button>
        <SidePanel
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          footer={<Button className="w-full">Schedule service</Button>}
        >
          <div className="space-y-4 text-sm text-(--ec-color-text-secondary)">
            <p>Signal: active alert requires review.</p>
            <p>Decision: schedule a service check or contact an expert.</p>
            <p>Evidence: source, freshness and validation remain visible in detail.</p>
          </div>
        </SidePanel>
      </div>
    );
  },
};
