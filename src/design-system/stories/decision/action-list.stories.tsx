import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionCard, ActionList, Button } from "../../index";

const meta = {
  title: "Decision/ActionList",
  component: ActionList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    className: { control: "text" },
  },
  args: {
    title: "Recommended actions",
    description:
      "Next steps to reduce customer risk, clarify ownership and close visibility gaps.",
    children: (
      <>
        <ActionCard
          title="Plan connectivity review with the customer"
          owner="Account owner"
          dueDate="This week"
          priority="high"
          status="todo"
          context="Closes a partial connectivity visibility gap before the customer review."
          assetContext="Critical Power > UPS Room A"
          validationStatus="Review before customer use"
        />

        <ActionCard
          title="Prepare customer-ready value proof summary"
          owner="Account owner"
          dueDate="Before next QBR"
          priority="medium"
          status="blocked"
          proofContext="Internal proof, not customer-ready"
          validationStatus="Customer-ready proof missing"
        />

        <ActionCard
          title="Review customer portal recommendations"
          owner="Digital Support"
          dueDate="Within 10 business days"
          priority="low"
          status="todo"
          sourceContext="Customer portal activity and recommendation review log"
        />
      </>
    ),
  },
} satisfies Meta<typeof ActionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHeaderAction: Story = {
  args: {
    title: "Action plan",
    description:
      "Actions requiring ownership, source review or validation before the next customer touchpoint.",
    actions: (
      <Button variant="secondary">
        Review action plan
      </Button>
    ),
    children: (
      <>
        <ActionCard
          title="Assign owners to overdue actions"
          owner="Service Manager"
          dueDate="Tomorrow"
          priority="high"
          status="todo"
          context="Ownership gap must be closed before customer follow-up."
          validationStatus="Owner update needed"
        />

        <ActionCard
          title="Share updated recovery plan with customer"
          owner="Account owner"
          dueDate="This week"
          priority="high"
          status="in_progress"
          assetContext="Critical Power > UPS Room A"
          validationStatus="Review before customer use"
        />
      </>
    ),
  },
};

export const AssetVisibilityRecoveryActions: Story = {
  args: {
    title: "Asset visibility recovery actions",
    description:
      "Actions to close connectivity and validation gaps before the next customer discussion.",
    actions: (
      <Button variant="secondary">
        Review source evidence
      </Button>
    ),
    className: "max-w-5xl",
    children: (
      <>
        <ActionCard
          title="Review affected assets before customer discussion"
          owner="Account owner"
          dueDate="This week"
          priority="high"
          status="todo"
          context="Follow-up required after partial connectivity alert."
          assetContext="Critical Power > UPS Room A"
          sourceContext="CompanyName monitored assets only · Source strength: partial"
          validationStatus="Review before customer use"
        />

        <ActionCard
          title="Assign owner for partial connectivity recovery"
          owner="Service Manager"
          dueDate="Today"
          priority="high"
          status="todo"
          assetContext="Critical Power > UPS Room A"
          validationStatus="Owner needed before customer follow-up"
        />

        <ActionCard
          title="Confirm network configuration with customer IT"
          owner="Digital Support"
          dueDate="This week"
          priority="medium"
          status="todo"
          context="Connectivity loss may be customer-network related."
          sourceContext="Gateway logs · Source strength: partial"
        />
      </>
    ),
  },
};

export const ProofGapClosureActions: Story = {
  args: {
    title: "Proof gap closure actions",
    description:
      "Actions needed before preparing customer-ready value evidence.",
    actions: (
      <Button variant="secondary">
        Review proof gaps
      </Button>
    ),
    className: "max-w-5xl",
    children: (
      <>
        <ActionCard
          title="Create proof follow-up before renewal meeting"
          owner="Account owner"
          dueDate="Before renewal review"
          priority="high"
          status="blocked"
          context="The recommendation has expected value but no completed action evidence yet."
          proofContext="Expected outcome, not proven"
          validationStatus="Customer-ready proof missing"
        />

        <ActionCard
          title="Confirm source evidence before customer-ready summary"
          owner="Account owner"
          dueDate="Before next customer review"
          priority="medium"
          status="todo"
          sourceContext="Closed service actions · Source strength: partial"
          proofContext="Internal proof, not customer-ready"
          validationStatus="Review needed"
        />

        <ActionCard
          title="Prepare customer-ready value proof summary"
          owner="Account owner"
          dueDate="Before QBR"
          priority="medium"
          status="in_progress"
          proofContext="Internal proof needs customer-ready synthesis"
          validationStatus="Customer-ready preparation in progress"
        />
      </>
    ),
  },
};

