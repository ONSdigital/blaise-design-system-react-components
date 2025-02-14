import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ONSUpload } from "./ONSUpload";

describe("ONS Upload Test", () => {
    const Props = {};

    const changeProps = {
        label: "Upload",
        description: "This is the upload",
        fileName: "file.csv",
        fileID: "file",
        accept: "yes?",
        onChange: jest.fn(),
    };

    function wrapper(render: any, props: any) {
        return render(
            <ONSUpload
                label={props.label}
                description={props.description}
                fileName={props.fileName}
                fileID={props.fileID}
                accept={props.accept}
                onChange={props.onChange}
            />,
        );
    }

    it("matches Snapshot", () => {
        expect(wrapper(render, Props)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        expect(wrapper(render, Props)).toBeDefined();
    });

    it("should handle a change", () => {
        wrapper(render, changeProps);
        fireEvent.change(screen.getByTestId("upload-input"), {
        target: {files: [new File(['(⌐□_□)'], 'test1.csv', { type: 'csv' })]},
        })
        fireEvent.change(screen.getByTestId("upload-input"), {
        target: {files: [new File(['(⌐□_□)'], 'test2.csv', { type: 'csv' })]},
        })
        expect(changeProps.onChange).toHaveBeenCalledTimes(2);
    });
});
