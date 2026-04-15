import { ReactElement, ReactNode, Fragment } from "react";
import { Data } from "react-csv/lib/core";
import { FormatTitle, FormatKey } from "../utilities/TextFormatting";

export type Group = {
    title: string;
    records: Record<string, string | number | boolean | null | undefined>;
};

export class GroupedSummary {
    groups: Group[];

    constructor(groups: Group[]) {
        this.groups = groups;
    }

    csv(): Data {
        const row = this.groups.reduce((acc, group) => {
            return { ...acc, ...group.records };
        }, {});
        
        return [row];
    }
}

export interface SummaryItemProps {
    fieldName: string;
    fieldValue: ReactNode;
}

export function SummaryItemRow({ fieldName, fieldValue }: SummaryItemProps): ReactElement {
    return (
        <tbody className="ons-summary__item">
            <tr className="ons-summary__row ons-summary__row--has-values">
                <td className="ons-summary__item-title">
                    <div className="ons-summary__item--text">
                        {FormatTitle(fieldName)}
                    </div>
                </td>
                <td className="ons-summary__values" colSpan={2}>
                    {fieldValue}
                </td>
            </tr>
        </tbody>
    );
}

export interface SummaryGroupTableProps {
    groupedSummary: GroupedSummary;
}

export function SummaryGroupTable({ groupedSummary }: SummaryGroupTableProps): ReactElement {
    return (
        <>
            {groupedSummary.groups.map((group) => (
                <Fragment key={`summary-group-wrapper-${FormatKey(group.title)}`}>
                    <h3 className="ons-summary__group-title">
                        {group.title}
                    </h3>
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
