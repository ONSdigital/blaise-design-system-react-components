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
}

export const Table = ({ columns, children, tableCaption, tableID }: Props) => {
  return (
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
              className="ons-table__header"
              key={`${title}-${index}`}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="ons-table__body">{children}</tbody>
    </table>
  );
};
