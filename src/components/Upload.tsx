import { type ChangeEvent, useId } from "react";

/** Props for Upload. */
export interface Props {
  /** Label text. */
  label: string;
  /** Hint text. */
  description: string;
  /** Name attribute. */
  name?: string;
  /** Backward-compatible alias for the name attribute. */
  fileName?: string;
  /** Element ID. */
  id?: string;
  /** Accepted file types. */
  accept: string;
  /** Called when the file selection changes. */
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
  /** Whether to disable the input. */
  disabled?: boolean;
}

/** Renders a file input. */
export const Upload = ({
  label,
  description,
  name,
  fileName,
  id,
  accept,
  onChange,
  disabled,
}: Props) => {
  const generatedId = useId();
  const baseId = id ?? `upload-${generatedId}`;
  const inputName = name ?? fileName ?? "file";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e, e.target.value);
  };

  const hintId = `${baseId}-hint`;

  return (
    <div className="ons-field">
      <label
        className="ons-label ons-label--with-description"
        htmlFor={baseId}
      >
        {label}
      </label>

      <span
        id={hintId}
        className="ons-label__description ons-input--with-description"
      >
        {description}
      </span>

      <input
        type="file"
        id={baseId}
        className="ons-input ons-input--text ons-input-type__input ons-input--upload"
        name={inputName}
        accept={accept}
        onChange={handleChange}
        disabled={disabled}
        data-testid={id ? `${id}-input` : undefined}
        aria-describedby={hintId}
      />
    </div>
  );
};
