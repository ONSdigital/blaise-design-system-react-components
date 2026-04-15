import { ChangeEvent, MouseEventHandler, Component, CSSProperties } from "react";

export interface Props {
    label?: string;
    id?: string;
    password?: boolean;
    number?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>, label?: string) => void;
    placeholder?: string;
    fit?: boolean;
    autoFocus?: boolean;
    value?: string;
    autoComplete?: string;
    onClick?: MouseEventHandler<HTMLInputElement>;
    zIndex?: number;
    testId?: string;
}

export class ONSTextInput extends Component<Props> {
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange?.(e, this.props.label);
    };

    determineType = (): string => {
        if (this.props.password) return "password";
        if (this.props.number) return "number";
        return "text";
    };

    render() {
        const { 
            label, id, value, fit, zIndex, autoComplete, 
            placeholder, onClick, testId 
        } = this.props;

        const inputStyle: CSSProperties = {
            width: fit ? "unset" : undefined,
            zIndex: zIndex ?? 0,
        };

        return (
            <p className="ons-field">
                {label !== undefined && (
                    <label className="ons-label" htmlFor={id}>
                        {label}
                    </label>
                )}
                <input
                    id={id}
                    className="ons-input ons-input--text ons-input-type__input"
                    value={value ?? ""}
                    type={this.determineType()}
                    style={inputStyle}
                    autoFocus={this.props.autoFocus}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    onChange={this.handleChange}
                    onClick={onClick}
                    data-testid={testId ?? "text-input"}
                />
            </p>
        );
    }
}
