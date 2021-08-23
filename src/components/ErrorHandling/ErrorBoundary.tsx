import React, {ErrorInfo, ReactNode} from "react";
import { ONSPanel } from "../ONSPanel";

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
