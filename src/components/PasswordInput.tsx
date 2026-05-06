import { type ChangeEvent, useId, useState } from "react";

/** Props for PasswordInput. */
export interface Props {
  /** Label text. */
  label?: string;
  /** Element ID. */
  id?: string;
  /** Top margin for the toggle, in pixels. */
  marginTop?: number;
  /** Called when the value changes. */
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Controlled input value. */
  value: string;
  /** Whether to focus the input on mount. */
  autoFocus?: boolean;
}

/** Renders a password input. */
export const PasswordInput = ({
  label = "Password",
  id,
  marginTop,
  onChange,
  value,
  autoFocus,
}: Props) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const generatedId = useId();
  const baseId = id || `password-input-${generatedId}`;

  const togglePassword = () => setPasswordHidden((prev) => !prev);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e, e.target.value);
  };

  const spacingStyle = {
    marginTop: marginTop ? `${marginTop}px` : undefined,
  };

  return (
    <div className="ons-field">
      <label
        className="ons-label"
        htmlFor={baseId}
      >
        {label}
      </label>
      <span
        className="ons-checkbox ons-checkbox--toggle"
        style={spacingStyle}
      >
        <input
          type="checkbox"
          id={`${baseId}-toggle`}
          className="ons-checkbox__input"
          name="show-password"
          checked={!passwordHidden}
          onChange={togglePassword}
          data-testid={id ? `${id}-toggle` : undefined}
        />
        <label
          className="ons-checkbox__label"
          htmlFor={`${baseId}-toggle`}
        >
          Show password
        </label>
      </span>
      <input
        type={passwordHidden ? "password" : "text"}
        id={baseId}
        className="ons-input ons-input--text ons-input-type__input ons-u-mt-2xs"
        value={value}
        onChange={handleChange}
        autoFocus={autoFocus}
        autoComplete="new-password"
        data-testid={id ? `${id}-input` : undefined}
      />
    </div>
  );
};
