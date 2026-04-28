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
 * Global error boundary for top-level application or page wrapping.
 * Catches JavaScript errors anywhere in its child component tree, logs them,
 * and displays a standard full-page fallback UI with a service error message.
 * Use this to ensure users always see a helpful message if something goes wrong at the app level.
 */
export class DefaultErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
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
        <div className="ons-page">
          <div className="ons-page__content">
            <a
              className="ons-skip-to-content ons-u-fs-r--b"
              href="#main-content"
            >
              Skip to main content
            </a>

            <div className="ons-container">
              <main
                id="main-content"
                className="ons-page__main ons-u-mt-l"
              >
                <h1>Sorry, there is a problem with the service</h1>
                <p>Try again later.</p>
                <p>If you have started a survey, your answers have been saved.</p>
                <p>
                  If you need to speak to someone about your survey,{" "}
                  <a href="https://ons.service-now.com/">contact us</a>.
                </p>
              </main>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
