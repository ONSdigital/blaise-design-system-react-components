import {Data} from "react-csv/components/CommonPropTypes";
import {FormatTitle} from "../utilities/TextFormatting";
import React, {ReactElement} from "react";

type GroupedSummary = Group[];

type Group = {
    title: string
    records: Record<string, any>
}

function GroupedSummaryAsCSV(groupedSummary: GroupedSummary): Data {
    const records: Data = [];
    const row: Record<string, any> = {};
    for (const group of groupedSummary) {
        for (const record in group.records) {
            row[record] = group.records[record];
        }
    }
    records.push(row);
    return records;
}

function SummaryItemRow(props: { fieldName: string, fieldValue: any }) {
    return (
        <tbody className="summary__item">
        <tr className="summary__row summary__row--has-values">
            <td className="summary__item-title">
                <div className="summary__item--text">
                    {FormatTitle(props.fieldName)}
                </div>
            </td>
            <td className="summary__values" colSpan={2}>
                {props.fieldValue}
            </td>
        </tr>
        </tbody>
    );
}

function SummaryGroupTable(props: { groupedSummary: GroupedSummary}) {
    const elementList: ReactElement[] = [];
    for (const group of props.groupedSummary) {
        elementList.push(
            <h3 className="summary__group-title">{group.title}</h3>
        );
        const tableFieldsList: ReactElement[] = [];
        for (const field in group.records) {
            tableFieldsList.push(
                <SummaryItemRow fieldName={field} fieldValue={group.records[field]}/>
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

export type {GroupedSummary, Group};
export {GroupedSummaryAsCSV, SummaryItemRow, SummaryGroupTable};
