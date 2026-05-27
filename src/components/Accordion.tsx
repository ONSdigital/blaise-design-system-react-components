import {
  type Dispatch,
  type KeyboardEvent,
  type ReactNode,
  type SetStateAction,
  useId,
  useState,
} from "react";

/** Accordion panel. */
export type ExpandableContent = {
  /** Panel content. */
  content: ReactNode;
  /** Element ID. */
  id?: string;
  /** Panel title. */
  title: string;
};

/** Props for Accordion. */
export interface Props {
  /** Whether to show the Show all / Hide all button. */
  showAllEnabled?: boolean;
  /** Accordion panels. */
  expandables: ExpandableContent[];
  /** Element ID. */
  id?: string;
  /** Whether every panel starts expanded. */
  expanded?: boolean;
}

interface ExpandableProps extends ExpandableContent {
  panelBaseId: string;
  panelsOpen: boolean[];
  setPanelsOpen: Dispatch<SetStateAction<boolean[]>>;
  index: number;
  accordionBaseId: string;
  hasExplicitId: boolean;
}

interface ShowAllProps {
  showAllEnabled?: boolean;
  panelsOpen: boolean[];
  setPanelsOpen: Dispatch<SetStateAction<boolean[]>>;
  accordionBaseId: string;
  hasExplicitId: boolean;
}

const Expandable = ({
  title,
  content,
  panelBaseId,
  panelsOpen,
  setPanelsOpen,
  index,
  accordionBaseId,
  hasExplicitId,
}: ExpandableProps) => {
  const togglePanel = () => {
    setPanelsOpen((prevPanels) => {
      const newPanels = [...prevPanels];

      newPanels[index] = !newPanels[index];

      return newPanels;
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePanel();
    }
  };

  const panelIsOpen = panelsOpen[index];

  return (
    <div
      id={panelBaseId}
      data-group={accordionBaseId}
      className={`ons-details ons-details--initialised ons-details--accordion ${panelIsOpen ? "ons-details--open" : ""}`}
    >
      <div
        className="ons-details__heading"
        role="button"
        tabIndex={0}
        data-testid={hasExplicitId ? `${panelBaseId}-heading` : undefined}
        onClick={togglePanel}
        onKeyDown={handleKeyDown}
        aria-expanded={panelIsOpen}
        aria-controls={`${panelBaseId}-content`}
        data-ga-action={panelIsOpen ? "Close panel" : "Open panel"}
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
        id={`${panelBaseId}-content`}
        data-testid={hasExplicitId ? `${panelBaseId}-content` : undefined}
        className="ons-details__content"
        aria-hidden={!panelIsOpen}
      >
        {content}
      </div>
    </div>
  );
};

const ShowAll = ({
  showAllEnabled,
  panelsOpen,
  setPanelsOpen,
  accordionBaseId,
  hasExplicitId,
}: ShowAllProps) => {
  if (!showAllEnabled) return null;

  const showing = !panelsOpen.includes(false);

  return (
    <button
      data-testid={hasExplicitId ? `${accordionBaseId}-show-all` : undefined}
      type="button"
      className="ons-btn ons-accordion__toggle-all ons-u-mb-s ons-btn--secondary ons-btn--small"
      onClick={() => setPanelsOpen((prev) => new Array(prev.length).fill(!showing))}
      data-toggle-button={`${accordionBaseId}-toggle-all`}
      data-close-all="Hide all"
      data-open-aria-label="Show all sections"
      data-close-aria-label="Hide all sections"
      data-group={accordionBaseId}
    >
      <span className="ons-btn__inner ons-accordion__toggle-all-inner">
        <span className="ons-btn__text">{showing ? "Hide all" : "Show all"}</span>
      </span>
    </button>
  );
};

/** Renders an accordion. */
export const Accordion = ({ showAllEnabled, expandables, id, expanded }: Props) => {
  const generatedId = useId();
  const baseId = id ?? `accordion-${generatedId}`;
  const isParentIdExplicit = Boolean(id);

  const [panelsOpen, setPanelsOpen] = useState<boolean[]>(() =>
    new Array(expandables.length).fill(expanded ?? false),
  );

  return (
    <div
      id={baseId}
      className="ons-accordion"
      data-testid={id ? `${id}-accordion` : undefined}
    >
      <ShowAll
        showAllEnabled={showAllEnabled}
        panelsOpen={panelsOpen}
        setPanelsOpen={setPanelsOpen}
        accordionBaseId={baseId}
        hasExplicitId={isParentIdExplicit}
      />
      {expandables.map((expandable: ExpandableContent, index: number) => {
        const panelBaseId = expandable.id ?? `${baseId}-panel-${index}`;
        const panelHasExplicitId = !!expandable.id || isParentIdExplicit;

        return (
          <Expandable
            key={panelBaseId}
            content={expandable.content}
            title={expandable.title}
            panelBaseId={panelBaseId}
            index={index}
            accordionBaseId={baseId}
            setPanelsOpen={setPanelsOpen}
            panelsOpen={panelsOpen}
            hasExplicitId={panelHasExplicitId}
          />
        );
      })}
    </div>
  );
};
