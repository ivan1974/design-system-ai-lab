import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlertCard, Button, PriorityList } from "../../index";

const meta = {
  title: "Decision/PriorityList",
  component: PriorityList,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    title: "Priority alerts",
    description: "Risks and blockers requiring source review or customer follow-up.",
    actions: <Button size="sm">Review priorities</Button>,
    children: (
      <>
        <AlertCard
          severity="critical"
          title="Critical equipment no longer monitored"
          scope="Critical Power · UPS Room A"
          description="Visibility is partial before the next service review."
          recommendation="Review affected assets and plan a recovery action."
          evidenceSummary="17 of 25 known assets are currently monitored."
          sourceScope="Monitored assets only"
          sourceStrength="partial"
          validationStatus="internal-review-needed"
        />
        <AlertCard
          severity="warning"
          title="Proof requires review"
          description="The evidence is available but not yet validated."
          recommendation="Validate the source and ownership before sharing externally."
          sourceStrength="single-source"
          validationStatus="not-reviewed"
        />
      </>
    ),
  },
} satisfies Meta<typeof PriorityList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
