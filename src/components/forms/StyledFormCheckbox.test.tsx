import React from "react";
import {
    fireEvent, render, screen, waitFor,
} from "@testing-library/react";
import ExampleCheckboxForm from "./ExampleForm/ExampleCheckboxForm";
import StyledForm from "./StyledForm";

test("it matches snapshots", async () => {
    const formPage = render(<ExampleCheckboxForm/>);

    expect(formPage).toMatchSnapshot();
});

test("error appears on submit of empty form", async () => {
    render(<ExampleCheckboxForm/>);

    fireEvent.click(screen.getByTestId(/submit-button/i));

    await waitFor(() => {
        const errorMessage = screen.getByText(/There is 1 problem with your answer/i);
        expect(errorMessage).toBeInTheDocument();

        const checkboxErrorMessage = screen.queryAllByText(/Select an option/i);
        expect(checkboxErrorMessage).toHaveLength(2);
    });
});

test("submit function is called when one checkbox is selected", async () => {
    render(<ExampleCheckboxForm/>);

    fireEvent.click(screen.getByLabelText(/LMS/i));

    fireEvent.click(screen.getByTestId(/submit-button/i));

    await waitFor(() => {
        const successMessage = screen.getByText(/Form submitted, questionnaires chosen lms/i);
        expect(successMessage).toBeInTheDocument();
    });
});

test("submit function is called when multiple checkboxes are selected", async () => {
    render(<ExampleCheckboxForm/>);

    fireEvent.click(screen.getByLabelText(/LMS/i));
    fireEvent.click(screen.getByLabelText(/OPN/i));

    fireEvent.click(screen.getByTestId(/submit-button/i));

    await waitFor(() => {
        const successMessage = screen.getByText(/Form submitted, questionnaires chosen lms,opn/i);
        expect(successMessage).toBeInTheDocument();
    });
});

test("setting initial value", async () => {
    const fields = [
        {
            name: "topping",
            description: "Select your favorite topping",
            type: "checkbox",
            initial_value: ["bacon", "pineapple"],
            checkboxOptions: [
                { id: "bacon", value: "bacon", label: "Bacon" },
                { id: "cheese", value: "cheese", label: "Cheese" },
                { id: "pineapple", value: "pineapple", label: "Pineapple" },
            ],
        },
    ];

    const submitFunction = jest.fn();

    render(<StyledForm fields={fields} onSubmitFunction={submitFunction}/>);

    fireEvent.click(screen.getByTestId(/submit-button/i));

    await waitFor(() => {
        expect(submitFunction).toBeCalledWith(
            expect.objectContaining({ "topping": ["bacon", "pineapple"] }),
            expect.any(Function),
        );
    });
});

test("all checkboxes are selected when select all button is clicked", async () => {
    render(<ExampleCheckboxForm/>);

    fireEvent.click(screen.getByText(/Select all/i));

    fireEvent.click(screen.getByTestId(/submit-button/i));

    await waitFor(() => {
        const successMessage = screen.getByText(/Form submitted, questionnaires chosen lms,opn/i);
        expect(successMessage).toBeInTheDocument();
    });
});

test("all checkboxes are deselected when unselect all button is clicked", async () => {
    render(<ExampleCheckboxForm/>);

    fireEvent.click(screen.getByText(/Select all/i));
    fireEvent.click(screen.getByText(/Unselect all/i));

    fireEvent.click(screen.getByTestId(/submit-button/i));

    await waitFor(() => {
        const errorMessage = screen.getByText(/There is 1 problem with your answer/i);
        expect(errorMessage).toBeInTheDocument();

        const checkboxErrorMessage = screen.queryAllByText(/Select an option/i);
        expect(checkboxErrorMessage).toHaveLength(2);
    });
});
