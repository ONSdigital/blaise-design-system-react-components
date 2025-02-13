import React from "react";
import { ONSUpload } from "./ONSUpload";
import { fireEvent, render } from "@testing-library/react";

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
        const screen = wrapper(render, changeProps);
        fireEvent.change(screen.getByTestId("upload-input"), { target: { value: "test1" } });
        fireEvent.change(screen.getByTestId("upload-input"), { target: { value: "test2" } });
        expect(changeProps.onChange).toHaveBeenCalledTimes(2);
    });
});
