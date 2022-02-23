import React, {ReactElement, useState} from "react";

export type ExpandableContent = {
    content: ReactElement
    title: string
}

export interface ExpandableProps extends ExpandableContent {
    id: number
}

function Expandable({title, content, id}: ExpandableProps): ReactElement {
    const [panelOpen, setPanelOpen] = useState<boolean>(false);

    return (
        <div id={`accordion-${id}`}
             className={`collapsible js-collapsible collapsible--accordion ${(panelOpen && "collapsible--open")}`}
             data-btn-close={panelOpen ? "Hide" : "Show"} data-group="accordion">
            <div className="collapsible__heading js-collapsible-heading"
                 role="link"
                 data-testid={`accordion-${id}-heading`}
                 onClick={() => setPanelOpen(!panelOpen)}
                 onKeyPress={() => setPanelOpen(!panelOpen)}
                 aria-expanded={panelOpen ? "true": "false"}
                 aria-controls={`accordion-${id}`}
                 data-ga-action={panelOpen ? "Close panel" : "Open panel"}
                 open=""
            >
                <div className="collapsible__controls">
                    <h2 className="collapsible__title">{title}</h2>
                    <span className="collapsible__icon">
                        <svg className="svg-icon" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg"
                             focusable="false"
                             fill="currentColor">
                            <path
                                d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                                transform="translate(-5.02 -1.59)"/>
                        </svg>
                    </span>
                    <button type="button"
                            data-testid={`accordion-${id}-button`}
                            className="btn collapsible__btn js-collapsible-button u-d-no u-d-no@xxs@s btn--secondary btn--small"
                            onClick={() => setPanelOpen(!panelOpen)}
                            onKeyPress={() => setPanelOpen(!panelOpen)}
                            data-ga-action={panelOpen ? "Close panel" : "Open panel"}>
                        <span className="btn__inner js-collapsible-button-inner">{panelOpen ? "Hide" : "Show"}</span>
                    </button>
                </div>
            </div>
            <div id={`accordion-${id}-content`}
                 data-testid={`accordion-${id}-content`}
                 className="collapsible__content js-collapsible-content"
                 aria-hidden={(panelOpen ? "false" : "true")}>
                {content}
            </div>
        </div>
    )
}

interface AccordionProps {
    ShowAllEnabled?: boolean
    Expandables: ExpandableContent[]
}

export default function Accordion({ShowAllEnabled, Expandables}: AccordionProps): ReactElement {
    return (
        <div id="accordion" className="accordion">
            {
                Expandables.map((expandable: ExpandableContent, index: number) => {
                    return <Expandable key={`accordion-${index}`} content={expandable.content} title={expandable.title} id={index} />
                })
            }
        </div>
    )
}