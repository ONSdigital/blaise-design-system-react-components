import React from "react";

export interface Props {
    children: any,
    status?: string,
    spacious?: boolean,
    id?: string,
    hidden?: boolean,
    testID?: string
}

export const ONSPanel = (props: Props) => {
    const className = "panel panel--" + (props.status === "success" ? "success" : props.status === "error" ? "error" : "info") + " panel--no-title " + (props.spacious ? "panel--spacious" : "") + " u-mt-m";
    return (
        <div data-testid={props.testID} id={props.id} className={className} hidden={props.hidden}>
            {
                props.status === "success" &&
                <span className="panel__icon">
                <svg className="svg-icon" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z"
                    transform="translate(-1.51 -3.04)"/>
                </svg>
                </span>
            }
            <div className="panel__body">
                {props.children}
            </div>
        </div>
    );
};

