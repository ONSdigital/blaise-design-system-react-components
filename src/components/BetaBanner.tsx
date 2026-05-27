import { type ReactElement } from "react";

import { getSafeHref } from "../utilities/url";

/** Props for BetaBanner. */
export interface Props {
  /** Feedback URL. */
  feedbackLink?: string;
  /** Element ID. */
  id?: string;
}

/** Renders a beta banner. */
export const BetaBanner = ({
  feedbackLink = "https://ons.service-now.com/",
  id,
}: Props): ReactElement => {
  return (
    <div
      className="ons-phase-banner"
      id={id}
      data-testid={id ? `${id}-beta-banner` : undefined}
    >
      <div className="ons-container">
        <div className="ons-grid ons-grid-flex ons-grid--gutterless ons-grid-flex--vertical-center ons-grid-flex--no-wrap">
          <div className="ons-grid__col ons-col-auto ons-u-flex-no-grow ons-u-flex-no-shrink">
            <strong className="ons-phase-banner__badge">Beta</strong>
          </div>
          <div className="ons-grid__col ons-col-auto ons-u-flex-shrink">
            <p className="ons-phase-banner__desc ons-u-fs-s ons-u-mb-no">
              This is a new service. To help us improve it,{" "}
              <a
                href={getSafeHref(feedbackLink)}
                className="ons-external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ons-external-link__text">give feedback</span>
                <span className="ons-external-link__icon">
                  &nbsp;
                  <svg
                    className="ons-icon"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z"
                      transform="translate(-2 -1.99)"
                    />
                    <path
                      d="M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z"
                      transform="translate(-2 -1.99)"
                    />
                  </svg>
                </span>
                <span className="ons-external-link__new-window-description ons-u-vh">
                  (opens in a new tab)
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
