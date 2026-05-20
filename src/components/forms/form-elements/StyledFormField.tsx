import { useFormikContext } from "formik";
import { type ReactElement, useId } from "react";

import { CheckboxFieldset, RadioFieldset, TextInputFieldset } from "./Fields";

import type { FormField } from "../StyledForm";

/** StyledFormField props. */
type Props = FormField & {
  /** Element ID. */
  id?: string;
  /** Whether field-specific test IDs should be rendered. */
  includeTestIds?: boolean;
  /** Whether to focus the field. */
  autoFocus?: boolean;
};

/** Wraps a field in an inline error panel when Formik has a validation error for it. */
const renderFieldError = (
  fieldError: string,
  field: ReactElement,
  baseId: string,
  includeTestIds: boolean,
) => {
  return (
    <div
      className="ons-panel ons-panel--error ons-panel--no-title"
      id={`${baseId}-error`}
      data-testid={includeTestIds ? `${baseId}-error-panel` : undefined}
    >
      <span className="ons-panel__assistive-text ons-u-vh">Error: </span>
      <div className="ons-panel__body">
        <p className="ons-panel__error">
          <strong>{fieldError}</strong>
        </p>
        {field}
      </div>
    </div>
  );
};

/** Renders a field from StyledForm config. */
export const StyledFormField = ({
  id,
  includeTestIds,
  autoFocus = false,
  ...field
}: Props): ReactElement => {
  const { errors } = useFormikContext<Record<string, string | undefined>>();
  const generatedId = useId();
  const baseId = id ?? `field-${generatedId}`;
  const shouldIncludeTestIds = includeTestIds ?? Boolean(id);

  const renderedField = (() => {
    switch (field.type) {
      case "radio":
        return (
          <RadioFieldset
            id={id}
            includeTestIds={shouldIncludeTestIds}
            description={field.description}
            name={field.name}
            radioOptions={field.radioOptions}
            autoFocus={autoFocus}
            validate={field.validate}
          />
        );

      case "checkbox":
        return (
          <CheckboxFieldset
            id={id}
            includeTestIds={shouldIncludeTestIds}
            description={field.description}
            name={field.name}
            checkboxOptions={field.checkboxOptions}
            autoFocus={autoFocus}
            validate={field.validate}
          />
        );

      default:
        return (
          <TextInputFieldset
            id={id}
            includeTestIds={shouldIncludeTestIds}
            name={field.name}
            description={field.description}
            autoFocus={autoFocus}
            type={field.type}
            validate={field.validate}
          />
        );
    }
  })();

  const fieldError = errors[field.name];

  return fieldError
    ? renderFieldError(fieldError, renderedField, baseId, shouldIncludeTestIds)
    : renderedField;
};
