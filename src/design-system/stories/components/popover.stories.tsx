import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Checkbox, Popover } from "../..";

const filterContent = (
  <div className="grid gap-3">
    <Checkbox label="Active alert" />
    <Checkbox label="Connectivity issue" />
    <Checkbox label="No coverage" />
  </div>
);

const meta = {
  title: "Components/Popover",
  component: Popover,
  args: {
    side: "bottom",
    align: "start",
    trigger: <Button variant="secondary" size="sm">More filters</Button>,
    children: filterContent,
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilterOptions: Story = {
  render: (args) => <Popover {...args} />,
};
