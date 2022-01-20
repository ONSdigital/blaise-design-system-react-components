import React, { ErrorInfo, ReactNode } from "react";
export interface Props {
    errorMessageText: string;
    children: ReactNode;
}
interface State {
    errorInfo: ErrorInfo;
}
/**
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * Catches any issues and displays a error panel with a custom message provided. For example, you can wrap this around a
 * table, so if it fails to render this panel will show in its place on the page.
 */
export default class ErrorBoundary extends React.Component<Props, State> {
    state: {
        errorInfo: {
            componentStack: string;
        };
    };
    componentDidCatch(_: Error, errorInfo: ErrorInfo): void;
    render(): ReactNode;
}
export {};
