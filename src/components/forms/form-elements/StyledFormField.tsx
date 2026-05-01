import { Fragment, ReactElement, useId } from "react";
import { useFormikContext } from "formik";
import { RadioFieldset, CheckboxFieldset, TextInputFieldset } from "./Fields";
import type {
  RadioFieldset as RadioFieldsetType,
  CheckboxFieldset as CheckboxFieldsetType,
} from "../StyledForm";

/** StyledFormField props. */
interface Props {
  /** Element ID. */
  id?: string;
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
  isExplicitId: boolean,
) => {
  return (
    <div
      className="ons-panel ons-panel--error ons-panel--no-title"
      id={`${baseId}-error`}
      data-testid={isExplicitId ? `${baseId}-error-panel` : undefined}
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
  name,
  description,
  radioOptions = [],
  checkboxOptions = [],
  autoFocus = false,
  ...props
}: Props): ReactElement => {
  const { errors } = useFormikContext<Record<string, string>>();
  const generatedId = useId();
  const baseId = id || `field-${generatedId}`;
  const isExplicitId = !!id;

  let newField: ReactElement;

  if (props.type === "radio") {
    newField = (
      <RadioFieldset
        id={id}
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
      {fieldError ? renderFieldError(fieldError, newField, baseId, isExplicitId) : newField}
    </Fragment>
  );
};
