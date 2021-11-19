import React, { ErrorInfo, ReactNode } from "react";
export interface Props {
    children: React.ReactNode;
}
interface State {
    error?: Error;
    errorInfo: ErrorInfo;
}
export default class DefaultErrorBoundary extends React.Component<Props, State> {
    state: {
        errorInfo: {
            componentStack: string;
        };
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): ReactNode;
}
export {};
