import React, { ReactElement, useState } from "react";

export interface Props {
    /**
     * Render any standard HTML (or other React components) within the Collapsible
     */
    children: ReactElement
    title: string
}

function Collapsible({ children, title }: Props) {
    const [panelOpen, setPanelOpen] = useState<boolean>(false);

    return (
        <>
            <details
                id="collapsible-with-save"
                className={"ons-collapsible ons-js-collapsible ons-u-mt-l"}
                data-save-state="true"
                role="group"
            >
                <summary
                    className="ons-collapsible__heading ons-js-collapsible-heading"
                    role="link"
                    data-testid="collapsible-heading"
                    onClick={() => setPanelOpen(!panelOpen)}
                    onKeyPress={() => setPanelOpen(!panelOpen)}
                    tabIndex={0}
                    aria-expanded={panelOpen ? "true" : "false"}
                    aria-controls="collapsible-with-save"
                    data-ga-action={`${panelOpen ? "Close" : "Open"} panel`}
                >
                    <div className="ons-collapsible__controls">
                        <h2 className="ons-collapsible__title">{title}</h2>
                        <span className="ons-collapsible__icon">
                            <svg
                                className="ons-svg-icon"
                                viewBox="0 0 7.5 12.85"
                                xmlns="http://www.w3.org/2000/svg"
                                focusable="false">
                                <path
                                    d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                                    transform="translate(-5.02 -1.59)"/>
                            </svg>
                        </span>
                    </div>
                </summary>
                <div
                    id="collapsible-with-save-content"
                    className="ons-collapsible__content ons-js-collapsible-content"
                    aria-hidden={!panelOpen}
                    data-testid="collapsible-content"
                >
                    {children}
                </div>
            </details>
        </>
    );
}

export default Collapsible;
