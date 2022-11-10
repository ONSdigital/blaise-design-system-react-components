import React from "react";

export interface Props {
    label: string,
    id?: string,
    primary: boolean,
    small?: boolean,
    field?: boolean,
    loading?: boolean,
    marginRight?: number,
    /**
     * Optional click handler
     */
    onClick?: (...props: any[]) => void
    disabled?: boolean
    action?: boolean
    testid?: string
    hidden?: boolean
    submit?: boolean
}

export const ONSButton = (props: Props) => {
    const spacing = () => {
        if (props.hidden) return { display: "none" };
        return {
            marginRight: `${String(props.marginRight)}px`,
        };
    };

    const testId = () => {
        if (props.testid) {
            return `${props.testid}-button`;
        }
        return "button";
    };

    const className = `ons-btn ${
        props.action ? "ons-btn--link " : ""
    }${props.loading ? "ons-btn--loader ons-is-loading " : ""
    }${props.field ? "ons-field " : ""
    }${props.primary ? "" : "ons-btn--secondary "
    }${props.small ? "ons-btn--small " : ""
    }${props.disabled ? "ons-btn--disabled " : ""}`;
    return (
        <button
            id={props.id}
            style={spacing()}
            type={props.submit ? "submit" : "button"}
            disabled={props.loading || props.disabled}
            className={className}
            onClick={props.onClick}
            data-testid={testId()}
        >
            <span className="ons-btn__inner">
                {props.label}
                {
                    props.loading
                    && (
                        <svg
                            className="ons-svg-icon uil-default"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                        >
                            <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(0 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(30 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.08333333333333333s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(60 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.16666666666666666s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(90 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.25s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(120 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.3333333333333333s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(150 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.4166666666666667s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(180 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.5s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(210 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.5833333333333334s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(240 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.6666666666666666s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(270 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.75s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(300 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.8333333333333334s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect
                                x="46.5"
                                y="40"
                                width="7"
                                height="20"
                                rx="5"
                                ry="5"
                                transform="rotate(330 50 50) translate(0 -30)"
                            >
                                <animate
                                    attributeName="opacity"
                                    from="1"
                                    to="0"
                                    dur="1s"
                                    begin="0.9166666666666666s"
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </svg>
                    )
                }
            </span>
        </button>
    );
};
