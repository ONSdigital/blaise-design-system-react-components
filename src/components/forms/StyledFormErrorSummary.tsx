import { useFormikContext } from "formik";
import { useEffect, useId, useRef } from "react";

/** Props for StyledFormErrorSummary. */
export interface Props {
  /** Element ID. */
  id?: string;
  /** Map of Formik field names to rendered element IDs. */
  fieldTargetIds?: Record<string, string>;
}

/** Renders a form error summary. */
export const StyledFormErrorSummary = ({ id, fieldTargetIds }: Props) => {
  const { errors, isValid, submitCount, isSubmitting } =
    useFormikContext<Record<string, string | undefined>>();
  const errorFocusRef = useRef<HTMLDivElement>(null);

  const generatedId = useId();
  const baseId = id ?? `error-summary-${generatedId}`;
  const alertId = `${baseId}-alert`;

  useEffect(() => {
    if (!isValid && submitCount > 0 && !isSubmitting) {
      errorFocusRef.current?.focus();
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
      ref={errorFocusRef}
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
                href={`#${fieldTargetIds?.[field] || field}`}
                className="ons-list__link ons-js-inpagelink"
              >
                {errors[field]}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
