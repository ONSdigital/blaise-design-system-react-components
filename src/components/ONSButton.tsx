import { MouseEventHandler, CSSProperties, ReactElement } from "react";

export interface Props {
    /** The text displayed inside the button. */
    label: string;
    /** Unique HTML ID for the button element. */
    id?: string;
    /** Determines if the button uses the primary (green) or secondary (grey) styling. */
    primary: boolean;
    /** Reduces the padding and font size of the button. */
    small?: boolean;
    /** @deprecated Internal ONS layout property. Applies 'ons-field' spacing if true. */
    field?: boolean;
    /** Displays a loading spinner and automatically disables the button to prevent double submissions. */
    loading?: boolean;
    /** Adds specific pixel-based right margin via inline styles. */
    marginRight?: number;
    /** Callback fired when the button is clicked. */
    onClick?: MouseEventHandler<HTMLButtonElement>; 
    /** Visually disables the button and prevents interaction. */
    disabled?: boolean;
    /** Renders the button with a link-style appearance. */
    action?: boolean;
    /** Optional test ID for automated testing. Appends '-button' to the string provided. */
    testid?: string;
    /** Applies 'display: none' via inline styles. */
    hidden?: boolean;
    /** Changes the HTML type attribute to 'submit' for use inside forms. Defaults to 'button'. */
    submit?: boolean;
}

export const ONSButton = ({
    label,
    id,
    primary,
    small,
    field,
    loading,
    marginRight,
    onClick,
    disabled,
    action,
    testid,
    hidden,
    submit,
}: Props): ReactElement => {
    
    const getStyles = (): CSSProperties => {
        if (hidden) return { display: "none" };
        return {
            marginRight: marginRight ? `${marginRight}px` : undefined,
        };
    };

    const classNames = [
        "ons-btn",
        action && "ons-btn--link",
        loading && "ons-btn--loader ons-is-loading",
        field && "ons-field",
        !primary && "ons-btn--secondary",
        small && "ons-btn--small",
        disabled && "ons-btn--disabled",
    ].filter(Boolean).join(" ");

    return (
        <button
            id={id}
            style={getStyles()}
            type={submit ? "submit" : "button"}
            disabled={loading || disabled} 
            className={classNames}
            onClick={onClick}
            data-testid={testid ? `${testid}-button` : "button"}
        >
            <span className="ons-btn__inner">
                {label}
                {loading && (
                    <svg
                        className="ons-svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <rect x="0" y="0" width="100" height="100" fill="none" />
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
