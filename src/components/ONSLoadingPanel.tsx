import { TailSpin } from "react-loader-spinner";
import { ONSPanel } from "./ONSPanel";

export interface Props {
    /** If true, the entire panel is removed from the visual flow. */
    hidden?: boolean;
    /** Optional custom text to display beneath the loading spinner. Defaults to "Loading". */
    message?: string;
}

export const ONSLoadingPanel = ({ hidden, message }: Props) => (
    <ONSPanel hidden={hidden}>
        <div className="ons-u-ta-center">
            <TailSpin
                color="#064868"
                height={30}
                width={30}
                ariaLabel="loading-indicator"
            />
            <br />
            {message ?? "Loading"}
        </div>
    </ONSPanel>
);
