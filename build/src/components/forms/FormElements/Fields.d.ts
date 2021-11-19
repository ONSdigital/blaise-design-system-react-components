import { ReactElement } from "react";
interface Props {
    description?: string;
    name: string;
    radioOptions?: any[];
    props: Pick<any, string | number | symbol>;
}
export declare function RadioFieldset({ description, name, radioOptions, ...props }: Props): ReactElement;
export declare const ONSInputField: ({ field, form, description, ...props }: any) => JSX.Element;
export {};
