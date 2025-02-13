import React from "react";
import {
    cleanup, fireEvent, render, screen,
} from "@testing-library/react";
import { ONSPasswordInput } from "./ONSPasswordInput";

describe("ONS Password Input Test", () => {
    afterEach(() => {
        cleanup();
    });

    const Props = {};

    const passwordInputProps = {
        label: "Submit",
        inputId: "submit",
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
                inputId={props.inputId}
                placeholder={props.placeholder}
                marginTop={props.marginTop}
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

    it("should render with the correct label and input ID", () => {
        wrapper(render, passwordInputProps);

        const labelElement = screen.getByText(passwordInputProps.label);
        const inputElement = screen.getByLabelText(passwordInputProps.label);

        expect(labelElement).toHaveTextContent(passwordInputProps.label);
        expect(inputElement).toHaveAttribute("id", passwordInputProps.inputId);
    });

    it("should handle a defined change", () => {
        wrapper(render, changeProps);
        fireEvent.change(screen.getByTestId("login-password-input"), { target: { value: "test1" } });
        fireEvent.change(screen.getByTestId("login-password-input"), { target: { value: "test2" } });
        expect(changeProps.onChange).toHaveBeenCalledTimes(2);
    });

    it("should handle an undefined change", () => {
        wrapper(render, undefinedChangeProps);
        fireEvent.change(screen.getByTestId("login-password-input"), { target: { value: "test" } });
        expect(undefinedChangeProps.onChange).toBeUndefined();
    });

    it("should handle a click on the checkbox", () => {
        wrapper(render, undefinedChangeProps);
        const passwordToggle = screen.getByTestId("login-password-toggle");
        fireEvent.click(passwordToggle);
        expect(passwordToggle.checked).toBeTruthy();
        fireEvent.click(passwordToggle);
        expect(passwordToggle.checked).toBeFalsy();
    });
});
