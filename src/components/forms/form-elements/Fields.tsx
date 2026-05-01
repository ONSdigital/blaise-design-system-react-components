import { Fragment, ReactElement, InputHTMLAttributes, useId } from "react";
import { Field, FieldInputProps, useFormikContext } from "formik";
import type { RadioFieldset, CheckboxFieldset } from "../StyledForm";
import { capitaliseFirstLetter } from "../../../utilities/textFormatting";

interface UnknownProps {
  [key: string]: unknown;
}

interface RadioFieldsetProps extends UnknownProps {
  /** Element ID. */
  id?: string;
  /** Legend text. */
  description?: string;
  /** Field name. */
  name: string;
  /** Radio options. */
  radioOptions?: RadioFieldset[];
  /** Whether to focus the first option. */
  autoFocus: boolean;
}

interface CheckboxFieldsetProps extends UnknownProps {
  /** Element ID. */
  id?: string;
  /** Legend text. */
  description?: string;
  /** Checkbox options. */
  checkboxOptions?: CheckboxFieldset[];
  /** Field name. */
  name: string;
  /** Whether to focus the first option. */
  autoFocus: boolean;
}

interface TextInputFieldsetProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Element ID. */
  id?: string;
  /** Field name. */
  name: string;
  /** Hint text. */
  description?: string;
  /** Input type. */
  type?: string;
  /** Validation function. */
  validate?: (value: string) => string | undefined;
}

const getOptionId = (baseId: string, index: number, explicitId?: string) =>
  explicitId || `${baseId}-option-${index + 1}`;

/** Renders a radio group wired to Formik state. */
export function RadioFieldset({
  id,
  description,
  name,
  radioOptions,
  ...props
}: RadioFieldsetProps): ReactElement {
  const generatedId = useId();
  const baseId = id || `radio-${generatedId}`;

  return (
    <div
      id={baseId}
      data-testid={id ? `${id}-fieldset` : undefined}
      className="ons-field ons-u-mb-m"
    >
      <fieldset className="ons-fieldset">
        <legend className="ons-fieldset__legend ons-u-fs-r--b">{description}</legend>
        <div className="ons-grid">
          <div className="ons-grid__col ons-col-8@m ons-col-6@l">
            <div className="ons-input-items">
              <div className="ons-radios__items">
                {radioOptions?.map((o, i) => {
                  const optionId = getOptionId(baseId, i, o.id);
                  const specifyId = o.specifyOption?.id || `${optionId}-specify`;

                  return (
                    <Fragment key={o.id || `${o.value}-${i}`}>
                      <span className="ons-radios__item">
                        <span className="ons-radio">
                          <Field
                            type="radio"
                            id={optionId}
                            name={name}
                            value={o.value}
                            className="ons-radio__input"
                            {...props}
                            autoFocus={props.autoFocus && i === 0}
                          />
                          <label
                            className={`ons-radio__label ${o.description ? "ons-label--with-description" : ""}`}
                            htmlFor={optionId}
                          >
                            {o.label}
                            {o.description && (
                              <span className="ons-label__description ons-radio__label--with-description">
                                {o.description}
                              </span>
                            )}
                          </label>
                          {o.specifyOption && (
                            <span
                              className="ons-radio__other ons-radio__other--open"
                              id={`${optionId}-other-wrap`}
                            >
                              <label
                                className="ons-label ons-u-fs-s--b"
                                htmlFor={specifyId}
                              >
                                {o.specifyOption.description}
                              </label>
                              <Field
                                type={o.specifyOption.type}
                                id={specifyId}
                                name={o.specifyOption.name}
                                validate={o.specifyOption.validate}
                                min={o.specifyOption.min}
                                className="ons-input ons-input--text ons-input-type__input ons-input--w-auto"
                              />
                            </span>
                          )}
                        </span>
                      </span>
                      <br />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

/** Renders a checkbox group. */
export function CheckboxFieldset({
  id,
  description,
  checkboxOptions,
  name,
  ...props
}: CheckboxFieldsetProps): ReactElement {
  const { values, setFieldValue } = useFormikContext<Record<string, string[]>>();
  const allValues = (checkboxOptions || []).map((o) => o.value);
  const isAllSelected = allValues.length > 0 && allValues.every((v) => values[name]?.includes(v));
  const generatedId = useId();
  const baseId = id || `checkbox-${generatedId}`;

  return (
    <div
      id={baseId}
      data-testid={id ? `${id}-fieldset` : undefined}
      className="ons-field ons-u-mb-m"
    >
      <fieldset className="ons-fieldset">
        <legend className="ons-fieldset__legend ons-u-fs-r--b">{description}</legend>
        <div className="ons-grid">
          <div className="ons-grid__col ons-col-8@m ons-col-6@l">
            <button
              data-testid={id ? `${id}-select-all` : undefined}
              type="button"
              className="ons-btn ons-u-mb-s ons-js-auto-selector ons-btn--small ons-btn--secondary"
              onClick={() => setFieldValue(name, isAllSelected ? [] : allValues)}
            >
              <span className="ons-btn__inner">
                <span className="ons-js-button-text">
                  {isAllSelected ? "Unselect All" : "Select All"}
                </span>
                <span className="ons-u-vh"> following checkboxes</span>
              </span>
            </button>
            <div className="ons-input-items">
              <div className="ons-checkboxes__items">
                {checkboxOptions?.map((o, i) => {
                  const optionId = getOptionId(baseId, i, o.id);

                  return (
                    <Fragment key={o.id || `${o.value}-${i}`}>
                      <span className="ons-checkboxes__item">
                        <span className="ons-checkbox">
                          <Field
                            type="checkbox"
                            id={optionId}
                            name={name}
                            value={o.value}
                            className="ons-checkbox__input"
                            {...props}
                            autoFocus={props.autoFocus && i === 0}
                          />
                          <label
                            className={`ons-checkbox__label ${o.description ? "ons-label--with-description" : ""}`}
                            htmlFor={optionId}
                          >
                            {o.label}
                            {o.description && (
                              <span className="ons-label__description ons-checkbox__label--with-description">
                                {o.description}
                              </span>
                            )}
                          </label>
                        </span>
                      </span>
                      <br />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

/** Renders a text-like input wired to Formik state. */
export function TextInputFieldset({
  id,
  name,
  description,
  type = "text",
  validate,
  ...props
}: TextInputFieldsetProps): ReactElement {
  const generatedId = useId();
  const baseId = id || `input-${generatedId}`;
  const hintId = `${baseId}-description-hint`;

  return (
    <div className="ons-field ons-u-mb-m">
      <div className="ons-grid">
        <div className="ons-grid__col ons-col-8@m ons-col-6@l">
          <label
            className={`ons-label ${description ? "ons-label--with-description" : ""}`}
            htmlFor={baseId}
          >
            {capitaliseFirstLetter(name.trim())}
          </label>
          {description && (
            <span
              id={hintId}
              className="ons-label__description ons-input--with-description"
            >
              {description}
            </span>
          )}
          <Field
            name={name}
            type={type}
            validate={validate}
          >
            {({ field }: { field: FieldInputProps<string> }) => (
              <input
                id={baseId}
                className="ons-input ons-input--text ons-input-type__input"
                {...field}
                value={field.value ?? ""}
                type={type}
                aria-describedby={description ? hintId : undefined}
                data-testid={id ? `${id}-input` : undefined}
                {...props}
              />
            )}
          </Field>
        </div>
      </div>
    </div>
  );
}
