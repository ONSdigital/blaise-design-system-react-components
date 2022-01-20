import React, { ReactElement } from "react";

interface ONSTable {
  columns: string[]
  children: ReactElement
  tableID?: string
  tableCaption?: string
}

export const ONSTable = ({ columns, children, tableCaption, tableID }: ONSTable): ReactElement => {
  return (
    <>
      <table
        className="table"
        data-testid={tableID}
        id={tableID}>
        {tableCaption && <caption className="table__caption">{tableCaption}</caption>}
        <thead className="table__head">
          <tr className="table__row">
            {
              columns.map((title: string, index: number) => (
                <th scope="col" className="table__header" key={`${title}-${index}`}>{title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className="table__body">
          {children}
        </tbody>
      </table>
    </>
  );
};


export default ONSTable;
