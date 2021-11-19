import { Data } from "react-csv/components/CommonPropTypes";
import { ReactElement } from "react";
declare type GroupedSummary = Group[];
declare type Group = {
    title: string;
    records: Record<string, any>;
};
declare function GroupedSummaryAsCSV(groupedSummary: GroupedSummary): Data;
interface SummaryItemProps {
    fieldName: string;
    fieldValue: any;
}
declare function SummaryItemRow({ fieldName, fieldValue }: SummaryItemProps): ReactElement;
interface SummaryGroupTableProps {
    groupedSummary: GroupedSummary;
}
declare function SummaryGroupTable({ groupedSummary }: SummaryGroupTableProps): ReactElement;
export type { GroupedSummary, Group, SummaryItemProps, SummaryGroupTableProps };
export { GroupedSummaryAsCSV, SummaryItemRow, SummaryGroupTable };
