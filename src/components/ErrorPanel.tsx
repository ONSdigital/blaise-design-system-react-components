import { ReactElement } from "react";

/** Props for ErrorPanel. */
export interface Props {
  /** Error message text. */
  text?: string;
  /** When true, renders nothing. */
  hidden?: boolean;
  /** Element ID. */
  id?: string;
}

/** Renders an error panel. */
export const ErrorPanel = ({
  text = "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later.",
  hidden,
  id,
}: Props): ReactElement | null => {
  if (hidden) return null;

  return (
    <div
      id={id}
      data-testid={id ? `${id}-error-panel` : undefined}
      className="ons-panel ons-panel--error ons-panel--no-title"
    >
      <span className="ons-panel__assistive-text ons-u-vh">Error: </span>
      <div className="ons-panel__body">
        <p>{text}</p>
      </div>
    </div>
  );
};