export const HumanValidationActions: Story = {
  args: {
    title: "Human validation actions",
    description:
      "Actions that require expert review before customer use.",
    actions: (
      <Button variant="secondary">
        Validate with expert
      </Button>
    ),
    className: "max-w-5xl",
    children: (
      <>
        <ActionCard
          title="Validate asset recommendation with CompanyName expert"
          owner="Service Manager"
          dueDate="Before customer action plan"
          priority="high"
          status="todo"
          context="Recommendation is based on Intelligence interpretation of multiple Health signals."
          assetContext="SM6 24kV Bus Coupler"
          validationStatus="Human validation needed"
        />

        <ActionCard
          title="Review source evidence before customer use"
          owner="Account owner"
          dueDate="Before customer meeting"
          priority="high"
          status="todo"
          sourceContext="Live telemetry and connected asset benchmark"
          validationStatus="Review before customer use"
        />
      </>
    ),
  },
};

export const WithoutHeader: Story = {
  args: {
    title: undefined,
    description: undefined,
    actions: undefined,
    children: (
      <>
        <ActionCard
          title="Prepare customer-ready value summary"
          owner="Account owner"
          dueDate="Before renewal meeting"
          priority="medium"
          status="in_progress"
          proofContext="Internal proof needs customer-ready synthesis"
        />

        <ActionCard
          title="Validate connected asset coverage"
          owner="Digital Support"
          dueDate="Next week"
          priority="low"
          status="todo"
          sourceContext="Known installed base · Source strength: partial"
        />
      </>
    ),
  },
};

export const RenewalActions: Story = {
  args: {
    title: "Renewal mitigation actions",
    description:
      "Actions to strengthen value proof, close proof gaps and reduce renewal risk.",
    actions: (
      <Button>
        Create action
      </Button>
    ),
    className: "max-w-5xl",
    children: (
      <>
        <ActionCard
          title="Prepare value proof summary with closed actions"
          owner="Account owner"
          dueDate="Jun 20, 2026"
          priority="high"
          status="in_progress"
          proofContext="Internal proof needs customer-ready synthesis"
          validationStatus="Review before customer use"
        />

        <ActionCard
          title="Review unresolved recommendations with the service team"
          owner="Account owner + Support"
          dueDate="Jun 14, 2026"
          priority="medium"
          status="todo"
          context="Recommendations need review before customer action plan."
          validationStatus="Human review needed"
        />

        <ActionCard
          title="Confirm renewal meeting agenda with customer"
          owner="Account owner"
          dueDate="Jun 24, 2026"
          priority="medium"
          status="todo"
        />
      </>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Custom action list width",
    description:
      "ActionList supports className for layout composition in generated screens.",
    className: "max-w-4xl",
    children: (
      <ActionCard
        title="Document className support"
        owner="Design system"
        dueDate="Today"
        priority="low"
        status="todo"
      />
    ),
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <ActionList
      aria-label="Recommended customer actions"
      data-testid="storybook-action-list"
      title="Recommended actions"
      description="ActionList accepts native section attributes."
      className="max-w-5xl"
    >
      <ActionCard
        title="Plan customer follow-up"
        owner="Account owner"
        dueDate="This week"
        priority="high"
        status="todo"
        context="Follow-up required before customer discussion."
      />

      <ActionCard
        title="Prepare service outcome summary"
        owner="Account owner"
        dueDate="Before QBR"
        priority="medium"
        status="in_progress"
        proofContext="Internal proof needs customer-ready synthesis"
      />
    </ActionList>
  ),
};