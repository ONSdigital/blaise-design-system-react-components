import { render, screen } from "@testing-library/react";
import { Form, Formik } from "formik";

import { type Props, StyledFormErrorSummary } from "./StyledFormErrorSummary";

interface RenderOptions {
  props?: Props;
  initialErrors?: Record<string, string>;
}

const renderComponent = ({ props = {}, initialErrors = {} }: RenderOptions = {}) => {
  const fieldNames = Object.keys(initialErrors);
  const initialValues = fieldNames.reduce<Record<string, string>>((values, field) => {
    values[field] = "";

    return values;
  }, {});

  return render(
    <Formik
      initialValues={initialValues}
      initialErrors={initialErrors}
      onSubmit={vi.fn()}
    >
      <Form>
        {fieldNames.map((field) => (
          <input
            key={field}
            id={field}
          />
        ))}
        <StyledFormErrorSummary {...props} />
      </Form>
    </Formik>,
  );
};

describe("StyledFormErrorSummary", () => {
  describe("rendering", () => {
    it("does not render when the form is valid", () => {
      renderComponent();

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it("applies the provided ID and data-testid when the form has errors", () => {
      const props: Props = {
        id: "styled-form-error-summary-custom",
      };

      renderComponent({
        props,
        initialErrors: { name: "Enter a name" },
      });

      const errorSummary = screen.getByTestId("styled-form-error-summary-custom-panel");

      expect(errorSummary).toHaveAttribute("id", "styled-form-error-summary-custom");
      expect(
        screen.getByRole("heading", { name: /There is 1 problem with your answer/i }),
      ).toBeVisible();
    });

    it("renders a link for each form error", () => {
      renderComponent({
        initialErrors: {
          name: "Enter a name",
          email: "Enter an email",
        },
      });

      expect(
        screen.getByRole("heading", { name: /There are 2 problems with your answer/i }),
      ).toBeVisible();
      expect(screen.getByRole("link", { name: "Enter a name" })).toHaveAttribute("href", "#name");
      expect(screen.getByRole("link", { name: "Enter an email" })).toHaveAttribute(
        "href",
        "#email",
      );
    });
  });
});
