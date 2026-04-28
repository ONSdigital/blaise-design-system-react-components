import { ChangeEvent } from "react";

export interface Props {
  /** The main text displayed above the upload field. */
  label: string;
  /** Additional instructions or hints for the user (e.g., allowed file types). */
  description: string;
  /** The standard HTML name attribute for the file input element. */
  fileName: string;
  /** The unique HTML ID for the file input element. */
  fileID: string;
  /** A comma-separated list of allowed file extensions or MIME types (e.g., ".pdf, .csv"). */
  accept: string;
  /** Callback fired when a file is selected. Returns the event and the label. */
  onChange?: (e: ChangeEvent<HTMLInputElement>, label?: string) => void;
  /** If true, visually and functionally disables the input. */
  disabled?: boolean;
}

export const Upload = ({
  label,
  description,
  fileName,
  fileID,
  accept,
  onChange,
  disabled,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e, label);
  };

  const hintId = `${fileID}-hint`;

  return (
    <div className="ons-field">
      <label
        className="ons-label ons-label--with-description"
        htmlFor={fileID}
        aria-describedby={hintId}
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
        id={fileID}
        className="ons-input ons-input--text ons-input-type__input ons-input--upload"
        name={fileName}
        accept={accept}
        onChange={handleChange}
        disabled={disabled}
        data-testid="upload-input"
        aria-describedby={hintId}
      />
    </div>
  );
};
