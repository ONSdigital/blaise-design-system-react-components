import React, { ChangeEvent, Component } from "react";

export interface Props {
    label?: string
    id?: string
    password?: boolean
    number?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>, label?: string) => void;
    placeholder?: string
    fit?: boolean
    autoFocus?: boolean
    value?: string
    autoComplete?: string
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    zIndex?: number
    testId?: string
}

export class ONSTextInput extends Component <Props> {
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange !== undefined) this.props.onChange(e, this.props.label);
    };

    determineType = () => {
        if (this.props.password === true) {
            return "password";
        } if (this.props.number === true) {
            return "number";
        }
        return "text";
    };

    render() {
        return (
            <p className="ons-field">
                {this.props.label !== undefined
                && <label className="ons-label" htmlFor={this.props.id}>{this.props.label}</label>}
                <input
                    value={this.props.value}
                    style={{ width: this.props.fit === true ? "unset" : "", zIndex: this.props.zIndex ? this.props.zIndex : 0 }}
                    autoFocus={this.props.autoFocus === true}
                    autoComplete={this.props.autoComplete}
                    type={this.determineType()}
                    id={this.props.id}
                    className="ons-input ons-input--text ons-input-type__input "
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.handleChange(e)}
                    onClick={(e) => (this.props.onClick !== undefined && this.props.onClick(e))}
                    data-testid={this.props.testId !== undefined ? this.props.testId : "text-input"}
                />
            </p>
        );
    }
}
