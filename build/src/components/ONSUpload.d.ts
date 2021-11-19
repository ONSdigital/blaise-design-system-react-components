import { ChangeEvent, Component } from "react";
export interface Props {
    label: string;
    description: string;
    id?: string;
    fileName: string;
    fileID: string;
    accept: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>, ...args: any[]) => void;
    disabled?: boolean;
}
export declare class ONSUpload extends Component<Props> {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
