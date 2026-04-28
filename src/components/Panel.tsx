import { ReactNode } from "react";

export interface Props {
  /** The content to render inside the panel body (typically strings or other React elements). */
  children: ReactNode;
  /** Determines the visual styling and icon of the panel. Defaults to "info". */
  status?: "success" | "error" | "info" | "warn";
  /** If true, increases the internal padding of the panel. */
  spacious?: boolean;
  /** Unique HTML ID for the panel element. */
  id?: string;
  /** If true, hides the panel from the DOM. */
  hidden?: boolean;
  /** Optional test ID for automated testing. */
  testID?: string;
  /** Uses a bigger tick icon. Note: This only applies when status is "success". */
  bigIcon?: boolean;
}

export const Panel = ({
  children,
  status = "info",
  spacious,
  id,
  hidden,
  testID,
  bigIcon,
}: Props) => {
  if (hidden) return null;

  const className = [
    "ons-panel",
    `ons-panel--${status}`,
    "ons-panel--no-title",
    spacious && "ons-panel--spacious",
    "ons-u-mt-m",
  ]
    .filter(Boolean)
    .join(" ");

  const assistiveTextMap: Record<NonNullable<Props["status"]>, string> = {
    info: "Important information:",
    success: "Completed:",
    warn: "Warning:",
    error: "Error:",
  };

  const isSuccess = status === "success";
  const alertId = isSuccess ? `${id || "panel"}-alert` : undefined;

  return (
    <div
      data-testid={testID}
      id={id}
      className={className}
      role={isSuccess ? "alert" : undefined}
      tabIndex={isSuccess ? -1 : undefined}
      aria-labelledby={alertId}
    >
      {status === "warn" && (
        <span
          className="ons-panel__icon"
          aria-hidden="true"
        >
          !
        </span>
      )}

      <span
        id={alertId}
        className="ons-panel__assistive-text ons-u-vh"
      >
        {assistiveTextMap[status]}{" "}
      </span>

      {isSuccess && (
        <span className="ons-panel__icon ons-u-fs-r">
          <svg
            className={`ons-icon ${bigIcon ? "ons-icon--xl" : ""}`}
            viewBox="0 0 13 10"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            fill="currentColor"
          >
            <path
              d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z"
              transform="translate(-1.51 -3.04)"
            />
          </svg>
        </span>
      )}

      <div className={`ons-panel__body ${bigIcon && isSuccess ? "ons-icon-margin--xl" : ""}`}>
        {children}
      </div>
    </div>
  );
};
