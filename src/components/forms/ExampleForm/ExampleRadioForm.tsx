import React, {useState} from 'react';
import {validateRadio} from "./FormValidation";
import StyledForm, {FormFieldObject} from "../StyledForm";

function ExampleForm() {

    const [formStatus, setFormStatus] = useState<string>("");

    /** List of fields in order for form generation */
    const formElements: FormFieldObject[] = [
        {
            name: "topping",
            description: "Select your favorite topping",
            type: "radio",
            validate: validateRadio,
            radioOptions: [
                {id: "bacon", value: "bacon", label: "Bacon"},
                {id: "cheese", value: "cheese", label: "Cheese"}
            ]
        }
    ]

    /**
     * Function is called after submit of form and all field validation is valid
     *
     * @param formValues Object with all field values
     * @param setSubmitting Function to set isSubmitting attribute which disables submit button while processing the form
     */
    function onFormSubmission(formValues: any, setSubmitting: (isSubmitting: boolean) => void): void {
        console.warn(formValues);
        setFormStatus(`Form submitted, topping chosen ${formValues.topping}`)
        setSubmitting(false);
    }

    return (
        <>
            <p>{formStatus}</p>

            <StyledForm fields={formElements} onSubmitFunction={onFormSubmission}/>
        </>
    )
}


export default ExampleForm;