import { ReactElement, ReactNode } from "react";
import { Data } from "react-csv/lib/core";
import { formatTitle, formatKey } from "../utilities/textFormatting";

/** Summary group. */
export type SummaryGroup = {
  /** Group title. */
  title: string;
  /** Group values. */
  records: Record<string, string | number | boolean | null | undefined>;
};

/** Grouped summary data. */
export class GroupedSummary {
  groups: SummaryGroup[];

  constructor(groups: SummaryGroup[]) {
    this.groups = groups;
  }

  /** Returns a single CSV row. */
  csv(): Data {
    const row = this.groups.reduce((acc, group) => {
      return { ...acc, ...group.records };
    }, {});

    return [row];
  }
}

/** Props for SummaryItemRow. */
export interface SummaryItemProps {
  /** Base ID for generated test ids. */
  id?: string;
  /** Field name. */
  fieldName: string;
  /** Field value. */
  fieldValue: ReactNode;
}

/** Renders a summary row. */
export function SummaryItemRow({ id, fieldName, fieldValue }: SummaryItemProps): ReactElement {
  let displayValue: ReactNode = fieldValue;

  if (typeof fieldValue === "boolean") {
    displayValue = fieldValue ? "Yes" : "No";
  } else if (fieldValue === null || fieldValue === undefined || fieldValue === "") {
    displayValue = "Not provided";
  }

  return (
    <div
      className="ons-summary__item"
      data-testid={id ? `${id}-row` : undefined}
    >
      <dt className="ons-summary__item-title">
        <div className="ons-summary__item--text">{formatTitle(fieldName)}</div>
      </dt>
      <dd className="ons-summary__values">
        {typeof displayValue === "string" || typeof displayValue === "number" ? (
          <span
            className="ons-summary__text"
            data-testid={id ? `${id}-value` : undefined}
          >
            {displayValue}
          </span>
        ) : (
          displayValue
        )}
      </dd>
    </div>
  );
}

/** Props for SummaryGroupTable. */
export interface SummaryGroupTableProps {
  /** Element ID. */
  id?: string;
  /** Summary data. */
  groupedSummary: GroupedSummary;
}

/** Renders grouped summary data. */
export function SummaryGroupTable({ id, groupedSummary }: SummaryGroupTableProps): ReactElement {
  return (
    <div
      className="ons-summary"
      id={id}
      data-testid={id ? `${id}-summary` : undefined}
    >
      {groupedSummary.groups.map((group) => {
        const groupKey = formatKey(group.title);

        return (
          <div
            key={`summary-group-wrapper-${groupKey}`}
            className="ons-summary__group"
          >
            <h2 className="ons-summary__group-title">{group.title}</h2>
            <dl
              className="ons-summary__items"
              id={id ? `${id}-${groupKey}-list` : undefined}
            >
              {Object.entries(group.records).map(([field, value]) => {
                const rowKey = formatKey(field);

                return (
                  <SummaryItemRow
                    key={`summary-table-row-${rowKey}`}
                    id={id ? `${id}-${groupKey}-${rowKey}` : undefined}
                    fieldName={field}
                    fieldValue={value as ReactNode}
                  />
                );
              })}
            </dl>
          </div>
        );
      })}
    </div>
  );
}
