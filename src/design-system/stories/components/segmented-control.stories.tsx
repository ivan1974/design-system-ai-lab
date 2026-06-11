import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SegmentedControl, Surface, Text } from "../../index";

const meta = {
  title: "Components/SegmentedControl",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function SegmentedControlPreview() {
  const [value, setValue] = useState("open");

  return (
    <Surface className="max-w-3xl space-y-5">
      <SegmentedControl
        items={[
          { id: "open", label: "Open" },
          { id: "closed", label: "Closed" },
          { id: "all", label: "All" },
        ]}
        value={value}
        onValueChange={setValue}
        ariaLabel="Action status"
      />
      <Text>Selected segment: {value}</Text>
    </Surface>
  );
}

export const Default: Story = {
  render: () => <SegmentedControlPreview />,
};
