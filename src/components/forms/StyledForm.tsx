import { Form, Formik, FormikValues } from "formik";
import { Button } from "../Button";
import { StyledFormErrorSummary } from "./StyledFormErrorSummary";
import { StyledFormField } from "./form-elements/StyledFormFields";

interface RadioSpecifyOption {
  /** Unique HTML ID for the specify input. */
  id: string;
  /** Formik field name for the specify input. */
  name: string;
  /** Optional minimum value (for numeric types). */
  min?: string;
  /** Label text displayed above the specify input. */
  description?: string;
  /** HTML input type (e.g., 'text', 'number'). */
  type: string;
  /** Optional Formik validation function for this specific input. */
  validate?: (value: string) => string | undefined;
}

export interface RadioFieldsetObject {
  /** The underlying value for this radio option. */
  value: string;
  /** Unique HTML ID for the radio input. */
  id: string;
  /** The visible label text for the radio option. */
  label: string;
  /** Optional hint text displayed beneath the label. */
  description?: string;
  /** Configuration for an 'Other' specify text field attached to this radio. */
  specifyOption?: RadioSpecifyOption;
}

export interface CheckboxFieldsetObject {
  /** The underlying value for this checkbox. */
  value: string;
  /** Unique HTML ID for the checkbox input. */
  id: string;
  /** The visible label text for the checkbox. */
  label: string;
  /** Optional hint text displayed beneath the label. */
  description?: string;
}

interface BaseFormFieldObject<V = string> {
  /** Formik field name used for state management. */
  name: string;
  /** Label text displayed above the field. */
  description?: string;
  /** The type of input field to render. */
  type: "text" | "password" | "number" | "date" | "email";
  /** Optional unique HTML ID. */
  id?: string;
  /** Formik validation function. Returns an error string if invalid. */
  validate?: (value: V) => string | undefined;
  /** If true, this field will attempt to auto-focus on mount. */
  autoFocus?: boolean;
  /** The starting value for the field. */
  initial_value?: V | V[];
}

interface RadioFormFieldObject extends Omit<BaseFormFieldObject<string>, "type"> {
  type: "radio";
  /** List of radio options to render. */
  radioOptions: RadioFieldsetObject[];
}

interface CheckboxFormFieldObject extends Omit<BaseFormFieldObject<string[]>, "type"> {
  type: "checkbox";
  /** List of checkbox options to render. */
  checkboxOptions: CheckboxFieldsetObject[];
}

export type FormField =
  | CheckboxFormFieldObject
  | RadioFormFieldObject
  | BaseFormFieldObject<string>;

interface StyledFormProps<T extends FormikValues = FormikValues> {
  /** Array of field configurations to generate the form. */
  fields: FormField[];
  /** Callback executed on valid form submission. Provides current values and the Formik subitting state setter. */
  onSubmitFunction: (values: T, setSubmitting: (isSubmitting: boolean) => void) => void;
  /** Custom text for the submit button. Defaults to "Save and continue". */
  submitLabel?: string;
}

/**
 * Creates ONS-styled forms using Formik, automatically handling initial values,
 * error summaries, and field layouts based on a configuration array.
 */
export const StyledForm = <T extends FormikValues = FormikValues>({
  fields,
  onSubmitFunction,
  submitLabel,
}: StyledFormProps<T>) => {
  const initialFieldValues = fields.reduce<Record<string, unknown>>((acc, field) => {
    if (field.initial_value !== undefined) {
      acc[field.name] = field.initial_value;
    } else if (field.type === "checkbox") {
      acc[field.name] = [];
    } else {
      acc[field.name] = "";
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
        <Form>
          <StyledFormErrorSummary />
          {fields.map((field, index) => {
            const isAutoFocus = isValid && index === 0;

            return (
              <StyledFormField
                key={field.name}
                {...field}
                autoFocus={isAutoFocus}
              />
            );
          })}
          <br />
          <Button
            submit
            label={submitLabel || "Save and continue"}
            primary
            testid="submit"
            loading={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};
