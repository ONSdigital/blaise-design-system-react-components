import React, {ErrorInfo, ReactNode} from "react";

export interface Props {
    children: React.ReactNode
}

interface State {
    error?: Error
    errorInfo: ErrorInfo
}

export default class DefaultErrorBoundary extends React.Component <Props, State> {
    state = {errorInfo: {componentStack: "Fine"}};

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorInfo: errorInfo
        });
    }

    render(): ReactNode {
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

        return this.props.children;
    }
}
