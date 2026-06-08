import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, Textarea } from "../../index";

const meta = {
  title: "Design System/Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
  },
  args: {
    placeholder:
      "Explain why this action matters and what should happen next.",
    disabled: false,
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue:
      "Connectivity is partial and affects critical assets. The customer should be informed before the next QBR.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue:
      "This note is read-only because the action has already been closed.",
  },
};

export const InField: Story = {
  render: () => (
    <div className="w-120">
      <Field
        label="Note"
        htmlFor="action-note"
        helper="Add useful context for the service team."
      >
        <Textarea
          id="action-note"
          placeholder="Describe the customer context, risk and next step."
        />
      </Field>
    </div>
  ),
};

export const CustomerActionNote: Story = {
  render: () => (
    <div className="w-120 space-y-4">
      <Field
        label="Customer context"
        htmlFor="customer-context"
        helper="Summarize what the customer needs to understand."
      >
        <Textarea
          id="customer-context"
          placeholder="The customer has lost visibility on a critical asset..."
        />
      </Field>

      <Field
        label="Recommended next step"
        htmlFor="recommended-next-step"
        helper="Write the next step as a concrete action."
      >
        <Textarea
          id="recommended-next-step"
          placeholder="Plan a connectivity review with the customer and support team."
        />
      </Field>
    </div>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    placeholder: "Custom height textarea",
    className: "w-120 min-h-40",
  },
};

export const WithNativeTextareaProps: Story = {
  render: () => (
    <Textarea
      aria-label="Customer action note"
      data-testid="storybook-textarea"
      name="note"
      placeholder="Add context for the team"
      autoComplete="off"
      className="w-120"
    />
  ),
};