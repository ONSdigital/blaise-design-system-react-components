import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { type Props, TextInput } from "./TextInput";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    id: "text-input",
    label: "Default Label",
    onChange: vi.fn(),
    onClick: vi.fn(),
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<TextInput {...props} />),
  };
};

describe("TextInput", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the label text", () => {
      const { props } = setup({ label: "Text Label" });

      expect(screen.getByLabelText(props.label as string)).toBeVisible();
    });

    it("does not render a label when label is undefined", () => {
      setup({ label: undefined });
      expect(document.querySelector("label")).not.toBeInTheDocument();
    });

    it("applies the provided ID and data-testid", () => {
      setup({ id: "text-input-custom" });
      const input = screen.getByTestId("text-input-custom-input");

      expect(input).toHaveAttribute("id", "text-input-custom");
    });

    it("does not apply a data-testid when no ID is provided", () => {
      render(<TextInput label="No ID" />);
      const input = screen.getByLabelText("No ID");

      expect(input).not.toHaveAttribute("data-testid");
    });
  });

  describe("props", () => {
    it("falls back to a generated ID when no ID is provided", () => {
      render(<TextInput label="Generated ID" />);
      const input = screen.getByLabelText("Generated ID");

      expect(input).toHaveAttribute("id");
      expect(input.getAttribute("id")).toMatch(/text-input-.*$/);
    });

    it("uses type='password' when password is true", () => {
      setup({ password: true });
      const input = screen.getByTestId("text-input-input");

      expect(input).toHaveAttribute("type", "password");
    });

    it("uses type='number' when number is true", () => {
      setup({ number: true });
      const input = screen.getByTestId("text-input-input");

      expect(input).toHaveAttribute("type", "number");
    });

    it("applies a width of auto when fit is true", () => {
      setup({ fit: true });
      const input = screen.getByTestId("text-input-input");

      expect(input).toHaveStyle({ width: "auto" });
    });
  });

  describe("interactions", () => {
    it("calls onChange for every typed character", async () => {
      const { user, props } = setup();
      const input = screen.getByTestId("text-input-input");

      await user.type(input, "abc");
      expect(props.onChange).toHaveBeenCalledTimes(3);
    });

    it("calls onClick when clicked", async () => {
      const { user, props } = setup();
      const input = screen.getByTestId("text-input-input");

      await user.click(input);
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
