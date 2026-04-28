import { ReactElement } from "react";

export interface Props {
  /** The error message displayed inside the panel. Defaults to a generic service availability message. */
  text?: string;
  /** If true, hides the panel from the DOM. */
  hidden?: boolean;
  /** Optional test ID for automated testing. */
  testID?: string;
  /** Unique HTML ID for the panel element. */
  id?: string;
}

export const ErrorPanel = ({
  text = "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later.",
  hidden,
  testID,
  id,
}: Props): ReactElement | null => {
  if (hidden) return null;

  return (
    <div
      id={id}
      data-testid={testID}
      className="ons-panel ons-panel--error ons-panel--no-title"
    >
      <span className="ons-panel__assistive-text ons-u-vh">Error: </span>
      <div className="ons-panel__body">
        <p>{text}</p>
      </div>
    </div>
  );
};
