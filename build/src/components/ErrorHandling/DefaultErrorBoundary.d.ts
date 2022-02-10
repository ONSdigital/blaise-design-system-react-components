import React, { ErrorInfo, ReactChild, ReactElement } from "react";
export interface Props {
    children: React.ReactChild[] | ReactChild;
}
interface State {
    error?: Error;
    errorInfo: ErrorInfo;
}
/**
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * This is useful for wrapping around the entire page to display a generic `Sorry, there is a problem with the service` message.
 */
export default class DefaultErrorBoundary extends React.Component<Props, State> {
    state: {
        errorInfo: {
            componentStack: string;
        };
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): ReactElement;
}
export {};
