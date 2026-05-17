import { Component, type ErrorInfo, type ReactNode } from "react";

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

let defaultErrorBoundaryInstance = 0;

/** Renders the page fallback when children throw. */
export class DefaultErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  state: State = {
    hasError: false,
    errorInfo: null,
  };

  private readonly generatedMainContentId = `default-error-boundary-main-content-${++defaultErrorBoundaryInstance}`;

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
                <p>
                  If the problem persists, please report this issue to{" "}
                  <a
                    href="https://ons.service-now.com/"
                    className="ons-external-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ons-external-link__text">Service Desk</span>
                    <span className="ons-external-link__icon">
                      &nbsp;
                      <svg
                        className="ons-icon"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                      >
                        <path
                          d="M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z"
                          transform="translate(-2 -1.99)"
                        ></path>
                        <path
                          d="M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z"
                          transform="translate(-2 -1.99)"
                        ></path>
                      </svg>
                    </span>
                    <span className="ons-external-link__new-window-description ons-u-vh">
                      (opens in a new tab)
                    </span>
                  </a>{" "}
                  and include the page you were using and the date and time the problem occurred.
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
