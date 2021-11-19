import { ChangeEvent, Component } from "react";
export interface Props {
    label?: string;
    id?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>, ...args: any[]) => void;
    value: string;
    options: Option[];
    defaultValue?: string;
}
interface Option {
    label: string;
    value?: string;
    id?: string;
}
interface State {
    value: string;
}
export declare class ONSSelect extends Component<Props, State> {
    value: string;
    constructor(props: Props);
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    defaultValue(): string;
    render(): JSX.Element;
}
export {};
