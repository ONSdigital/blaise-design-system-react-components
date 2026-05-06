import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ExampleForm } from "./example-form/ExampleForm";
import { type Props, StyledForm } from "./StyledForm";

const setup = (component = <ExampleForm />) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
};

const minimalFields = [{ name: "Name", type: "text" as const }];

describe("StyledForm", () => {
  describe("interactions", () => {
    it("shows all validation errors when an empty form is submitted", async () => {
      const { user } = setup();
      const submitButton = screen.getByRole("button", {
        name: /create account/i,
      });

      await user.click(submitButton);
      expect(await screen.findByText(/There are 4 problems with your answer/i)).toBeVisible();
      expect(screen.getByText(/Password must be longer than 6 characters/i)).toBeVisible();
      expect(screen.queryAllByText(/Enter a valid questionnaire name/i)).toHaveLength(2);
      expect(screen.queryAllByText(/Enter a name/i)).toHaveLength(2);
      expect(screen.queryAllByText(/Enter an email/i)).toHaveLength(2);
      expect(screen.queryAllByText(/Enter a password/i)).toHaveLength(2);
    });

    it("shows only the error for the invalid field", async () => {
      const { user } = setup();

      await user.type(screen.getByLabelText(/Questionnaire/i), "OPN2101A");
      await user.type(screen.getByLabelText(/name/i), "ricer");
      await user.type(screen.getByLabelText(/Email/i), "invalidEmail123");
      await user.type(screen.getByLabelText(/Password/i), "ricer123");
      await user.click(screen.getByRole("button", { name: /create account/i }));

      expect(await screen.findByText(/There is 1 problem with your answer/i)).toBeVisible();
      expect(screen.queryByText(/Enter a valid questionnaire name/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Enter a name/i)).not.toBeInTheDocument();
      expect(screen.queryAllByText(/Enter an email address in the correct format/i)).toHaveLength(
        2,
      );
    });

    it("shows the success message when the form is valid", async () => {
      const { user } = setup();

      await user.type(screen.getByLabelText(/Questionnaire/i), "OPN2101A");
      await user.type(screen.getByLabelText(/name/i), "ricer");
      await user.type(screen.getByLabelText(/Email/i), "ricer@example.com");
      await user.type(screen.getByLabelText(/Password/i), "ricer123");
      await user.click(screen.getByRole("button", { name: /create account/i }));

      expect(await screen.findByText(/Form submitted for user ricer/i)).toBeVisible();
    });
  });

  describe("props", () => {
    it("accepts values typed as Props", () => {
      const props: Props = {
        fields: [{ name: "Test", type: "text" }],
        onSubmitFunction: vi.fn(),
      };

      render(<StyledForm {...props} />);
      expect(screen.getByLabelText(/Test/i)).toBeVisible();
    });

    it("shows a custom submit label when one is provided", async () => {
      const customLabel = "Press for bacon";

      setup(
        <StyledForm
          fields={minimalFields}
          onSubmitFunction={vi.fn()}
          submitLabel={customLabel}
        />,
      );
      expect(screen.getByRole("button", { name: new RegExp(customLabel, "i") })).toBeVisible();
    });

    it("uses 'Save and continue' when no submit label is provided", () => {
      setup(
        <StyledForm
          fields={minimalFields}
          onSubmitFunction={vi.fn()}
        />,
      );

      expect(screen.getByRole("button", { name: /save and continue/i })).toBeVisible();
    });
  });

  describe("IDs", () => {
    it("applies the provided ID and data-testid to the form element", () => {
      setup(
        <StyledForm
          id="styled-form-custom"
          fields={minimalFields}
          onSubmitFunction={vi.fn()}
        />,
      );

      const form = screen.getByTestId("styled-form-custom-form");

      expect(form).toHaveAttribute("id", "styled-form-custom");
    });

    it("links error summary items to the rendered field IDs", async () => {
      const { user } = setup(
        <StyledForm
          id="styled-form-custom"
          fields={[
            {
              name: "Email",
              type: "text",
              validate: () => "Enter an email",
            },
          ]}
          onSubmitFunction={vi.fn()}
        />,
      );

      await user.click(screen.getByRole("button", { name: /save and continue/i }));

      const errorLink = await screen.findByRole("link", { name: "Enter an email" });
      const input = screen.getByLabelText(/Email/i);

      expect(errorLink).toHaveAttribute("href", "#styled-form-custom-Email");
      expect(input).toHaveAttribute("id", "styled-form-custom-Email");
    });

    it("links error summary items to an explicit specifyOption ID when one is provided", async () => {
      const { user } = setup(
        <StyledForm
          fields={[
            {
              id: "radio-group",
              name: "RadioGroup",
              type: "radio",
              radioOptions: [
                {
                  value: "other",
                  label: "Other",
                  specifyOption: {
                    id: "specify-custom-id",
                    name: "RadioGroupSpecify",
                    description: "Please specify",
                    type: "text",
                    validate: () => "Please specify a value",
                  },
                },
              ],
            },
          ]}
          onSubmitFunction={vi.fn()}
        />,
      );

      await user.click(screen.getByRole("radio", { name: "Other" }));
      await user.click(screen.getByRole("button", { name: /save and continue/i }));

      const errorLink = await screen.findByRole("link", { name: "Please specify a value" });

      expect(errorLink).toHaveAttribute("href", "#specify-custom-id");
    });

    it("links error summary items to the generated specifyOption ID when one is not provided", async () => {
      const { user } = setup(
        <StyledForm
          fields={[
            {
              id: "radio-group",
              name: "RadioGroup",
              type: "radio",
              radioOptions: [
                {
                  value: "other",
                  label: "Other",
                  specifyOption: {
                    name: "RadioGroupSpecify",
                    description: "Please specify",
                    type: "text",
                    validate: () => "Please specify a value",
                  },
                },
              ],
            },
          ]}
          onSubmitFunction={vi.fn()}
        />,
      );

      await user.click(screen.getByRole("radio", { name: "Other" }));
      await user.click(screen.getByRole("button", { name: /save and continue/i }));

      const errorLink = await screen.findByRole("link", { name: "Please specify a value" });
      const specifyInput = screen.getByRole("textbox", { name: "Please specify" });

      expect(errorLink).toHaveAttribute("href", "#radio-group-option-1-specify");
      expect(specifyInput).toHaveAttribute("id", "radio-group-option-1-specify");
    });

    it("links error summary items to an explicit field ID when one is provided", async () => {
      const { user } = setup(
        <StyledForm
          fields={[
            {
              id: "email-address",
              name: "Email",
              type: "text",
              validate: () => "Enter an email",
            },
          ]}
          onSubmitFunction={vi.fn()}
        />,
      );

      await user.click(screen.getByRole("button", { name: /save and continue/i }));

      const errorLink = await screen.findByRole("link", { name: "Enter an email" });
      const input = screen.getByLabelText(/Email/i);

      expect(errorLink).toHaveAttribute("href", "#email-address");
      expect(input).toHaveAttribute("id", "email-address");
    });
  });

  describe("test IDs", () => {
    it("does not apply a data-testid to the form when no ID is provided", () => {
      const { container } = setup(
        <StyledForm
          fields={minimalFields}
          onSubmitFunction={vi.fn()}
        />,
      );

      const form = container.querySelector("form");

      expect(form).not.toHaveAttribute("data-testid");
    });

    it("applies an error-summary data-testid when an ID is provided and validation fails", async () => {
      const { user } = setup(
        <StyledForm
          id="styled-form-custom"
          fields={[
            {
              name: "TestField",
              type: "text",
              validate: () => "This field is required",
            },
          ]}
          onSubmitFunction={vi.fn()}
        />,
      );

      await user.click(screen.getByRole("button", { name: /save and continue/i }));

      const errorPanel = await screen.findByTestId("styled-form-custom-error-summary-panel");

      expect(errorPanel).toBeVisible();
      expect(errorPanel).toHaveAttribute("id", "styled-form-custom-error-summary");
    });

    it("applies fieldset data-testids when IDs are provided", () => {
      setup(
        <StyledForm
          onSubmitFunction={vi.fn()}
          fields={[
            {
              name: "RadioGroup",
              type: "radio",
              id: "radio-group",
              radioOptions: [{ id: "radio-option-one", value: "val1", label: "Radio 1" }],
            },
            {
              name: "CheckboxGroup",
              type: "checkbox",
              id: "checkbox-group",
              checkboxOptions: [{ id: "checkbox-option-one", value: "val1", label: "Checkbox 1" }],
            },
          ]}
        />,
      );

      expect(screen.getByTestId("radio-group-fieldset")).toBeVisible();
      expect(screen.getByTestId("checkbox-group-fieldset")).toBeVisible();
      expect(screen.getByTestId("checkbox-group-select-all")).toBeVisible();
    });

    it("does not apply fieldset data-testids when IDs are omitted", () => {
      setup(
        <StyledForm
          onSubmitFunction={vi.fn()}
          fields={[
            {
              name: "RadioGroup",
              type: "radio",
              radioOptions: [{ value: "val2", label: "Radio 2" }],
            },
            {
              name: "CheckboxGroup",
              type: "checkbox",
              checkboxOptions: [{ value: "val2", label: "Checkbox 2" }],
            },
          ]}
        />,
      );

      const radioLabel = screen.getByLabelText("Radio 2");
      const radioFieldset = radioLabel.closest(".ons-field");

      expect(radioFieldset).not.toHaveAttribute("data-testid");

      const checkboxLabel = screen.getByLabelText("Checkbox 2");
      const checkboxFieldset = checkboxLabel.closest(".ons-field");

      expect(checkboxFieldset).not.toHaveAttribute("data-testid");

      const selectAllBtn = screen.getByRole("button", { name: /Select All/i });

      expect(selectAllBtn).not.toHaveAttribute("data-testid");
    });
  });
});
