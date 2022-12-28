import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { GroupedSummary, SummaryGroupTable, SummaryItemRow } from "./ONSSummary";

export default {
    component: SummaryGroupTable,
    title: "Components/Summary",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const SummaryTableTemplate: ComponentStory<typeof SummaryGroupTable> = (args) => <SummaryGroupTable {...args} />;
const SummaryRowTemplate: ComponentStory<typeof SummaryItemRow> = (args) => <SummaryItemRow {...args} />;

// 👇 Each story then reuses that template
export const SummaryTable = SummaryTableTemplate.bind({});
export const SummaryRow = SummaryRowTemplate.bind({});

const groupedSummary = new GroupedSummary([{
    title: "How to use a Summary table",
    records: {
        "Step 1": "Import GroupedSummary, SummaryGroupTable, SummaryItemRow from ONSSummary",
        "Step 2": `Instantiate a GroupedSummary and pass in the following object:    
            const groupedSummary = new GroupedSummary({
                title: "Table title",
                records: {
                    "Record 1": "foo",
                    "Record 2": "bar" 
                }
            });
        `,
        "Step 3": `Instantiate a SummaryGroupTable element and pass in the GroupedSummary defined in Step 2:
            <SummaryGroupTable groupedSummary={groupedSummary} />
        `,
    },
}]);

SummaryTable.args = {
    groupedSummary,
};

SummaryRow.args = {
    fieldName: "Field",
    fieldValue: "Value",
};
