import React, { ReactElement, useEffect, useState } from "react";

export type ExpandableContent = {
    content: ReactElement
    title: string
}

export interface ExpandableProps extends ExpandableContent {
    id: number
    panelsOpen: boolean[]
    setPanelsOpen: (panelsOpen: boolean[]) => void
}

function Expandable({ title, content, id, panelsOpen, setPanelsOpen }: ExpandableProps): ReactElement {
    function togglePanel(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) {
        const newPanelsOpen = [...panelsOpen]
        newPanelsOpen[id] = !newPanelsOpen[id]
        setPanelsOpen(newPanelsOpen)

        event.preventDefault();
    }

    function panelIsOpen(): boolean {
        return panelsOpen[id]
    }

    return (
        <details id={`accordion-${id}`}
            className={`ons-collapsible ons-js-collapsible ons-collapsible--accordion `}
            data-btn-close="Hide" 
            data-group="accordion"
            open={panelIsOpen()}
        >
            <summary className="ons-collapsible__heading ons-js-collapsible-heading"
                role="link"
                data-testid={`accordion-${id}-heading`}
                onClick={togglePanel}
                onKeyPress={togglePanel}
                aria-expanded={panelIsOpen() ? "true" : "false"}
                aria-controls={`accordion-${id}`}
                data-ga-action={panelIsOpen() ? "Close panel" : "Open panel"}
                tabIndex={0}
            >
                <div className="ons-collapsible__controls">
                    <h2 className="ons-collapsible__title">{title}</h2>
                    <span className="ons-collapsible__icon">
                        <svg className="ons-svg-icon"
                            viewBox="0 0 7.5 12.85"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false">
                            <path
                                d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                                transform="translate(-5.02 -1.59)" />
                        </svg>
                    </span>
                </div>
            </summary>
            <div id={`accordion-${id}-content`}
                data-testid={`accordion-${id}-content`}
                className="ons-collapsible__content ons-js-collapsible-content"
                aria-hidden={(panelIsOpen() ? "false" : "true")}
            >
                {content}
            </div>
        </details>
    )
}

interface AccordionProps {
    ShowAllEnabled?: boolean
    Expandables: ExpandableContent[]
}

interface ShowAllProps {
    showAllEnabled?: boolean
    panelsOpen: boolean[]
    setPanelsOpen: React.Dispatch<React.SetStateAction<boolean[]>>
}

function ShowAll({ showAllEnabled, panelsOpen, setPanelsOpen }: ShowAllProps): ReactElement {
    const [showing, setShowing] = useState<boolean>(false);

    useEffect(() => {
        if (panelsOpen.includes(false)) {
            setShowing(false)
        } else {
            setShowing(true)
        }
    }, [panelsOpen, setShowing])

    if (showAllEnabled) {
        return (
            <button data-testid="accordion-show-all" type="button" className="ons-btn ons-js-collapsible-all ons-u-mb-s ons-btn--secondary ons-btn--small" data-close-all="Hide all" data-group="accordion"
                onClick={() => setPanelsOpen(new Array(panelsOpen.length).fill(!showing))}
            >
                <span className="ons-btn__inner ons-js-collapsible-all-inner">{showing ? "Hide all" : "Show all"}</span>
            </button>
        )
    }
    return <></>
}

export default function Accordion({ ShowAllEnabled, Expandables }: AccordionProps): ReactElement {
    const expandableStates = []
    for (let i = 0; i < Expandables.length; i++) {
        expandableStates.push(false)
    }
    const [panelsOpen, setPanelsOpen] = useState<boolean[]>(expandableStates);

    return (
        <div id="accordion" className="ons-accordion">
            <ShowAll showAllEnabled={ShowAllEnabled} panelsOpen={panelsOpen} setPanelsOpen={setPanelsOpen} />
            {
                Expandables.map((expandable: ExpandableContent, index: number) => {
                    return <Expandable
                        key={`accordion-${index}`}
                        content={expandable.content}
                        title={expandable.title} 
                        id={index}
                        setPanelsOpen={setPanelsOpen}
                        panelsOpen={panelsOpen} />
                })
            }
        </div>
    )
}
