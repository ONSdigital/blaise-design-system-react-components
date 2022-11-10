import React, {ChangeEvent, Component} from "react";

export interface Props {
    label?: string
    id?: string
    onChange?: (e: ChangeEvent<HTMLSelectElement>, ...args: any[]) => void
    value: string
    options: Option[]
    defaultValue?: string
}

interface Option {
    label: string
    value?: string
    id?: string
}

interface State {
    value: string
}

export class ONSSelect extends Component <Props, State> {
    value: string = this.props.value !== undefined ? this.props.value : "";

    constructor(props: Props) {
        super(props);
        this.state = {value: props.value !== undefined ? this.props.value : ""};
    }

    handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
        this.value = e.target.value;
        this.setState({value: e.target.value});
    };

    defaultValue(): string {
        if (this.props.defaultValue) return this.props.defaultValue;
        return "";
    }

    render() {

        return (
            <div>
                {this.props.label !== undefined &&
                <label className="ons-label" htmlFor={this.props.id}>{this.props.label} </label>
                }
                <select id={this.props.id} name="select" defaultValue={this.defaultValue()} className={"ons-input "}
                        onChange={(e) => this.handleChange(e)}>
                    <option value="" disabled data-testid={"select-" + this.props.id}>
                        Select an option
                    </option>
                    {this.props.options.map((option, index) =>
                        <option value={option.value} key={index} id={option.id}
                                data-testid={"option-" + this.props.id + "-" + option.value}>
                            {option.label}
                        </option>
                    )}
                </select>
            </div>
        );
    }
}
