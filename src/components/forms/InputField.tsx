import React, {Fragment, ReactElement} from "react";
import {Field} from "formik";
import {RadioFieldsetObject} from "./StyledForm";

function toUpperCase(string: string): string {
    return string.trim().replace(/^\w/, (c: string) => c.toUpperCase())
}

export const ONSRadioFieldset = ({field, name, form, description, radioOptions, ...props}: any) => {
    return <>
        <fieldset className="fieldset">
            <legend className="fieldset__legend">
                {description}
            </legend>
            <div className="radios__items" id={name}>
                {
                    (
                        radioOptions && radioOptions.length > 0 &&
                        radioOptions.map((radioOption: RadioFieldsetObject) => {
                            return (
                                <Fragment key={radioOption.id}>
                                    <p className="radios__item">
                                    <span className="radio">
                                        <Field type="radio"
                                               id={radioOption.id}
                                               name={name}
                                               value={radioOption.value}
                                               className="radio__input js-radio" {...props}/>
                                        <label className="radio__label"
                                               htmlFor={radioOption.value}
                                               id={`${radioOption.id}-label`}>{radioOption.label}
                                      </label>
                                    </span>
                                    </p>
                                    <br/>
                                </Fragment>
                            )
                        })
                    )
                }
            </div>
        </fieldset>
    </>
};

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