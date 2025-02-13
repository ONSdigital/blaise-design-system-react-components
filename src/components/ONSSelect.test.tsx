import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { ONSSelect } from "./ONSSelect";

describe("ONS Select Test", () => {
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
        expect(wrapper(render, Props)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        expect(wrapper(render, Props)).toBeDefined();
    });

    it("should render with the correct label", () => {
        wrapper(render, Props);
        expect(screen.getByLabelText(Props.label)).toBeDefined();
    });

    it("simulates change events", () => {
        const screen = wrapper(render, changeProps);
        fireEvent.change(screen.getByTestId("test-id"), { target: { value: "test" } });
        fireEvent.change(screen.getByTestId("test-id"), { target: { value: "test2" } });
        expect(changeProps.onChange).toHaveBeenCalledTimes(2);
    });
});
