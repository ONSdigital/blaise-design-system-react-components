import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./Table";

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
        <tr
            className="ons-table__row"
            data-testid="questionnaire-table-row-0"
        >
            <td className="ons-table__cell">Cell A1</td>
            <td className="ons-table__cell">Cell B1</td>
            <td className="ons-table__cell">Cell C1</td>
        </tr>
        <tr
            className="ons-table__row"
            data-testid="questionnaire-table-row-1"
        >
            <td className="ons-table__cell">Cell A2</td>
            <td className="ons-table__cell">Cell B2</td>
            <td className="ons-table__cell">Cell C2</td>
        </tr>
    </>
);

export const Default: Story = {
    args: {
        columns,
        children: tableBody,
        tableID: "example-table",
        tableCaption: "An example table",
    },
};
