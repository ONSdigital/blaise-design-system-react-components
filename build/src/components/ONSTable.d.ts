import { ReactElement } from "react";
interface ONSTableProps {
    columns: string[];
    children: ReactElement;
    tableID?: string;
    tableCaption?: string;
}
declare function ONSTable({ columns, children, tableCaption, tableID, }: ONSTableProps): ReactElement;
export default ONSTable;
