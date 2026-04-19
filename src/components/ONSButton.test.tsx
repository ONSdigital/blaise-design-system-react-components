import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { ONSButton } from "./ONSButton";

type ButtonProps = ComponentProps<typeof ONSButton>;

const setup = (overrideProps: Partial<ButtonProps> = {}) => {
    const props: ButtonProps = {
        label: "Submit",
        onClick: vi.fn(),
        primary: false,
        small: false,
        field: false,
        loading: false,
        disabled: false,
        action: false,
        ...overrideProps,
    };

    return {
        user: userEvent.setup(),
        props,
        ...render(<ONSButton {...props} />),
    };
};

describe("ONSButton", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the correct label text", () => {
            const { props } = setup({ label: "Custom Label" });

            expect(screen.getByText(props.label as string)).toBeVisible();
        });

        it("should apply the custom data-testid", () => {
            const { props } = setup({ testid: "custom-btn-id" });
            const button = screen.getByRole("button");

            expect(button).toHaveAttribute("data-testid", `${props.testid}-button`);
        });
    });

    describe("Interactions", () => {
        it("should trigger the onClick handler when clicked", async () => {
            const { user, props } = setup();
            const button = screen.getByRole("button", { name: props.label as string });

            await user.click(button);
            expect(props.onClick).toHaveBeenCalledTimes(1);
        });
    });

    describe("Props", () => {
        it("should append the loader class when loading is true", () => {
            setup({ loading: true });
            const button = screen.getByRole("button");

            expect(button).toHaveClass("ons-btn--loader");
        });

        it("should append the small class when small is true", () => {
            setup({ small: true });
            const button = screen.getByRole("button");

            expect(button).toHaveClass("ons-btn--small");
        });

        it("should append the disabled class when disabled is true", () => {
            setup({ disabled: true });
            const button = screen.getByRole("button");

            expect(button).toHaveClass("ons-btn--disabled");
        });

        it("should append the link class when action is true", () => {
            setup({ action: true });
            const button = screen.getByRole("button");

            expect(button).toHaveClass("ons-btn--link");
        });
    });
});
