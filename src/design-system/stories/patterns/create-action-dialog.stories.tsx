import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, CreateActionDialog } from "../../index";

const meta = {
  title: "Design System/Patterns/CreateActionDialog",
  component: CreateActionDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    showContextFields: { control: "boolean" },
  },
  args: {
    title: "Create action",
    description:
      "Add a follow-up action with an owner, due date and priority.",
    confirmLabel: "Save action",
  },
} satisfies Meta<typeof CreateActionDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SimpleAction: Story = {
  args: {
    trigger: <Button>Create action</Button>,
    title: "Create action",
    description:
      "Add a follow-up action with an owner, due date and priority.",
    confirmLabel: "Save action",
  },
};

export const ContextFieldsVisible: Story = {
  args: {
    trigger: <Button variant="secondary">Create contextual action</Button>,
    title: "Create contextual action",
    description:
      "Add a follow-up action while preserving asset, source, validation or proof context.",
    confirmLabel: "Save contextual action",
    showContextFields: true,
  },
};

export const RecommendationFollowUpAction: Story = {
  args: {
    trigger: <Button variant="secondary">Create follow-up action</Button>,
    title: "Create recommendation follow-up action",
    description:
      "Add an action to review and prepare the recommendation before customer use.",
    confirmLabel: "Save follow-up action",
    defaultValues: {
      title: "Review source evidence before customer discussion",
      owner: "CSM",
      priority: "high",
      context: "Follow-up required after high-priority recommendation.",
      sourceContext: "CompanyName monitored assets only · Source strength: partial",
      validationStatus: "Review before customer use",
      note: "Do not use the recommendation with the customer until evidence has been reviewed.",
    },
  },
};

export const AssetReviewAction: Story = {
  args: {
    trigger: <Button variant="secondary">Create asset review action</Button>,
    title: "Create asset review action",
    description:
      "Add an action to review affected assets before customer use.",
    confirmLabel: "Save asset review action",
    defaultValues: {
      title: "Review affected assets before customer discussion",
      owner: "CSM",
      priority: "high",
      context: "Follow-up required after partial connectivity alert.",
      assetContext: "Critical Power > UPS Room A",
      sourceContext: "CompanyName monitored assets only · Source strength: partial",
      validationStatus: "Review before customer use",
      note: "Confirm affected scope before preparing the customer summary.",
    },
  },
};

export const HumanValidationAction: Story = {
  args: {
    trigger: <Button variant="secondary">Create validation action</Button>,
    title: "Create human validation action",
    description: "Add an action for expert review before customer use.",
    confirmLabel: "Save validation action",
    defaultValues: {
      title: "Validate asset recommendation with CompanyName expert",
      owner: "Service Manager",
      priority: "high",
      context:
        "Recommendation is based on Intelligence interpretation of multiple Health signals.",
      assetContext: "SM6 24kV Bus Coupler",
      validationStatus: "Human validation needed",
      note: "Validate the recommendation before it is used in the customer action plan.",
    },
  },
};

export const ProofFollowUpAction: Story = {
  args: {
    trigger: <Button variant="secondary">Create proof follow-up action</Button>,
    title: "Create proof follow-up action",
    description:
      "Add an action to prepare customer-ready proof before the renewal discussion.",
    confirmLabel: "Save proof follow-up action",
    defaultValues: {
      title: "Prepare customer-ready value proof summary",
      owner: "CSM",
      priority: "medium",
      proofContext: "Customer-ready proof missing",
      validationStatus: "Proof review needed",
      note: "Closed actions and resolved risks should be translated into customer-ready outcomes.",
    },
  },
};

export const WithSubmitHandler: Story = {
  args: {
    trigger: <Button>Create action with handler</Button>,
    onSubmit: (values) => {
      console.log("CreateActionDialog submitted", values);
    },
  },
};