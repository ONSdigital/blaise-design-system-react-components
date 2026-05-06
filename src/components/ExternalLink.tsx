import { type ReactElement } from "react";

/** Props for ExternalLink. */
export interface Props {
  /** Visible link text. */
  text: string;
  /** Destination URL for the link. */
  link: string;
  /** Accessible label override. */
  ariaLabel?: string;
  /** Element ID. */
  id?: string;
}

/** Renders an external link. */
export const ExternalLink = ({ text, link, ariaLabel, id }: Props): ReactElement => {
  return (
    <a
      href={link}
      id={id}
      data-testid={id ? `${id}-external-link` : undefined}
      aria-label={ariaLabel}
      className="ons-external-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="ons-external-link__text">{text}</span>
      <span className="ons-external-link__icon">
        &nbsp;
        <svg
          className="ons-icon"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
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
  );
};
