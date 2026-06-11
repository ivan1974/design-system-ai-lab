import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionCard, ActionList, Button } from "../../index";

const meta = {
  title: "Decision/ActionList",
  component: ActionList,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    title: "Recommended actions",
    description: "Next steps to reduce risk, clarify ownership and close visibility gaps.",
    actions: <Button size="sm">Create action</Button>,
    children: (
      <>
        <ActionCard
          title="Plan connectivity review"
          owner="Account owner"
          dueDate="This week"
          priority="high"
          status="todo"
          context="Closes a partial visibility gap before review."
          assetContext="Critical Power · UPS Room A"
          validationStatus="internal-review-needed"
          proofReadiness="internal-proof"
        />
        <ActionCard
          title="Prepare value proof summary"
          owner="Service owner"
          dueDate="Before next review"
          priority="medium"
          status="blocked"
          context="Customer-ready proof is not available yet."
          validationStatus="blocked"
          proofReadiness="not-available"
        />
      </>
    ),
  },
} satisfies Meta<typeof ActionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
