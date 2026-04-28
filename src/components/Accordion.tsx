import { ReactNode, useState, MouseEvent, KeyboardEvent, Dispatch, SetStateAction } from "react";

export type ExpandableContent = {
  content: ReactNode;
  contentId?: string;
  title: string;
};

interface ExpandableProps extends ExpandableContent {
  expandableIndex: number;
  panelsOpen: boolean[];
  setPanelsOpen: Dispatch<SetStateAction<boolean[]>>;
  accordionGroupId: string;
}

const Expandable = ({
  title,
  content,
  contentId,
  expandableIndex,
  panelsOpen,
  setPanelsOpen,
  accordionGroupId,
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
    <div
      id={`${safeId}-accordion-${expandableIndex}`}
      className={`ons-details ons-details--initialised ons-details--accordion ${panelIsOpen ? "ons-details--open" : ""}`}
      data-group={accordionGroupId}
    >
      <div
        className="ons-details__heading"
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
        id={`${safeId}-accordion-${expandableIndex}-content`}
        data-testid={`${safeId}-accordion-${expandableIndex}-content`}
        className="ons-details__content"
        aria-hidden={!panelIsOpen}
      >
        {content}
      </div>
    </div>
  );
};

export interface Props {
  /** Toggles the visibility of the 'Show All' / 'Hide All' button. */
  ShowAllEnabled?: boolean;
  /** An array of panel definitions with title and content. */
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
      className="ons-btn ons-accordion__toggle-all ons-u-mb-s ons-btn--secondary ons-btn--small"
      onClick={() => setPanelsOpen((prev) => new Array(prev.length).fill(!showing))}
      data-toggle-button={`${contentId}-accordion-toggle-all`}
      data-close-all="Hide all"
      data-open-aria-label="Show all sections"
      data-close-aria-label="Hide all sections"
      data-group={`${contentId}-accordion`}
    >
      <span className="ons-btn__inner ons-accordion__toggle-all-inner">
        <span className="ons-btn__text">{showing ? "Hide all" : "Show all"}</span>
      </span>
    </button>
  );
};

export const Accordion = ({
  ShowAllEnabled: showAllEnabled,
  Expandables: expandables,
  ContentId: contentId,
  Expanded: expanded,
}: Props) => {
  const [panelsOpen, setPanelsOpen] = useState<boolean[]>(() =>
    new Array(expandables.length).fill(expanded ?? false),
  );

  const accordionGroupId = `${contentId}-accordion`;

  return (
    <div
      id={accordionGroupId}
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
          accordionGroupId={accordionGroupId}
        />
      ))}
    </div>
  );
};
