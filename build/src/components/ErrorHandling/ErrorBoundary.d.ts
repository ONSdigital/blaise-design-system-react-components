import React, { ErrorInfo, ReactNode, ReactElement } from "react";
export interface Props {
    errorMessageText: string;
    children: ReactNode;
}
interface State {
    errorInfo: ErrorInfo;
}
export default class ErrorBoundary extends React.Component<Props, State> {
    state: {
        errorInfo: {
            componentStack: string;
        };
    };
    componentDidCatch(_: Error, errorInfo: ErrorInfo): void;
    render(): ReactElement;
}
export {};
