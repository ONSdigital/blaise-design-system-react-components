import React from "react";
import {
    fireEvent, render, screen, waitFor,
} from "@testing-library/react";
import ExampleRadioForm from "./ExampleForm/ExampleRadioForm";
import StyledForm from "./StyledForm";
import { validateRadio } from "./ExampleForm/FormValidation";

test("it matches snapshots", async () => {
    const formPage = render(<ExampleRadioForm/>);

    expect(formPage).toMatchSnapshot();
});

test("it displays the the radio option description", async () => {
    render(<ExampleRadioForm/>);

    await waitFor(() => {
        const errorMessage = screen.getByText(/This includes all types of cheese/i);
        expect(errorMessage).toBeInTheDocument();
    });
});

test("error appears on submit of empty form", async () => {
    render(<ExampleRadioForm/>);

    const submitButton = screen.getByTestId(/submit-button/i);
    fireEvent.click(submitButton);

    await waitFor(() => {
        const errorMessage = screen.getByText(/There is 1 problem with your answer/i);
        expect(errorMessage).toBeInTheDocument();

        const radioErrorMessage = screen.queryAllByText(/Select an option/i);
        expect(radioErrorMessage).toHaveLength(2);
    });
});

test("submit function is called when form is valid", async () => {
    render(<ExampleRadioForm/>);

    fireEvent.click(screen.getByLabelText(/Bacon/i));

    const submitButton = screen.getByTestId(/submit-button/i);
    fireEvent.click(submitButton);

    await waitFor(() => {
        const successMessage = screen.getByText(/Form submitted, topping chosen bacon/i);
        expect(successMessage).toBeInTheDocument();
    });
});

test("setting initial value", async () => {
    const fields = [
        {
            name: "topping",
            description: "Select your favorite topping",
            type: "radio",
            validate: validateRadio,
            initial_value: "cheese",
            radioOptions: [
                { id: "bacon", value: "bacon", label: "Bacon" },
                { id: "cheese", value: "cheese", label: "Cheese" },
            ],
        },
    ];

    const submitFunction = jest.fn();

    render(<StyledForm fields={fields} onSubmitFunction={submitFunction}/>);

    const submitButton = screen.getByTestId(/submit-button/i);
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(submitFunction).toBeCalledWith(
            expect.objectContaining({ "topping": "cheese" }),
            expect.any(Function),
        );
    });
});
