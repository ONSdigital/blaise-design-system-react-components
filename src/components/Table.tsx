import { type ReactElement, type ReactNode, useId } from "react";

/** Props for Table. */
export interface Props {
  /** Column header labels rendered in order. */
  columns: string[];
  /** Table body rows. */
  children: ReactNode;
  /** Element ID. */
  id?: string;
  /** Table caption. */
  tableCaption?: string;
  /** Accessible name for the scroll area. */
  scrollableLabel?: string;
}

/** Renders a table. */
export const Table = ({
  columns,
  children,
  tableCaption,
  id,
  scrollableLabel = "Table",
}: Props): ReactElement => {
  const generatedId = useId();
  const baseId = id ?? `table-${generatedId}`;

  return (
    <div className="ons-table-scrollable ons-table-scrollable--on">
      <div
        className="ons-table-scrollable__content"
        tabIndex={0}
        role="region"
        aria-label={scrollableLabel}
      >
        <table
          className="ons-table"
          data-testid={id ? `${id}-table` : undefined}
          id={baseId}
        >
          {tableCaption && <caption className="ons-table__caption">{tableCaption}</caption>}
          <thead className="ons-table__head">
            <tr className="ons-table__row">
              {columns.map((title: string) => (
                <th
                  scope="col"
                  className="ons-table__header ons-table__header--top"
                  key={`${baseId}-header-${title}`}
                >
                  <span className="ons-table__header-text">{title}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="ons-table__body">{children}</tbody>
        </table>
      </div>
    </div>
  );
};
