import { Component, ErrorInfo, ReactNode } from "react";
import { Panel } from "../Panel";

export interface Props {
  /** The error message displayed inside the Panel when a child component crashes. */
  errorMessageText: string;
  /** The component tree that this boundary should monitor for errors. */
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorInfo: ErrorInfo | null;
}

/**
 * Localised error boundary for isolating errors in a specific section or component subtree.
 * If a child component throws, displays an ONS-styled error panel with a custom message,
 * allowing the rest of the page or app to remain functional.
 * Useful for wrapping error-prone widgets, tables, or feature areas.
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
        <Panel status="error">
          <p>{this.props.errorMessageText}</p>
        </Panel>
      );
    }

    return this.props.children;
  }
}
