import { ReactElement } from "react";
import { Panel } from "./Panel";

/** Props for LoadingPanel. */
export interface Props {
  /** When true, renders nothing. */
  hidden?: boolean;
  /** Loading message. */
  message?: string;
  /** Element ID. */
  id?: string;
}

/** Renders a loading panel. */
export const LoadingPanel = ({
  hidden,
  message = "Loading...",
  id,
}: Props): ReactElement | null => {
  if (hidden) return null;

  return (
    <Panel id={id}>
      <div
        className="ons-panel__body ons-u-pt-xs ons-u-pb-xs"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{ display: "flex", marginRight: "1rem" }}>
          <svg
            style={{ width: "30px", height: "30px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            aria-hidden="true"
            focusable="false"
            fill="#064868"
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
                  begin={`${i * 0.08333333333333333}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </svg>
        </div>
        <span>{message}</span>
      </div>
    </Panel>
  );
};
