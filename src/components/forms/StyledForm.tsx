import { Form, Formik, type FormikValues } from "formik";
import { useId } from "react";

import { Button } from "../Button";

import { StyledFormField } from "./form-elements/StyledFormField";
import { StyledFormErrorSummary } from "./StyledFormErrorSummary";

/** Radio follow-up input. */
interface RadioSpecifyOption {
  /** Element ID. */
  id?: string;
  /** Field name. */
  name: string;
  /** Minimum value. */
  min?: string;
  /** Label text. */
  description?: string;
  /** Input type. */
  type: string;
  /** Validation function. */
  validate?: (value: string) => string | undefined;
}

/** Radio option config. */
export interface RadioFieldset {
  /** Option value. */
  value: string;
  /** Element ID. */
  id?: string;
  /** Label text. */
  label: string;
  /** Supporting text. */
  description?: string;
  /** Follow-up input. */
  specifyOption?: RadioSpecifyOption;
}

/** Checkbox option config. */
export interface CheckboxFieldset {
  /** Option value. */
  value: string;
  /** Element ID. */
  id?: string;
  /** Label text. */
  label: string;
  /** Supporting text. */
  description?: string;
}

/** Base field config. */
interface BaseFormField<V = string> {
  /** Field name. */
  name: string;
  /** Hint or legend text. */
  description?: string;
  /** Field type. */
  type: "text" | "password" | "number" | "date" | "email";
  /** Element ID. */
  id?: string;
  /** Validation function. */
  validate?: (value: V) => string | undefined;
  /** Autofocus hint. StyledForm currently ignores this value. */
  autoFocus?: boolean;
  /** Initial value. */
  initialValue?: V | V[];
}

interface RadioFormField extends Omit<BaseFormField<string>, "type"> {
  type: "radio";
  /** Radio options. */
  radioOptions: RadioFieldset[];
}

interface CheckboxFormField extends Omit<BaseFormField<string[]>, "type"> {
  type: "checkbox";
  /** Checkbox options. */
  checkboxOptions: CheckboxFieldset[];
}

/** StyledForm field config. */
export type FormField = CheckboxFormField | RadioFormField | BaseFormField<string>;

/** Props for StyledForm. */
export interface Props<T extends FormikValues = FormikValues> {
  /** Element ID. */
  id?: string;
  /** Field config. */
  fields: FormField[];
  /** Called on successful submit. */
  onSubmitFunction: (values: T, setSubmitting: (isSubmitting: boolean) => void) => void;
  /** Submit button text. */
  submitLabel?: string;
}

const getFieldTargetIds = (fields: FormField[], formBaseId: string): Record<string, string> => {
  return fields.reduce<Record<string, string>>((acc, field) => {
    const fieldId = field.id || `${formBaseId}-${field.name}`;

    acc[field.name] = fieldId;

    if (field.type === "radio") {
      field.radioOptions.forEach((option, index) => {
        if (option.specifyOption) {
          const optionId = option.id || `${fieldId}-option-${index + 1}`;

          acc[option.specifyOption.name] = option.specifyOption.id || `${optionId}-specify`;
        }
      });
    }

    return acc;
  }, {});
};

/**
 * Renders a form from field config.
 */
export const StyledForm = <T extends FormikValues = FormikValues>({
  id,
  fields,
  onSubmitFunction,
  submitLabel,
}: Props<T>) => {
  const generatedId = useId();
  const baseId = id || `form-${generatedId}`;
  const fieldTargetIds = getFieldTargetIds(fields, baseId);

  const initialFieldValues = fields.reduce<Record<string, unknown>>((acc, field) => {
    if (field.initialValue !== undefined) {
      acc[field.name] = field.initialValue;
    } else if (field.type === "checkbox") {
      acc[field.name] = [];
    } else {
      acc[field.name] = "";
    }

    if (field.type === "radio") {
      field.radioOptions.forEach((option) => {
        if (option.specifyOption) {
          acc[option.specifyOption.name] = "";
        }
      });
    }

    return acc;
  }, {});

  return (
    <Formik<T>
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialFieldValues as T}
      onSubmit={(values, { setSubmitting }) => {
        onSubmitFunction(values, setSubmitting);
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form
          id={baseId}
          noValidate
          data-testid={id ? `${id}-form` : undefined}
        >
          <StyledFormErrorSummary
            id={id ? `${id}-error-summary` : undefined}
            fieldTargetIds={fieldTargetIds}
          />
          {fields.map((field, index) => {
            const isAutoFocus = isValid && index === 0;

            return (
              <StyledFormField
                key={field.name}
                {...field}
                id={fieldTargetIds[field.name]}
                autoFocus={isAutoFocus}
                includeTestIds={Boolean(field.id)}
              />
            );
          })}
          <br />
          <Button
            submit
            label={submitLabel || "Save and continue"}
            primary
            id={`${baseId}-submit`}
            loading={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};
