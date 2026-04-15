import { Component, ErrorInfo, ReactNode } from "react";
import { ONSPanel } from "../../ONSPanel";

export interface Props {
    errorMessageText: string;
    children: ReactNode;
}

interface State {
    hasError: boolean;
    errorInfo: ErrorInfo | null;
}

/*
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * Catches any issues and displays a error panel with a custom message provided. For example, you can wrap this around a
 * table, so if it fails to render this panel will show in its place on the page.
 */

export class ErrorBoundary extends Component<Props, State> {
    state: State = { 
        hasError: false,
        errorInfo: null 
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
                    <p>
                        {this.props.errorMessageText}
                    </p>
                </ONSPanel>
            );
        }
        return this.props.children;
    }
}
