import React, { Fragment } from "react";
import { Form, Formik } from "formik";
import StyledFormErrorSummary from "./StyledFormErrorSummary";
import { ONSButton } from "../ONSButton";
import { StyledFormField } from "./FormElements/StyledFormFields";

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
    description?: string
    specifyOption?: RadioSpecifyOption
}

export interface CheckboxFieldsetObject {
    value: string
    id: string
    label: string
    description?: string
}

export interface BaseFormFieldObject {
    name: string
    description?: string
    type: string
    id?: string
    validate?: (value: any) => string | undefined
    autoFocus?: boolean
    initial_value?: string | string[]
}

export interface RadioFormFieldObject extends BaseFormFieldObject {
    type: "radio"
    radioOptions: RadioFieldsetObject[]
}

export interface CheckboxFormFieldObject extends BaseFormFieldObject {
    type: "checkbox"
    validate?: (value: string[]) => string | undefined
    checkboxOptions: CheckboxFieldsetObject[]
}

export type FormFieldObject = CheckboxFormFieldObject | RadioFormFieldObject | BaseFormFieldObject;

export interface StyledFormProps {
    fields: FormFieldObject[]
    onSubmitFunction: (values: any, setSubmitting: (isSubmitting: boolean) => void) => void
    submitLabel?: string
}

/**
 * Formik form styled to ONS design guide with form error panel
 *
 * @param Props
 *
 *  - fields: List of fields to display on form.
 *  - onSubmitFunction: Function to call after submit of form and all field validation is valid.
 */
function StyledForm({ fields, onSubmitFunction, submitLabel }: StyledFormProps) {
    let initialFieldValues: any = {};
    fields.forEach(({ name, initial_value }) => {
        initialFieldValues[name] = initial_value;
    });

    return (
        <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={initialFieldValues}
            onSubmit={(values, { setSubmitting }) => {
                onSubmitFunction(values, setSubmitting);
            }}
        >
            {({ isValid, isSubmitting }) => (
                <Form>
                    <StyledFormErrorSummary/>
                    {
                        fields.map((field, index) => {
                            field.autoFocus = (isValid && index === 0);

                            return (
                                <Fragment key={field.name}>
                                    {// @ts-ignore
                                        <StyledFormField {...field}/>
                                    }
                                </Fragment>
                            );
                        })
                    }
                    <br/>
                    <ONSButton
                        submit={true}
                        label={(submitLabel ? submitLabel : "Save and continue")}
                        primary={true}
                        testid={"submit"}
                        loading={isSubmitting}/>
                </Form>
            )}
        </Formik>
    );
}

export default StyledForm;
