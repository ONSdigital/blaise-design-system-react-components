import {
    cleanup,
    fireEvent,
    render,
    screen,
} from "@testing-library/react";
import React from "react";
import { ONSButton } from "./ONSButton";

describe("ONS Button Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

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
        testid: "Unique-ID",
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

    function wrapper(render: any, props: any) {
        return render(
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

    it("should render correctly", () => {
        const { container } = render(<ONSButton {...Props} />);
        expect(container).toBeDefined();
    });

    it("should render with the correct label", () => {
        render(<ONSButton {...Props} />);
        expect(screen.getByText(/Submit1/i).textContent).toContain(Props.label);
    });

    it("simulates click events", async () => {
        wrapper(render, exportButtonProps);
        fireEvent.click(screen.getByText(/Submit1.5/i));
        expect(exportButtonProps.onButtonClick).toHaveBeenCalledTimes(1);
    });

    it("displays loading button", () => {
        wrapper(render, loadingButtonProps);
        const button = screen.getByRole("button");
        expect(button.getAttribute("class")).toMatch(/ons-btn--loader/gi);
    });

    it("displays small button", () => {
        wrapper(render, smallButtonProps);
        const button = screen.getByRole("button");
        expect(button.getAttribute("class")).toMatch(/ons-btn--small/gi);
    });

    it("displays disabled button", () => {
        render(<ONSButton {...disabledProps} />);
        const button = screen.getByRole("button");
        expect(button.getAttribute("class")).toMatch(/ons-btn--disabled/gi);
    });

    it("displays Call to Action button", () => {
        render(<ONSButton {...callToActionProps} />);
        const button = screen.getByRole("button");
        expect(button.getAttribute("class")).toMatch(/ons-btn--link/gi);
    });

    it("has data-testid set correctly", () => {
        render(<ONSButton {...callToActionProps} />);
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("data-testid", `${testIdProps.testId}-button`);
    });
});
