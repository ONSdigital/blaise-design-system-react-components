import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import ExampleForm from "./ExampleForm/ExampleForm";
import StyledForm from "./StyledForm";


test('error appears on submit of empty form',  async () => {
    render(<ExampleForm/>);

    const submitButton = screen.getByTestId(/submit-button/i);
    fireEvent.click(submitButton)
    expect(screen.getByText(/Password must be longer than 6 characters/i)).toBeInTheDocument();

    await waitFor(() => {
        const errorMessage = screen.getByText(/There are 4 problems with your answer/i);
        expect(errorMessage).toBeInTheDocument();

        const instrumentErrorMessage = screen.queryAllByText(/Enter a valid instrument name/i);
        expect(instrumentErrorMessage).toHaveLength(2);
        const nameErrorMessage = screen.queryAllByText(/Enter a name/i);
        expect(nameErrorMessage).toHaveLength(2);
        const emailErrorMessage = screen.queryAllByText(/Enter a email/i);
        expect(emailErrorMessage).toHaveLength(2);
        const passwordErrorMessage = screen.queryAllByText(/Enter a password/i);
        expect(passwordErrorMessage).toHaveLength(2);

    });
});

test('only one error appears on submit of one incorrect field',  async () => {
    render(<ExampleForm/>);

    fireEvent.input(screen.getByLabelText(/Instrument/i), {
        target: {
            value:
                "OPN2101A"
        }
    });

    fireEvent.input(screen.getByLabelText(/name/i), {
        target: {
            value:
                "ricer"
        }
    });

    fireEvent.input(screen.getByLabelText(/Email/i), {
        target: {
            value:
                "invalidEmail123"
        }
    });

    fireEvent.input(screen.getByLabelText(/Password/i), {
        target: {
            value:
                "ricer123"
        }
    });

    const submitButton = screen.getByTestId(/submit-button/i);
    fireEvent.click(submitButton)

    await waitFor(() => {
        const errorMessage = screen.getByText(/There is 1 problem with your answer/i);
        expect(errorMessage).toBeInTheDocument();

        const instrumentNameErrorMessage = screen.queryAllByText(/Enter a valid instrument name/i);
        expect(instrumentNameErrorMessage).toHaveLength(0);
        const nameErrorMessage = screen.queryAllByText(/Enter a name/i);
        expect(nameErrorMessage).toHaveLength(0);
        const passwordErrorMessage = screen.queryAllByText(/Enter a password/i);
        expect(passwordErrorMessage).toHaveLength(0);


        const emailErrorMessage = screen.queryAllByText(/Enter an email address in the correct format, such as name@example.com/i);
        expect(emailErrorMessage).toHaveLength(2);
    });
});


test('submit function is called when form is valid', async () => {
    render(<ExampleForm/>);

    fireEvent.input(screen.getByLabelText(/Instrument/i), {
        target: {
            value:
                "OPN2101A"
        }
    });

    fireEvent.input(screen.getByLabelText(/name/i), {
        target: {
            value:
                "ricer"
        }
    });

    fireEvent.input(screen.getByLabelText(/Email/i), {
        target: {
            value:
                "ricer@email.com"
        }
    });

    fireEvent.input(screen.getByLabelText(/Password/i), {
        target: {
            value:
                "ricer123"
        }
    });

    const submitButton = screen.getByTestId(/submit-button/i);
    fireEvent.click(submitButton)

    await waitFor(() => {
        const successMessage = screen.getByText(/Form submitted for user ricer/i);
        expect(successMessage).toBeInTheDocument()
    });
});

test('custom submit button label can be set', async () => {
    const fields = [
        {
            name: "Name",
            type: "text"
        }
    ]

    render(<StyledForm fields={fields} onSubmitFunction={() => console.log("")} submitLabel={"Press for bacon"}/>);

    await waitFor(() => {
        const successMessage = screen.getByText(/Press for bacon/i);
        expect(successMessage).toBeInTheDocument()
    });
});

test('default submit button label is used when no label is passed in', async () => {
    const fields = [
        {
            name: "Name",
            type: "text"
        }
    ]

    render(<StyledForm fields={fields} onSubmitFunction={() => console.log("")}/>);

    await waitFor(() => {
        const successMessage = screen.getByText(/Save and continue/i);
        expect(successMessage).toBeInTheDocument()
    });
});