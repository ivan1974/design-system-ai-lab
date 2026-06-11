import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../..";

const meta = {
  title: "Components/Table",
  component: Table,
  args: {
    density: "compact",
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OperationalRows: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Asset</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Health</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Main switchgear</TableCell>
          <TableCell>Live telemetry</TableCell>
          <TableCell>Good</TableCell>
          <TableCell>Review</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Backup power unit</TableCell>
          <TableCell>Connectivity issue</TableCell>
          <TableCell>Unknown</TableCell>
          <TableCell>Contact expert</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
