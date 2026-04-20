import { ReactElement } from "react";
import { Panel } from "./Panel";

export interface ErrorPanelProps {
    /** The error message displayed inside the panel. Defaults to a generic service availability message. */
    text?: string;
    /** If true, hides the panel from the DOM. */
    hidden?: boolean;
    /** Optional test ID for automated testing. */
    testID?: string;
    /** Unique HTML ID for the panel element. */
    id?: string;
}

export const ErrorPanel = ({
    text = "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later.",
    hidden,
    testID,
    id,
}: ErrorPanelProps): ReactElement => {
    return (
        <Panel
            status="error"
            hidden={hidden}
            testID={testID}
            id={id}
        >
            <p>{text}</p>
        </Panel>
    );
};
