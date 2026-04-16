import { Component, ErrorInfo, ReactNode } from "react";

export interface Props {
    /** The components that this boundary should monitor for errors. */
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
    errorInfo: ErrorInfo | null;
}

/**
 * Catches JavaScript errors anywhere in their child component tree, logs those errors, 
 * and displays a generic fallback UI instead of the component tree that crashed.
 * This is intended for top-level page wrapping to display the standard 
 * 'Sorry, there is a problem with the service' message.
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
        console.error("DefaultErrorBoundary caught an error:", error, errorInfo);
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
