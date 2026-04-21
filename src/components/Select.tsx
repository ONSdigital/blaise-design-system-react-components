import { ChangeEvent } from "react";

export interface Option {
  /** The text displayed to the user for this option. */
  label: string;
  /** The underlying value of the option. */
  value: string;
  /** Optional custom HTML ID for the option element. */
  id?: string;
}

export interface Props {
  /** The text displayed above the select field. */
  label?: string;
  /** Custom HTML ID for the select element. */
  id?: string;
  /** Callback fired when the user selects a new option. */
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  /** The current selected value (controlled component). */
  value: string;
  /** Array of options to populate the dropdown menu. */
  options: Option[];
  /** Optional test ID for automated testing. */
  testId?: string;
}

export const Select = ({ label, id, onChange, value, options, testId }: Props) => {
  return (
    <div className="ons-field">
      {label !== undefined && (
        <label
          className="ons-label"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <select
        id={id}
        name="select"
        value={value}
        className="ons-input ons-input--select"
        onChange={onChange}
        data-testid={testId}
      >
        <option
          value=""
          disabled
        >
          Select an option
        </option>
        {options.map((option, index) => (
          <option
            value={option.value}
            key={option.id || `${id}-option-${index}`}
            id={option.id}
            data-testid={testId ? `option-${testId}-${option.value}` : undefined}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
