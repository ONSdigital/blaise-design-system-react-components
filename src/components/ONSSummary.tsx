import { ReactElement, ReactNode, Fragment } from "react";
import { Data } from "react-csv/lib/core";
import { FormatTitle, FormatKey } from "../utilities/TextFormatting";

/** Represents a single section within a summary table. */
export type Group = {
    /** The heading displayed above this specific group of records. */
    title: string;
    /** A key-value pair of the data to display in the table rows. */
    records: Record<string, string | number | boolean | null | undefined>;
};

/** A data structure class that holds multiple summary groups and provides utility methods. */
export class GroupedSummary {
    groups: Group[];

    constructor(groups: Group[]) {
        this.groups = groups;
    }

    /** Flattens the grouped records into a single row format suitable for CSV export. */
    csv(): Data {
        const row = this.groups.reduce((acc, group) => {
            return { ...acc, ...group.records };
        }, {});

        return [row];
    }
}

export interface SummaryItemProps {
    /** The label for the data field (left column). */
    fieldName: string;
    /** The value to display (right column). Accepts strings, numbers, or React components. */
    fieldValue: ReactNode;
}

export function SummaryItemRow({ fieldName, fieldValue }: SummaryItemProps): ReactElement {
    return (
        <tbody className="ons-summary__item">
            <tr className="ons-summary__row ons-summary__row--has-values">
                <td className="ons-summary__item-title">
                    <div className="ons-summary__item--text">{FormatTitle(fieldName)}</div>
                </td>
                <td
                    className="ons-summary__values"
                    colSpan={2}
                >
                    {fieldValue}
                </td>
            </tr>
        </tbody>
    );
}

export interface SummaryGroupTableProps {
    /** The instantiated GroupedSummary object containing the data to render. */
    groupedSummary: GroupedSummary;
}

export function SummaryGroupTable({ groupedSummary }: SummaryGroupTableProps): ReactElement {
    return (
        <>
            {groupedSummary.groups.map((group) => (
                <Fragment key={`summary-group-wrapper-${FormatKey(group.title)}`}>
                    <h3 className="ons-summary__group-title">{group.title}</h3>
                    <table className="ons-summary__items">
                        {Object.entries(group.records).map(([field, value]) => (
                            <SummaryItemRow
                                key={`summary-table-row-${FormatKey(field)}`}
                                fieldName={field}
                                fieldValue={value as ReactNode}
                            />
                        ))}
                    </table>
                </Fragment>
            ))}
        </>
    );
}
