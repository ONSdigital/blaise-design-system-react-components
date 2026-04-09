import { FormikValues } from "formik";
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
export interface BaseFormFieldObject<V = string> {
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
export type FormFieldObject = CheckboxFormFieldObject | RadioFormFieldObject | BaseFormFieldObject<string>;
export interface StyledFormProps<T extends FormikValues = FormikValues> {
    fields: FormFieldObject[];
    onSubmitFunction: (values: T, setSubmitting: (isSubmitting: boolean) => void) => void;
    submitLabel?: string;
}
declare function StyledForm<T extends FormikValues = FormikValues>({ fields, onSubmitFunction, submitLabel }: StyledFormProps<T>): import("react/jsx-runtime").JSX.Element;
export default StyledForm;
