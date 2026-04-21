import { ChangeEvent, useState } from "react";

export interface Props {
  /** The text displayed above the input field. */
  label?: string;
  /** Custom HTML ID for the input element. Defaults to "password". */
  inputId?: string;
  /** Applies a custom top margin in pixels to the toggle checkbox. */
  marginTop?: number;
  /** Callback fired when the input value changes. Returns the event and the string value. */
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** The current value of the input (controlled component). */
  value: string;
  /** If true, the input will automatically focus on mount. */
  autoFocus?: boolean;
}

export const PasswordInput = ({
  label,
  inputId = "password",
  marginTop,
  onChange,
  value,
  autoFocus,
}: Props) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const togglePassword = () => setPasswordHidden((prev) => !prev);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e, e.target.value);
  };

  const spacingStyle = {
    marginTop: marginTop ? `${marginTop}px` : undefined,
  };

  return (
    <p className="ons-field">
      <label
        className="ons-label"
        htmlFor={inputId}
      >
        {label}
      </label>
      <span
        className="ons-checkbox ons-checkbox--toggle"
        style={spacingStyle}
      >
        <input
          type="checkbox"
          id={`${inputId}-toggle`}
          className="ons-checkbox__input"
          name="show-password"
          onClick={togglePassword}
          data-testid="login-password-toggle"
        />
        <label
          className="ons-checkbox__label"
          htmlFor={`${inputId}-toggle`}
        >
          Show password
        </label>
      </span>
      <input
        type={passwordHidden ? "password" : "text"}
        id={inputId}
        className="ons-input ons-input--text ons-input-type__input ons-u-mt-xs"
        value={value}
        onChange={handleChange}
        autoFocus={autoFocus}
        autoComplete="new-password"
        data-testid="login-password-input"
      />
    </p>
  );
};
