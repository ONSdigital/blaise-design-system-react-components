import React from "react";
import Enzyme, {shallow} from "enzyme";
import {ONSUpload} from "./ONSUpload";
import Adapter from "enzyme-adapter-react-16";

describe("ONS Upload Test", () => {
    Enzyme.configure({adapter: new Adapter()});

    const Props = {};

    const changeProps = {
        label: "Upload",
        description: "This is the upload",
        fileName: "file.csv",
        fileID: "file",
        accept: "yes?",
        onChange: jest.fn()
    };

    function wrapper(render: any, props: any) {
        return render(
            <ONSUpload
                label={props.label}
                description={props.description}
                fileName={props.fileName}
                fileID={props.fileID}
                accept={props.accept}
                onChange={props.onChange}>
            </ONSUpload>
        );
    }

    it("matches Snapshot", () => {
        expect(wrapper(shallow, Props)).toMatchSnapshot();
    });

    it("should render correctly", () => expect(wrapper(shallow, Props).exists()).toEqual(true));

    it("should handle a change", () => {
        const input = wrapper(shallow, changeProps)
        input.find("input").simulate('change', {target: {value: 'abc'}});
        expect(changeProps.onChange).toHaveBeenCalled()
    });
});
