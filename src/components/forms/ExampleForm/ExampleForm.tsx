import { useState } from "react";
import { validateEmail, validateInstrumentName, validateName, validatePassword } from "./FormValidation";
import { StyledForm, FormFieldObject } from "../StyledForm";

export interface ExampleFormValues {
    Instrument: string;
    name: string;
    Email: string;
    Password: string;
}

/* List of fields in order for form generation */
const formElements: FormFieldObject[] = [
    {
        name: "Instrument",
        description: "Instrument Name must be longer than 7 characters",
        type: "text",
        validate: validateInstrumentName,
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

export const ExampleForm = () => {
    const [formStatus, setFormStatus] = useState<string>("");

    /*
     * Function is called after submit of form and all field validation is valid
     *
     * @param formValues Object with all field values
     * @param setSubmitting Function to set isSubmitting attribute which disables submit button while processing the form
     */

    const onFormSubmission = (formValues: ExampleFormValues, setSubmitting: (isSubmitting: boolean) => void): void => {
        console.warn(formValues);
        setFormStatus(`Form submitted for user ${formValues.name}`);
        setSubmitting(false);
    };

    return (
        <>
            {formStatus && <p>{formStatus}</p>}
            <StyledForm<ExampleFormValues> 
                fields={formElements} 
                onSubmitFunction={onFormSubmission} 
            />
        </>
    );
};
