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
export interface FormFieldObject {
    name: string;
    description?: string;
    type: string;
    id?: string;
    validate?: (value: string) => string | undefined;
    autoFocus?: boolean;
    radioOptions?: RadioFieldsetObject[];
    initial_value?: string;
}
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
