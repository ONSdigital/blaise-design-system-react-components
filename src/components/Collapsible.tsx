import React, {ReactElement, useState} from 'react';


export interface Props {
    children: ReactElement
    title: string
}

function Collapsible({children, title}: Props) {
    const [panelOpen, setPanelOpen] = useState<boolean>(false);

    return (
        <>
            <div id="collapsible-with-save"
                 className={`collapsible js-collapsible collapsible--initialised ${(panelOpen && "collapsible--open")} u-mt-l`}
                 data-btn-close="Hide this" data-save-state="true" role="group">
                <div className="collapsible__heading js-collapsible-heading"
                     role="link"
                     data-testid="collapsible-heading"
                     onClick={() => setPanelOpen(!panelOpen)}
                     onKeyPress={() => setPanelOpen(!panelOpen)}
                     tabIndex={0}
                     aria-expanded={panelOpen ? "true": "false"}
                     aria-controls="collapsible-with-save"
                     data-ga-action="Close panel">
                    <div className="collapsible__controls">
                        <div className="collapsible__title">{title}</div>
                        <span className="collapsible__icon">
                            <svg className="svg-icon"
                                 viewBox="0 0 7.5 12.85"
                                 xmlns="http://www.w3.org/2000/svg"
                                 focusable="false">
                                <path
                                    d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                                    transform="translate(-5.02 -1.59)"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div id="collapsible-with-save-content" className="collapsible__content js-collapsible-content"
                     aria-hidden={(panelOpen ? "false" : "true")} data-testid="collapsible-content">

                    {children}

                    <button type="button" className="btn btn--small js-collapsible-button btn--secondary u-mt-m"
                            aria-hidden="true" aria-controls="collapsible-with-save" data-ga-action="Close panel"
                            onClick={() => setPanelOpen(false)}>
                        <span className="btn__inner js-collapsible-button-inner">Hide this</span>
                        <span className="btn__context u-vh">{title}</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Collapsible;