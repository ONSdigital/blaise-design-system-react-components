import { useState, ReactElement } from "react";
import { StyledForm, FormFieldObject } from "../StyledForm";
import { validateCheckbox } from "./FormValidation";

/** Type definition for the expected form values. */
export interface CheckboxFormValues {
    questionnaire: string[];
}

/** Configuration for the form fields. */
const formElements: FormFieldObject[] = [
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
];

/**
 * An example implementation of a checkbox form using StyledForm.
 * Demonstrates state handling and submission feedback.
 */
export const ExampleCheckboxForm = (): ReactElement => {
    const [formStatus, setFormStatus] = useState<string>("");

    /**
     * Handles the valid form submission.
     * @param formValues - Object containing the validated questionnaire array.
     * @param setSubmitting - Formik utility to toggle the loading state of the submit button.
     */
    const onFormSubmission = (
        formValues: CheckboxFormValues, 
        setSubmitting: (isSubmitting: boolean) => void
    ): void => {
        console.warn("Submission Data:", formValues);
        setFormStatus(`Form submitted, questionnaires chosen: ${formValues.questionnaire.join(", ")}`);
        setSubmitting(false);
    };

    return (
        <>
            {formStatus && (
                <div className="ons-panel ons-panel--info ons-panel--no-title ons-u-mb-m">
                    <div className="ons-panel__body">
                        <p>{formStatus}</p>
                    </div>
                </div>
            )}
            <StyledForm<CheckboxFormValues> 
                fields={formElements} 
                onSubmitFunction={onFormSubmission} 
                submitLabel="Submit Selection"
            />
        </>
    );
};
