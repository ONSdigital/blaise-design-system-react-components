import { ReactElement } from "react";

export interface Props {
  /** The visible text content of the link. */
  text: string;
  /** The destination URL (should be a full URL for external links). */
  link: string;
  /** Optional accessibility label. */
  ariaLabel?: string;
  /** Optional custom HTML ID for the anchor element. */
  id?: string;
}

export const ExternalLink = ({ text, link, ariaLabel, id }: Props): ReactElement => {
  return (
    <a
      href={link}
      id={id}
      aria-label={ariaLabel}
      className="ons-external-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="ons-external-link__text">{text}</span>
      <svg
        className="ons-svg-icon"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
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
    </a>
  );
};
