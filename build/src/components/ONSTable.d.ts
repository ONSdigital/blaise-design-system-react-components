import { ReactElement } from "react";
interface ONSTable {
    columns: string[];
    children: ReactElement;
    tableID?: string;
    tableCaption?: string;
}
export declare const ONSTable: ({ columns, children, tableCaption, tableID }: ONSTable) => ReactElement;
export default ONSTable;
