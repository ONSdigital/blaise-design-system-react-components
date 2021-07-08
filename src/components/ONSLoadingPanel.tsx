import React from "react";
import Loader from "react-loader-spinner";
import {ONSPanel} from "./ONSPanel";

export interface Props {
    hidden?: boolean
    message?: string
}

export const ONSLoadingPanel = ({hidden, message}: Props) => {
    return (
        <ONSPanel hidden={hidden}>
            <div style={{textAlign: "center"}}>
                <Loader
                    type="TailSpin"
                    color="#064868"
                    height={30}
                    width={30}
                />
                {
                    message ?  message : "Loading"
                }
            </div>
        </ONSPanel>
    );
};

