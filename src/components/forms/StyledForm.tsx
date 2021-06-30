import React, {Fragment} from 'react';
import {Field, Form, Formik} from "formik";
import StyledFormErrorSummary from './StyledFormErrorSummary';
import {ONSInputField} from "./FormElements/Fields";
import {ONSButton} from "../ONSButton";
import {StyledFormField} from "./FormElements/StyledFormFields";

export interface RadioSpecifyOption {
    id: string
    name: string
    min?: string
    description?: string
    type: string
    validate?: (value: string) => string | undefined
}

export interface RadioFieldsetObject {
    value: string
    id: string
    label: string
    specifyOption?: RadioSpecifyOption
}


export interface FormFieldObject {
    name: string
    description?: string
    type: string
    validate?: (value: string) => string | undefined
    autoFocus?: boolean
    radioOptions?: RadioFieldsetObject[]
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
                isValid,
                  isSubmitting
              }) => (
                <Form>
                    <StyledFormErrorSummary/>

                    {
                        fields.map((field, index) => {
                            field.autoFocus = (isValid && index === 0)

                            return (
                                <Fragment key={field.name}>
                                    {// @ts-ignore
                                        <StyledFormField {...field}/>
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