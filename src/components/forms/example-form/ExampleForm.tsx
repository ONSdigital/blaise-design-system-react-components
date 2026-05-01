import { useState, ReactElement } from "react";
import {
  validateEmail,
  validateQuestionnaireName,
  validateName,
  validatePassword,
} from "./FormValidation";
import { StyledForm, FormField } from "../StyledForm";

/** Values for the example account form. */
interface ExampleFormValues {
  Questionnaire: string;
  name: string;
  Email: string;
  Password: string;
}

/** Field config for the example account form. */
const formElements: FormField[] = [
  {
    name: "Questionnaire",
    description: "Questionnaire Name must be longer than 7 characters",
    type: "text",
    validate: validateQuestionnaireName,
  },
  {
    name: "name",
    description: "Name must be longer than 2 characters",
    type: "text",
    validate: validateName,
  },
  {
    name: "Email",
    id: "email-field",
    description: "This will not be stored and only used once to send your confirmation",
    type: "email",
    validate: validateEmail,
  },
  {
    name: "Password",
    description: "Password must be longer than 6 characters",
    type: "password",
    validate: validatePassword,
  },
];

/**
 * Renders the example account form.
 */
export const ExampleForm = (): ReactElement => {
  const [formStatus, setFormStatus] = useState<string>("");

  /**
   * Handles form submit.
   * @param formValues - The validated data from the form.
   * @param setSubmitting - Callback to toggle the button loading state.
   */
  const onFormSubmission = (
    formValues: ExampleFormValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ): void => {
    setFormStatus(`Form submitted for user ${formValues.name}`);
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
      <StyledForm<ExampleFormValues>
        fields={formElements}
        onSubmitFunction={onFormSubmission}
        submitLabel="Create Account"
      />
    </>
  );
};
