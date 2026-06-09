import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Surface, Tabs, Text } from "../../index";

const meta = {
  title: "Design System/Components/Tabs",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const tabItems = [
  { id: "overview", label: "Overview" },
  { id: "coverage", label: "Coverage" },
  { id: "evidence", label: "Evidence", count: 2 },
  { id: "actions", label: "Actions", count: 4 },
];

function TabsPreview() {
  const [value, setValue] = useState("overview");

  return (
    <Surface className="max-w-3xl space-y-6">
      <Tabs tabs={tabItems} value={value} onValueChange={setValue} ariaLabel="Example tabs" />
      <Text>Selected tab: {value}</Text>
      <Tabs tabs={tabItems} value={value} onValueChange={setValue} variant="contained" ariaLabel="Contained tabs" />
    </Surface>
  );
}

export const Default: Story = {
  render: () => <TabsPreview />,
};
