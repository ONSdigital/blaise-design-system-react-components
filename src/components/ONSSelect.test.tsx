import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, screen } from "@testing-library/react";
import { ONSSelect } from "./ONSSelect";

describe("ONS Select Test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    const Selection = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
    ];

    const Props = {
        id: "select-thing",
        label: "Select From",
        value: "select value",
        options: Selection,
        testId: "test-id",
    };

    const changeProps = {
        id: "select-thing",
        label: "Select From",
        options: Selection,
        testId: "test-id",
        onChange: jest.fn(),
    };

    function wrapper(render: any, props: any) {
        return render(
            <ONSSelect
                id={props.id}
                label={props.label}
                onChange={props.onChange}
                value={props.value}
                options={props.options}
                testId={props.testId}
            />,
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
        // defined
        wrapper(shallow, changeProps).find("select").simulate("change", { target: { value: "abc" } });
        expect(changeProps.onChange).toHaveBeenCalled();
    });
});
