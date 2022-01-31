import { ReactElement } from "react";
import { Component } from "react";
export declare function LoginPage(token: any, setToken: (token: any) => void): ReactElement;
declare type LoginFormProps = {
    setToken: (token: any) => void;
};
declare type LoginFormState = {
    error: string;
};
export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps);
    formFields(): any;
    login(form: Record<string, string>, setSubmitting: (isSubmitting: boolean) => void): Promise<void>;
    error(): ReactElement | undefined;
    render(): ReactElement;
}
export {};
