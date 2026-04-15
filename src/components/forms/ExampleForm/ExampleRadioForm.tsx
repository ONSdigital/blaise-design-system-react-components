import { useState } from "react";
import { validateRadio } from "./FormValidation";
import { StyledForm, FormFieldObject } from "../StyledForm";

export interface RadioFormValues {
    topping: string;
    options: string;
    "other-text"?: string;
}

/* List of fields in order for form generation */
const formElements: FormFieldObject[] = [
    {
        name: "topping",
        description: "Select your favorite topping",
        type: "radio",
        validate: validateRadio,
        radioOptions: [
            { id: "bacon", value: "bacon", label: "Bacon" },
            {
                id: "cheese", value: "cheese", label: "Cheese", description: "This includes all types of cheese",
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
                    id: "other-text", name: "other-text", description: "Please specify", type: "text",
                },
            },
        ],
    },
];

export const ExampleRadioForm = () => {
    const [formStatus, setFormStatus] = useState<string>("");

    /*
     * Function is called after submit of form and all field validation is valid
     *
     * @param formValues Object with all field values
     * @param setSubmitting Function to set isSubmitting attribute which disables submit button while processing the form
     */

    const onFormSubmission = (formValues: RadioFormValues, setSubmitting: (isSubmitting: boolean) => void): void => {
        console.warn(formValues);
        setFormStatus(`Form submitted, topping chosen: ${formValues.topping}`);
        setSubmitting(false);
    };

    return (
        <>
            {formStatus && <p>{formStatus}</p>}
            <StyledForm<RadioFormValues> 
                fields={formElements} 
                onSubmitFunction={onFormSubmission} 
            />
        </>
    );
};
