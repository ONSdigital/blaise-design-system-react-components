import { Table } from "./Table";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const columns = ["Column 1", "Column 2", "Column 3"];

const tableBody = (
  <>
    <tr className="ons-table__row">
      <td className="ons-table__cell">Cell A1</td>
      <td className="ons-table__cell">Cell B1</td>
      <td className="ons-table__cell">Cell C1</td>
    </tr>
    <tr className="ons-table__row">
      <td className="ons-table__cell">Cell A2</td>
      <td className="ons-table__cell">Cell B2</td>
      <td className="ons-table__cell">Cell C2</td>
    </tr>
    <tr className="ons-table__row">
      <td className="ons-table__cell">Cell A3</td>
      <td className="ons-table__cell">Cell B3</td>
      <td className="ons-table__cell">Cell C3</td>
    </tr>
  </>
);

export const Default: Story = {
  args: {
    columns,
    children: tableBody,
    id: "table",
    tableCaption: "An example table",
  },
};
