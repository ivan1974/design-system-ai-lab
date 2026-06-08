import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, Input } from "../../index";

const meta = {
  title: "Design System/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    type: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
  },
  args: {
    placeholder: "CSM",
    type: "text",
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "Sarah Moreau",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Unavailable field",
    disabled: true,
  },
};

export const DateInput: Story = {
  args: {
    type: "date",
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "customer@example.com",
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "25",
  },
};

export const InField: Story = {
  render: () => (
    <div className="w-96">
      <Field
        label="Owner"
        htmlFor="owner"
        helper="Assign a clear owner for this action."
      >
        <Input id="owner" placeholder="CSM" />
      </Field>
    </div>
  ),
};

export const CustomerActionInputs: Story = {
  render: () => (
    <div className="w-120 space-y-4">
      <Field label="Action title" htmlFor="action-title">
        <Input
          id="action-title"
          placeholder="Plan connectivity review with the customer"
        />
      </Field>

      <Field label="Owner" htmlFor="action-owner">
        <Input id="action-owner" placeholder="CSM" />
      </Field>

      <Field label="Due date" htmlFor="action-due-date">
        <Input id="action-due-date" type="date" />
      </Field>
    </div>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    placeholder: "Custom width input",
    className: "w-96",
  },
};

export const WithNativeInputProps: Story = {
  render: () => (
    <Input
      aria-label="Customer action owner"
      data-testid="storybook-input"
      name="owner"
      placeholder="CSM"
      autoComplete="off"
      className="w-96"
    />
  ),
};