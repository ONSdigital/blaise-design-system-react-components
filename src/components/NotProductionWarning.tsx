import { type ReactElement } from "react";

/** Props for NotProductionWarning. */
export interface Props {
  /** Element ID. */
  id?: string;
}

/** Renders the non-production warning banner. */
export const NotProductionWarning = ({ id }: Props = {}): ReactElement => {
  return (
    <div
      id={id}
      data-testid={id ? `${id}-warning` : undefined}
      style={{ background: "#222", color: "#fff" }}
    >
      <div className="ons-container">
        <div
          className="ons-panel ons-panel--warn-branded ons-panel--no-title"
          style={{ background: "#222" }}
        >
          <span
            className="ons-panel__icon"
            aria-hidden="true"
            style={{ color: "#222" }}
          >
            !
          </span>
          <span className="ons-panel__assistive-text ons-u-vh">Warning: </span>
          <div className="ons-panel__body">
            <p className="ons-u-mb-no">
              This is not a production environment. Do not upload any production data to this
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
