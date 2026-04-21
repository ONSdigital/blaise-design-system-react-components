import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExampleCheckboxForm } from "./example-form/ExampleCheckboxForm";
import { StyledForm } from "./StyledForm";

const setup = (component = <ExampleCheckboxForm />) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};

describe("ExampleCheckboxForm", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Interactions", () => {
    it("should display validation errors upon submitting an empty form", async () => {
      const { user } = setup();
      const submitButton = screen.getByRole("button", {
        name: /submit selection/i,
      });

      await user.click(submitButton);
      expect(await screen.findByText(/There is 1 problem with your answer/i)).toBeVisible();
      const checkboxErrors = screen.queryAllByText(/Select an option/i);

      expect(checkboxErrors).toHaveLength(2);
    });

    it("should call the submit function when a single checkbox is selected", async () => {
      const { user } = setup();

      await user.click(screen.getByLabelText(/LMS/i));
      await user.click(screen.getByRole("button", { name: /submit selection/i }));
      expect(await screen.findByText(/Form submitted, questionnaires chosen: lms/i)).toBeVisible();
    });

    it("should call the submit function when multiple checkboxes are selected", async () => {
      const { user } = setup();

      await user.click(screen.getByLabelText(/LMS/i));
      await user.click(screen.getByLabelText(/OPN/i));
      await user.click(screen.getByRole("button", { name: /submit selection/i }));
      expect(
        await screen.findByText(/Form submitted, questionnaires chosen: lms, opn/i),
      ).toBeVisible();
    });

    it("should select all checkboxes when 'Select all' is clicked", async () => {
      const { user } = setup();

      await user.click(screen.getByRole("button", { name: /select all/i }));
      await user.click(screen.getByRole("button", { name: /submit selection/i }));
      expect(
        await screen.findByText(/Form submitted, questionnaires chosen: lms, opn/i),
      ).toBeVisible();
    });

    it("should deselect all checkboxes when 'Unselect all' is clicked", async () => {
      const { user } = setup();

      await user.click(screen.getByRole("button", { name: /select all/i }));
      await user.click(screen.getByRole("button", { name: /unselect all/i }));
      await user.click(screen.getByRole("button", { name: /submit selection/i }));
      expect(await screen.findByText(/There is 1 problem with your answer/i)).toBeVisible();
      expect(screen.queryAllByText(/Select an option/i)).toHaveLength(2);
    });
  });

  describe("Props", () => {
    it("should submit the correct data array based on the provided initial_value", async () => {
      const submitFunction = vi.fn();
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
      const { user } = setup(
        <StyledForm
          fields={fields}
          onSubmitFunction={submitFunction}
        />,
      );

      await user.click(screen.getByRole("button", { name: /save and continue/i }));
      expect(submitFunction).toHaveBeenCalledWith(
        expect.objectContaining({ topping: ["bacon", "pineapple"] }),
        expect.any(Function),
      );
    });
  });
});
