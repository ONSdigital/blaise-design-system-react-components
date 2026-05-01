import { ReactNode, useState, useId, SyntheticEvent } from "react";

/** Props for Collapsible. */
export interface Props {
  /** Panel content. */
  children: ReactNode;
  /** Panel title. */
  title: string;
  /** Element ID. */
  id?: string;
}

/** Renders a collapsible panel. */
export const Collapsible = ({ children, title, id }: Props) => {
  const [panelOpen, setPanelOpen] = useState<boolean>(false);
  const generatedId = useId();
  const baseId = id || `collapsible-${generatedId}`;

  const handleToggle = (event: SyntheticEvent) => {
    event.preventDefault();
    setPanelOpen((prevOpen) => !prevOpen);
  };

  return (
    <div
      id={baseId}
      className={`ons-details ons-details--initialised ons-u-mt-l ${panelOpen ? "ons-details--open" : ""}`}
      data-save-state="true"
      role="group"
    >
      <div
        className="ons-details__heading"
        role="button"
        data-testid={id ? `${id}-heading` : undefined}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleToggle(e);
          }
        }}
        tabIndex={0}
        aria-expanded={panelOpen}
        aria-controls={`${baseId}-content`}
        data-ga-action={`${panelOpen ? "Close" : "Open"} panel`}
      >
        <h2 className="ons-details__title ons-u-fs-r--b">{title}</h2>
        <span className="ons-details__icon">
          <svg
            className="ons-icon"
            viewBox="0 0 8 13"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            fill="currentColor"
            role="img"
          >
            <path
              d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
              transform="translate(-5.02 -1.59)"
            />
          </svg>
        </span>
      </div>
      <div
        id={`${baseId}-content`}
        className="ons-details__content"
        aria-hidden={!panelOpen}
        data-testid={id ? `${id}-content` : undefined}
      >
        {children}
      </div>
    </div>
  );
};
