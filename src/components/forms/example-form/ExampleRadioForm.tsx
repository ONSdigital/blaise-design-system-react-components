import { useState, ReactElement } from "react";
import { validateRadio } from "./FormValidation";
import { StyledForm, FormFieldObject } from "../StyledForm";

/**
 * Interface representing the values captured by the radio form.
 * Includes the optional 'other-text' for the conditional input.
 */
interface RadioFormValues {
  topping: string;
  options: string;
  "other-text"?: string;
}

/** Configuration for the radio form elements. */
const formElements: FormFieldObject[] = [
  {
    name: "topping",
    description: "Select your favorite topping",
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
];

/**
 * An example implementation of a radio form using StyledForm.
 * Demonstrates standard radio groups and the 'Other/Specify' conditional pattern.
 */
export const ExampleRadioForm = (): ReactElement => {
  const [formStatus, setFormStatus] = useState<string>("");

  /**
   * Executes once Formik validation passes.
   * @param formValues - The captured radio and conditional text values.
   * @param setSubmitting - Formik utility to re-enable the submit button after processing.
   */
  const onFormSubmission = (
    formValues: RadioFormValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ): void => {
    console.warn("Radio Submission:", formValues);

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
      <StyledForm<RadioFormValues>
        fields={formElements}
        onSubmitFunction={onFormSubmission}
        submitLabel="Save and Continue"
      />
    </>
  );
};
