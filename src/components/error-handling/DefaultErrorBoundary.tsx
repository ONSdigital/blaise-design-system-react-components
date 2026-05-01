import { Component, ErrorInfo, ReactNode } from "react";

let defaultErrorBoundaryInstance = 0;

/** Props for DefaultErrorBoundary. */
export interface Props {
  /** Wrapped content. */
  children: ReactNode;
  /** Element ID. */
  id?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo: ErrorInfo | null;
}

/**
 * Renders the page fallback when children throw.
 */
export class DefaultErrorBoundary extends Component<Props, State> {
  private readonly generatedMainContentId = `default-error-boundary-main-content-${++defaultErrorBoundaryInstance}`;

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
    const { id, children } = this.props;
    const mainContentId = id ? `${id}-main-content` : this.generatedMainContentId;

    if (this.state.hasError) {
      return (
        <div
          className="ons-page"
          id={id}
          data-testid={id ? `${id}-boundary` : undefined}
        >
          <div className="ons-page__content">
            <a
              className="ons-skip-to-content ons-u-fs-r--b"
              href={`#${mainContentId}`}
            >
              Skip to main content
            </a>

            <div className="ons-container">
              <main
                id={mainContentId}
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

    return children;
  }
}
