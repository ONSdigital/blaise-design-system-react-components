import React, { ReactElement } from "react";
import { RadioFieldsetObject, CheckboxFieldsetObject } from "../StyledForm";
interface Props {
    description?: string;
    name: string;
    radioOptions?: RadioFieldsetObject[];
    checkboxOptions?: CheckboxFieldsetObject[];
    autoFocus?: boolean;
    type?: string;
    [key: string]: unknown;
}
export declare function StyledFormFieldErrorWrapper(fieldError: string, fieldName: string, field: ReactElement): React.JSX.Element;
export declare const StyledFormField: ({ name, description, radioOptions, checkboxOptions, autoFocus, ...props }: Props) => ReactElement;
export {};
