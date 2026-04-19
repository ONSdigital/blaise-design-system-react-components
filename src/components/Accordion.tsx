import { ReactNode, useState, MouseEvent, KeyboardEvent, Dispatch, SetStateAction } from "react";

/** Defines the structure for an individual panel within the accordion. */
export type ExpandableContent = {
    /** The React nodes to display when the panel is expanded. */
    content: ReactNode;
    /** Unique ID for the content area. */
    contentId?: string;
    /** The text displayed in the clickable header of the panel. */
    title: string;
};

interface ExpandableProps extends ExpandableContent {
    expandableIndex: number;
    panelsOpen: boolean[];
    setPanelsOpen: Dispatch<SetStateAction<boolean[]>>;
}

/** Internal sub-component for individual accordion rows. */
const Expandable = ({
    title,
    content,
    contentId,
    expandableIndex,
    panelsOpen,
    setPanelsOpen,
}: ExpandableProps) => {
    const safeId = contentId || `expandable-${expandableIndex}`;

    const togglePanel = (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => {
        event.preventDefault();
        setPanelsOpen((prevPanels) => {
            const newPanels = [...prevPanels];

            newPanels[expandableIndex] = !newPanels[expandableIndex];

            return newPanels;
        });
    };

    const panelIsOpen = panelsOpen[expandableIndex];

    return (
        <details
            id={`${safeId}-accordion-${expandableIndex}`}
            className="ons-collapsible ons-js-collapsible ons-collapsible--accordion"
            data-btn-close="Hide"
            data-group="accordion"
            open={panelIsOpen}
        >
            <summary
                className="ons-collapsible__heading ons-js-collapsible-heading"
                role="button"
                data-testid={`${safeId}-accordion-${expandableIndex}-heading`}
                onClick={togglePanel}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        togglePanel(e);
                    }
                }}
                aria-expanded={panelIsOpen}
                aria-controls={`${safeId}-accordion-${expandableIndex}-content`}
                data-ga-action={panelIsOpen ? "Close panel" : "Open panel"}
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
                            aria-hidden="true"
                        >
                            <path
                                d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0-.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                                transform="translate(-5.02 -1.59)"
                            />
                        </svg>
                    </span>
                </div>
            </summary>
            <div
                id={`${safeId}-accordion-${expandableIndex}-content`}
                data-testid={`${safeId}-accordion-${expandableIndex}-content`}
                className="ons-collapsible__content ons-js-collapsible-content"
                aria-hidden={!panelIsOpen}
            >
                {content}
            </div>
        </details>
    );
};

export interface Props {
    /** Toggles the visibility of the 'Show All' / 'Hide All' button. */
    ShowAllEnabled?: boolean;
    /** An array of objects containing the title and content for each panel. */
    Expandables: ExpandableContent[];
    /** A unique ID for the accordion container. */
    ContentId: string;
    /** Sets the initial expanded state of all accordion panels. */
    Expanded?: boolean;
}

interface ShowAllProps {
    showAllEnabled?: boolean;
    panelsOpen: boolean[];
    setPanelsOpen: Dispatch<SetStateAction<boolean[]>>;
    contentId: string;
}

const ShowAll = ({ showAllEnabled, panelsOpen, setPanelsOpen, contentId }: ShowAllProps) => {
    if (!showAllEnabled) return null;

    const showing = !panelsOpen.includes(false);

    return (
        <button
            data-testid={`${contentId}-accordion-show-all`}
            type="button"
            className="ons-btn ons-js-collapsible-all ons-u-mb-s ons-btn--secondary ons-btn--small"
            onClick={() => setPanelsOpen((prev) => new Array(prev.length).fill(!showing))}
        >
            <span className="ons-btn__inner ons-js-collapsible-all-inner">
                {showing ? "Hide all" : "Show all"}
            </span>
        </button>
    );
};

export const Accordion = ({
    // TODO: force camelCase, will break consumers
    ShowAllEnabled: showAllEnabled,
    Expandables: expandables,
    ContentId: contentId,
    Expanded: expanded,
}: Props) => {
    const [panelsOpen, setPanelsOpen] = useState<boolean[]>(() =>
        new Array(expandables.length).fill(expanded ?? false),
    );

    return (
        <div
            id={`${contentId}-accordion`}
            className="ons-accordion"
        >
            <ShowAll
                showAllEnabled={showAllEnabled}
                panelsOpen={panelsOpen}
                setPanelsOpen={setPanelsOpen}
                contentId={contentId}
            />
            {expandables.map((expandable: ExpandableContent, index: number) => (
                <Expandable
                    key={`${expandable.contentId || "item"}-${index}`}
                    content={expandable.content}
                    contentId={expandable.contentId}
                    title={expandable.title}
                    expandableIndex={index}
                    setPanelsOpen={setPanelsOpen}
                    panelsOpen={panelsOpen}
                />
            ))}
        </div>
    );
};
