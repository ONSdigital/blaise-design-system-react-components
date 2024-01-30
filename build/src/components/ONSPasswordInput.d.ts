import { ChangeEvent, Component } from "react";
export interface Props {
    label?: string;
    placeholder?: string;
    marginTop?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>, ...args: any[]) => void;
    value: string;
    autoFocus?: boolean;
}
interface State {
    password: boolean;
}
export declare class ONSPasswordInput extends Component<Props, State> {
    constructor(props: Props);
    togglePassword: () => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    spacing: () => {
        marginTop: string;
    };
    render(): JSX.Element;
}
export {};
