import { ReactElement } from "react";

export interface BetaBannerProps {
  /** The URL for the feedback link. Defaults to the ONS Service-Now portal. */
  feedbackLink?: string;
}

/**
 * The Beta Banner is used to inform users that the service is in a beta phase
 * and to encourage them to provide feedback via a specified link.
 */
export const BetaBanner = ({
  feedbackLink = "https://ons.service-now.com/",
}: BetaBannerProps): ReactElement => {
  return (
    <div className="ons-phase-banner">
      <div className="ons-container ">
        <div className="ons-grid ons-grid--flex ons-grid--gutterless ons-grid--vertical-center ons-grid--no-wrap">
          <div className="ons-grid__col ons-col-auto ons-u-flex-no-grow">
            <h3 className="ons-phase-banner__badge">BETA</h3>
          </div>
          <div className="ons-grid__col ons-col-auto ons-u-flex-shrink">
            <p className="ons-phase-banner__desc ons-u-fs-s ons-u-mb-no">
              This is a new service – your&nbsp;
              <a href={feedbackLink}>feedback</a>
              &nbsp;will help us improve it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
