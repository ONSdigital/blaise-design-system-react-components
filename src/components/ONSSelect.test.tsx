import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { ONSSelect } from "./ONSSelect";

type SelectProps = ComponentProps<typeof ONSSelect>;

const defaultOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
];

const setup = (overrideProps: Partial<SelectProps> = {}) => {
    const props: SelectProps = {
        id: "select-thing",
        label: "Select From",
        value: "",
        options: defaultOptions,
        testId: "test-select",
        onChange: vi.fn(),
        ...overrideProps,
    };

    return {
        user: userEvent.setup(),
        props,
        ...render(
            <ONSSelect
                id={props.id}
                label={props.label}
                onChange={props.onChange}
                value={props.value as string}
                options={props.options}
                testId={props.testId}
            />,
        ),
    };
};

describe("ONSSelect", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the correct label associated with the select element", () => {
            const { props } = setup();

            expect(screen.getByLabelText(props.label as string)).toBeInTheDocument();
        });

        it("should render all provided options in the dropdown", () => {
            setup();
            expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument();
            expect(screen.getByRole("option", { name: "Option 2" })).toBeInTheDocument();
            expect(screen.getByRole("option", { name: "Option 3" })).toBeInTheDocument();
        });
    });

    describe("Interactions", () => {
        it("should trigger the onChange handler when a new option is selected", async () => {
            const { user, props } = setup();
            const selectElement = screen.getByTestId(props.testId as string);

            await user.selectOptions(selectElement, "2");
            await user.selectOptions(selectElement, "3");
            expect(props.onChange).toHaveBeenCalledTimes(2);
        });
    });
});
