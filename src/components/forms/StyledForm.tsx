import { Form, Formik, FormikValues } from "formik";
import { ONSButton } from "../ONSButton";
import { StyledFormErrorSummary } from "./StyledFormErrorSummary";
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

export interface BaseFormFieldObject<V = string> {
    name: string
    description?: string
    type: string
    id?: string
    validate?: (value: V) => string | undefined
    autoFocus?: boolean
    initial_value?: V | V[];
}

export interface RadioFormFieldObject extends BaseFormFieldObject<string> {
    type: "radio"
    radioOptions: RadioFieldsetObject[]
}

export interface CheckboxFormFieldObject extends BaseFormFieldObject<string[]> {
    type: "checkbox"
    checkboxOptions: CheckboxFieldsetObject[]
}

export type FormFieldObject = CheckboxFormFieldObject | RadioFormFieldObject | BaseFormFieldObject<string>;

export interface StyledFormProps<T extends FormikValues = FormikValues> {
    fields: FormFieldObject[]
    onSubmitFunction: (values: T, setSubmitting: (isSubmitting: boolean) => void) => void;
    submitLabel?: string
}

/*
 * Formik form styled to ONS design guide with form error panel
 *
 * @param Props
 *
 * - fields: List of fields to display on form.
 * - onSubmitFunction: Function to call after submit of form and all field validation is valid.
 */

export const StyledForm = <T extends FormikValues = FormikValues>({
    fields,
    onSubmitFunction,
    submitLabel
}: StyledFormProps<T>) => {

    const initialFieldValues = fields.reduce<Record<string, unknown>>((acc, field) => {
        if (field.initial_value !== undefined) {
            acc[field.name] = field.initial_value;
        } else if (field.type === "checkbox") {
            acc[field.name] = [];
        } else {
            acc[field.name] = "";
        }
        return acc;
    }, {});

    return (
        <Formik<T>
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={initialFieldValues as T}
            onSubmit={(values, { setSubmitting }) => {
                onSubmitFunction(values, setSubmitting);
            }}
        >
            {({ isValid, isSubmitting }) => (
                <Form>
                    <StyledFormErrorSummary />
                    {
                        fields.map((field, index) => {
                            const isAutoFocus = (isValid && index === 0);
                            return (
                                <StyledFormField
                                    key={field.name}
                                    {...field}
                                    autoFocus={isAutoFocus}
                                />
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
};
