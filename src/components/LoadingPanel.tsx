import { type CSSProperties, type ReactElement } from "react";

import { Panel } from "./Panel";

const loadingPanelContentStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const loadingIconWrapperStyles: CSSProperties = {
  display: "flex",
  marginRight: "1rem",
};

const loadingIconStyles: CSSProperties = {
  width: "30px",
  height: "30px",
};

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
        className="ons-u-pt-xs ons-u-pb-xs"
        style={loadingPanelContentStyles}
      >
        <div style={loadingIconWrapperStyles}>
          <svg
            style={loadingIconStyles}
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
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((rotation, i) => (
              <rect
                key={rotation}
                x="46.5"
                y="40"
                width="7"
                height="20"
                rx="5"
                ry="5"
                transform={`rotate(${rotation} 50 50) translate(0 -30)`}
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
        </div>
        <span>{message}</span>
      </div>
    </Panel>
  );
};
