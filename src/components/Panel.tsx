import { ReactElement, ReactNode, useId } from "react";

/** Props for Panel. */
export interface Props {
  /** Content rendered inside the panel body. */
  children: ReactNode;
  /** Panel status. */
  status?: "success" | "error" | "info" | "warn";
  /** Whether to use the spacious variant. */
  spacious?: boolean;
  /** Element ID. */
  id?: string;
  /** Whether to hide the panel. */
  hidden?: boolean;
  /** Whether to enlarge the success icon. */
  bigIcon?: boolean;
}

/** Renders a panel. */
export const Panel = ({
  children,
  status = "info",
  spacious,
  id,
  hidden,
  bigIcon,
}: Props): ReactElement | null => {
  const generatedId = useId();
  const baseId = id || `panel-${generatedId}`;

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
  const alertId = isSuccess ? `${baseId}-alert` : undefined;

  return (
    <div
      data-testid={id ? `${id}-panel` : undefined}
      id={baseId}
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
