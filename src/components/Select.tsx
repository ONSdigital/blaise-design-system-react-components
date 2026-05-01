import { ChangeEvent, useId } from "react";

/** Select option. */
interface Option {
  /** Visible option text. */
  label: string;
  /** Option value. */
  value: string;
  /** Element ID. */
  id?: string;
}

/** Props for Select. */
export interface Props {
  /** Label text. */
  label?: string;
  /** Element ID. */
  id?: string;
  /** Name attribute. */
  name?: string;
  /** Called when the value changes. */
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  /** Selected value. */
  value: string;
  /** Select options. */
  options: Option[];
}

/** Renders a select input. */
export const Select = ({ label, id, name, onChange, value, options }: Props) => {
  const generatedId = useId();
  const baseId = id || `select-${generatedId}`;

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
      <select
        id={baseId}
        name={name ?? "select"}
        value={value}
        className="ons-input ons-input--select"
        onChange={onChange}
        data-testid={id ? `${id}-input` : undefined}
      >
        <option
          value=""
          disabled
        >
          Select an option
        </option>
        {options.map((option, index) => {
          const optionBaseId = option.id || `${baseId}-option-${index}`;

          return (
            <option
              value={option.value}
              key={optionBaseId}
              id={option.id}
              data-testid={id ? `${id}-option-${option.value}` : undefined}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
