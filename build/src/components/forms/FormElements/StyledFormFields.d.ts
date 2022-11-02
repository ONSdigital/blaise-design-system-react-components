import { ReactElement } from "react";
interface Props {
    description?: string;
    name: string;
    radioOptions?: any[];
    checkboxOptions?: any[];
    autoFocus: boolean;
    type?: string;
    props: Pick<any, string | number | symbol>;
}
export declare const StyledFormField: ({ name, description, radioOptions, checkboxOptions, ...props }: Props) => ReactElement;
export declare function StyledFormFieldErrorWrapper(fieldError: string, fieldName: string, field: ReactElement): JSX.Element;
export {};
