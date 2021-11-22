import { Data } from "react-csv/components/CommonPropTypes";
import { FormatTitle } from "../utilities/TextFormatting";
import React, { ReactElement } from "react";

type Group = {
    title: string
    records: Record<string, any>
}
class GroupedSummary {
    groups: Group[];

    constructor(groups: Group[]) {
        this.groups = groups;
    }

    csv(): Data {
        const records: Data = [];
        const row: Record<string, any> = {};
        for (const group of this.groups) {
            for (const record in group.records) {
                row[record] = group.records[record];
            }
        }
        records.push(row);
        return records;
    }
}

interface SummaryItemProps {
    fieldName: string
    fieldValue: any
}

function SummaryItemRow({ fieldName, fieldValue }: SummaryItemProps): ReactElement {
    return (
        <tbody className="summary__item">
            <tr className="summary__row summary__row--has-values">
                <td className="summary__item-title">
                    <div className="summary__item--text">
                        {FormatTitle(fieldName)}
                    </div>
                </td>
                <td className="summary__values" colSpan={2}>
                    {fieldValue}
                </td>
            </tr>
        </tbody>
    );
}

interface SummaryGroupTableProps {
    groupedSummary: GroupedSummary
}

function SummaryGroupTable({ groupedSummary }: SummaryGroupTableProps): ReactElement {
    const elementList: ReactElement[] = [];
    for (const group of groupedSummary.groups) {
        elementList.push(
            <h3 className="summary__group-title">{group.title}</h3>
        );
        const tableFieldsList: ReactElement[] = [];
        for (const field in group.records) {
            tableFieldsList.push(
                <SummaryItemRow fieldName={field} fieldValue={group.records[field]} />
            );
        }
        elementList.push(
            <table className="summary__items">
                {tableFieldsList}
            </table>
        );
    }
    return (
        <>
            {elementList}
        </>
    );
}

export type { Group, SummaryItemProps, SummaryGroupTableProps };
export { GroupedSummary, SummaryItemRow, SummaryGroupTable };
