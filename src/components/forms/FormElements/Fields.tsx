import React, {Fragment, ReactElement, useState} from "react";
import {Field} from "formik";
import {RadioFieldsetObject, CheckboxFieldsetObject} from "../StyledForm";

function toUpperCase(string: string): string {
    return string.trim().replace(/^\w/, (c: string) => c.toUpperCase())
}


interface RadioFieldsetProps {
    description?: string,
    name: string,
    radioOptions?: any[],
    props: Pick<any, string | number | symbol>
}

interface CheckboxesProps{
    description?: string,
    checkboxOptions?: any[],
    name: string,
    props: Pick<any, string | number | symbol>
}

export function RadioFieldset({description, name, radioOptions, ...props}: RadioFieldsetProps): ReactElement {
    return <fieldset className="fieldset">
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
                                        <label className={`radio__label ${radioOption.description !== undefined ? "label--with-description" : ""}`}
                                               htmlFor={radioOption.id}
                                               id={`${radioOption.id}-label`}>{radioOption.label}
                                            {
                                                radioOption.description !== undefined &&
                                                <span id="white-label-description-hint"
                                                      className="label__description radio__label--with-description">
                                                    {radioOption.description}
                                                </span>
                                            }
                                      </label>
                                        {
                                            radioOption.specifyOption && (
                                                <span className="radio__other radio__other--open"
                                                      id="other-radio-other-wrap">
                                                    <label className="label u-fs-s--b "
                                                           htmlFor={radioOption.specifyOption.id}
                                                           id="other-textbox-label">
                                                        {radioOption.specifyOption.description}
                                                    </label>
                                                    <Field type={radioOption.specifyOption.type}
                                                           id={radioOption.specifyOption.id}
                                                           name={radioOption.specifyOption.name}
                                                           validate={radioOption.specifyOption.validate}
                                                           min={radioOption.specifyOption.min}
                                                           className="input input--text input-type__input input--w-auto"
                                                    />
                                                </span>
                                            )
                                        }
                                        </span>
                                </p>
                                <br/>
                            </Fragment>
                        );
                    })
                )
            }
        </div>
    </fieldset>;
}

export function CheckboxesFieldset({ description, checkboxOptions, name, ...props }: CheckboxesProps): ReactElement {
    return <fieldset className="fieldset">
        <legend className="fieldset__legend">
            {description}
        </legend>
        <div className="checkboxes__items" id={name}>
            {
                (
                    checkboxOptions && checkboxOptions.length > 0 &&
                    checkboxOptions.map((checkboxOption: CheckboxFieldsetObject) => {
                        return (
                            <Fragment key={checkboxOption.id}>
                                <p className="checkboxes__items">
                                    <span className="checkbox">
                                        <Field type="checkbox"
                                               id={checkboxOption.id}
                                               name={name}
                                               value={checkboxOption.value}
                                               className="checkbox__input js-checkbox" {...props}
                                               />
                                        <label className={`checkbox__label ${checkboxOption.description !== undefined ? "label--with-description" : ""}`}
                                               htmlFor={checkboxOption.id}
                                               id={`${checkboxOption.id}-label`}>{checkboxOption.label}
                                            {
                                                checkboxOption.description !== undefined &&
                                                <span id="white-label-description-hint"
                                                      className="label__description checkbox__label--with-description">
                                                    {checkboxOption.description}
                                                </span>
                                            }
                                      </label>
                                    </span>
                                </p>
                                <br/>
                            </Fragment>
                        );
                    })
                )
            }
        </div>
    </fieldset>;
}

export const ONSInputField = ({field, form, description, ...props}: any) => {
    const id = (props.id ? props.id : field.name);
    return <>
        <div className="field">
            <label className={`label ${(description ? "label--with-description" : "")}`} htmlFor={id}>
                {toUpperCase(field.name)}
            </label>
            {
                description &&
                <span id="description-hint" className="label__description  input--with-description">
                    {description}
                </span>
            }
            <input id={id}
                   className="input input--text input-type__input "
                   {...field}
                   {...props}/>
        </div>
    </>
};

export default CheckboxesFieldset;