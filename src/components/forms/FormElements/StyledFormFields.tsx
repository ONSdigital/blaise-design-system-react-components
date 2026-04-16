import { Fragment, ReactElement } from "react";
import { Field, useFormikContext } from "formik";
import { ONSInputField, RadioFieldset, CheckboxesFieldset } from "./Fields";
import { RadioFieldsetObject, CheckboxFieldsetObject } from "../StyledForm";

export interface Props {
    /** The visible label or legend text for the field. */
    description?: string;
    /** The Formik field name used for state management. */
    name: string;
    /** Configuration array for radio options (only used when type is 'radio'). */
    radioOptions?: RadioFieldsetObject[];
    /** Configuration array for checkbox options (only used when type is 'checkbox'). */
    checkboxOptions?: CheckboxFieldsetObject[];
    /** If true, the input will receive focus on mount. */
    autoFocus?: boolean;
    /** The type of field to render (e.g., 'radio', 'checkbox', 'text', 'date'). */
    type?: string;
    /** Additional props passed down to the underlying ONS input components. */
    [key: string]: unknown;
}

/** Internal sub-component to wrap fields in an ONS error panel when validation fails. */
const StyledFormFieldErrorWrapper = (
    fieldError: string,
    fieldName: string,
    field: ReactElement,
) => {
    return (
        <div
            className="ons-panel ons-panel--error ons-panel--no-title ons-u-mb-s"
            id={`${fieldName}-error`}
        >
            <span className="ons-u-vh">Error: </span>
            <div className="ons-panel__body">
                <p className="ons-panel__error">
                    <strong>{fieldError}</strong>
                </p>
                {field}
            </div>
        </div>
    );
};

/**
 * A factory component that resolves the specific ONS field type to render based on props.
 * Automatically wraps the field in an error state if Formik validation fails.
 */
export const StyledFormField = ({
    name,
    description,
    radioOptions = [],
    checkboxOptions = [],
    autoFocus = false,
    ...props
}: Props): ReactElement => {
    const { errors } = useFormikContext<Record<string, string>>();
    let newField: ReactElement;

    // Factory logic to determine which specialized field component to use
    if (props.type === "radio") {
        newField = (
            <RadioFieldset
                description={description}
                name={name}
                radioOptions={radioOptions}
                autoFocus={autoFocus}
                {...props}
            />
        );
    } else if (props.type === "checkbox") {
        newField = (
            <CheckboxesFieldset
                description={description}
                name={name}
                checkboxOptions={checkboxOptions}
                autoFocus={autoFocus}
                {...props}
            />
        );
    } else {
        newField = (
            <Field
                name={name}
                description={description}
                autoFocus={autoFocus}
                {...props}
                component={ONSInputField}
            />
        );
    }

    return (
        <Fragment>
            {errors[name]
                ? StyledFormFieldErrorWrapper(errors[name] || "", name, newField)
                : newField}
        </Fragment>
    );
};
