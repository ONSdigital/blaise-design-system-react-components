import { Fragment, ReactElement, InputHTMLAttributes } from "react";
import { Field, useFormikContext, FieldInputProps } from "formik";
import type { RadioFieldset, CheckboxFieldset } from "../StyledForm";
import { capitaliseFirstLetter } from "../../../utilities/textFormatting";

interface UnknownProps {
  [key: string]: unknown;
}

interface RadioFieldsetProps extends UnknownProps {
  /** Text displayed in the fieldset legend. */
  description?: string;
  /** Formik field name. */
  name: string;
  /** Configuration array for the radio options. */
  radioOptions?: RadioFieldset[];
  /** If true, the first radio option will receive focus on mount. */
  autoFocus: boolean;
}

interface CheckboxFieldsetProps extends UnknownProps {
  /** Text displayed in the fieldset legend. */
  description?: string;
  /** Configuration array for the checkbox options. */
  checkboxOptions?: CheckboxFieldset[];
  /** Formik field name. */
  name: string;
  /** If true, the first checkbox option will receive focus on mount. */
  autoFocus: boolean;
}

/** A group of ONS-styled radio buttons integrated with Formik. */
export function RadioFieldset({
  description,
  name,
  radioOptions,
  ...props
}: RadioFieldsetProps): ReactElement {
  return (
    <div className="ons-field ons-u-mb-m">
      <fieldset className="ons-fieldset">
        <legend className="ons-fieldset__legend ons-u-fs-r--b">{description}</legend>
        <div className="ons-grid">
          <div className="ons-grid__col ons-col-8@m ons-col-6@l">
            <div className="ons-input-items">
              <div className="ons-radios__items">
                {radioOptions?.map((o, i) => (
                  <Fragment key={o.id}>
                    <span className="ons-radios__item">
                      <span className="ons-radio">
                        <Field
                          type="radio"
                          id={o.id}
                          name={name}
                          value={o.value}
                          className="ons-radio__input"
                          {...props}
                          autoFocus={props.autoFocus && i === 0}
                        />
                        <label
                          className={`ons-radio__label ${o.description ? "ons-label--with-description" : ""}`}
                          htmlFor={o.id}
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
                            id={`${o.id}-other-wrap`}
                          >
                            <label
                              className="ons-label ons-u-fs-s--b"
                              htmlFor={o.specifyOption.id}
                            >
                              {o.specifyOption.description}
                            </label>
                            <Field
                              type={o.specifyOption.type}
                              id={o.specifyOption.id}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

/** A group of ONS-styled checkboxes with a 'Select All' utility, integrated with Formik. */
export function CheckboxFieldset({
  description,
  checkboxOptions,
  name,
  ...props
}: CheckboxFieldsetProps): ReactElement {
  const { values, setFieldValue } = useFormikContext<Record<string, string[]>>();
  const allValues = (checkboxOptions || []).map((o) => o.value);
  const isAllSelected = () =>
    allValues.length > 0 && allValues.every((v) => values[name]?.includes(v));

  return (
    <div className="ons-field ons-u-mb-m">
      <fieldset className="ons-fieldset">
        <legend className="ons-fieldset__legend ons-u-fs-r--b">{description}</legend>
        <div className="ons-grid">
          <div className="ons-grid__col ons-col-8@m ons-col-6@l">
            <button
              type="button"
              className="ons-btn ons-u-mb-s ons-js-auto-selector ons-btn--small ons-btn--secondary"
              onClick={() => setFieldValue(name, isAllSelected() ? [] : allValues)}
            >
              <span className="ons-btn__inner">
                <span className="ons-js-button-text">
                  {isAllSelected() ? "Unselect All" : "Select All"}
                </span>
                <span className="ons-u-vh"> following checkboxes</span>
              </span>
            </button>
            <div className="ons-input-items">
              <div className="ons-checkboxes__items">
                {checkboxOptions?.map((o, i) => (
                  <Fragment key={o.id}>
                    <span className="ons-checkboxes__item">
                      <span className="ons-checkbox">
                        <Field
                          type="checkbox"
                          id={o.id}
                          name={name}
                          value={o.value}
                          className="ons-checkbox__input"
                          {...props}
                          autoFocus={props.autoFocus && i === 0}
                        />
                        <label
                          className={`ons-checkbox__label ${o.description ? "ons-label--with-description" : ""}`}
                          htmlFor={o.id}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

interface TextInputFieldsetProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Object containing Formik's field input props for this input. */
  field: FieldInputProps<string>;
  /** Optional hint text displayed beneath the label. */
  description?: string;
  /** HTML input type. */
  type?: string;
}

/** A single ONS-styled text input integrated with Formik. */
export function TextInputFieldset({
  field,
  description,
  type = "text",
  ...props
}: TextInputFieldsetProps): ReactElement {
  const id = props.id || field.name;

  return (
    <div className="ons-field ons-u-mb-m">
      <div className="ons-grid">
        <div className="ons-grid__col ons-col-8@m ons-col-6@l">
          <label
            className={`ons-label ${description ? "ons-label--with-description" : ""}`}
            htmlFor={id}
          >
            {capitaliseFirstLetter(field.name.trim())}
          </label>
          {description && (
            <span
              id={`${id}-description-hint`}
              className="ons-label__description ons-input--with-description"
            >
              {description}
            </span>
          )}
          <input
            id={id}
            className="ons-input ons-input--text ons-input-type__input"
            {...field}
            value={field.value ?? ""}
            type={type}
            {...props}
          />
        </div>
      </div>
    </div>
  );
}
