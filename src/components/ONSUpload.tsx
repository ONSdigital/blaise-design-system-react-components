import React, { ChangeEvent, Component } from "react";

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
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    };

    render() {
        return (
            <div className="ons-field">
                <p className="ons-field">
                    <label className="ons-label" htmlFor={this.props.fileID}>
                        {this.props.label}
                        <br />
                        <span className="ons-label__description">{this.props.description}</span>
                    </label>
                    <input
                        style={{ position: "static" }}
                        type="file"
                        id={this.props.fileID}
                        className="ons-input ons-input--text ons-input-type__input ons-input--upload"
                        name={this.props.fileName}
                        accept={this.props.accept}
                        onChange={(e) => this.handleChange(e)}
                        disabled={(this.props.disabled)}
                        data-testid="upload-input"
                    />
                </p>
            </div>
        );
    }
}
