import React from "react";
import Enzyme, { shallow } from "enzyme";
import { cleanup, render, screen } from "@testing-library/react";

import { ONSTextInput } from "./ONSTextInput";
import Adapter from "enzyme-adapter-react-16";
import { validateInstrumentName } from "../components/forms/ExampleForm/FormValidation";

describe("ONS Text Input Test", () => {
    Enzyme.configure({ adapter: new Adapter() });
    afterEach(() => {
        cleanup();
    });

    let x: any;

    const Props = {
        id: "file-upload",
        label: "text",
    };

    const changeProps = {
        id: "file-upload",
        label: "Upload Label",
        onChange: jest.fn(),
    };

    const clickProps = {
        onClick: jest.fn(),
        fit: true,
        password: true,
    };

    function wrapper(render: any, props: any) {
        return render(
            <ONSTextInput
                label={props.label}
                id={props.id}
                password={props.password}
                onChange={props.onChange}
                placeholder={props.placeholder}
                fit={props.fit}
                autoFocus={props.autoFocus}
                value={props.value}
                autoComplete={props.autoComplete}
                onClick={props.onClick}
                validate={validateInstrumentName}>
            </ONSTextInput>,
        );
    }

    it("matches Snapshot", () => {
        expect(wrapper(shallow, Props)).toMatchSnapshot();
    });

    it("should render correctly", () => expect(wrapper(shallow, Props).exists()).toEqual(true));

    it("should render with the correct label", () => {
        wrapper(render, Props);
        expect(screen.getByLabelText(Props.label)).toBeDefined();
    });

    it("simulates change events", () => {
        const input = wrapper(shallow, changeProps);
        input.find("input").simulate("change", { target: { value: "abc" } });
        expect(changeProps.onChange).toHaveBeenCalled();
    });

    it("simulates click events", () => {
        wrapper(shallow, clickProps).find("input").simulate("click");
        expect(clickProps.onClick).toHaveBeenCalled();
    });
});
