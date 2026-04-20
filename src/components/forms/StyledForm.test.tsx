import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExampleForm } from "./example-form/ExampleForm";
import { StyledForm } from "./StyledForm";

const setup = (component = <ExampleForm />) => {
    return {
        user: userEvent.setup(),
        ...render(component),
    };
};

describe("StyledForm", () => {
    describe("Interactions", () => {
        it("should display the summary of all validation errors when submitting an empty form", async () => {
            const { user } = setup();
            const submitButton = screen.getByRole("button", { name: /create account/i });

            await user.click(submitButton);
            expect(await screen.findByText(/There are 4 problems with your answer/i)).toBeVisible();
            expect(screen.getByText(/Password must be longer than 6 characters/i)).toBeVisible();
            expect(screen.queryAllByText(/Enter a valid questionnaire name/i)).toHaveLength(2);
            expect(screen.queryAllByText(/Enter a name/i)).toHaveLength(2);
            expect(screen.queryAllByText(/Enter an email/i)).toHaveLength(2);
            expect(screen.queryAllByText(/Enter a password/i)).toHaveLength(2);
        });

        it("should only display a specific error for the incorrect field", async () => {
            const { user } = setup();

            await user.type(screen.getByLabelText(/Questionnaire/i), "OPN2101A");
            await user.type(screen.getByLabelText(/name/i), "ricer");
            await user.type(screen.getByLabelText(/Email/i), "invalidEmail123");
            await user.type(screen.getByLabelText(/Password/i), "ricer123");
            await user.click(screen.getByRole("button", { name: /create account/i }));
            expect(await screen.findByText(/There is 1 problem with your answer/i)).toBeVisible();
            expect(screen.queryByText(/Enter a valid questionnaire name/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/Enter a name/i)).not.toBeInTheDocument();
            expect(
                screen.queryAllByText(/Enter an email address in the correct format/i),
            ).toHaveLength(2);
        });

        it("should trigger the success state and display submission feedback when the form is valid", async () => {
            const { user } = setup();

            await user.type(screen.getByLabelText(/Questionnaire/i), "OPN2101A");
            await user.type(screen.getByLabelText(/name/i), "ricer");
            await user.type(screen.getByLabelText(/Email/i), "ricer@example.com");
            await user.type(screen.getByLabelText(/Password/i), "ricer123");
            await user.click(screen.getByRole("button", { name: /create account/i }));
            expect(await screen.findByText(/Form submitted for user ricer/i)).toBeVisible();
        });
    });

    describe("Props", () => {
        const minimalFields = [{ name: "Name", type: "text" as const }];

        it("should display a custom label when the submitLabel prop is provided", async () => {
            const customLabel = "Press for bacon";

            setup(
                <StyledForm
                    fields={minimalFields}
                    onSubmitFunction={vi.fn()}
                    submitLabel={customLabel}
                />,
            );
            expect(
                screen.getByRole("button", { name: new RegExp(customLabel, "i") }),
            ).toBeVisible();
        });

        it("should fallback to 'Save and continue' when no label is provided", () => {
            setup(
                <StyledForm
                    fields={minimalFields}
                    onSubmitFunction={vi.fn()}
                />,
            );

            expect(screen.getByRole("button", { name: /save and continue/i })).toBeVisible();
        });
    });
});
