import React, { Fragment, ReactElement } from "react";
import { Field, useFormikContext } from "formik";
// eslint-disable-next-line import/no-cycle
import { RadioFieldsetObject, CheckboxFieldsetObject } from "../StyledForm";
import { isObjectWithProperty } from "../../../utilities/Types";

function toUpperCase(string: string): string {
    return string.trim().replace(/^\w/, (c: string) => c.toUpperCase());
}

interface RadioFieldsetProps {
    description?: string,
    name: string,
    radioOptions?: RadioFieldsetObject[],
    autoFocus: boolean,
    props: Pick<any, string | number | symbol>
}

interface CheckboxesProps {
    description?: string,
    checkboxOptions?: CheckboxFieldsetObject[],
    name: string,
    autoFocus: boolean,
    props: Pick<any, string | number | symbol>
}

export function RadioFieldset({
    description, name, radioOptions, ...props
}: RadioFieldsetProps): ReactElement {
    return (
        <fieldset className="ons-fieldset">
            <legend className="ons-fieldset__legend">
                {description}
            </legend>
            <div className="ons-radios__items" id={name}>
                {
                    (
                        radioOptions && radioOptions.length > 0
                    && radioOptions.map((radioOption: RadioFieldsetObject, radioOptionIndex: number) => (
                        <Fragment key={radioOption.id}>
                            <p className="ons-radios__item">
                                <span className="ons-radio">
                                    <Field
                                        type="radio"
                                        id={radioOption.id}
                                        name={name}
                                        value={radioOption.value}
                                        className="ons-radio__input js-radio"
                                        {...props}
                                        autoFocus={props.autoFocus && radioOptionIndex === 0}
                                    />
                                    <label
                                        className={`ons-radio__label ${radioOption.description !== undefined ? "ons-label--with-description" : ""}`}
                                        htmlFor={radioOption.id}
                                        id={`${radioOption.id}-label`}
                                    >
                                        {radioOption.label}
                                        {
                                            radioOption.description !== undefined
                                                && (
                                                    <span
                                                        id="white-label-description-hint"
                                                        className="ons-label__description ons-radio__label--with-description"
                                                    >
                                                        {radioOption.description}
                                                    </span>
                                                )
                                        }
                                    </label>
                                    {
                                        radioOption.specifyOption && (
                                            <span
                                                className="ons-radio__other ons-radio__other--open"
                                                id="other-radio-other-wrap"
                                            >
                                                <label
                                                    className="ons-label ons-u-fs-s--b "
                                                    htmlFor={radioOption.specifyOption.id}
                                                    id="other-textbox-label"
                                                >
                                                    {radioOption.specifyOption.description}
                                                </label>
                                                <Field
                                                    type={radioOption.specifyOption.type}
                                                    id={radioOption.specifyOption.id}
                                                    name={radioOption.specifyOption.name}
                                                    validate={radioOption.specifyOption.validate}
                                                    min={radioOption.specifyOption.min}
                                                    className="ons-input ons-input--text ons-input-type__input ons-input--w-auto"
                                                />
                                            </span>
                                        )
                                    }
                                </span>
                            </p>
                            <br />
                        </Fragment>
                    ))
                    )
                }
            </div>
        </fieldset>
    );
}

export function CheckboxesFieldset({
    description, checkboxOptions, name, ...props
}: CheckboxesProps): ReactElement {
    const { values, setFieldValue } = useFormikContext();
    const allValues = (checkboxOptions || []).map((checkboxOption) => checkboxOption.value);

    function areArraysEqual(array1: any[], array2: any[]) {
        if (array1.length !== array2.length) {
            return false;
        }
        return array1.every((item) => array2.includes(item));
    }

    function isAllSelected() {
        if (!isObjectWithProperty(values, name)) {
            return [];
        }
        return areArraysEqual(values[name] || [], allValues);
    }

    function handleSelectAll() {
        if (isAllSelected()) {
            setFieldValue(name, []);
        } else {
            setFieldValue(name, allValues);
        }
    }

    return (
        <fieldset className="ons-fieldset">
            <legend className="ons-fieldset__legend">
                {description}
            </legend>

            <button
                type="button"
                className="ons-btn ons-u-mb-s js-auto-selector ons-btn--small ons-btn--secondary"
                onClick={handleSelectAll}
            >
                <span className="ons-btn__inner">
                    <span className="js-button-text">{isAllSelected() ? "Unselect All" : "Select All"}</span>
                    <span className="ons-u-vh"> following checkboxes</span>
                </span>
            </button>

            <div className="checkboxes__items" id={name}>
                {
                    (
                        checkboxOptions && checkboxOptions.length > 0
                    && checkboxOptions.map((checkboxOption: CheckboxFieldsetObject, checkboxIndex: number) => (
                        <Fragment key={checkboxOption.id}>
                            <p className="ons-checkboxes__item">
                                <span className="ons-checkbox">
                                    <Field
                                        type="checkbox"
                                        id={checkboxOption.id}
                                        name={name}
                                        value={checkboxOption.value}
                                        className="ons-checkbox__input js-checkbox"
                                        {...props}
                                        autoFocus={props.autoFocus && checkboxIndex === 0}
                                    />
                                    <label
                                        className={`ons-checkbox__label ${checkboxOption.description !== undefined ? "ons-label--with-description" : ""}`}
                                        htmlFor={checkboxOption.id}
                                        id={`${checkboxOption.id}-label`}
                                    >
                                        {checkboxOption.label}
                                        {
                                            checkboxOption.description !== undefined
                                                && (
                                                    <span
                                                        id="white-label-description-hint"
                                                        className="ons-label__description checkbox__label--with-description"
                                                    >
                                                        {checkboxOption.description}
                                                    </span>
                                                )
                                        }
                                    </label>
                                </span>
                            </p>
                            <br />
                        </Fragment>
                    ))
                    )
                }
            </div>
        </fieldset>
    );
}

export const ONSInputField = ({
    field, form, description, ...props
}: any) => {
    const id = (props.id ? props.id : field.name);
    return (
        <div className="ons-field">
            <label className={`ons-label ${(description ? "ons-label--with-description" : "")}`} htmlFor={id}>
                {toUpperCase(field.name)}
            </label>
            {
                description
                && (
                    <span id="description-hint" className="ons-label__description  ons-input--with-description">
                        {description}
                    </span>
                )
            }
            <input
                id={id}
                className="ons-input ons-input--text ons-input-type__input "
                {...field}
                {...props}
            />
        </div>
    );
};

export default CheckboxesFieldset;
