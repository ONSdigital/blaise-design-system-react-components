import { type ReactElement, useState } from "react";

import { type FormField, type FormValuesForFields, StyledForm } from "../StyledForm";

import { validateRadio } from "./FormValidation";

/** Field config for the example radio form. */
const formElements = [
  {
    name: "topping",
    description: "Select your favourite topping",
    type: "radio",
    validate: validateRadio,
    radioOptions: [
      { id: "bacon", value: "bacon", label: "Bacon" },
      {
        id: "cheese",
        value: "cheese",
        label: "Cheese",
        description: "This includes all types of cheese",
      },
    ],
  },
  {
    name: "options",
    description: "Select a radio option",
    type: "radio",
    radioOptions: [
      { id: "firstOption", value: "firstOption", label: "First Option" },
      {
        id: "other",
        value: "other",
        label: "Other",
        specifyOption: {
          id: "other-text",
          name: "other-text",
          description: "Please specify",
          type: "text",
        },
      },
    ],
  },
] as const satisfies readonly FormField[];

/** Values for the example radio form. */
type RadioFormValues = FormValuesForFields<typeof formElements>;

/** Renders the example radio form. */
export const ExampleRadioForm = (): ReactElement => {
  const [formStatus, setFormStatus] = useState<string>("");

  /**
   * Handles form submit.
   * @param formValues - The captured radio and conditional text values.
   * @param setSubmitting - Formik utility to re-enable the submit button after processing.
   */
  const onFormSubmission = (
    formValues: RadioFormValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ): void => {
    const selectionMsg =
      formValues.options === "other" ? `other (${formValues["other-text"]})` : formValues.options;

    setFormStatus(`Form submitted. Topping: ${formValues.topping}. Option: ${selectionMsg}`);
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
        submitLabel="Save and Continue"
      />
    </>
  );
};
