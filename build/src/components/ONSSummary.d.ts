import { Data } from "react-csv/lib/core";
import React, { ReactElement } from "react";
type Group = {
    title: string;
    records: Record<string, string | number | boolean | null | undefined>;
};
declare class GroupedSummary {
    groups: Group[];
    constructor(groups: Group[]);
    csv(): Data;
}
interface SummaryItemProps {
    fieldName: string;
    fieldValue: React.ReactNode;
}
declare function SummaryItemRow({ fieldName, fieldValue }: SummaryItemProps): ReactElement;
interface SummaryGroupTableProps {
    groupedSummary: GroupedSummary;
}
declare function SummaryGroupTable({ groupedSummary }: SummaryGroupTableProps): ReactElement;
export type { Group, SummaryItemProps, SummaryGroupTableProps };
export { GroupedSummary, SummaryItemRow, SummaryGroupTable };
