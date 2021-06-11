import {FormikErrors, FormikValues} from "formik";
import React, {useEffect} from "react";

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
function ErrorSummary(isValid: boolean, errors: FormikErrors<FormikValues>) {
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

export default ErrorSummary