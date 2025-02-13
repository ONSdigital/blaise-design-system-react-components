import {
    cleanup,
    fireEvent,
    render,
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
        const screen = render(<ONSButton {...Props} />);
        expect(screen.getByText(/Submit1/i).textContent).toContain(Props.label);
    });

    it("simulates click events", async () => {
        jest.spyOn(exportButtonProps, "onButtonClick");
        const screen = render(<ONSButton {...exportButtonProps} />);
        fireEvent.click(screen.getByText(/Submit1.5/i));
        expect(exportButtonProps.onButtonClick.call.length).toEqual(1);
    });

    it("displays loading button", () => {
        const screen = render(<ONSButton {...loadingButtonProps} />);
        const button = screen.getByRole("button");
        const classes = button.getAttribute("class")?.split(" ");
        expect(classes).toContain("ons-btn--loader");
    });

    it("displays small button", () => {
        const screen = render(<ONSButton {...smallButtonProps} />);
        const button = screen.getByRole("button");
        const classes = button.getAttribute("class")?.split(" ");
        expect(classes).toContain("ons-btn--small");
    });

    it("displays disabled button", () => {
        const screen = render(<ONSButton {...disabledProps} />);
        const button = screen.getByRole("button");
        const classes = button.getAttribute("class")?.split(" ");
        expect(classes).toContain("ons-btn--disabled");
    });

    it("displays Call to Action button", () => {
        const screen = render(<ONSButton {...callToActionProps} />);
        const button = screen.getByRole("button");
        const classes = button.getAttribute("class")?.split(" ");
        expect(classes).toContain("ons-btn--link");
    });

    it("has data-testid set correctly", () => {
        const screen = render(<ONSButton {...callToActionProps} />);
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("data-testid", `${testIdProps.testId}-button`);
    });
});
