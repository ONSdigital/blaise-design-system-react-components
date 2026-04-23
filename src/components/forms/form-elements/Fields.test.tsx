import { render, screen } from "@testing-library/react";
import { Formik, Field } from "formik";
import { CheckboxesFieldset, ONSInputField } from "./Fields";

describe("Edge Cases", () => {
  describe("CheckboxesFieldset", () => {
    it("should safely handle an undefined checkboxOptions array", () => {
      render(
        <Formik
          initialValues={{ myField: [] }}
          onSubmit={vi.fn()}
        >
          <CheckboxesFieldset
            name="myField"
            autoFocus={false}
          />
        </Formik>,
      );

      expect(screen.getByRole("group")).toBeInTheDocument();
    });

    it("should safely handle undefined values in the Formik state", () => {
      render(
        <Formik
          initialValues={{ myField: undefined }}
          onSubmit={vi.fn()}
        >
          <CheckboxesFieldset
            name="myField"
            checkboxOptions={[{ id: "opt1", value: "alpha", label: "Alpha" }]}
            autoFocus={false}
          />
        </Formik>,
      );

      expect(screen.getByRole("button", { name: /Select All/i })).toBeVisible();
    });

    it("should render the checkbox option description when provided", () => {
      render(
        <Formik
          initialValues={{ myField: [] }}
          onSubmit={vi.fn()}
        >
          <CheckboxesFieldset
            name="myField"
            checkboxOptions={[
              {
                id: "opt1",
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
  });

  describe("ONSInputField", () => {
    it("should render the text input description when provided", () => {
      render(
        <Formik
          initialValues={{ myTextInput: "" }}
          onSubmit={vi.fn()}
        >
          <Field
            name="myTextInput"
            description="Unique text input description"
            component={ONSInputField}
          />
        </Formik>,
      );

      expect(screen.getByText("Unique text input description")).toBeVisible();
    });

    it("should fallback to an empty string if the Formik state value is undefined", () => {
      render(
        <Formik
          initialValues={{ myTextInput: undefined }}
          onSubmit={vi.fn()}
        >
          <Field
            name="myTextInput"
            component={ONSInputField}
          />
        </Formik>,
      );

      expect(screen.getByRole("textbox")).toHaveValue("");
    });

    it("should use the provided explicit ID instead of falling back to the field name", () => {
      render(
        <Formik
          initialValues={{ myTextInput: "" }}
          onSubmit={vi.fn()}
        >
          <Field
            id="custom-explicit-id"
            name="myTextInput"
            component={ONSInputField}
          />
        </Formik>,
      );

      expect(screen.getByRole("textbox")).toHaveAttribute("id", "custom-explicit-id");
    });
  });
});
