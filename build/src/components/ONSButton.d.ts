/// <reference types="react" />
export interface Props {
    label: string;
    id?: string;
    primary: boolean;
    small?: boolean;
    field?: boolean;
    loading?: boolean;
    marginRight?: number;
    /**
     * Optional click handler
     */
    onClick?: (...props: any[]) => void;
    disabled?: boolean;
    action?: boolean;
    testid?: string;
    hidden?: boolean;
    submit?: boolean;
}
export declare const ONSButton: (props: Props) => JSX.Element;
