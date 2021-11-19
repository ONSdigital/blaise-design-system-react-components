/// <reference types="react" />
export interface Props {
    children: any;
    status?: "success" | "error" | "info" | "warn";
    spacious?: boolean;
    id?: string;
    hidden?: boolean;
    testID?: string;
    bigIcon?: boolean;
}
export declare const ONSPanel: (props: Props) => JSX.Element;
