import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";

import { CheckboxFieldset, RadioFieldset, TextInputFieldset } from "./Fields";

describe("CheckboxFieldset", () => {
  describe("edge cases", () => {
    it("renders a fieldset when checkboxOptions is undefined", () => {
      render(
        <Formik
          initialValues={{ myField: [] }}
          onSubmit={vi.fn()}
        >
          <CheckboxFieldset
            name="myField"
            autoFocus={false}
          />
        </Formik>,
      );

      expect(screen.getByRole("group")).toBeInTheDocument();
    });

    it("shows the 'Select All' button when the Formik value is undefined", () => {
      render(
        <Formik
          initialValues={{ myField: undefined }}
          onSubmit={vi.fn()}
        >
          <CheckboxFieldset
            name="myField"
            checkboxOptions={[{ id: "alpha-option", value: "alpha", label: "Alpha" }]}
            autoFocus={false}
          />
        </Formik>,
      );

      expect(screen.getByRole("button", { name: /Select All/i })).toBeVisible();
    });

    it("shows the option description when one is provided", () => {
      render(
        <Formik
          initialValues={{ myField: [] }}
          onSubmit={vi.fn()}
        >
          <CheckboxFieldset
            name="myField"
            checkboxOptions={[
              {
                id: "alpha-option",
                value: "alpha",
                label: "Alpha",
                description: "Unique checkbox description text",
              },
            ]}
            autoFocus={false}
          />
        </Formik>,
      );

      expect(screen.getByText("Unique checkbox description text")).toBeVisible();
    });

    it("generates an ID for a checkbox option when one is omitted", () => {
      render(
        <Formik
          initialValues={{ myField: [] }}
          onSubmit={vi.fn()}
        >
          <CheckboxFieldset
            name="myField"
            checkboxOptions={[{ value: "alpha", label: "Alpha" }]}
            autoFocus={false}
          />
        </Formik>,
      );

      const checkbox = screen.getByRole("checkbox", { name: "Alpha" });
      const label = screen.getByText("Alpha").closest("label");

      expect(checkbox).toHaveAttribute("id");
      expect(label).toHaveAttribute("for", checkbox.getAttribute("id"));
    });
  });
});

describe("RadioFieldset", () => {
  describe("edge cases", () => {
    it("renders the fieldset data-testid when includeTestIds is true", () => {
      render(
        <Formik
          initialValues={{ myField: "" }}
          onSubmit={vi.fn()}
        >
          <RadioFieldset
            id="my-radio"
            includeTestIds={true}
            name="myField"
            radioOptions={[{ value: "yes", label: "Yes" }]}
            autoFocus={false}
          />
        </Formik>,
      );

      expect(screen.getByTestId("my-radio-fieldset")).toBeInTheDocument();
    });

    it("generates IDs for radio options and follow-up inputs when they are omitted", () => {
      render(
        <Formik
          initialValues={{ myField: "", myFieldSpecify: "" }}
          onSubmit={vi.fn()}
        >
          <RadioFieldset
            name="myField"
            radioOptions={[
              {
                value: "other",
                label: "Other",
                specifyOption: {
                  name: "myFieldSpecify",
                  description: "Please specify",
                  type: "text",
                },
              },
            ]}
            autoFocus={false}
          />
        </Formik>,
      );

      const radio = screen.getByRole("radio", { name: "Other" });
      const radioLabel = screen.getByText("Other").closest("label");
      const specifyInput = document.querySelector<HTMLInputElement>('input[name="myFieldSpecify"]');
      const specifyLabel = screen.getByText("Please specify").closest("label");

      if (!specifyInput) {
        throw new Error("Expected the generated specify input to be present in the DOM");
      }

      expect(radio).toHaveAttribute("id");
      expect(radioLabel).toHaveAttribute("for", radio.getAttribute("id"));
      expect(specifyInput).toHaveAttribute("id");
      expect(specifyLabel).toHaveAttribute("for", specifyInput.getAttribute("id"));
    });

    it("only opens the follow-up input when its radio is selected", async () => {
      const user = userEvent.setup();

      render(
        <Formik
          initialValues={{ myField: "", myFieldSpecify: "" }}
          onSubmit={vi.fn()}
        >
          <RadioFieldset
            name="myField"
            radioOptions={[
              { value: "yes", label: "Yes" },
              {
                value: "other",
                label: "Other",
                specifyOption: {
                  name: "myFieldSpecify",
                  description: "Please specify",
                  type: "text",
                },
              },
            ]}
            autoFocus={false}
          />
        </Formik>,
      );

      const otherRadio = screen.getByRole("radio", { name: "Other" });
      const otherInputWrapper = document.getElementById(
        `${otherRadio.getAttribute("id")}-other-wrap`,
      );

      expect(otherInputWrapper).not.toHaveClass("ons-radio__other--open");
      expect(otherInputWrapper).toHaveAttribute("aria-hidden", "true");

      await user.click(otherRadio);

      expect(otherInputWrapper).toHaveClass("ons-radio__other--open");
      expect(otherInputWrapper).toHaveAttribute("aria-hidden", "false");
    });
  });
});

describe("TextInputFieldset", () => {
  describe("edge cases", () => {
    it("shows the description when one is provided", () => {
      render(
        <Formik
          initialValues={{ myTextInput: "" }}
          onSubmit={vi.fn()}
        >
          <TextInputFieldset
            name="myTextInput"
            description="Unique text input description"
          />
        </Formik>,
      );

      expect(screen.getByText("Unique text input description")).toBeVisible();
    });

    it("uses an empty string when the Formik value is undefined", () => {
      render(
        <Formik
          initialValues={{ myTextInput: undefined }}
          onSubmit={vi.fn()}
        >
          <TextInputFieldset name="myTextInput" />
        </Formik>,
      );

      expect(screen.getByRole("textbox")).toHaveValue("");
    });

    it("uses the provided ID when one is provided", () => {
      render(
        <Formik
          initialValues={{ myTextInput: "" }}
          onSubmit={vi.fn()}
        >
          <TextInputFieldset
            id="text-input-custom"
            name="myTextInput"
          />
        </Formik>,
      );

      expect(screen.getByRole("textbox")).toHaveAttribute("id", "text-input-custom");
    });
  });
});
