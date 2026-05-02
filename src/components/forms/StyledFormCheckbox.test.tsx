import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExampleCheckboxForm } from "./example-form/ExampleCheckboxForm";
import { StyledForm } from "./StyledForm";
import { Formik } from "formik";
import { CheckboxFieldset } from "./form-elements/Fields";

const setup = (component = <ExampleCheckboxForm />) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};

describe("ExampleCheckboxForm", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("interactions", () => {
    it("shows validation errors when an empty form is submitted", async () => {
      const { user } = setup();
      const submitButton = screen.getByRole("button", {
        name: /submit selection/i,
      });

      await user.click(submitButton);
      expect(await screen.findByText(/There is 1 problem with your answer/i)).toBeVisible();
      const checkboxErrors = screen.queryAllByText(/Select an option/i);

      expect(checkboxErrors).toHaveLength(2);
    });

    it("submits when one checkbox is selected", async () => {
      const { user } = setup();

      await user.click(screen.getByLabelText(/LMS/i));
      await user.click(screen.getByRole("button", { name: /submit selection/i }));
      expect(await screen.findByText(/Form submitted, questionnaires chosen: lms/i)).toBeVisible();
    });

    it("submits when multiple checkboxes are selected", async () => {
      const { user } = setup();

      await user.click(screen.getByLabelText(/LMS/i));
      await user.click(screen.getByLabelText(/OPN/i));
      await user.click(screen.getByRole("button", { name: /submit selection/i }));
      expect(
        await screen.findByText(/Form submitted, questionnaires chosen: lms, opn/i),
      ).toBeVisible();
    });

    it("selects every checkbox when 'Select all' is clicked", async () => {
      const { user } = setup();

      await user.click(screen.getByRole("button", { name: /select all/i }));
      await user.click(screen.getByRole("button", { name: /submit selection/i }));
      expect(
        await screen.findByText(/Form submitted, questionnaires chosen: lms, opn/i),
      ).toBeVisible();
    });

    it("clears every checkbox when 'Unselect all' is clicked", async () => {
      const { user } = setup();

      await user.click(screen.getByRole("button", { name: /select all/i }));
      await user.click(screen.getByRole("button", { name: /unselect all/i }));
      await user.click(screen.getByRole("button", { name: /submit selection/i }));
      expect(await screen.findByText(/There is 1 problem with your answer/i)).toBeVisible();
      expect(screen.queryAllByText(/Select an option/i)).toHaveLength(2);
    });

    it("toggles every checkbox and updates the button text", async () => {
      const checkboxFields = [
        {
          name: "testCheckboxes",
          type: "checkbox" as const,
          checkboxOptions: [
            { id: "alpha-option", value: "alpha", label: "Alpha Option" },
            { id: "beta-option", value: "beta", label: "Beta Option" },
          ],
        },
      ];

      const { user } = setup(
        <StyledForm
          fields={checkboxFields}
          onSubmitFunction={vi.fn()}
        />,
      );

      const toggleButton = screen.getByRole("button", { name: /Select All/i });
      const optionAlpha = screen.getByLabelText("Alpha Option");
      const optionBeta = screen.getByLabelText("Beta Option");

      expect(optionAlpha).not.toBeChecked();
      expect(optionBeta).not.toBeChecked();

      await user.click(toggleButton);

      expect(optionAlpha).toBeChecked();
      expect(optionBeta).toBeChecked();
      expect(toggleButton).toHaveTextContent("Unselect All");

      await user.click(toggleButton);

      expect(optionAlpha).not.toBeChecked();
      expect(optionBeta).not.toBeChecked();
      expect(toggleButton).toHaveTextContent("Select All");
    });
  });

  describe("props", () => {
    it("submits the provided initialValue", async () => {
      const submitFunction = vi.fn();
      const fields = [
        {
          name: "topping",
          description: "Select your favourite topping",
          type: "checkbox" as const,
          initialValue: ["bacon", "pineapple"],
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

  describe("edge cases", () => {
    it("shows 'Select All' when the field is missing from Formik state", () => {
      render(
        <Formik
          initialValues={{}}
          onSubmit={vi.fn()}
        >
          <CheckboxFieldset
            name="missingCheckboxState"
            checkboxOptions={[{ id: "checkbox-option", value: "test", label: "Test Label" }]}
            autoFocus={false}
          />
        </Formik>,
      );

      const button = screen.getByRole("button", { name: /Select All/i });

      expect(button).toBeVisible();
    });
  });
});
