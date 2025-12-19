import {
    cleanup, fireEvent, render, screen, RenderResult
} from "@testing-library/react";
import React, { ComponentProps } from "react";
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

    const testIdProps = {
        testId: "test-id",
    };

    const passwordProps = {
        password: true,
    };

    const numberProps = {
        number: true,
    };

    const clickProps = {
        onClick: jest.fn(),
        fit: true,
        password: true,
    };

    function wrapper(renderFn: typeof render, props: Partial<ComponentProps<typeof ONSTextInput>>): RenderResult {
        return renderFn(
            <ONSTextInput
                label={props.label}
                id={props.id}
                password={props.password}
                number={props.number}
                onChange={props.onChange}
                placeholder={props.placeholder}
                fit={props.fit}
                autoFocus={props.autoFocus}
                value={props.value}
                autoComplete={props.autoComplete}
                onClick={props.onClick}
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
        wrapper(render, changeProps);
        fireEvent.change(screen.getByTestId("text-input"), { target: { value: "test1" } });
        fireEvent.change(screen.getByTestId("text-input"), { target: { value: "test2" } });
        expect(changeProps.onChange).toHaveBeenCalledTimes(2);
    });

    it("should change the test id when given in the props", () => {
        wrapper(render, testIdProps);
        expect(screen.getByTestId("test-id")).toBeDefined();
    });

    it("should be text type by default", () => {
        wrapper(render, Props);
        expect(screen.getByTestId("text-input")).toHaveProperty("type", "text");
    });

    it("should be password type when given in Props", () => {
        wrapper(render, passwordProps);
        expect(screen.getByTestId("text-input")).toHaveProperty("type", "password");
    });

    it("should be number type when given in props", () => {
        wrapper(render, numberProps);
        expect(screen.getByTestId("text-input")).toHaveProperty("type", "number");
    });

    it("simulates click events", () => {
        wrapper(render, clickProps);
        fireEvent.click(screen.getByTestId("text-input"));
        expect(clickProps.onClick).toHaveBeenCalledTimes(1);
    });
});
