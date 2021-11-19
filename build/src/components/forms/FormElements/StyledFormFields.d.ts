import { ReactElement } from "react";
interface Props {
    description?: string;
    name: string;
    radioOptions?: any[];
    props: Pick<any, string | number | symbol>;
}
export declare const StyledFormField: ({ name, description, radioOptions, ...props }: Props) => ReactElement;
export declare function StyledFormFieldErrorWrapper(fieldError: string, fieldName: string, field: ReactElement): JSX.Element;
export {};
