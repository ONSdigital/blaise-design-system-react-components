import React from "react";
export interface RadioSpecifyOption {
    id: string;
    name: string;
    min?: string;
    description?: string;
    type: string;
    validate?: (value: string) => string | undefined;
}
export interface RadioFieldsetObject {
    value: string;
    id: string;
    label: string;
    description?: string;
    specifyOption?: RadioSpecifyOption;
}
export interface CheckboxFieldsetObject {
    value: string;
    id: string;
    label: string;
    description?: string;
}
export interface BaseFormFieldObject<V = string | string[]> {
    name: string;
    description?: string;
    type: string;
    id?: string;
    validate?: (value: V) => string | undefined;
    autoFocus?: boolean;
    initial_value?: V;
}
export interface RadioFormFieldObject extends BaseFormFieldObject<string> {
    type: "radio";
    radioOptions: RadioFieldsetObject[];
}
export interface CheckboxFormFieldObject extends BaseFormFieldObject<string[]> {
    type: "checkbox";
    checkboxOptions: CheckboxFieldsetObject[];
}
export type FormFieldObject = CheckboxFormFieldObject | RadioFormFieldObject | BaseFormFieldObject;
export interface StyledFormProps {
    fields: FormFieldObject[];
    onSubmitFunction: (values: Record<string, unknown>, setSubmitting: (isSubmitting: boolean) => void) => void;
    submitLabel?: string;
}
/**
 * Formik form styled to ONS design guide with form error panel
 *
 * @param Props
 *
 *  - fields: List of fields to display on form.
 *  - onSubmitFunction: Function to call after submit of form and all field validation is valid.
 */
declare function StyledForm({ fields, onSubmitFunction, submitLabel }: StyledFormProps): React.JSX.Element;
export default StyledForm;
