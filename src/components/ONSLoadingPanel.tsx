import React from "react";
import Loader from "react-loader-spinner";
import { ONSPanel } from "./ONSPanel";

export interface Props {
    hidden?: boolean
    message?: string
}

/**
 * This is a Standard Panel with an info status, with a loading spinner and "Loading" message.
 * Uses [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) for the loading spinner.
 */
export const ONSLoadingPanel = ({ hidden, message }: Props) => (
    <ONSPanel hidden={hidden}>
        <div style={{ textAlign: "center" }}>
            <Loader
                type="TailSpin"
                color="#064868"
                height={30}
                width={30}
            />
            {
                message ? message : "Loading"
            }
        </div>
    </ONSPanel>
);
