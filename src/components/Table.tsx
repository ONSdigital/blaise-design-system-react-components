import { ReactNode } from "react";

export interface Props {
  /** Array of strings representing the table column headers. */
  columns: string[];
  /** The content to render inside the table body (typically <tr> and <td> elements). */
  children: ReactNode;
  /** Optional custom ID for the table element, also used for the data-testid. */
  tableID?: string;
  /** Optional visually accessible title for the table. */
  tableCaption?: string;
  /** Optional aria-label for the scrollable region. */
  scrollableLabel?: string;
}

export const Table = ({
  columns,
  children,
  tableCaption,
  tableID,
  scrollableLabel = "Table",
}: Props) => {
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
          data-testid={tableID}
          id={tableID}
        >
          {tableCaption && <caption className="ons-table__caption">{tableCaption}</caption>}
          <thead className="ons-table__head">
            <tr className="ons-table__row">
              {columns.map((title: string, index: number) => (
                <th
                  scope="col"
                  className="ons-table__header ons-table__header--top"
                  key={`${title}-${index}`}
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
