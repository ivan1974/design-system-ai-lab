import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Field, Input, Select, Textarea } from "../../index";

const meta = {
  title: "Design System/Forms/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    htmlFor: { control: "text" },
    helper: { control: "text" },
    error: { control: "text" },
    className: { control: "text" },
  },
  args: {
    label: "Owner",
    htmlFor: "owner",
    helper: "Assign a clear owner for this action.",
    children: <Input id="owner" placeholder="CSM" />,
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithInput: Story = {};

export const WithHelper: Story = {
  args: {
    label: "Action title",
    htmlFor: "action-title",
    helper: "Write the action as a concrete next step.",
    children: (
      <Input
        id="action-title"
        placeholder="Plan connectivity review with the customer"
      />
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Due date",
    htmlFor: "due-date",
    error: "A due date is required for high-priority actions.",
    children: <Input id="due-date" type="date" aria-invalid="true" />,
  },
};

export const WithSelect: Story = {
  args: {
    label: "Priority",
    htmlFor: "priority",
    helper: "Use high priority only when customer risk is immediate.",
    children: (
      <Select id="priority" defaultValue="high">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </Select>
    ),
  },
};

export const WithTextarea: Story = {
  args: {
    label: "Note",
    htmlFor: "note",
    helper: "Add useful context for the team.",
    children: (
      <Textarea
        id="note"
        placeholder="Explain why this action matters and what should happen next."
      />
    ),
  },
};

export const CustomerActionForm: Story = {
  render: () => (
    <form className="w-120 space-y-4">
      <Field
        label="Action title"
        htmlFor="customer-action-title"
        helper="Formulate the action as a concrete next step."
      >
        <Input
          id="customer-action-title"
          placeholder="Plan connectivity review with the customer"
        />
      </Field>

      <Field label="Owner" htmlFor="customer-action-owner">
        <Input id="customer-action-owner" placeholder="CSM" />
      </Field>

      <Field label="Priority" htmlFor="customer-action-priority">
        <Select id="customer-action-priority" defaultValue="high">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Select>
      </Field>

      <Field label="Due date" htmlFor="customer-action-due-date">
        <Input id="customer-action-due-date" type="date" />
      </Field>

      <Field
        label="Note"
        htmlFor="customer-action-note"
        helper="Add context for the service team."
      >
        <Textarea
          id="customer-action-note"
          placeholder="Connectivity is partial and affects critical assets."
        />
      </Field>

      <div className="flex justify-end gap-2 pt-2">
        <Button variant="secondary" type="button">
          Cancel
        </Button>
        <Button type="submit">Save action</Button>
      </div>
    </form>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    label: "Custom field",
    htmlFor: "custom-field",
    helper: "Field supports className for layout composition.",
    className: "w-96",
    children: <Input id="custom-field" placeholder="Custom width field" />,
  },
};