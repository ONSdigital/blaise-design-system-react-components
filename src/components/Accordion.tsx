import React, { ReactElement, useEffect, useState } from "react";

export type ExpandableContent = {
    content: ReactElement
    contentId: string
    title: string
};

export interface ExpandableProps extends ExpandableContent {
    expandableIndex: number
    panelsOpen: boolean[]
    setPanelsOpen: (panelsOpen: boolean[]) => void
}

function Expandable({
    title, content, contentId, expandableIndex, panelsOpen, setPanelsOpen,
}: ExpandableProps): ReactElement {
    function togglePanel(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) {
        const newPanelsOpen = [...panelsOpen];
        newPanelsOpen[expandableIndex] = !newPanelsOpen[expandableIndex];
        setPanelsOpen(newPanelsOpen);

        event.preventDefault();
    }

    function panelIsOpen(): boolean {
        return panelsOpen[expandableIndex];
    }

    return (
        <details
            id={`${contentId}-accordion-${expandableIndex}`}
            className="ons-collapsible ons-js-collapsible ons-collapsible--accordion "
            data-btn-close="Hide"
            data-group="accordion"
            open={panelIsOpen()}
        >
            <summary
                className="ons-collapsible__heading ons-js-collapsible-heading"
                role="link"
                data-testid={`${contentId}-accordion-${expandableIndex}-heading`}
                onClick={togglePanel}
                onKeyPress={togglePanel}
                aria-expanded={panelIsOpen() ? "true" : "false"}
                aria-controls={`${contentId}-accordion-${expandableIndex}`}
                data-ga-action={panelIsOpen() ? "Close panel" : "Open panel"}
                tabIndex={0}
            >
                <div className="ons-collapsible__controls">
                    <h2 className="ons-collapsible__title">{title}</h2>
                    <span className="ons-collapsible__icon">
                        <svg
                            className="ons-svg-icon"
                            viewBox="0 0 7.5 12.85"
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                        >
                            <path
                                d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                                transform="translate(-5.02 -1.59)"
                            />
                        </svg>
                    </span>
                </div>
            </summary>
            <div
                id={`${contentId}-accordion-${expandableIndex}-content`}
                data-testid={`${contentId}-accordion-${expandableIndex}-content`}
                className="ons-collapsible__content ons-js-collapsible-content"
                aria-hidden={(panelIsOpen() ? "false" : "true")}
            >
                {content}
            </div>
        </details>
    );
}

interface AccordionProps {
    ShowAllEnabled?: boolean
    Expandables: ExpandableContent[],
    ContentId: string,
    Expanded?: boolean
}

interface ShowAllProps {
    showAllEnabled?: boolean
    panelsOpen: boolean[]
    setPanelsOpen: React.Dispatch<React.SetStateAction<boolean[]>>
    contentId:string
}

function ShowAll({
    showAllEnabled, panelsOpen, setPanelsOpen, contentId,
}: ShowAllProps): ReactElement {
    const [showing, setShowing] = useState<boolean>(false);

    useEffect(() => {
        if (panelsOpen.includes(false)) {
            setShowing(false);
        } else {
            setShowing(true);
        }
    }, [panelsOpen, setShowing]);

    if (showAllEnabled) {
        return (
            <button
                data-testid={`${contentId}-accordion-show-all`}
                type="button"
                className="ons-btn ons-js-collapsible-all ons-u-mb-s ons-btn--secondary ons-btn--small"
                data-close-all="Hide all"
                data-group="accordion"
                onClick={() => setPanelsOpen(new Array(panelsOpen.length).fill(!showing))}
            >
                <span className="ons-btn__inner ons-js-collapsible-all-inner">{showing ? "Hide all" : "Show all"}</span>
            </button>
        );
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
}

export default function Accordion({
    ShowAllEnabled, Expandables, ContentId, Expanded,
}: AccordionProps): ReactElement {
    const expandableStates = new Array(Expandables.length).fill(Expanded ?? false);
    const [panelsOpen, setPanelsOpen] = useState<boolean[]>(expandableStates);

    return (
        <div id={`${ContentId}-accordion`} className="ons-accordion">
            <ShowAll showAllEnabled={ShowAllEnabled} panelsOpen={panelsOpen} setPanelsOpen={setPanelsOpen} contentId={ContentId} />
            {
                Expandables.map((expandable: ExpandableContent, index: number) => (
                    <Expandable
                        key={`${expandable.contentId}-accordion-${index}`}
                        content={expandable.content}
                        contentId={expandable.contentId}
                        title={expandable.title}
                        expandableIndex={index}
                        setPanelsOpen={setPanelsOpen}
                        panelsOpen={panelsOpen}
                    />
                ))
            }
        </div>
    );
}
