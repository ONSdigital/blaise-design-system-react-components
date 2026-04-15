import { ReactNode } from "react";

export interface Props {
    columns: string[];
    children: ReactNode;
    tableID?: string;
    tableCaption?: string;
}

export const ONSTable = ({
    columns, children, tableCaption, tableID,
}: Props) => {
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
};
