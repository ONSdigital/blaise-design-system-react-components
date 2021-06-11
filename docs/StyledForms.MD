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

function FormPage() {

    export function validateName(value: string) {
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

    const formElements: FormFieldObject[] = [
        {
            name: "name",
            description: "Name must be longer than 2 characters",
            type: "text",
            validate: validateName
        }
    ]
    
    return (
        <>
            <StyledForm fields={formElements} onSubmitFunction={onFormSubmission}/>
        </>
    )    
}
```

This example will produce the following 
![Simple form example](simple_form.png)


With errors appearing when you click submit.
![Simple form example showing error](simple_form_error.png)

This repository contains a [detailed example with more fields](../src/components/forms/ExampleForm/ExampleForm.tsx).

### Form Props

The prop `fields` requires a list with the following properties.

| Property    | Required? | Description                                                              |
|-------------|-----------|--------------------------------------------------------------------------|
| name        | Yes       | All fields required a label.                                             |
| description | No        | Description to be added below the label.                                 |
| type        | No        | Will default to Type `text` when one is not provided.                    |
| validate    | No        | No validation for this field, can be left blank by the user in this case |

