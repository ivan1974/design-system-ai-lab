import type { Meta, StoryObj } from "@storybook/react-vite";
import CustomerMonitoring from "../../../../guidelines/examples/golden/customer-monitoring.App";

const meta = {
  title: "Design System/Golden Examples/Customer Monitoring",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Screen: Story = {
  render: () => <CustomerMonitoring />,
};
