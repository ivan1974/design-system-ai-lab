import type { Meta, StoryObj } from "@storybook/react-vite";
import { ValueProofCard } from "../../index";

const meta = {
  title: "Patterns/ValueProofCard",
  component: ValueProofCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    period: "Last 90 days",
    customerObjective: "Improve service visibility before renewal",
    proofStatus: "Summary incomplete",
    proofReadiness: "internal-proof",
    validationStatus: "internal-review-needed",
    sourceContext: "Closed service actions from the last 90 days",
    expectedOutcome: "Reduced renewal risk after proof consolidation",
    badges: [
      { label: "Proof review needed", tone: "warning" },
      { label: "Internal proof", tone: "warning" },
    ],
    proofPoints: [
      { label: "Closed actions", value: "12 actions closed" },
      { label: "Open actions", value: "3 actions still open" },
    ],
  },
} satisfies Meta<typeof ValueProofCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InternalProof: Story = {};

export const CustomerReadyProof: Story = {
  args: {
    proofReadiness: "customer-ready-proof",
    validationStatus: "customer-ready",
  },
};
