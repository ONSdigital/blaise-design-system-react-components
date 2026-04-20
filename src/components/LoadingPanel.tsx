import { RotatingLines } from "react-loader-spinner";
import { Panel } from "./Panel";

export interface Props {
    /** If true, the entire panel is removed from the visual flow. */
    hidden?: boolean;
    /** Optional custom text to display beneath the loading spinner. Defaults to "Loading". */
    message?: string;
    /** Optional test ID for automated testing. */
    testID?: string;
    /** Unique HTML ID for the panel element. */
    id?: string;
}

/** Spinner provided by the `react-loader-spinner` package. */
export const LoadingPanel = ({ hidden, message, testID, id }: Props) => (
    <Panel
        hidden={hidden}
        testID={testID}
        id={id}
    >
        <div className="ons-u-ta-center">
            <RotatingLines
                color="#064868"
                height={30}
                width={30}
                ariaLabel="loading-indicator"
            />
            <br />
            {message ?? "Loading"}
        </div>
    </Panel>
);
