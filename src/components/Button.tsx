import { MouseEventHandler, CSSProperties, ReactElement } from "react";

/** Props for Button. */
export interface Props {
  /** Visible button text. */
  label: string;
  /** Element ID. */
  id?: string;
  /** Whether to use the primary variant. */
  primary: boolean;
  /** Whether to use the small variant. */
  small?: boolean;
  /** Whether to show a loading spinner and disable the button. */
  loading?: boolean;
  /** Right margin in pixels. */
  marginRight?: number;
  /** Called when the button is clicked. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Whether to disable the button. */
  disabled?: boolean;
  /** Whether to use the link-style variant. */
  action?: boolean;
  /** Whether to hide the button. */
  hidden?: boolean;
  /** Whether to use `type="submit"`. */
  submit?: boolean;
}

/** Renders a button. */
export const Button = ({
  label,
  id,
  primary,
  small,
  loading,
  marginRight,
  onClick,
  disabled,
  action,
  hidden,
  submit,
}: Props): ReactElement => {
  const styles: CSSProperties = {
    display: hidden ? "none" : undefined,
    marginRight: marginRight ? `${marginRight}px` : undefined,
  };

  const classNames = [
    "ons-btn",
    action && "ons-btn--link",
    loading && "ons-btn--loader ons-is-loading",
    !primary && "ons-btn--secondary",
    small && "ons-btn--small",
    disabled && "ons-btn--disabled",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      id={id}
      style={styles}
      type={submit ? "submit" : "button"}
      disabled={loading || disabled}
      className={classNames}
      onClick={onClick}
      data-testid={id ? `${id}-button` : undefined}
    >
      <span className="ons-btn__inner">
        <span className="ons-btn__text">{label}</span>
        {loading && (
          <svg
            className="ons-icon ons-u-ml-2xs"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            aria-hidden="true"
            focusable="false"
            fill="currentColor"
          >
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="none"
            />
            {[...Array(12)].map((_, i) => (
              <rect
                key={i}
                x="46.5"
                y="40"
                width="7"
                height="20"
                rx="5"
                ry="5"
                transform={`rotate(${i * 30} 50 50) translate(0 -30)`}
              >
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="1s"
                  begin={`${i * (1 / 12)}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </svg>
        )}
      </span>
    </button>
  );
};
