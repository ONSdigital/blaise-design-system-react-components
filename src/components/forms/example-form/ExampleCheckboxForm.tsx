import { type ReactElement, useState } from "react";

import { type FormField, type FormValuesForFields, StyledForm } from "../StyledForm";

import { validateCheckbox } from "./FormValidation";

/** Field config for the example checkbox form. */
const formElements = [
  {
    name: "questionnaire",
    description: "Select questionnaires",
    type: "checkbox",
    validate: validateCheckbox,
    checkboxOptions: [
      { id: "lms", value: "lms", label: "LMS" },
      { id: "opn", value: "opn", label: "OPN" },
    ],
  },
] as const satisfies readonly FormField[];

/** Values for the example checkbox form. */
type CheckboxFormValues = FormValuesForFields<typeof formElements>;

/** Renders the example checkbox form. */
export const ExampleCheckboxForm = (): ReactElement => {
  const [formStatus, setFormStatus] = useState<string>("");

  /**
   * Handles form submit.
   * @param formValues - The validated form values, including the selected questionnaires.
   * @param setSubmitting - Formik utility to toggle the loading state of the submit button.
   */
  const onFormSubmission = (
    formValues: CheckboxFormValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ): void => {
    setFormStatus(`Form submitted, questionnaires chosen: ${formValues.questionnaire.join(", ")}`);
    setSubmitting(false);
  };

  return (
    <>
      {formStatus && (
        <div className="ons-panel ons-panel--info ons-panel--no-title ons-u-mb-m">
          <span className="ons-panel__assistive-text ons-u-vh">Important information:</span>

          <div className="ons-panel__body">
            <p>{formStatus}</p>
          </div>
        </div>
      )}
      <StyledForm
        fields={formElements}
        onSubmit={onFormSubmission}
        submitLabel="Submit Selection"
      />
    </>
  );
};
