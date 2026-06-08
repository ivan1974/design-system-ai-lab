import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomerDashboard } from "../../../demo/customer-dashboard";

const meta = {
  title: "Demo/Customer Monitoring",
  component: CustomerDashboard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CustomerDashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};