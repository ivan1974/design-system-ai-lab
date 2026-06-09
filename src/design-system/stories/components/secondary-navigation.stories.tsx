import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { SecondaryNavigation, Surface, Text } from "../../index";

const meta = {
  title: "Design System/Components/SecondaryNavigation",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function SecondaryNavigationPreview() {
  const [active, setActive] = useState("overview");

  return (
    <Surface className="max-w-4xl space-y-5">
      <SecondaryNavigation
        items={[
          { id: "overview", label: "Overview", active: active === "overview" },
          { id: "assets", label: "Assets", count: 8, active: active === "assets" },
          { id: "risks", label: "Risks", count: 3, active: active === "risks" },
          { id: "actions", label: "Actions", count: 4, active: active === "actions" },
        ]}
        onItemSelect={setActive}
      />
      <Text>Selected navigation item: {active}</Text>
    </Surface>
  );
}

export const Default: Story = {
  render: () => <SecondaryNavigationPreview />,
};
