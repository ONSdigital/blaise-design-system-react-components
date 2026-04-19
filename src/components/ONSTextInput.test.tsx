import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { ONSTextInput } from "./ONSTextInput";

type TextInputProps = ComponentProps<typeof ONSTextInput>;

const setup = (overrideProps: Partial<TextInputProps> = {}) => {
    const props: TextInputProps = {
        id: "file-upload",
        label: "Default Label",
        onChange: vi.fn(),
        onClick: vi.fn(),
        ...overrideProps,
    };

    return {
        user: userEvent.setup(),
        props,
        ...render(
            <ONSTextInput
                id={props.id}
                label={props.label}
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
        ),
    };
};

describe("ONSTextInput", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the correct label text", () => {
            const { props } = setup({ label: "Text Label" });

            expect(screen.getByLabelText("Text Label")).toBeVisible();
        });

        it("should use the default test-id 'text-input' if none is provided", () => {
            setup();
            expect(screen.getByTestId("text-input")).toBeInTheDocument();
        });

        it("should allow overriding the test-id via props", () => {
            setup({ testId: "test-id" });
            expect(screen.getByTestId("test-id")).toBeInTheDocument();
        });
    });

    describe("Props", () => {
        it("should be of type 'text' by default", () => {
            setup();
            const input = screen.getByTestId("text-input");

            expect(input).toHaveAttribute("type", "text");
        });

        it("should be of type 'password' when the password prop is enabled", () => {
            setup({ password: true });
            const input = screen.getByTestId("text-input");

            expect(input).toHaveAttribute("type", "password");
        });

        it("should be of type 'number' when the number prop is enabled", () => {
            setup({ number: true });
            const input = screen.getByTestId("text-input");

            expect(input).toHaveAttribute("type", "number");
        });
    });

    describe("Interactions", () => {
        it("should trigger the onChange handler for every character typed", async () => {
            const { user, props } = setup();
            const input = screen.getByTestId("text-input");

            await user.type(input, "abc");
            expect(props.onChange).toHaveBeenCalledTimes(3);
        });

        it("should trigger the onClick handler when clicked", async () => {
            const { user, props } = setup();
            const input = screen.getByTestId("text-input");

            await user.click(input);
            expect(props.onClick).toHaveBeenCalledTimes(1);
        });
    });
});
