import React, { ErrorInfo, ReactChild, ReactElement } from "react";

export interface Props {
    children: React.ReactChild[] | ReactChild
}

interface State {
    error?: Error
    errorInfo: ErrorInfo
}

/**
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * This is useful for wrapping around the entire page to display a generic `Sorry, there is a problem with the service` message.
 */
export default class DefaultErrorBoundary extends React.Component<Props, State> {
    state = { errorInfo: { componentStack: "Fine" } };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorInfo: errorInfo,
        });
    }

    render(): ReactElement {
        if (this.state.errorInfo.componentStack !== "Fine") {
            return (
                <>
                    <h1>Sorry, there is a problem with the service</h1>
                    <p>Try again later.</p>
                    <p>If you have started a survey, your answers have been saved.</p>
                    <p><a href="https://ons.service-now.com/">Contact us</a> if you need to speak to someone about your
                        survey.</p>
                </>
            );
        }

        return <>{this.props.children}</>;
    }
}
