import React, { ReactElement } from "react";

interface ONSTableProps {
    columns: string[]
    children: ReactElement
    tableID?: string
    tableCaption?: string
}

function ONSTable({
    columns, children, tableCaption, tableID,
}: ONSTableProps): ReactElement {
    return (
        <table
            className="ons-table"
            data-testid={tableID}
            id={tableID}
        >
            {tableCaption && <caption className="table__caption">{tableCaption}</caption>}
            <thead className="ons-table__head">
                <tr className="ons-table__row">
                    {
                        columns.map((title: string, index: number) => (
                            <th scope="col" className="ons-table__header" key={`${title}-${index}`}>{title}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="ons-table__body">
                {children}
            </tbody>
        </table>
    );
}

export default ONSTable;
