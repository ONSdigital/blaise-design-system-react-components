import { Component, ErrorInfo, ReactNode } from "react";

export interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
    errorInfo: ErrorInfo | null;
}

/*
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * This is useful for wrapping around the entire page to display a generic `Sorry, there is a problem with the service` message.
 */

export class DefaultErrorBoundary extends Component<Props, State> {
    state: State = { 
        hasError: false,
        errorInfo: null 
    };

    static getDerivedStateFromError(error: Error): Partial<State> {
        return { 
            hasError: true,
            error 
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorInfo,
        });        
        console.error("Uncaught error:", error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <div className="ons-container"> 
                    <main id="main-content" className="ons-page__main ons-u-mt-l">
                        <h1>Sorry, there is a problem with the service</h1>
                        <p>Try again later.</p>
                        <p>If you have started a survey, your answers have been saved.</p>
                        <p>
                            <a href="https://ons.service-now.com/">Contact us</a>
                            {" "}
                            if you need to speak to someone about your survey.
                        </p>
                    </main>
                </div>
            );
        }
        return this.props.children;
    }
}
