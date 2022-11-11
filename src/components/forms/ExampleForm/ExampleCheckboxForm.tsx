import React, { useState } from "react";
import StyledForm, { FormFieldObject } from "../StyledForm";
import { validateCheckbox } from "./FormValidation";

function ExampleForm() {
    const [formStatus, setFormStatus] = useState<string>("");

    /** List of fields in order for form generation */
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
     * Function is called after submit of form and all field validation is valid
     *
     * @param formValues Object with all field values
     * @param setSubmitting Function to set isSubmitting attribute which disables submit button while processing the form
     */
    function onFormSubmission(formValues: any, setSubmitting: (isSubmitting: boolean) => void): void {
        console.warn(formValues);
        setFormStatus(`Form submitted, questionnaires chosen ${formValues.questionnaire}`);
        setSubmitting(false);
    }

    return (
        <>
            <p>{formStatus}</p>
            <StyledForm fields={formElements} onSubmitFunction={onFormSubmission} />
        </>
    );
}

export default ExampleForm;
