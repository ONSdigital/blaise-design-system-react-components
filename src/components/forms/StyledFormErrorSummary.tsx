import { useEffect, useRef, useId } from "react";
import { useFormikContext } from "formik";

/** Props for StyledFormErrorSummary. */
export interface Props {
  /** Element ID. */
  id?: string;
}

/**
 * Renders a form error summary.
 */
export const StyledFormErrorSummary = ({ id }: Props) => {
  const { errors, isValid, submitCount, isSubmitting } =
    useFormikContext<Record<string, unknown>>();
  const errorFocus = useRef<HTMLDivElement>(null);

  const generatedId = useId();
  const baseId = id || `error-summary-${generatedId}`;
  const alertId = `${baseId}-alert`;

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
      id={baseId}
      aria-labelledby={alertId}
      role="alert"
      tabIndex={-1}
      ref={errorFocus}
      className="ons-panel ons-panel--error"
      data-testid={id ? `${id}-panel` : undefined}
    >
      <div className="ons-panel__header">
        <h2
          id={alertId}
          data-testid="error-header"
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
