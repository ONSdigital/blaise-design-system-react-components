import { ChangeEvent, Component } from "react";

export interface Props {
    label?: string;
    id?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    options: Option[];
    testId?: string;
}

interface Option {
    label: string;
    value: string;
    id?: string;
}

interface State {
    value: string;
}

export class ONSSelect extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            value: props.value ?? "" 
        };
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null {
        if (nextProps.value !== undefined && nextProps.value !== prevState.value) {
            return { value: nextProps.value };
        }
        return null;
    }

    handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        this.setState({ value: newValue });
        this.props.onChange?.(e);
    };

    render() {
        const { id, label, options, testId } = this.props;

        return (
            <div className="ons-field">
                {label !== undefined && (
                    <label className="ons-label" htmlFor={id}>
                        {label}
                    </label>
                )}
                <select
                    id={id}
                    name="select"
                    value={this.state.value} 
                    className="ons-input ons-input--select"
                    onChange={this.handleChange}
                    data-testid={testId}
                >
                    <option value="" disabled>
                        Select an option
                    </option>
                    {options.map((option, index) => (
                        <option
                            value={option.value}
                            key={option.id || `${id}-option-${index}`}
                            id={option.id}
                            data-testid={testId ? `option-${testId}-${option.value}` : undefined}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}
