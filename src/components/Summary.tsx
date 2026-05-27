import { type ReactElement, type ReactNode } from "react";

import { formatKey, formatTitle } from "../utilities/textFormatting";

type SummaryCsvValue = string | number | boolean | null | undefined;

export type SummaryCsvData = Array<Record<string, SummaryCsvValue>>;

/**
 * Use this when the rendered value needs to be richer than a primitive,
 * but you still want an optional CSV-safe value.
 */
export interface SummaryRenderableRecord {
  display: ReactNode;
  csv?: SummaryCsvValue;
}

type SummaryRecord = SummaryCsvValue | SummaryRenderableRecord;

/** Summary group. */
export type SummaryGroup = {
  /** Group title. */
  title: string;
  /** Optional content rendered between the title and the rows. */
  preamble?: ReactNode;
  /** Group values. Omit for preamble-only groups. */
  records?: Record<string, SummaryRecord>;
  /** Optional override for the rendered dl id. */
  rowsId?: string;
};

/** Grouped summary data. */
export class GroupedSummary {
  readonly groups: readonly SummaryGroup[];

  constructor(groups: readonly SummaryGroup[]) {
    this.groups = groups.map((group) => ({
      ...group,
      records: group.records ? { ...group.records } : undefined,
    }));
  }

  /** Returns a single CSV row. */
  csv(): SummaryCsvData {
    const row = this.groups.reduce<Record<string, SummaryCsvValue>>((acc, group) => {
      if (!group.records) {
        return acc;
      }

      const flattenedRecords = Object.fromEntries(
        Object.entries(group.records).map(([field, value]) => {
          return [field, getCsvValue(value)];
        }),
      );

      return { ...acc, ...flattenedRecords };
    }, {});

    return [row];
  }
}

function isSummaryRenderableRecord(value: SummaryRecord): value is SummaryRenderableRecord {
  return typeof value === "object" && value !== null && "display" in value;
}

function getDisplayValue(value: SummaryRecord): ReactNode {
  if (isSummaryRenderableRecord(value)) {
    return value.display;
  }

  return value;
}

function getCsvValue(value: SummaryRecord): SummaryCsvValue {
  if (isSummaryRenderableRecord(value)) {
    return value.csv;
  }

  return value;
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
  /** Optional class name for spacing utilities. */
  className?: string;
  /** Summary data. */
  groupedSummary: GroupedSummary;
}

/** Renders grouped summary data. */
export function SummaryGroupTable({
  id,
  className,
  groupedSummary,
}: SummaryGroupTableProps): ReactElement {
  const summaryClassName = ["ons-summary", className].filter(Boolean).join(" ");

  return (
    <div
      className={summaryClassName}
      id={id}
      data-testid={id ? `${id}-summary` : undefined}
    >
      {groupedSummary.groups.map((group) => {
        const groupKey = formatKey(group.title);
        const rows = Object.entries(group.records ?? {});

        return (
          <div
            key={`summary-group-wrapper-${groupKey}`}
            className="ons-summary__group"
          >
            <h2 className="ons-summary__group-title">{group.title}</h2>

            {group.preamble}

            {rows.length > 0 && (
              <dl
                className="ons-summary__items"
                id={group.rowsId ?? (id ? `${id}-${groupKey}-list` : undefined)}
              >
                {rows.map(([field, value]) => {
                  const rowKey = formatKey(field);

                  return (
                    <SummaryItemRow
                      key={`summary-table-row-${rowKey}`}
                      id={id ? `${id}-${groupKey}-${rowKey}` : undefined}
                      fieldName={field}
                      fieldValue={getDisplayValue(value)}
                    />
                  );
                })}
              </dl>
            )}
          </div>
        );
      })}
    </div>
  );
}
