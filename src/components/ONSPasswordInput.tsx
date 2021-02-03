import React, {ChangeEvent, Component} from "react";

export interface Props {
    label?: string
    placeholder?: string
    marginTop?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>, ...args: any[]) => void
    value: string
    autoFocus?: boolean
}

interface State {
    password: boolean
}

export class ONSPasswordInput extends Component <Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {password: true};
    }

    togglePassword = () => {
        this.setState({password: !this.state.password});
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(e, this.props.value);
        }
    };

    spacing = () => {
        const buttonStyle = {
            marginTop: String(this.props.marginTop) + "px",
        };
        return buttonStyle;
    }


    render() {
        return (
            <p className="field">
                <label className="label" htmlFor="password">{this.props.label}</label>
                <span className="checkbox checkbox--toggle" style={this.spacing()}>
                    <input
                        autoFocus={this.props.autoFocus}
                        autoComplete={"new-password"}
                        type="checkbox"
                        id="password-toggle"
                        className="checkbox__input"
                        name="show-password"
                        onClick={this.togglePassword}
                    />
                    <label id="password-toggle-label" className="checkbox__label " htmlFor="password-toggle">
                        Show password
                    </label>
                </span>
                <input
                    type={this.state.password ? "password" : "text"} id="password"
                    className="input input--text input-type__input u-mt-xs"
                    value={this.props.value}
                    onChange={(e) => this.handleChange(e)}
                    data-testid="login-password-input"
                />

            </p>

        );
    }
}
