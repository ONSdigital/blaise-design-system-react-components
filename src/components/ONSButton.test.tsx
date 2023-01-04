import React from "react";
import {
    render, screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ONSButton } from "./ONSButton";

describe("ONS Button Test", () => {
    const Props = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: jest.fn(),
    };

    const exportButtonProps = {
        label: "Submit1.5",
        primary: false,
        small: true,
        field: true,
        onButtonClick: jest.fn(),
        loading: false,
    };

    const smallButtonProps = {
        label: "Submit2",
        primary: true,
        onButtonClick: jest.fn(),
        loading: true,
        small: true,
    };
    const loadingButtonProps = {
        label: "Submit4",
        primary: true,
        small: false,
        onButtonClick: jest.fn(),
        loading: true,
        field: true,
    };

    const disabledProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: jest.fn(),
        disabled: true,
    };

    const callToActionProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: jest.fn(),
        disabled: false,
        action: true,
    };

    const testIdProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: jest.fn(),
        disabled: false,
        action: true,
        testId: "Unique-ID",
    };

    function wrapper(renderFunc: any, props: any) {
        return renderFunc(
            <ONSButton
                label={props.label}
                id={props.id}
                primary={props.primary}
                small={props.small}
                field={props.field}
                loading={props.loading}
                marginRight={props.marginRight}
                onClick={props.onButtonClick}
                disabled={props.disabled}
                action={props.action}
                testid={props.testId}
            />,
        );
    }

    it("matches Snapshot", () => {
        expect(wrapper(render, Props)).toMatchSnapshot();
    });

    it("should render with the correct label", () => {
        wrapper(render, Props);

        expect(screen.getByText(/Submit1/i)).toBeVisible();
        expect(screen.getByText(/Submit1/i).textContent).toContain(Props.label);
    });

    it("simulates click events", async () => {
        wrapper(render, exportButtonProps);

        await userEvent.click(screen.getByText(/Submit1.5/i));

        expect(exportButtonProps.onButtonClick).toHaveBeenCalledTimes(1);
    });

    it("displays loading button", () => {
        wrapper(render, loadingButtonProps);

        const loadingButton = screen.getByRole("button", { name: loadingButtonProps.label });

        expect(loadingButton).toHaveClass("ons-btn--loader");
    });

    it("displays small button", () => {
        wrapper(render, smallButtonProps);

        const smallButton = screen.getByRole("button", { name: smallButtonProps.label });

        expect(smallButton).toHaveClass("ons-btn--small");
    });

    it("displays disabled button", () => {
        wrapper(render, disabledProps);

        const disabledButton = screen.getByRole("button", { name: disabledProps.label });

        expect(disabledButton).toHaveClass("ons-btn--disabled");
    });

    it("displays Call to Action button", () => {
        wrapper(render, callToActionProps);

        const calltToActionButton = screen.getByRole("button", { name: callToActionProps.label });

        expect(calltToActionButton).toHaveClass("ons-btn--link");
    });

    it("has data-testid set correctly", () => {
        wrapper(render, testIdProps);

        const testButton = screen.getByRole("button", { name: testIdProps.label });

        expect(testButton).toHaveAttribute("data-testid", "Unique-ID-button");
    });
});
