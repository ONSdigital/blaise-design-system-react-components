import { Form, Formik } from "formik";
import { useId } from "react";

import { Button } from "../Button";

import { StyledFormField } from "./form-elements/StyledFormField";
import { StyledFormErrorSummary } from "./StyledFormErrorSummary";

/** Radio follow-up input. */
interface RadioSpecifyOption {
  /** Element ID. */
  id?: string;
  /** Field name. */
  name: string;
  /** Minimum value. */
  min?: string;
  /** Label text. */
  description?: string;
  /** Input type. */
  type: "text" | "password" | "number" | "date" | "email";
  /** Validation function. */
  validate?: (value: string) => string | undefined;
}

/** Radio option config. */
export interface RadioFieldset {
  /** Option value. */
  value: string;
  /** Element ID. */
  id?: string;
  /** Label text. */
  label: string;
  /** Supporting text. */
  description?: string;
  /** Follow-up input. */
  specifyOption?: RadioSpecifyOption;
}

/** Checkbox option config. */
export interface CheckboxFieldset {
  /** Option value. */
  value: string;
  /** Element ID. */
  id?: string;
  /** Label text. */
  label: string;
  /** Supporting text. */
  description?: string;
}

/** Base field config. */
interface BaseFormField<V = string> {
  /** Field name. */
  name: string;
  /** Hint or legend text. */
  description?: string;
  /** Field type. */
  type: "text" | "password" | "number" | "date" | "email";
  /** Element ID. */
  id?: string;
  /** Validation function. */
  validate?: (value: V) => string | undefined;
  /** Autofocus hint. StyledForm currently ignores this value. */
  autoFocus?: boolean;
  /** Initial value. */
  initialValue?: V;
}

interface RadioFormField extends Omit<BaseFormField<string>, "type"> {
  type: "radio";
  /** Radio options. */
  radioOptions: readonly RadioFieldset[];
}

interface CheckboxFormField extends Omit<BaseFormField<string[]>, "type"> {
  type: "checkbox";
  /** Checkbox options. */
  checkboxOptions: readonly CheckboxFieldset[];
}

/** StyledForm field config. */
export type FormField = CheckboxFormField | RadioFormField | BaseFormField<string>;

type FormFieldValue = string | string[];
type EmptyRecord = Record<never, never>;

type Simplify<T> = {
  [K in keyof T]: T[K];
};

type UnionToIntersection<Union> = (Union extends unknown ? (value: Union) => void : never) extends (
  value: infer Intersection,
) => void
  ? Intersection
  : never;

type RadioSpecifyValues<Field extends FormField> = Field extends {
  type: "radio";
  radioOptions: readonly (infer Option)[];
}
  ? UnionToIntersection<
      Option extends { specifyOption: infer SpecifyOption }
        ? SpecifyOption extends { name: infer Name extends string }
          ? Record<Name, string>
          : EmptyRecord
        : EmptyRecord
    >
  : EmptyRecord;

/** Derived Formik values for a given field config array. */
export type FormValuesForFields<Fields extends readonly FormField[]> = Simplify<
  {
    [Field in Fields[number] as Field["name"]]: Field extends CheckboxFormField ? string[] : string;
  } & UnionToIntersection<RadioSpecifyValues<Fields[number]>>
>;

type SubmitHandler<Values> = (
  values: Values,
  setSubmitting: (isSubmitting: boolean) => void,
) => void;

type SubmitProps<Values> =
  | {
      /** Called on successful submit. */
      onSubmit: SubmitHandler<Values>;
      /** Backward-compatible alias for onSubmit. */
      onSubmitFunction?: never;
    }
  | {
      /** Standard submit handler alias. */
      onSubmit?: never;
      /** Called on successful submit. */
      onSubmitFunction: SubmitHandler<Values>;
    };

/** Props for StyledForm. */
export type Props<Fields extends readonly FormField[] = readonly FormField[]> = {
  /** Element ID. */
  id?: string;
  /** Field config. */
  fields: Fields;
  /** Submit button text. */
  submitLabel?: string;
} & SubmitProps<FormValuesForFields<Fields>>;

const getFieldTargetIds = (
  fields: readonly FormField[],
  formBaseId: string,
): Record<string, string> => {
  return fields.reduce<Record<string, string>>((acc, field) => {
    const fieldId = field.id ?? `${formBaseId}-${field.name}`;

    acc[field.name] = fieldId;

    if (field.type === "radio") {
      field.radioOptions.forEach((option, index) => {
        if (option.specifyOption) {
          const optionId = option.id ?? `${fieldId}-option-${index + 1}`;

          acc[option.specifyOption.name] = option.specifyOption.id ?? `${optionId}-specify`;
        }
      });
    }

    return acc;
  }, {});
};

const getInitialFieldValue = (field: FormField): FormFieldValue => {
  if (field.initialValue !== undefined) {
    return field.initialValue;
  }

  return field.type === "checkbox" ? [] : "";
};

const getInitialFieldValues = <const Fields extends readonly FormField[]>(
  fields: Fields,
): FormValuesForFields<Fields> => {
  const initialValues = fields.flatMap<[string, FormFieldValue]>((field) => {
    const fieldEntries: [string, FormFieldValue][] = [[field.name, getInitialFieldValue(field)]];

    if (field.type !== "radio") {
      return fieldEntries;
    }

    const specifyEntries = field.radioOptions.flatMap<[string, FormFieldValue]>((option) => {
      if (!option.specifyOption) {
        return [];
      }

      return [[option.specifyOption.name, ""]];
    });

    return [...fieldEntries, ...specifyEntries];
  });

  return Object.fromEntries(initialValues) as FormValuesForFields<Fields>;
};

/** Renders a form from field config. */
export const StyledForm = <const Fields extends readonly FormField[]>(props: Props<Fields>) => {
  const { id, fields, submitLabel } = props;
  const generatedId = useId();
  const baseId = id ?? `form-${generatedId}`;
  const fieldTargetIds = getFieldTargetIds(fields, baseId);
  const initialFieldValues = getInitialFieldValues(fields);
  const handleSubmit = props.onSubmit ?? props.onSubmitFunction;

  if (!handleSubmit) {
    throw new Error("StyledForm requires an onSubmit handler.");
  }

  return (
    <Formik<FormValuesForFields<Fields>>
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={initialFieldValues}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form
          id={baseId}
          noValidate
          data-testid={id ? `${id}-form` : undefined}
        >
          <StyledFormErrorSummary
            id={id ? `${id}-error-summary` : undefined}
            fieldTargetIds={fieldTargetIds}
          />
          {fields.map((field, index) => {
            const isAutoFocus = isValid && index === 0;

            return (
              <StyledFormField
                key={field.name}
                {...field}
                id={fieldTargetIds[field.name]}
                autoFocus={isAutoFocus}
                includeTestIds={Boolean(field.id)}
              />
            );
          })}
          <Button
            submit
            label={submitLabel || "Save and continue"}
            primary
            id={`${baseId}-submit`}
            loading={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};
