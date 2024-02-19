import { ReactElement } from "react";
import { RadioFieldsetObject, CheckboxFieldsetObject } from "../StyledForm";
interface RadioFieldsetProps {
    description?: string;
    name: string;
    radioOptions?: RadioFieldsetObject[];
    autoFocus: boolean;
    props: Pick<any, string | number | symbol>;
}
interface CheckboxesProps {
    description?: string;
    checkboxOptions?: CheckboxFieldsetObject[];
    name: string;
    autoFocus: boolean;
    props: Pick<any, string | number | symbol>;
}
export declare function RadioFieldset({ description, name, radioOptions, ...props }: RadioFieldsetProps): ReactElement;
export declare function CheckboxesFieldset({ description, checkboxOptions, name, ...props }: CheckboxesProps): ReactElement;
export declare function ONSInputField({ field, description, ...props }: any): ReactElement;
export default CheckboxesFieldset;
