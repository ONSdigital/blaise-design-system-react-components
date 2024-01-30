import { Data } from "react-csv/components/CommonPropTypes";
import { ReactElement } from "react";
type Group = {
    title: string;
    records: Record<string, any>;
};
declare class GroupedSummary {
    groups: Group[];
    constructor(groups: Group[]);
    csv(): Data;
}
interface SummaryItemProps {
    fieldName: string;
    fieldValue: any;
}
declare function SummaryItemRow({ fieldName, fieldValue }: SummaryItemProps): ReactElement;
interface SummaryGroupTableProps {
    groupedSummary: GroupedSummary;
}
declare function SummaryGroupTable({ groupedSummary }: SummaryGroupTableProps): ReactElement;
export type { Group, SummaryItemProps, SummaryGroupTableProps };
export { GroupedSummary, SummaryItemRow, SummaryGroupTable };
