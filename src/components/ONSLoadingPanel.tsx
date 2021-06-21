import React from "react";
import Loader from "react-loader-spinner";
import {ONSPanel} from "./ONSPanel";

export interface Props {
    hidden: boolean
}

export const ONSLoadingPanel = ({hidden}: Props) => {
    return (
        <ONSPanel hidden={hidden}>
            <div style={{textAlign: "center"}}>
                <Loader
                    type="TailSpin"
                    color="#064868"
                    height={30}
                    width={30}
                />
                Loading
            </div>
        </ONSPanel>
    );
};

