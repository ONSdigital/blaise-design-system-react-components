import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ONSPasswordInput } from "./ONSPasswordInput";

describe("ONS Password Input Test", () => {
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

    function wrapper(renderFunc: any, props: any) {
        return renderFunc(
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
        expect(wrapper(render, Props)).toMatchSnapshot();
    });

    it("should render with the correct label", () => {
        wrapper(render, labelProps);
        expect(screen.getByLabelText(labelProps.label)).toBeVisible();
    });

    it("should trigger callback on change, e.g. user types 'testing'", async () => {
        wrapper(render, changeProps);

        const passwordInput = screen.getByTestId("login-password-input");
        await userEvent.type(passwordInput, "testing");

        expect(changeProps.onChange).toHaveBeenCalledTimes(7);
    });

    it("should handle a click on the checkbox", async () => {
        wrapper(render, undefinedChangeProps);

        const toggleShowPassword = screen.getByLabelText("Show password");
        await userEvent.click(toggleShowPassword);

        expect(toggleShowPassword).toBeChecked();
    });
});
