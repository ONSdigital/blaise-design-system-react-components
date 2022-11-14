import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { cleanup, render, screen } from "@testing-library/react";
import { ONSPasswordInput } from "./ONSPasswordInput";

describe("ONS Password Input Test", () => {
    Enzyme.configure({ adapter: new Adapter() });
    afterEach(() => {
        cleanup();
    });

    const Props = {};

    const labelProps = {
        label: "Submit",
    };

    const changeProps = {
        onChange: jest.fn(),
    };

    const undefinedChangeProps = {
        onChange: undefined,
    };

    function wrapper(render: any, props: any) {
        return render(
            <ONSPasswordInput
                value={props.value}
                label={props.label}
                placeholder={props.placeholder}
                marginTop={props.marginTop}
                onChange={props.onChange}
            />,
        );
    }

    it("matches Snapshot", () => {
        expect(wrapper(shallow, Props)).toMatchSnapshot();
    });

    it("should render correctly", () => expect(wrapper(shallow, Props).exists()).toEqual(true));

    it("should render with the correct label", () => {
        wrapper(render, labelProps);
        expect(screen.getByLabelText(labelProps.label)).toBeDefined();
    });

    it("should handle a change", () => {
        // defined onchange
        wrapper(shallow, changeProps).find("input.ons-input").simulate("change");
        expect(changeProps.onChange).toHaveBeenCalled();

        // undefined onchange
        wrapper(shallow, undefinedChangeProps).find("input.ons-input").simulate("change");
        expect(undefinedChangeProps.onChange).toBeUndefined();
    });

    it("should handle a click on the checkbox", () => {
        const thisWrapper = wrapper(shallow, undefinedChangeProps);
        thisWrapper.find("input.ons-checkbox__input").simulate("click");
        expect(thisWrapper.state("password")).toBeFalsy();
    });
});
