import React, { ReactElement } from "react";
import { ComponentStory, Meta } from "@storybook/react";
import ONSTable from "./ONSTable";

export default {
    component: ONSTable,
    title: "Components/Table",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ONSTable> = (args) => <ONSTable {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

const columns = ["Column 1", "Column 2", "Column 3"];

const tableBody: ReactElement = (
    <tr
        className="ons-table__row"
        key={0}
        data-testid="questionnaire-table-row"
    >
        <td
            className="ons-table__cell"
            key={0}
        >
            Cell A1
        </td>
        <td
            className="ons-table__cell"
            key={1}
        >
            Cell B1
        </td>
        <td
            className="ons-table__cell"
            key={2}
        >
            Cell C1
        </td>
    </tr>
);

Default.args = {
    columns,
    children: tableBody,
    tableID: "example-table",
    tableCaption: "An example table",
};
