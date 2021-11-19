import { ChangeEvent, Component } from "react";
export interface Props {
    label?: string;
    id?: string;
    password?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>, ...args: any[]) => void;
    placeholder?: string;
    fit?: boolean;
    autoFocus?: boolean;
    value?: string;
    autoComplete?: string;
    onClick?: any;
    zIndex?: number;
}
export declare class ONSTextInput extends Component<Props> {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
