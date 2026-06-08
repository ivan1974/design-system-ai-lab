import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, Select } from "../../index";

const meta = {
  title: "Design System/Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    className: { control: "text" },
  },
  args: {
    disabled: false,
    defaultValue: "high",
    children: (
      <>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </>
    ),
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrioritySelect: Story = {
  render: () => (
    <div className="w-96">
      <Field
        label="Priority"
        htmlFor="priority"
        helper="Use high priority only when customer risk is immediate."
      >
        <Select id="priority" defaultValue="high">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Select>
      </Field>
    </div>
  ),
};

export const OwnerSelect: Story = {
  render: () => (
    <div className="w-96">
      <Field label="Owner" htmlFor="owner">
        <Select id="owner" defaultValue="csm">
          <option value="csm">CSM</option>
          <option value="support">Support team</option>
          <option value="service-manager">Service manager</option>
          <option value="customer">Customer</option>
        </Select>
      </Field>
    </div>
  ),
};

export const RenewalRiskSelect: Story = {
  render: () => (
    <div className="w-96">
      <Field
        label="Renewal risk"
        htmlFor="renewal-risk"
        helper="Select the current risk level for the renewal discussion."
      >
        <Select id="renewal-risk" defaultValue="medium">
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Select>
      </Field>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "medium",
    children: (
      <>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    className: "w-96",
    defaultValue: "medium",
    children: (
      <>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </>
    ),
  },
};

export const WithNativeSelectProps: Story = {
  render: () => (
    <Select
      aria-label="Customer action priority"
      data-testid="storybook-select"
      name="priority"
      defaultValue="high"
      className="w-96"
    >
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </Select>
  ),
};