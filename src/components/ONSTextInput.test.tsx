import {
    cleanup, fireEvent, render,
} from "@testing-library/react";
import React from "react";
import { ONSTextInput } from "./ONSTextInput";

describe("ONS Text Input Test", () => {
    afterEach(() => {
        cleanup();
    });

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
        const screen = wrapper(render, Props);
        expect(screen.getByLabelText(Props.label)).toBeDefined();
    });

    it("simulates change events", () => {
        const screen = wrapper(render, changeProps);
        fireEvent.change(screen.getByTestId("text-input"), { target: { value: "test1" } });
        fireEvent.change(screen.getByTestId("text-input"), { target: { value: "test2" } });
        expect(changeProps.onChange).toHaveBeenCalledTimes(2);
    });

    it("simulates click events", () => {
        const screen = wrapper(render, clickProps);
        fireEvent.click(screen.getByTestId("text-input"));
        expect(clickProps.onClick).toHaveBeenCalledTimes(1);
    });
});
