/// <reference types="react" />
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
export interface BaseFormFieldObject {
    name: string;
    description?: string;
    type: string;
    id?: string;
    validate?: (value: any) => string | undefined;
    autoFocus?: boolean;
    initial_value?: string | string[];
}
export interface RadioFormFieldObject extends BaseFormFieldObject {
    type: "radio";
    radioOptions: RadioFieldsetObject[];
}
export interface CheckboxFormFieldObject extends BaseFormFieldObject {
    type: "checkbox";
    validate?: (value: string[]) => string | undefined;
    checkboxOptions: CheckboxFieldsetObject[];
}
export declare type FormFieldObject = CheckboxFormFieldObject | RadioFormFieldObject | BaseFormFieldObject;
export interface StyledFormProps {
    fields: FormFieldObject[];
    onSubmitFunction: (values: any, setSubmitting: (isSubmitting: boolean) => void) => void;
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
declare function StyledForm({ fields, onSubmitFunction, submitLabel }: StyledFormProps): JSX.Element;
export default StyledForm;
