import { Component, ErrorInfo, ReactNode } from "react";
import { ONSPanel } from "../ONSPanel";

export interface Props {
    /** The error message displayed inside the ONSPanel when a child component crashes. */
    errorMessageText: string;
    /** The component tree that this boundary should monitor for errors. */
    children: ReactNode;
}

interface State {
    hasError: boolean;
    errorInfo: ErrorInfo | null;
}

/**
 * A localised error boundary that displays an ONS error panel if a child component fails to render.
 * This is useful for wrapping specific sections of a page (e.g., a data table),
 * ensuring that if that section fails, the rest of the application remains functional.
 */
export class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
        errorInfo: null,
    };

    static getDerivedStateFromError(_: Error): Partial<State> {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorInfo,
        });
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <ONSPanel status="error">
                    <p>{this.props.errorMessageText}</p>
                </ONSPanel>
            );
        }

        return this.props.children;
    }
}
