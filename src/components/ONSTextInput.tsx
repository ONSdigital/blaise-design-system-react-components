import { ChangeEvent, MouseEventHandler, CSSProperties } from "react";

export interface Props {
    /** The text displayed above the input field. */
    label?: string;
    /** Custom HTML ID for the input element. */
    id?: string;
    /** If true, renders the input as a password field (obscures text). */
    password?: boolean;
    /** If true, renders the input as a numeric field. */
    number?: boolean;
    /** Callback fired when the input value changes. Returns the event and the label (if provided). */
    onChange?: (e: ChangeEvent<HTMLInputElement>, label?: string) => void;
    /** Placeholder text displayed when the input is empty. */
    placeholder?: string;
    /** If true, removes the default width restriction so the input fits its container. */
    fit?: boolean;
    /** If true, the input will automatically focus on mount. */
    autoFocus?: boolean;
    /** The current value of the input (controlled component). */
    value?: string;
    /** Standard HTML autocomplete attribute (e.g., "off", "new-password"). */
    autoComplete?: string;
    /** Callback fired when the input is clicked. */
    onClick?: MouseEventHandler<HTMLInputElement>;
    /** Custom z-index for the input element. Defaults to 0. */
    zIndex?: number;
    /** Optional test ID for automated testing. Defaults to "text-input". */
    testId?: string;
}

export const ONSTextInput = ({
    label,
    id,
    password,
    number,
    onChange,
    placeholder,
    fit,
    autoFocus,
    value,
    autoComplete,
    onClick,
    zIndex,
    testId = "text-input",
}: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e, label);
    };

    const inputType = password ? "password" : number ? "number" : "text";

    const inputStyle: CSSProperties = {
        width: fit ? "unset" : undefined,
        zIndex: zIndex ?? 0,
    };

    return (
        <p className="ons-field">
            {label !== undefined && (
                <label className="ons-label" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                id={id}
                className="ons-input ons-input--text ons-input-type__input"
                value={value ?? ""}
                type={inputType}
                style={inputStyle}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                placeholder={placeholder}
                onChange={handleChange}
                onClick={onClick}
                data-testid={testId}
            />
        </p>
    );
};
