import { ReactElement, ReactNode } from "react";
import { Data } from "react-csv/lib/core";
import { formatTitle, formatKey } from "../utilities/textFormatting";

export type SummaryGroup = {
  title: string;
  records: Record<string, string | number | boolean | null | undefined>;
};


export class GroupedSummary {
  groups: SummaryGroup[];

  constructor(groups: SummaryGroup[]) {
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
  /** The label for the data field (left column). */
  fieldName: string;
  /** The value to display (right column). Accepts strings, numbers, or React components. */
  fieldValue: ReactNode;
}

export function SummaryItemRow({ fieldName, fieldValue }: SummaryItemProps): ReactElement {
  return (
    <div className="ons-summary__item">
      <dt className="ons-summary__item-title">
        <div className="ons-summary__item--text">{formatTitle(fieldName)}</div>
      </dt>
      <dd className="ons-summary__values">
        {typeof fieldValue === "string" || typeof fieldValue === "number" ? (
          <span className="ons-summary__text">{fieldValue}</span>
        ) : (
          fieldValue
        )}
      </dd>
    </div>
  );
}

export interface SummaryGroupTableProps {
  /** The instantiated GroupedSummary object containing the data to render. */
  groupedSummary: GroupedSummary;
}

export function SummaryGroupTable({ groupedSummary }: SummaryGroupTableProps): ReactElement {
  return (
    <div className="ons-summary">
      {groupedSummary.groups.map((group) => (
        <div
          key={`summary-group-wrapper-${formatKey(group.title)}`}
          className="ons-summary__group"
        >
          <h2 className="ons-summary__group-title">{group.title}</h2>
          <dl className="ons-summary__items">
            {Object.entries(group.records).map(([field, value]) => (
              <SummaryItemRow
                key={`summary-table-row-${formatKey(field)}`}
                fieldName={field}
                fieldValue={value as ReactNode}
              />
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
