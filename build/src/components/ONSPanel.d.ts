import React from "react";
export interface Props {
    /**
     * Render any standard HTML (or other React components) within the panel
     */
    children: React.ReactNode;
    status?: "success" | "error" | "info" | "warn";
    spacious?: boolean;
    id?: string;
    hidden?: boolean;
    testID?: string;
    /**
     * Uses a bigger tick icon for the success panel only.
     */
    bigIcon?: boolean;
}
export declare const ONSPanel: (props: Props) => JSX.Element;
