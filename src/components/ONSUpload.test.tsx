import React, { ComponentProps } from "react";
import { fireEvent, render, screen, RenderResult } from "@testing-library/react";
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

    function wrapper(renderFn: typeof render, props: Partial<ComponentProps<typeof ONSUpload>>): RenderResult {
        return renderFn(
            <ONSUpload
                label={props.label as string}
                description={props.description as string}
                fileName={props.fileName as string}
                fileID={props.fileID as string}
                accept={props.accept as string}
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
            target: { files: [new File(["(⌐□_□)"], "test1.csv", { type: "csv" })] },
        });
        fireEvent.change(screen.getByTestId("upload-input"), {
            target: { files: [new File(["(⌐□_□)"], "test2.csv", { type: "csv" })] },
        });
        expect(changeProps.onChange).toHaveBeenCalledTimes(2);
    });
});
