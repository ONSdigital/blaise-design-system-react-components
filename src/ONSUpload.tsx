import React, {ChangeEvent, Component} from "react";

export interface Props {
    label: string,
    description: string,
    id?: string
    fileName: string,
    fileID: string,
    accept: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>, ...args: any[]) => void
    disabled?: boolean
}

export class ONSUpload extends Component <Props> {

    value = "";

    constructor(props: Props) {
        super(props);
        this.state = {value: ""};
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
        this.value = e.target.value;
    };

    render() {
        return (
            <div className="field">
                <p className="field">
                    <label className="label" htmlFor={this.props.fileID}>{this.props.label}
                        <br/>
                        <span className="label__description">{this.props.description}</span>
                    </label>
                    <input style={{position: "static"}}
                           type="file"
                           id={this.props.fileID}
                           className="input input--text input-type__input input--upload"
                           name={this.props.fileName}
                           accept={this.props.accept}
                           onChange={(e) => this.handleChange(e)}
                           disabled={(this.props.disabled)}/>
                </p>
            </div>
        );
    }
}
