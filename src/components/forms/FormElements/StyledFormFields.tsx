import React, {Fragment, ReactElement} from "react";
import {Field, useFormikContext} from "formik";
import {ONSInputField, RadioFieldset, CheckboxesFieldset} from "./Fields";

interface Props {
    description?: string,
    name: string,
    radioOptions?: any[],
    checkboxOptions?: any[],
    props: Pick<any, string | number | symbol>
}

export const StyledFormField = ({name, description, radioOptions = [], checkboxOptions = [], ...props}: Props): ReactElement => {
    const {errors}: any = useFormikContext();
    let newField: ReactElement;

    // @ts-ignore
    if (props.type === "radio") {
        newField = <RadioFieldset description={description} name={name} radioOptions={radioOptions}
                                  {...props}/>
    } 
    // @ts-ignore
    else if (props.type === "checkbox") {
        newField = <CheckboxesFieldset description={description} name={name} checkboxOptions={checkboxOptions}
                                  {...props}/>
    } else {
        newField = <Field name={name} description={description} {...props} component={ONSInputField}/>
    }

    return (
        <Fragment key={name}>
            {
                errors[name] ?
                    StyledFormFieldErrorWrapper(
                        errors[name],
                        "name",
                        newField
                    )
                    :
                    newField
            }
        </Fragment>
    );
};

export function StyledFormFieldErrorWrapper(fieldError: string, fieldName: string, field: ReactElement) {
    return (
        <div className="panel panel--error panel--no-title u-mb-s"
             id={`${fieldName}-error`}>
            <span className="u-vh">Error: </span>
            <div className="panel__body">
                <p className="panel__error">
                    <strong>{fieldError}</strong>
                </p>
                {field}
            </div>
        </div>
    );
}