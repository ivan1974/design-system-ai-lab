import type { Meta, StoryObj } from "@storybook/react-vite";

import { StatusWithIcon } from "../../decision/status-with-icon";

const meta = {
  title: "Decision/StatusWithIcon",
  component: StatusWithIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["live-telemetry", "active-alert", "connectivity-issue", "last-service-visit", "no-record"],
    },
    date: { control: "text" },
  },
  args: {
    status: "live-telemetry",
    date: "Updated 2 min ago",
  },
} satisfies Meta<typeof StatusWithIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LiveTelemetry: Story = {};

export const AllStatuses: Story = {
  render: () => (
    <div className="space-y-3">
      <StatusWithIcon status="live-telemetry" date="Updated 2 min ago" />
      <StatusWithIcon status="active-alert" date="Today" />
      <StatusWithIcon status="connectivity-issue" date="12 min ago" />
      <StatusWithIcon status="last-service-visit" date="May 2026" />
      <StatusWithIcon status="no-record" date="No date" />
    </div>
  ),
};
