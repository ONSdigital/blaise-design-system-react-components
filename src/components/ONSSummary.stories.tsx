import type { Meta, StoryObj } from "@storybook/react";
import { GroupedSummary, SummaryGroupTable, SummaryItemRow } from "./ONSSummary";

const meta = {
    title: "Components/Summary",
    component: SummaryGroupTable,
    tags: ["autodocs"],
    argTypes: {
        groupedSummary: { control: false },
    },
} satisfies Meta<typeof SummaryGroupTable>;

export default meta;

type TableStory = StoryObj<typeof SummaryGroupTable>;
type RowStory = StoryObj<typeof SummaryItemRow>;

const censusSummary = new GroupedSummary([
    {
        title: "Household details",
        records: {
            Address: "102 Petty France, London",
            "Property type": "Office block",
            "Number of residents": "0",
        },
    },
]);

export const Table: TableStory = {
    args: {
        groupedSummary: censusSummary,
    },
};

export const Row: RowStory = {
    render: (args) => (
        <table className="ons-summary__table">
            <tbody className="ons-summary__tbody">
                <SummaryItemRow {...args} />
            </tbody>
        </table>
    ),
    argTypes: {
        fieldValue: { control: false },
    },
    args: {
        fieldName: "Survey",
        fieldValue: "Labour Force Survey",
    },
};
