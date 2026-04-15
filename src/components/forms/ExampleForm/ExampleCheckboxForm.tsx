import { useState } from "react";
import { StyledForm, FormFieldObject } from "../StyledForm";
import { validateCheckbox } from "./FormValidation";

export interface CheckboxFormValues {
    questionnaire: string[];
}

/* List of fields in order for form generation */
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

export const ExampleCheckboxForm = () => {
    const [formStatus, setFormStatus] = useState<string>("");

    /*
     * Function is called after submit of form and all field validation is valid
     *
     * @param formValues Object with all field values
     * @param setSubmitting Function to set isSubmitting attribute which disables submit button while processing the form
     */

    const onFormSubmission = (formValues: CheckboxFormValues, setSubmitting: (isSubmitting: boolean) => void): void => {
        console.warn(formValues);
        setFormStatus(`Form submitted, questionnaires chosen: ${formValues.questionnaire.join(", ")}`);
        setSubmitting(false);
    };

    return (
        <>
            {formStatus && <p>{formStatus}</p>}
            <StyledForm<CheckboxFormValues> 
                fields={formElements} 
                onSubmitFunction={onFormSubmission} 
            />
        </>
    );
};
