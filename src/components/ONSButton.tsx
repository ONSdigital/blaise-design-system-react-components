import { MouseEventHandler, CSSProperties } from "react";

export interface Props {
    label: string;
    id?: string;
    primary: boolean;
    small?: boolean;
    field?: boolean;
    loading?: boolean;
    marginRight?: number;
    onClick?: MouseEventHandler<HTMLButtonElement>; // Optional click handler
    disabled?: boolean;
    action?: boolean;
    testid?: string;
    hidden?: boolean;
    submit?: boolean;
}

export const ONSButton = (props: Props) => {
    const getStyles = (): CSSProperties => {
        if (props.hidden) return { display: "none" };
        return {
            marginRight: props.marginRight ? `${props.marginRight}px` : undefined,
        };
    };

    const getTestId = () => {
        return props.testid ? `${props.testid}-button` : "button";
    };

    const classNames = [
        "ons-btn",
        props.action && "ons-btn--link",
        props.loading && "ons-btn--loader ons-is-loading",
        props.field && "ons-field",
        !props.primary && "ons-btn--secondary",
        props.small && "ons-btn--small",
        props.disabled && "ons-btn--disabled",
    ].filter(Boolean).join(" ");

    return (
        <button
            id={props.id}
            style={getStyles()}
            type={props.submit ? "submit" : "button"}
            disabled={props.loading || props.disabled}
            className={classNames}
            onClick={props.onClick}
            data-testid={getTestId()}
        >
            <span className="ons-btn__inner">
                {props.label}
                {props.loading && (
                    <svg
                        className="ons-svg-icon uil-default"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                        aria-hidden="true"
                    >
                        <rect x="0" y="0" width="100" height="100" fill="none" className="bk" />
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
                                    begin={`${i * 0.0833}s`}
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
