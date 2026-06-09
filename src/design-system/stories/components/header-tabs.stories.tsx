import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { HeaderTabs, PageHeading, Surface } from "../../index";

const meta = {
  title: "Design System/Components/HeaderTabs",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function HeaderTabsPreview() {
  const [value, setValue] = useState("monitoring");

  return (
    <Surface padding="lg" className="max-w-5xl space-y-8">
      <PageHeading
        eyebrow="Customer monitoring"
        title="Review what needs attention next"
        description="HeaderTabs sit below a page or section header when the tabs switch major content views."
      />
      <HeaderTabs
        tabs={[
          { id: "monitoring", label: "Monitoring" },
          { id: "recommendations", label: "Recommendations", count: 3 },
          { id: "proof", label: "Proof readiness" },
          { id: "actions", label: "Actions", count: 4 },
        ]}
        value={value}
        onValueChange={setValue}
      />
    </Surface>
  );
}

export const Default: Story = {
  render: () => <HeaderTabsPreview />,
};
