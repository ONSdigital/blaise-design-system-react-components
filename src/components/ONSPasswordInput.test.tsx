import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { ONSPasswordInput } from "./ONSPasswordInput";

type PasswordInputProps = ComponentProps<typeof ONSPasswordInput>;

const setup = (overrideProps: Partial<PasswordInputProps> = {}) => {
    const props: PasswordInputProps = {
        label: "Password",
        inputId: "password-input",
        value: "",
        onChange: vi.fn(),
        ...overrideProps,
    };

    return {
        user: userEvent.setup(),
        props,
        ...render(<ONSPasswordInput {...props} />),
    };
};

describe("ONSPasswordInput", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the correct label and link it to the input ID", () => {
            const { props } = setup({ label: "Submit", inputId: "submit-id" });
            const labelElement = screen.getByText(props.label as string);
            const inputElement = screen.getByLabelText(props.label as string);

            expect(labelElement).toBeVisible();
            expect(inputElement).toHaveAttribute("id", props.inputId);
        });
    });

    describe("Interactions", () => {
        it("should trigger the onChange handler for every character typed", async () => {
            const { user, props } = setup();
            const input = screen.getByTestId("login-password-input");

            await user.type(input, "abc");
            expect(props.onChange).toHaveBeenCalledTimes(3);
        });

        it("should safely handle user input when no onChange handler is provided", async () => {
            const { user } = setup({ onChange: undefined });
            const input = screen.getByTestId("login-password-input");

            await expect(user.type(input, "test")).resolves.not.toThrow();
        });

        it("should toggle the checkbox state and reveal the password text", async () => {
            const { user } = setup();
            const passwordInput = screen.getByTestId("login-password-input");
            const toggleCheckbox = screen.getByTestId<HTMLInputElement>("login-password-toggle");

            expect(toggleCheckbox.checked).toBe(false);
            expect(passwordInput).toHaveAttribute("type", "password");
            await user.click(toggleCheckbox);
            expect(toggleCheckbox.checked).toBe(true);
            expect(passwordInput).toHaveAttribute("type", "text");
            await user.click(toggleCheckbox);
            expect(toggleCheckbox.checked).toBe(false);
            expect(passwordInput).toHaveAttribute("type", "password");
        });
    });
});
