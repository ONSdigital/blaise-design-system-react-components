import { Form, Formik } from "formik";
import React, { Fragment } from "react";
import { ONSButton } from "../ONSButton";
import StyledFormErrorSummary from "./StyledFormErrorSummary";
 
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

export interface BaseFormFieldObject<V = string | string[]> {
    name: string
    description?: string
    type: string
    id?: string
    validate?: (value: V) => string | undefined
    autoFocus?: boolean
    initial_value?: V
}

export interface RadioFormFieldObject extends BaseFormFieldObject<string> {
    type: "radio"
    radioOptions: RadioFieldsetObject[]
}

export interface CheckboxFormFieldObject extends BaseFormFieldObject<string[]> {
    type: "checkbox"
    checkboxOptions: CheckboxFieldsetObject[]
}

export type FormFieldObject = CheckboxFormFieldObject | RadioFormFieldObject | BaseFormFieldObject;

export interface StyledFormProps {
    fields: FormFieldObject[]
    onSubmitFunction: (values: Record<string, unknown>, setSubmitting: (isSubmitting: boolean) => void) => void;
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
    const initialFieldValues: Record<string, unknown> = {};
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
                    <StyledFormErrorSummary />
                    {
                        fields.map((field, index) => {
                             
                            field.autoFocus = (isValid && index === 0);

                            return (
                                <Fragment key={field.name}>
                                    {
                                        <StyledFormField {...field} />
                                    }
                                </Fragment>
                            );
                        })
                    }
                    <br />
                    <ONSButton
                        submit
                        label={(submitLabel || "Save and continue")}
                        primary
                        testid="submit"
                        loading={isSubmitting}
                    />
                </Form>
            )}
        </Formik>
    );
}

export default StyledForm;
