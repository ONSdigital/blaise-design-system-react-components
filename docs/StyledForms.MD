# Styled Form

This component is a simple form build on top of the [formik react form plugin](https://formik.org/). This is designed to
make forms that fit the ONS design system easy.

All you need to do is provide the field names, description and validation functions and this will handle styling, the
validation on submit as well as displaying
the [error summary](https://ons-design-system.netlify.app/patterns/error-validation/#error-summary) at the top of the
form.

## Usage

The StyledForm only needs two things, a list of fields, and the function to call on submit when validation passes.

### Example

This is a simple example with one field called `Name` with a validation function (`validateName`) checking the value is not blank or less than 3 characters.  

```.tsx
import {FormField, StyledForm } from "blaise-design-system-react-components";

function FormPage() {
    function validateName(value: string) {
        let error;
        if (!value) {
            error = 'Enter a name';
        } else if (
            value.length < 3
        ) {
            error = 'Enter a name longer than 2 characters';
        }
        return error
    }

    const formElements: FormField[] = [
        {
            name: "name",
            description: "Name must be longer than 2 characters",
            type: "text",
            validate: validateName
        }
    ]

    function onFormSubmission(formValues: any, setSubmitting: (isSubmitting: boolean) => void): void {
        console.warn(`Form submitted for user ${formValues.name}`)
        setSubmitting(false);
    }

    return (
        <>
            <StyledForm fields={formElements} onSubmitFunction={onFormSubmission}/>
        </>
    )
}

export default FormPage;
```

This example will produce the following:

![Simple form example](simple_form.png)


With errors appearing when you click submit:

![Simple form example showing error](simple_form_error.png)

This repository contains a [detailed example with more fields](../src/components/forms/ExampleForm/ExampleForm.tsx).

### Form Props

The prop `fields` requires a list with the following properties.

| Property    | Type | Required? | Description                                                              |
|-------------|-----------|-----------|--------------------------------------------------------------------------|
| name        | `string`  | Yes       | All fields required a label.                                             |
| description | `string`  | No        | Description to be added below the label.                                 |
| type        | `string`  | No        | Will default to Type `text` when one is not provided.                    |
| validate    | `Function` returning `null` if valid and a validation message `string` if invalid   | No        | If not provided then there will be no validation for this field, can be left blank by the user in this case. |

