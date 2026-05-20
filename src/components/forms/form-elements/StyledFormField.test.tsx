import { render, screen } from "@testing-library/react";
import { Formik } from "formik";

import { StyledFormField } from "./StyledFormField";

interface RenderOptions {
  id?: string;
  includeTestIds?: boolean;
  initialErrors?: Record<string, string>;
}

const renderComponent = ({
  id,
  includeTestIds,
  initialErrors = { myField: "Enter a value" },
}: RenderOptions = {}) => {
  return render(
    <Formik
      initialValues={{ myField: "" }}
      initialErrors={initialErrors}
      onSubmit={vi.fn()}
    >
      <StyledFormField
        id={id}
        includeTestIds={includeTestIds}
        name="myField"
        type="text"
      />
    </Formik>,
  );
};

describe("StyledFormField", () => {
  describe("error rendering", () => {
    it("uses the provided id as the error panel base id and infers test ids from it", () => {
      renderComponent({ id: "my-field" });

      const errorPanel = screen.getByTestId("my-field-error-panel");

      expect(errorPanel).toHaveAttribute("id", "my-field-error");
      expect(screen.getByRole("textbox")).toHaveAttribute("id", "my-field");
    });

    it("generates an error panel id when no id is provided and does not render a test id when disabled", () => {
      renderComponent({
        includeTestIds: false,
      });

      const errorPanel = screen.getByText("Enter a value").closest("div.ons-panel");

      expect(errorPanel).toHaveAttribute("id", expect.stringMatching(/^field-.*-error$/));
      expect(errorPanel).not.toHaveAttribute("data-testid");
    });
  });
});
