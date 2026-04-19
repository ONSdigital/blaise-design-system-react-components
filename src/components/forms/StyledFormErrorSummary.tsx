import { useFormikContext } from "formik";
import { useEffect, useRef } from "react";

/**
 * An accessibility-focused error summary list.
 * Automatically displays when form validation fails after a submit attempt.
 * Shifts focus to the summary box to alert screen readers of the errors.
 * Provides anchor links to jump directly to the invalid form fields.
 */
export const StyledFormErrorSummary = () => {
    const { errors, isValid, submitCount, isSubmitting } =
        useFormikContext<Record<string, unknown>>();
    const errorFocus = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isValid && submitCount > 0 && !isSubmitting) {
            errorFocus.current?.focus();
        }
    }, [submitCount, isValid, isSubmitting]);

    if (isValid) {
        return null;
    }

    const errorKeys = Object.keys(errors);

    return (
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
                    {errorKeys.length === 1
                        ? "There is 1 problem with your answer"
                        : `There are ${errorKeys.length} problems with your answer`}
                </h2>
            </div>
            <div className="ons-panel__body">
                <ol className="ons-list">
                    {errorKeys.map((field) => (
                        <li
                            key={field}
                            className="ons-list__item"
                        >
                            <a
                                href={`#${field}`}
                                className="ons-list__link ons-js-inpagelink"
                            >
                                {String(errors[field as keyof typeof errors])}
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};
