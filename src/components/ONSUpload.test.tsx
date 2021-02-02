import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
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

    const undefinedChangeProps = {
        label: "Upload",
        description: "This is the upload",
        fileName: "file.csv",
        fileID: "file",
        accept: "yes?",
        onChange: undefined
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

    it.skip("should handle a change", () => {
        //defined onchange
        wrapper(mount, changeProps).find("input").simulate("change");
        expect(changeProps.onChange).toHaveBeenCalled();

        //undefined onchange
        wrapper(mount, undefinedChangeProps).find("input").simulate("change");
        expect(undefinedChangeProps.onChange).toBeUndefined();

    });

});
