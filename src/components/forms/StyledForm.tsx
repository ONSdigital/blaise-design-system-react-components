import React, {Fragment} from 'react';
import {Field, Form, Formik} from "formik";
import ErrorSummary from './ErrorSummary';
import {ONSInputField, InputErrorPanel} from "./InputField";
import {ONSButton} from "../ONSButton";


export interface FormFieldObject {
    name: string
    description?: string
    type: string
    validate?: (value: string) => string | undefined
    autoFocus?: boolean
}

export interface StyledFormProps {
    fields: FormFieldObject[]
    onSubmitFunction: (values: any, setSubmitting: (isSubmitting: boolean) => void) => void
}

/**
 * Formik form styled to ONS design guide with form error panel
 *
 * @param Props
 *
 *  - fields: List of fields to display on form.
 *  - onSubmitFunction: Function to call after submit of form and all field validation is valid.
 */
function StyledForm({fields, onSubmitFunction}: StyledFormProps) {


    let initialFieldValues: any = {};
    fields.forEach(({name}) => {
        initialFieldValues[name] = "";
    });

    return (
        <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={initialFieldValues}
            onSubmit={(values, {setSubmitting}) => {
                onSubmitFunction(values, setSubmitting);
            }}
        >
            {({
                  errors,
                  isSubmitting,
                  isValid
              }) => (
                <Form>
                    {ErrorSummary(isValid, errors)}

                    {
                        fields.map((field, index) => {
                            field.autoFocus = (index === 0)
                            return (
                                <Fragment key={field.name}>
                                    {
                                        // @ts-ignore
                                        errors[field.name] ?
                                            // @ts-ignore
                                            InputErrorPanel(
                                                // @ts-ignore
                                                errors[field.name],
                                                "name",
                                                <Field {...field} component={ONSInputField}/>
                                            )
                                            :
                                            <Field {...field} component={ONSInputField}/>
                                    }
                                </Fragment>
                            )
                        })
                    }

                    <br/>

                    <ONSButton
                        submit={true}
                        label={"Save and continue "}
                        primary={true}
                        testid={"submit"}
                        loading={isSubmitting}/>
                </Form>
            )}
        </Formik>
    )
}

export default StyledForm;