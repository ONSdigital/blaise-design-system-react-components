import { ChangeEvent, MouseEventHandler, CSSProperties, useId } from "react";

/** Props for TextInput. */
export interface Props {
  /** Label text. */
  label?: string;
  /** Element ID. */
  id?: string;
  /** Whether to use `password` type. Overrides `number`. */
  password?: boolean;
  /** Whether to use `number` type. */
  number?: boolean;
  /** Called when the value changes. */
  onChange?: (e: ChangeEvent<HTMLInputElement>, label?: string) => void;
  /** Placeholder text displayed when the input is empty. */
  placeholder?: string;
  /** Whether to remove the default width. */
  fit?: boolean;
  /** Whether to focus the input on mount. */
  autoFocus?: boolean;
  /** Input value. */
  value?: string;
  /** Autocomplete attribute. */
  autoComplete?: string;
  /** Called when the input is clicked. */
  onClick?: MouseEventHandler<HTMLInputElement>;
  /** Input z-index. */
  zIndex?: number;
}

/** Renders a text, password, or number input. */
export const TextInput = ({
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
}: Props) => {
  const generatedId = useId();
  const baseId = id || `text-input-${generatedId}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e, label);
  };

  const inputType = password ? "password" : number ? "number" : "text";

  const inputStyle: CSSProperties = {
    width: fit ? "unset" : undefined,
    zIndex,
  };

  return (
    <div className="ons-field">
      {label !== undefined && (
        <label
          className="ons-label"
          htmlFor={baseId}
        >
          {label}
        </label>
      )}
      <input
        id={baseId}
        className="ons-input ons-input--text ons-input-type__input"
        value={value ?? ""}
        type={inputType}
        style={inputStyle}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={onClick}
        data-testid={id ? `${id}-input` : undefined}
      />
    </div>
  );
};
