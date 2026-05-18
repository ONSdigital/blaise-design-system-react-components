import { Component, type ErrorInfo, type ReactNode } from "react";

import { Panel } from "../Panel";

/** Props for ErrorBoundary. */
export interface Props {
  /** Fallback message. */
  errorMessageText: string;
  /** Wrapped content. */
  children: ReactNode;
  /** Element ID. */
  id?: string;
}

interface State {
  hasError: boolean;
}

/** Renders a fallback panel when children throw. */
export class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(_: Error): Partial<State> {
    return { hasError: true };
  }

  state: State = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    const { id, children, errorMessageText } = this.props;

    if (this.state.hasError) {
      return (
        <Panel
          id={id}
          status="error"
        >
          <p>{errorMessageText}</p>
        </Panel>
      );
    }

    return children;
  }
}
