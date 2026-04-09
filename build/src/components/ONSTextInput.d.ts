import React, { ChangeEvent, Component } from "react";
export interface Props {
    label?: string;
    id?: string;
    password?: boolean;
    number?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>, label?: string) => void;
    placeholder?: string;
    fit?: boolean;
    autoFocus?: boolean;
    value?: string;
    autoComplete?: string;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    zIndex?: number;
    testId?: string;
}
export declare class ONSTextInput extends Component<Props> {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    determineType: () => "password" | "number" | "text";
    render(): import("react/jsx-runtime").JSX.Element;
}
