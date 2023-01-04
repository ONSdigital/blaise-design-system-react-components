import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ONSUpload } from "./ONSUpload";

describe("ONS Upload Test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    const Props = {};

    const changeProps = {
        label: "Upload",
        description: "This is the upload",
        fileName: "file.csv",
        fileID: "file",
        accept: "yes?",
        onChange: jest.fn(),
    };

    function wrapper(renderFunc: any, props: any) {
        return renderFunc(
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

    it("should handle a change", () => {
        const input = wrapper(shallow, changeProps);
        input.find("input").simulate("change", { target: { value: "abc" } });
        expect(changeProps.onChange).toHaveBeenCalled();
    });

    it.skip("should allow the user to select and upload a file", async () => {
        wrapper(render, changeProps);

        const uploadInput = screen.getByLabelText(/Upload/i);
        await userEvent.click(uploadInput);
        await userEvent.upload(uploadInput, testFile);

        expect(uploadInput.files[0]).toStrictEqual(testFile);
        expect(uploadInput.files.item(0)).toStrictEqual(testFile);
        expect(uploadInput.files).toHaveLength(1);
    });
});
