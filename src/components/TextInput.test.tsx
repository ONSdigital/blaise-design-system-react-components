import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { TextInput } from "./TextInput";

type TextInputProps = ComponentProps<typeof TextInput>;

const setup = (overrideProps: Partial<TextInputProps> = {}) => {
  const props: TextInputProps = {
    id: "file-upload",
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
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display the correct label text", () => {
      const { props } = setup({ label: "Text Label" });

      expect(screen.getByLabelText(props.label as string)).toBeVisible();
    });

    it("should not render a label element if the label prop is omitted", () => {
      setup({ label: undefined });

      expect(document.querySelector("label")).not.toBeInTheDocument();
    });

    it("should use the default test-id 'text-input' if none is provided", () => {
      setup();
      expect(screen.getByTestId("text-input")).toBeVisible();
    });

    it("should allow overriding the test-id via props", () => {
      setup({ testId: "test-id" });
      expect(screen.getByTestId("test-id")).toBeVisible();
    });
  });

  describe("Props", () => {
    it("should be of type 'text' by default", () => {
      setup();
      const input = screen.getByTestId("text-input");

      expect(input).toHaveAttribute("type", "text");
    });

    it("should be of type 'password' when the password prop is enabled", () => {
      setup({ password: true });
      const input = screen.getByTestId("text-input");

      expect(input).toHaveAttribute("type", "password");
    });

    it("should be of type 'number' when the number prop is enabled", () => {
      setup({ number: true });
      const input = screen.getByTestId("text-input");

      expect(input).toHaveAttribute("type", "number");
    });

    it("should render the provided value in the input field", () => {
      setup({ value: "test value" });
      const input = screen.getByTestId("text-input");

      expect(input).toHaveValue("test value");
    });

    it("should apply 'unset' width style when the fit prop is true", () => {
      setup({ fit: true });
      const input = screen.getByTestId("text-input");

      expect(input).toHaveAttribute("style", expect.stringContaining("width: unset"));
    });

    it("should apply the provided zIndex inline style", () => {
      setup({ zIndex: 99 });
      const input = screen.getByTestId("text-input");

      expect(input).toHaveStyle({ zIndex: "99" });
    });
  });

  describe("Interactions", () => {
    it("should trigger the onChange handler for every character typed", async () => {
      const { user, props } = setup();
      const input = screen.getByTestId("text-input");

      await user.type(input, "abc");
      expect(props.onChange).toHaveBeenCalledTimes(3);
    });

    it("should safely handle typing when no onChange handler is provided", async () => {
      const { user } = setup({ onChange: undefined });
      const input = screen.getByTestId("text-input");

      await expect(user.type(input, "abc")).resolves.not.toThrow();
    });

    it("should trigger the onClick handler when clicked", async () => {
      const { user, props } = setup();
      const input = screen.getByTestId("text-input");

      await user.click(input);
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
