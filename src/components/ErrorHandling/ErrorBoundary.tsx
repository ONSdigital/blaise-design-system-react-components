import React, {ErrorInfo, ReactNode} from "react";

export interface Props {
    errorMessageText: string,
    children: ReactNode
}

interface State {
    errorInfo: ErrorInfo
}


export default class ErrorBoundary extends React.Component<Props, State> {
    state = {errorInfo: {componentStack: "Fine"}};

    componentDidCatch(_: Error, errorInfo: ErrorInfo): void {
        this.setState({
            errorInfo: errorInfo
        });
    }

    render(): ReactNode {
        if (this.state.errorInfo.componentStack !== "Fine") {
            return (
                <>
                    <div className="panel panel--error panel--simple u-mt-m">
                        <div className="panel__body">
                            <p>
                                {this.props.errorMessageText}
                            </p>
                        </div>
                    </div>
                </>
            );
        }

        return this.props.children;
    }
}
