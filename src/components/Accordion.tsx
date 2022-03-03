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
    const [panelOpen, setPanelOpen] = useState<boolean>(panelsOpen[id])
    function togglePanel() {
        const newPanelsOpen = [...panelsOpen]
        newPanelsOpen[id] = !panelOpen
        setPanelsOpen(newPanelsOpen)
        setPanelOpen(!panelOpen)
        console.log(panelsOpen)
    }

    function panelIsOpen(): boolean {
        return panelOpen
    }

    useEffect(() => {
        setPanelOpen(panelsOpen[id])
    }, [panelsOpen])

    return (
        <div id={`accordion-${id}`}
            className={`collapsible js-collapsible collapsible--accordion collapsible--initialised ${(panelIsOpen() && "collapsible--open")}`}
            data-btn-close="Hide" data-group="accordion">
            <div className="collapsible__heading js-collapsible-heading"
                role="link"
                data-testid={`accordion-${id}-heading`}
                onClick={() => togglePanel()}
                onKeyPress={() => togglePanel()}
                aria-expanded={panelIsOpen() ? "true" : "false"}
                aria-controls={`accordion-${id}`}
                data-ga-action={panelIsOpen() ? "Close panel" : "Open panel"}
                tabIndex={0}
            >
                <div className="collapsible__controls">
                    <h2 className="collapsible__title">{title}</h2>
                    <span className="collapsible__icon">
                        <svg className="svg-icon"
                            viewBox="0 0 7.5 12.85"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false">
                            <path
                                d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                                transform="translate(-5.02 -1.59)" />
                        </svg>
                    </span>
                    <button type="button"
                        data-testid={`accordion-${id}-button`}
                        className="btn collapsible__btn js-collapsible-button u-d-no@xxs@s btn--secondary btn--small"
                        onClick={() => togglePanel()}
                        data-ga-action={panelIsOpen() ? "Close panel" : "Open panel"}>
                        <span className="btn__inner js-collapsible-button-inner">{panelIsOpen() ? "Hide" : "Show"}</span>
                    </button>
                </div>
            </div>
            <div id={`accordion-${id}-content`}
                data-testid={`accordion-${id}-content`}
                className="collapsible__content js-collapsible-content"
                aria-hidden={(panelIsOpen() ? "false" : "true")}>
                {content}
            </div>
        </div>
    )
}

interface AccordionProps {
    ShowAllEnabled?: boolean
    Expandables: ExpandableContent[]
}

export default function Accordion({ ShowAllEnabled, Expandables }: AccordionProps): ReactElement {
    const expandableStates = []
    for (let i = 0; i < Expandables.length; i++) {
        expandableStates.push(false)
    }
    const [panelsOpen, setPanelsOpen] = useState<boolean[]>(expandableStates);

    function ShowAll(): ReactElement {
        if (ShowAllEnabled) {
            let expandableStates: boolean[]
            let showing: boolean
            if (panelsOpen.includes(false)) {
                expandableStates = new Array(panelsOpen.length).fill(true)
                showing = false
            } else {
                expandableStates = new Array(panelsOpen.length).fill(false)
                showing = true
            }
            return (
                <button data-testid="accordion-show-all" type="button" className="btn js-collapsible-all u-mb-s btn--secondary btn--small" data-close-all="Hide all" data-group="accordion"
                    onClick={() => setPanelsOpen(expandableStates)}>
                    <span className="btn__inner js-collapsible-all-inner">{showing ? "Hide all" : "Show all"}</span>
                </button>
            )
        }
        return <></>
    }

    return (
        <div id="accordion" className="accordion">
            <ShowAll />
            {
                Expandables.map((expandable: ExpandableContent, index: number) => {
                    return <Expandable
                        key={`accordion-${index}`}
                        content={expandable.content}
                        title={expandable.title} id={index}
                        setPanelsOpen={setPanelsOpen}
                        panelsOpen={panelsOpen} />
                })
            }
        </div>
    )
}