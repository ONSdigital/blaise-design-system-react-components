import React, {Fragment, ReactElement, useEffect} from 'react';
import {Field, Form, Formik, FormikErrors, FormikValues} from "formik";

export interface FormFieldObject {
    name: string
    description?: string
    type: string
    validate?: (value: string) => string | undefined
    autoFocus?: boolean
}

export interface StyledFormProps {
    fields: FormFieldObject[]
    onSubmitFunction: (values: any, setSubmitting: (isSubmitting: boolean) => void) => void
}


function toUpperCase(string: string): string {
    return string.trim().replace(/^\w/, (c: string) => c.toUpperCase())
}

const ONSInputField = ({field, form, description, ...props}: any) => {
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

/**
 * Error summary list
 *  - Displayed when isValid is false.
 *  - Focuses div when error lists changes.
 *
 *
 * @param {boolean} isValid Whether the form is valid or not
 * @param {FormikErrors<FormikValues>} errors List of errors for all field
 * @constructor
 */
function FormErrorSummary(isValid: boolean, errors: FormikErrors<FormikValues>) {
    let errorFocus: HTMLDivElement | null;

    useEffect(() => {
        errorFocus?.focus();
    }, [errors, isValid])

    return <>
        {
            !isValid &&
            <div aria-labelledby="error-summary-title" role="alert" tabIndex={-1}
                 ref={inputEl => (errorFocus = inputEl)}
                 className="panel panel--error">
                <div className="panel__header">
                    <h2 id="error-summary-title" data-qa="error-header"
                        className="panel__title u-fs-r--b">
                        {
                            (
                                Object.keys(errors).length === 1 ?
                                    `There is 1 problem with your answer`
                                    :
                                    `There are ${Object.keys(errors).length} problems with your answer`
                            )
                        }
                    </h2>
                </div>
                <div className="panel__body">
                    <ol className="list">
                        {Object.keys(errors).map((field, index) =>
                            <li key={index} className="list__item ">
                                <a href={`#${field}`} className="list__link js-inpagelink">
                                    {
                                        // @ts-ignore
                                        errors[field]
                                    }
                                </a>
                            </li>
                        )}

                    </ol>
                </div>
            </div>
        }
    </>;
}

/**
 * Formik form styled to ONS design guide with form error panel
 *
 * @param Props
 *
 *  - fields: List of fields to display on form.
 *  - onSubmitFunction: Function to call after submit of form and all field validation is valid.
 */
function StyledForm({fields, onSubmitFunction}: StyledFormProps) {


    function InputErrorPanel(fieldError: string, fieldName: string, field: ReactElement) {
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

    let initialFieldValues: any = {};
    fields.forEach(({name}) => {
        initialFieldValues[name] = "";
    });

    return (
        <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={initialFieldValues}
            onSubmit={(values, {setSubmitting}) => {
                onSubmitFunction(values, setSubmitting);
            }}
        >
            {({
                  errors,
                  isSubmitting,
                  isValid
              }) => (
                <Form>
                    {FormErrorSummary(isValid, errors)}

                    {
                        fields.map((field, index) => {
                            field.autoFocus = (index === 0)
                            return (
                                <Fragment key={field.name}>
                                    {
                                        // @ts-ignore
                                        errors[field.name] ?
                                            // @ts-ignore
                                            InputErrorPanel(
                                                // @ts-ignore
                                                errors[field.name],
                                                "name",
                                                <Field {...field} component={ONSInputField}/>
                                            )
                                            :
                                            <Field {...field} component={ONSInputField}/>
                                    }
                                </Fragment>
                            )
                        })
                    }

                    <br/>

                    <button type="submit" className="btn" disabled={isSubmitting} data-testid={"submit-btn"}>
                        <span className="btn__inner">Save and continue</span>
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default StyledForm;