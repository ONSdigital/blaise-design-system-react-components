import { ReactNode, useState, useId, SyntheticEvent } from "react";

export interface Props {
    /** The content revealed when the collapsible is opened. */
    children: ReactNode;
    /** The text displayed on the clickable summary heading. */
    title: string;
    /** Optional custom ID. If not provided, a unique ID is auto-generated. */
    id?: string;
}

export const Collapsible = ({ children, title, id }: Props) => {
    const [panelOpen, setPanelOpen] = useState<boolean>(false);    
    const uniqueId = useId();
    const componentId = id || `collapsible-${uniqueId}`;

    const handleToggle = (event: SyntheticEvent) => {
        event.preventDefault();
        setPanelOpen((prevOpen) => !prevOpen);
    };

    return (
        <details
            id={componentId}
            className="ons-collapsible ons-js-collapsible ons-u-mt-l"
            data-save-state="true"
            role="group"
            open={panelOpen}
        >
            <summary
                className="ons-collapsible__heading ons-js-collapsible-heading"
                role="button"
                data-testid="collapsible-heading"
                onClick={handleToggle}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleToggle(e);
                    }
                }}
                tabIndex={0}
                aria-expanded={panelOpen}
                aria-controls={`${componentId}-content`}
                data-ga-action={`${panelOpen ? "Close" : "Open"} panel`}
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
                id={`${componentId}-content`}
                className="ons-collapsible__content ons-js-collapsible-content"
                aria-hidden={!panelOpen}
                data-testid="collapsible-content"
            >
                {children}
            </div>
        </details>
    );
};
