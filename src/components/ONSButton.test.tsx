import {
    cleanup,
    fireEvent,
    render,
} from "@testing-library/react";
import React from "react";
import sinon from "sinon";
import { ONSButton } from "./ONSButton";

describe("ONS Button Test", () => {
    afterEach(() => {
        cleanup();
    });

    const Props = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
    };

    const exportButtonProps = {
        label: "Submit1.5",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
        loading: false,
    };

    const smallButtonProps = {
        label: "Submit2",
        primary: true,
        onButtonClick: sinon.spy(),
        loading: true,
        small: true,
    };
    const loadingButtonProps = {
        label: "Submit4",
        primary: true,
        small: false,
        onButtonClick: sinon.spy(),
        loading: true,
        field: true,
    };

    const disabledProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
        disabled: true,
    };

    const callToActionProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
        disabled: false,
        action: true,
    };

    const testIdProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
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

    it.only("simulates click events", async () => {
        // const screen = render(<ONSButton {...exportButtonProps} />);
        const screen = wrapper(render, exportButtonProps);
        fireEvent.click(screen.getByText(/Submit1.5/i));
        expect(exportButtonProps.onButtonClick).toHaveProperty("callCount", 1);
    });

    it("displays loading button", () => {
        const screen = render(<ONSButton {...loadingButtonProps} />);
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("class", "ons-btn--loader");
    });

    it("displays small button", () => {
        const screen = render(<ONSButton {...smallButtonProps} />);
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("class", "ons-btn--small");
    });

    it("displays disabled button", () => {
        const screen = render(<ONSButton {...disabledProps} />);
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("class", "ons-btn--disabled");
    });

    it("displays Call to Action button", () => {
        const screen = render(<ONSButton {...callToActionProps} />);
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("class", "ons-btn--link");
    });

    it("has data-testid set correctly", () => {
        const screen = render(<ONSButton {...callToActionProps} />);
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("data-testid", `${testIdProps.testId}-button`);
    });
});
