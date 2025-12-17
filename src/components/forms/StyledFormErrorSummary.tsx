import { useFormikContext, FormikContextType } from "formik";
import React, { ReactElement, useEffect, useRef } from "react";

/**
 * Error summary list
 *  - Displayed when isValid is false.
 *  - Focuses div when error lists changes.
 *
 */
function StyledFormErrorSummary(): ReactElement {
    const { errors, isValid }: FormikContextType<unknown> = useFormikContext();

    const errorFocus = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isValid) {
            errorFocus.current?.focus();
        }
    }, [errors, isValid]);

    return (
        <>
            {
                !isValid
            && (
                <div
                    aria-labelledby="error-summary-title"
                    role="alert"
                    tabIndex={-1}
                    ref={errorFocus}
                    className="ons-panel ons-panel--error"
                >
                    <div className="ons-panel__header">
                        <h2
                            id="error-summary-title"
                            data-qa="error-header"
                            className="ons-panel__title ons-u-fs-r--b"
                        >
                            {
                                (
                                    Object.keys(errors).length === 1
                                        ? "There is 1 problem with your answer"
                                        : `There are ${Object.keys(errors).length} problems with your answer`
                                )
                            }
                        </h2>
                    </div>
                    <div className="ons-panel__body">
                        <ol className="ons-list">
                            {Object.keys(errors).map((field, index) => (
                                <li key={index} className="ons-list__item ">
                                    <a href={`#${field}`} className="ons-list__link ons-js-inpagelink">
                                        {
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            // @ts-ignore
                                            errors[field]
                                        }
                                    </a>
                                </li>
                            ))}

                        </ol>
                    </div>
                </div>
            )
            }
        </>
    );
}

export default StyledFormErrorSummary;
