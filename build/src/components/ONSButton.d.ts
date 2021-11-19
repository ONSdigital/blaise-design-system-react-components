/// <reference types="react" />
export interface Props {
    label: string;
    id?: string;
    primary: boolean;
    small?: boolean;
    field?: boolean;
    loading?: boolean;
    marginRight?: number;
    onClick?: (...props: any[]) => void;
    disabled?: boolean;
    action?: boolean;
    testid?: string;
    hidden?: boolean;
    submit?: boolean;
}
export declare const ONSButton: (props: Props) => JSX.Element;
