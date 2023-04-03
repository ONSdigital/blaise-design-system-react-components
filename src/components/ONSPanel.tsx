import React from "react";

export interface Props {
    /**
     * Render any standard HTML (or other React components) within the panel
     */
    children: React.ReactNode,
    status?: "success" | "error" | "info" | "warn",
    spacious?: boolean,
    id?: string,
    hidden?: boolean,
    testID?: string
    /**
     * Uses a bigger tick icon for the success panel only.
     */
    bigIcon?: boolean
}

export const ONSPanel = (props: Props) => {
    const className = `ons-panel ons-panel--${props.status ? props.status : "info"} ons-panel--no-title ${props.spacious ? "ons-panel--spacious" : ""} ons-u-mt-m`;
    return (
        <div data-testid={props.testID} id={props.id} className={className} hidden={props.hidden}>
            {
                props.status === "success"
                && (
                    <span className="ons-panel__icon">
                        <svg
                            className={`ons-svg-icon ${props.bigIcon === true ? "ons-svg-icon--xl" : ""}`}
                            viewBox="0 0 13 10"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z"
                                transform="translate(-1.51 -3.04)"
                            />
                        </svg>
                    </span>
                )
            }
            {
                props.status === "warn"
                && (
                    <>
                        <span className="ons-panel__icon" aria-hidden="true">!</span>
                        <span className="ons-u-vh">Warning: </span>
                    </>
                )
            }
            <div className={`ons-panel__body ${props.bigIcon === true ? "ons-svg-icon-margin--xl" : ""}`}>
                {props.children}
            </div>
        </div>
    );
};
