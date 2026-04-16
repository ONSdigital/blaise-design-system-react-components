import { ReactElement } from "react";

export interface ErrorPanelProps {
    /** The error message displayed inside the panel. Defaults to a generic service availability message. */
    text?: string;
}

export const ONSErrorPanel = ({
    text = "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later.",
}: ErrorPanelProps): ReactElement => {
    return (
        <div className="ons-panel ons-panel--error ons-panel--no-title">
            <div className="ons-panel__body">
                <p>{text}</p>
            </div>
        </div>
    );
};
