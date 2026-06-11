import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "../..";

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  args: {
    maxHeight: "list",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BoundedList: Story = {
  render: (args) => (
    <ScrollArea {...args} className="rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface)">
      <div className="grid gap-2 p-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="rounded-(--ec-radius-sm) border border-(--ec-color-border) p-3 text-sm">
            Operational item {index + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
