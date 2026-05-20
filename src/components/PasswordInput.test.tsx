import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PasswordInput, type Props } from "./PasswordInput";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    label: "Password",
    id: "password-input",
    value: "",
    onChange: vi.fn(),
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<PasswordInput {...props} />),
  };
};

describe("PasswordInput", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the label and links it to the input ID", () => {
      const { props } = setup({ label: "Submit", id: "password-input-custom" });
      const labelElement = screen.getByText(props.label as string);
      const inputElement = screen.getByLabelText(props.label as string);

      expect(labelElement).toBeVisible();
      expect(inputElement).toHaveAttribute("id", props.id);
    });
  });

  describe("interactions", () => {
    it("calls onChange for every typed character", async () => {
      const { user, props } = setup();
      const input = screen.getByTestId("password-input-input");

      await user.type(input, "abc");
      expect(props.onChange).toHaveBeenCalledTimes(3);
    });

    it("accepts input when onChange is not provided", async () => {
      const { user } = setup({ onChange: undefined });
      const input = screen.getByTestId("password-input-input");

      await expect(user.type(input, "test")).resolves.not.toThrow();
    });

    it("toggles password visibility when the checkbox is clicked", async () => {
      const { user } = setup();
      const passwordInput = screen.getByTestId("password-input-input");
      const toggleCheckbox = screen.getByTestId<HTMLInputElement>("password-input-toggle");

      expect(toggleCheckbox.checked).toBe(false);
      expect(passwordInput).toHaveAttribute("type", "password");
      await user.click(toggleCheckbox);
      expect(toggleCheckbox.checked).toBe(true);
      expect(passwordInput).toHaveAttribute("type", "text");
      await user.click(toggleCheckbox);
      expect(toggleCheckbox.checked).toBe(false);
      expect(passwordInput).toHaveAttribute("type", "password");
    });

    it("renders an empty value when no value is provided", () => {
      setup({ value: undefined });
      const input = screen.getByTestId<HTMLInputElement>("password-input-input");

      expect(input).toHaveValue("");
    });
  });

  describe("props", () => {
    it("applies the marginTop style when marginTop is provided", () => {
      setup({ marginTop: 24 });

      const toggleCheckbox = screen.getByTestId("password-input-toggle");
      const toggleContainer = toggleCheckbox.parentElement;

      expect(toggleContainer).toHaveStyle({ marginTop: "24px" });
    });

    it("falls back to a generated ID when no ID is provided", () => {
      render(
        <PasswordInput
          label="Generated ID Password"
          value=""
          onChange={vi.fn()}
        />,
      );

      const inputElement = screen.getByLabelText("Generated ID Password");

      expect(inputElement).toHaveAttribute("id");
      expect(inputElement.getAttribute("id")).toMatch(/password-input-.*$/);
    });

    it("does not apply data-testids when no ID is provided", () => {
      render(
        <PasswordInput
          label="No ID Password"
          value=""
          onChange={vi.fn()}
        />,
      );

      const inputElement = screen.getByLabelText("No ID Password");
      const toggleCheckbox = screen.getByLabelText("Show password");

      expect(inputElement).not.toHaveAttribute("data-testid");
      expect(toggleCheckbox).not.toHaveAttribute("data-testid");
    });
  });
});
