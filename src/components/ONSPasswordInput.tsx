import { ChangeEvent, Component } from "react";

export interface Props {
    label?: string;
    inputId?: string;
    marginTop?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
    value: string;
    autoFocus?: boolean;
}

interface State {
    passwordHidden: boolean;
}

export class ONSPasswordInput extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { passwordHidden: true };
    }

    togglePassword = () => {
        this.setState((prevState) => ({ passwordHidden: !prevState.passwordHidden }));
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange) {
            this.props.onChange(e, e.target.value);
        }
    };

    render() {
        const spacingStyle = {
            marginTop: this.props.marginTop ? `${this.props.marginTop}px` : undefined,
        };

        const inputId = this.props.inputId || "password";

        return (
            <p className="ons-field">
                <label className="ons-label" htmlFor={inputId}>
                    {this.props.label}
                </label>
                <span className="ons-checkbox ons-checkbox--toggle" style={spacingStyle}>
                    <input
                        type="checkbox"
                        id={`${inputId}-toggle`}
                        className="ons-checkbox__input"
                        name="show-password"
                        onClick={this.togglePassword}
                        data-testid="login-password-toggle"
                    />
                    <label className="ons-checkbox__label" htmlFor={`${inputId}-toggle`}>
                        Show password
                    </label>
                </span>
                <input
                    type={this.state.passwordHidden ? "password" : "text"}
                    id={inputId}
                    className="ons-input ons-input--text ons-input-type__input ons-u-mt-xs"
                    value={this.props.value}
                    onChange={this.handleChange}
                    autoFocus={this.props.autoFocus}
                    autoComplete="new-password"
                    data-testid="login-password-input"
                />
            </p>
        );
    }
}
