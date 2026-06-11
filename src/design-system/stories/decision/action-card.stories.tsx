import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionCard } from "../../index";

const meta = {
  title: "Decision/ActionCard",
  component: ActionCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    title: "Plan connectivity review",
    owner: "Account owner",
    dueDate: "This week",
    priority: "high",
    status: "todo",
    context: "Follow-up required after partial connectivity alert.",
    assetContext: "Critical Power · UPS Room A",
    sourceContext: "Monitored assets only · Source strength: partial",
    validationStatus: "internal-review-needed",
    proofReadiness: "internal-proof",
    className: "w-160",
  },
} satisfies Meta<typeof ActionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Done: Story = {
  args: {
    priority: "medium",
    status: "done",
    validationStatus: "internally-validated",
    proofReadiness: "customer-ready-proof",
  },
};
