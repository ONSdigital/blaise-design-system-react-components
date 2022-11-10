import React, { ChangeEvent, Component } from "react";

export interface Props {
    label?: string
    id?: string
    password?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>, ...args: any[]) => void
    placeholder?: string
    fit?: boolean
    autoFocus?: boolean
    value?: string
    autoComplete?: string
    onClick?: any
    zIndex?: number
}

export class ONSTextInput extends Component <Props> {
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange !== undefined) this.props.onChange(e, this.props.label);
    };

    render() {
        return (
            <p className="ons-field">
                {this.props.label !== undefined
                && <label className="ons-label" htmlFor={this.props.id}>{this.props.label}</label>}
                <input
                    value={this.props.value}
                    style={{ width: this.props.fit === true ? "unset" : "", "zIndex": this.props.zIndex ? this.props.zIndex : 0 }}
                    autoFocus={this.props.autoFocus === true}
                    autoComplete={this.props.autoComplete}
                    type={this.props.password === true ? "password" : "text"}
                    id={this.props.id}
                    className={"ons-input ons-input--text ons-input-type__input "}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.handleChange(e)}
                    onClick={(e) => (this.props.onClick !== undefined && this.props.onClick(e))}
                    data-testid="text-input"/>
            </p>
        );
    }
}
