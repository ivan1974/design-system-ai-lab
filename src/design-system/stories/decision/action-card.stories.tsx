import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionCard } from "../../index";

const meta = {
  title: "Decision/ActionCard",
  component: ActionCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    owner: { control: "text" },
    dueDate: { control: "text" },
    priority: {
      control: "select",
      options: ["high", "medium", "low"],
    },
    status: {
      control: "select",
      options: ["todo", "in_progress", "blocked", "done"],
    },
    context: { control: "text" },
    assetContext: { control: "text" },
    sourceContext: { control: "text" },
    validationStatus: { control: "text" },
    proofContext: { control: "text" },
    className: { control: "text" },
  },
  args: {
    title: "Plan connectivity review with the customer",
    owner: "Account owner",
    dueDate: "This week",
    priority: "high",
    status: "todo",
    context: "Follow-up required after partial connectivity alert.",
    assetContext: "Critical Power > UPS Room A",
    sourceContext: "CompanyName monitored assets only · Source strength: partial",
    validationStatus: "Review before customer use",
    className: "w-160",
  },
} satisfies Meta<typeof ActionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PriorityLevels: Story = {
  render: () => (
    <div className="w-160 space-y-3">
      <ActionCard
        title="Plan connectivity review with the customer"
        owner="Account owner"
        dueDate="This week"
        priority="high"
        status="todo"
        context="Follow-up required after partial connectivity alert."
      />

      <ActionCard
        title="Prepare customer-ready value proof summary"
        owner="Account owner"
        dueDate="Before next QBR"
        priority="medium"
        status="in_progress"
        proofContext="Internal proof needs customer-ready synthesis"
      />

      <ActionCard
        title="Review secondary source evidence"
        owner="Digital Support"
        dueDate="Next 10 business days"
        priority="low"
        status="todo"
        sourceContext="Manual inventory and service reports"
      />
    </div>
  ),
};

export const StatusLevels: Story = {
  render: () => (
    <div className="w-160 space-y-3">
      <ActionCard
        title="Assign owner for partial connectivity recovery"
        owner="Service Manager"
        dueDate="Today"
        priority="high"
        status="todo"
        context="Ownership gap must be closed before customer follow-up."
      />

      <ActionCard
        title="Review affected assets before customer discussion"
        owner="Account owner"
        dueDate="This week"
        priority="high"
        status="in_progress"
        assetContext="Critical Power > UPS Room A"
      />

      <ActionCard
        title="Create proof follow-up before renewal meeting"
        owner="Account owner"
        dueDate="Before renewal review"
        priority="high"
        status="blocked"
        proofContext="Expected outcome, not proven"
        validationStatus="Customer-ready proof missing"
      />

      <ActionCard
        title="Update customer-ready summary with validated proof"
        owner="Account owner"
        dueDate="Completed"
        priority="medium"
        status="done"
        validationStatus="Customer-ready proof validated"
      />
    </div>
  ),
};

export const AssetFollowUpAction: Story = {
  args: {
    title: "Review affected assets before customer discussion",
    owner: "Account owner",
    dueDate: "This week",
    priority: "high",
    status: "todo",
    context: "Follow-up required after partial connectivity alert.",
    assetContext: "Critical Power > UPS Room A",
    sourceContext: "CompanyName monitored assets only · Source strength: partial",
    validationStatus: "Review before customer use",
    className: "w-160",
  },
};

export const ProofGapAction: Story = {
  args: {
    title: "Create proof follow-up before renewal meeting",
    owner: "Account owner",
    dueDate: "Before renewal review",
    priority: "high",
    status: "blocked",
    context:
      "The recommendation has expected value but no completed action evidence yet.",
    proofContext: "Expected outcome, not proven",
    validationStatus: "Customer-ready proof missing",
    className: "w-160",
  },
};

export const HumanValidationAction: Story = {
  args: {
    title: "Validate asset recommendation with CompanyName expert",
    owner: "Service Manager",
    dueDate: "Before customer action plan",
    priority: "high",
    status: "todo",
    context:
      "Recommendation is based on Intelligence interpretation of multiple Health signals.",
    assetContext: "SM6 24kV Bus Coupler",
    validationStatus: "Human validation needed",
    className: "w-160",
  },
};

export const SourceEvidenceReviewAction: Story = {
  args: {
    title: "Confirm source evidence before customer-ready summary",
    owner: "Account owner",
    dueDate: "Before next customer review",
    priority: "medium",
    status: "todo",
    context: "Source strength is partial and should be reviewed before customer use.",
    sourceContext: "Closed service actions · Source strength: partial",
    proofContext: "Internal proof, not customer-ready",
    validationStatus: "Review needed",
    className: "w-160",
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Prepare customer-ready value proof summary",
    owner: "Account owner",
    dueDate: "Before Jun 20",
    priority: "medium",
    status: "in_progress",
    proofContext: "Internal proof needs customer-ready synthesis",
    className: "w-160",
  },
};

export const WithNativeArticleProps: Story = {
  render: () => (
    <ActionCard
      aria-label="High-priority action to assign overdue ownership"
      title="Assign owner to overdue connectivity actions"
      owner="Service Manager"
      dueDate="Tomorrow"
      priority="high"
      status="todo"
      context="Ownership gap must be closed before customer follow-up."
      className="w-160"
      data-testid="storybook-action-card"
    />
  ),
};