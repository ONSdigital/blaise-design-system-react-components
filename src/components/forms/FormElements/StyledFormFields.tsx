import React, { Fragment, ReactElement } from "react";
import { Field, useFormikContext } from "formik";
import { ONSInputField, RadioFieldset, CheckboxesFieldset } from "./Fields";

interface Props {
    description?: string,
    name: string,
    radioOptions?: any[],
    checkboxOptions?: any[],
    autoFocus: boolean,
    type?: string,
    props: Pick<any, string | number | symbol>
}

export const StyledFormField = ({
    name, description, radioOptions = [], checkboxOptions = [], ...props
}: Props): ReactElement => {
    const { errors }: any = useFormikContext();
    let newField: ReactElement;

    if (props.type === "radio") {
        newField = (
            <RadioFieldset
                description={description}
                name={name}
                radioOptions={radioOptions}
                {...props}
            />
        );
    } else if (props.type === "checkbox") {
        newField = (
            <CheckboxesFieldset
                description={description}
                name={name}
                checkboxOptions={checkboxOptions}
                {...props}
            />
        );
    } else {
        newField = <Field name={name} description={description} {...props} component={ONSInputField} />;
    }

    return (
        <Fragment key={name}>
            {
                errors[name]
                    ? StyledFormFieldErrorWrapper(
                        errors[name],
                        "name",
                        newField,
                    )
                    : newField
            }
        </Fragment>
    );
};

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
