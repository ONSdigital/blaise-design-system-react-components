import React, { ReactElement } from "react";
import { FieldInputProps } from "formik";
import { RadioFieldsetObject, CheckboxFieldsetObject } from "../StyledForm";
interface UnknownProps {
    [key: string]: unknown;
}
interface RadioFieldsetProps extends UnknownProps {
    description?: string;
    name: string;
    radioOptions?: RadioFieldsetObject[];
    autoFocus: boolean;
}
interface CheckboxesProps extends UnknownProps {
    description?: string;
    checkboxOptions?: CheckboxFieldsetObject[];
    name: string;
    autoFocus: boolean;
}
export declare function RadioFieldset({ description, name, radioOptions, ...props }: RadioFieldsetProps): ReactElement;
export declare function CheckboxesFieldset({ description, checkboxOptions, name, ...props }: CheckboxesProps): ReactElement;
interface ONSInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    field: FieldInputProps<string>;
    description?: string;
}
export declare function ONSInputField({ field, description, ...props }: ONSInputFieldProps): ReactElement;
export default CheckboxesFieldset;
