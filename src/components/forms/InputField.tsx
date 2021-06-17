import React, {ReactElement} from "react";

function toUpperCase(string: string): string {
    return string.trim().replace(/^\w/, (c: string) => c.toUpperCase())
}

export const ONSInputField = ({field, form, description, ...props}: any) => {
    return <>
        <div className="field">
            <label className={`label ${(description ? "label--with-description" : "")}`} htmlFor={field.name}>
                {toUpperCase(field.name)}
            </label>
            {
                description &&
                <span id="description-hint" className="label__description  input--with-description">
                    {description}
                </span>
            }
            <input id={field.name}
                   className="input input--text input-type__input "
                   {...field}
                   {...props}/>
        </div>
    </>
};

export function InputErrorPanel(fieldError: string, fieldName: string, field: ReactElement) {
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