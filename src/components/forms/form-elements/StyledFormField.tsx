import { useFormikContext } from "formik";
import { Fragment, type ReactElement, useId } from "react";

import { CheckboxFieldset, RadioFieldset, TextInputFieldset } from "./Fields";

import type {
  CheckboxFieldset as CheckboxFieldsetType,
  RadioFieldset as RadioFieldsetType,
} from "../StyledForm";

/** StyledFormField props. */
interface Props {
  /** Element ID. */
  id?: string;
  /** Whether field-specific test IDs should be rendered. */
  includeTestIds?: boolean;
  /** Initial field value used by StyledForm during setup. */
  initialValue?: unknown;
  /** Hint or legend text. */
  description?: string;
  /** Field name. */
  name: string;
  /** Radio options. */
  radioOptions?: RadioFieldsetType[];
  /** Checkbox options. */
  checkboxOptions?: CheckboxFieldsetType[];
  /** Whether to focus the field. */
  autoFocus?: boolean;
  /** Field type. */
  type?: string;
  /** Additional field props. */
  [key: string]: unknown;
}

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

/**
 * Renders a field from StyledForm config.
 */
export const StyledFormField = ({
  id,
  includeTestIds,
  name,
  description,
  radioOptions = [],
  checkboxOptions = [],
  autoFocus = false,
  initialValue: _initialValue,
  ...props
}: Props): ReactElement => {
  const { errors } = useFormikContext<Record<string, string>>();
  const generatedId = useId();
  const baseId = id || `field-${generatedId}`;
  const shouldIncludeTestIds = includeTestIds ?? Boolean(id);

  let newField: ReactElement;

  if (props.type === "radio") {
    newField = (
      <RadioFieldset
        id={id}
        includeTestIds={shouldIncludeTestIds}
        description={description}
        name={name}
        radioOptions={radioOptions}
        autoFocus={autoFocus}
        {...props}
      />
    );
  } else if (props.type === "checkbox") {
    newField = (
      <CheckboxFieldset
        id={id}
        includeTestIds={shouldIncludeTestIds}
        description={description}
        name={name}
        checkboxOptions={checkboxOptions}
        autoFocus={autoFocus}
        {...props}
      />
    );
  } else {
    newField = (
      <TextInputFieldset
        id={id}
        includeTestIds={shouldIncludeTestIds}
        name={name}
        description={description}
        autoFocus={autoFocus}
        {...props}
      />
    );
  }

  const fieldError = errors[name];

  return (
    <Fragment>
      {fieldError ? renderFieldError(fieldError, newField, baseId, shouldIncludeTestIds) : newField}
    </Fragment>
  );
};
