import { Field, type FieldInputProps, useFormikContext } from "formik";
import { type InputHTMLAttributes, type ReactElement, useId } from "react";

import { capitaliseFirstLetter } from "../../../utilities/textFormatting";

import type { CheckboxFieldset, RadioFieldset } from "../StyledForm";

type TextLikeFieldType = "text" | "password" | "number" | "date" | "email";

interface RadioFieldsetProps {
  /** Element ID. */
  id?: string;
  /** Whether field-specific test IDs should be rendered. */
  includeTestIds?: boolean;
  /** Legend text. */
  description?: string;
  /** Field name. */
  name: string;
  /** Radio options. */
  radioOptions?: readonly RadioFieldset[];
  /** Whether to focus the first option. */
  autoFocus: boolean;
  /** Validation function. */
  validate?: (value: string) => string | undefined;
}

interface CheckboxFieldsetProps {
  /** Element ID. */
  id?: string;
  /** Whether field-specific test IDs should be rendered. */
  includeTestIds?: boolean;
  /** Legend text. */
  description?: string;
  /** Checkbox options. */
  checkboxOptions?: readonly CheckboxFieldset[];
  /** Field name. */
  name: string;
  /** Whether to focus the first option. */
  autoFocus: boolean;
  /** Validation function. */
  validate?: (value: string[]) => string | undefined;
}

interface TextInputFieldsetProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Element ID. */
  id?: string;
  /** Whether field-specific test IDs should be rendered. */
  includeTestIds?: boolean;
  /** Field name. */
  name: string;
  /** Hint text. */
  description?: string;
  /** Input type. */
  type?: TextLikeFieldType;
  /** Validation function. */
  validate?: (value: string) => string | undefined;
}

const getOptionId = (baseId: string, index: number, explicitId?: string) =>
  explicitId || `${baseId}-option-${index + 1}`;

/** Renders a radio group wired to Formik state. */
export function RadioFieldset({
  id,
  includeTestIds,
  description,
  name,
  radioOptions,
  autoFocus,
  validate,
}: RadioFieldsetProps): ReactElement {
  const { values } = useFormikContext<Record<string, string>>();
  const generatedId = useId();
  const baseId = id ?? `radio-${generatedId}`;

  return (
    <div
      id={baseId}
      data-testid={includeTestIds ? `${baseId}-fieldset` : undefined}
      className="ons-field ons-u-mb-m"
    >
      <fieldset className="ons-fieldset">
        <legend className="ons-fieldset__legend ons-u-fs-r--b">{description}</legend>
        <div className="ons-grid">
          <div className="ons-grid__col ons-col-8@m ons-col-6@l">
            <div className="ons-input-items">
              <div className="ons-radios__items">
                {radioOptions?.map((option, index) => {
                  const optionId = getOptionId(baseId, index, option.id);
                  const specifyId = option.specifyOption?.id || `${optionId}-specify`;
                  const isSpecifyOptionOpen = values[name] === option.value;

                  return (
                    <div
                      key={option.id || `${option.value}-${index}`}
                      className="ons-radios__item"
                    >
                      <span className="ons-radio">
                        <Field
                          type="radio"
                          id={optionId}
                          name={name}
                          value={option.value}
                          validate={validate}
                          className="ons-radio__input"
                          autoFocus={autoFocus && index === 0}
                        />
                        <label
                          className={`ons-radio__label ${option.description ? "ons-label--with-description" : ""}`}
                          htmlFor={optionId}
                        >
                          {option.label}
                          {option.description && (
                            <span className="ons-label__description ons-radio__label--with-description">
                              {option.description}
                            </span>
                          )}
                        </label>
                        {option.specifyOption && (
                          <span
                            className={`ons-radio__other ${isSpecifyOptionOpen ? "ons-radio__other--open" : ""}`}
                            id={`${optionId}-other-wrap`}
                            aria-hidden={!isSpecifyOptionOpen}
                          >
                            <label
                              className="ons-label ons-u-fs-s--b"
                              htmlFor={specifyId}
                            >
                              {option.specifyOption.description}
                            </label>
                            <Field
                              type={option.specifyOption.type}
                              id={specifyId}
                              name={option.specifyOption.name}
                              validate={
                                isSpecifyOptionOpen ? option.specifyOption.validate : undefined
                              }
                              min={option.specifyOption.min}
                              className="ons-input ons-input--text ons-input-type__input ons-input--w-auto"
                            />
                          </span>
                        )}
                      </span>
                    </div>
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
  includeTestIds,
  description,
  checkboxOptions,
  name,
  autoFocus,
  validate,
}: CheckboxFieldsetProps): ReactElement {
  const { values, setFieldValue } = useFormikContext<Record<string, string[]>>();
  const allValues = (checkboxOptions || []).map((option) => option.value);
  const isAllSelected = allValues.length > 0 && allValues.every((v) => values[name]?.includes(v));
  const generatedId = useId();
  const baseId = id ?? `checkbox-${generatedId}`;

  return (
    <div
      id={baseId}
      data-testid={includeTestIds ? `${baseId}-fieldset` : undefined}
      className="ons-field ons-u-mb-m"
    >
      <fieldset className="ons-fieldset">
        <legend className="ons-fieldset__legend ons-u-fs-r--b">{description}</legend>
        <div className="ons-grid">
          <div className="ons-grid__col ons-col-8@m ons-col-6@l">
            <button
              data-testid={includeTestIds ? `${baseId}-select-all` : undefined}
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
                {checkboxOptions?.map((option, index) => {
                  const optionId = getOptionId(baseId, index, option.id);

                  return (
                    <div
                      key={option.id || `${option.value}-${index}`}
                      className="ons-checkboxes__item"
                    >
                      <span className="ons-checkbox">
                        <Field
                          type="checkbox"
                          id={optionId}
                          name={name}
                          value={option.value}
                          validate={validate}
                          className="ons-checkbox__input"
                          autoFocus={autoFocus && index === 0}
                        />
                        <label
                          className={`ons-checkbox__label ${option.description ? "ons-label--with-description" : ""}`}
                          htmlFor={optionId}
                        >
                          {option.label}
                          {option.description && (
                            <span className="ons-label__description ons-checkbox__label--with-description">
                              {option.description}
                            </span>
                          )}
                        </label>
                      </span>
                    </div>
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
  includeTestIds,
  name,
  description,
  type = "text",
  validate,
  ...props
}: TextInputFieldsetProps): ReactElement {
  const generatedId = useId();
  const baseId = id ?? `input-${generatedId}`;
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
                data-testid={includeTestIds ? `${baseId}-input` : undefined}
                {...props}
              />
            )}
          </Field>
        </div>
      </div>
    </div>
  );
}
