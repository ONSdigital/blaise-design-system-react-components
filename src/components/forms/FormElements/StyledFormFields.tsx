import React, { Fragment, ReactElement } from "react";
import { Field, useFormikContext } from "formik";

import { ONSInputField, RadioFieldset, CheckboxesFieldset } from "./Fields";

import { RadioFieldsetObject, CheckboxFieldsetObject } from "../StyledForm";

interface Props {
    description?: string,
    name: string,
    radioOptions?: RadioFieldsetObject[],
    checkboxOptions?: CheckboxFieldsetObject[],
    autoFocus?: boolean,
    type?: string,
    [key: string]: unknown;
}

export function StyledFormFieldErrorWrapper(fieldError: string, fieldName: string, field: ReactElement) {
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
}

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
        newField = <Field name={name} description={description} autoFocus={autoFocus} {...props} component={ONSInputField} />;
    }

    return (
        <Fragment key={name}>
            {
                errors[name]
                    ? StyledFormFieldErrorWrapper(
                        errors[name] || "",
                        name,
                        newField,
                    )
                    : newField
            }
        </Fragment>
    );
};
