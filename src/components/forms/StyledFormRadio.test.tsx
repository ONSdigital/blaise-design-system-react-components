import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExampleRadioForm } from "./example-form/ExampleRadioForm";
import { StyledForm } from "./StyledForm";
import { validateRadio } from "./example-form/FormValidation";

const setup = (component = <ExampleRadioForm />) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};

describe("ExampleRadioForm", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display the radio option description text", () => {
      setup();
      expect(screen.getByText(/This includes all types of cheese/i)).toBeVisible();
    });
  });

  describe("Interactions", () => {
    it("should display validation errors upon submitting an empty form", async () => {
      const { user } = setup();
      const submitButton = screen.getByRole("button", {
        name: /save and continue/i,
      });

      await user.click(submitButton);
      expect(await screen.findByText(/There is 1 problem with your answer/i)).toBeVisible();
      const radioErrors = screen.queryAllByText(/Select an option/i);

      expect(radioErrors).toHaveLength(2);
    });

    it("should trigger a success state when a valid option is submitted", async () => {
      const { user } = setup();

      await user.click(screen.getByLabelText(/Bacon/i));
      await user.click(screen.getByRole("button", { name: /save and continue/i }));
      expect(await screen.findByText(/Form submitted. Topping: bacon/i)).toBeVisible();
    });

    it("should successfully capture and submit data from the 'other/specify' conditional text input", async () => {
      const { user } = setup();

      await user.click(screen.getByLabelText(/Bacon/i));

      const otherRadio = screen.getByLabelText(/^Other$/i);

      await user.click(otherRadio);

      const specifyInput = screen.getByLabelText(/Please specify/i);

      expect(specifyInput).toBeVisible();

      await user.type(specifyInput, "Pineapple");

      await user.click(screen.getByRole("button", { name: /save and continue/i }));

      expect(
        await screen.findByText(/Form submitted. Topping: bacon. Option: other \(Pineapple\)/i),
      ).toBeVisible();
    });
  });

  describe("Props", () => {
    it("should submit the correct data based on the provided initial_value", async () => {
      const submitFunction = vi.fn();
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
      const { user } = setup(
        <StyledForm
          fields={fields}
          onSubmitFunction={submitFunction}
        />,
      );

      await user.click(screen.getByRole("button", { name: /save and continue/i }));
      expect(submitFunction).toHaveBeenCalledWith(
        expect.objectContaining({ topping: "cheese" }),
        expect.any(Function),
      );
    });
  });
});
