import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { Select } from "./Select";

type SelectProps = ComponentProps<typeof Select>;

const defaultOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

const setup = (overrideProps: Partial<SelectProps> = {}) => {
  const props: SelectProps = {
    id: "select-thing",
    label: "Select From",
    value: "",
    options: defaultOptions,
    testId: "test-select",
    onChange: vi.fn(),
    ...overrideProps,
  } as SelectProps;

  return {
    user: userEvent.setup(),
    props,
    ...render(<Select {...props} />),
  };
};

describe("Select", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display the correct label associated with the select element", () => {
      const { props } = setup();

      expect(screen.getByLabelText(props.label as string)).toBeVisible();
    });

    it("should render all provided options in the dropdown", () => {
      setup();
      expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "Option 2" })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "Option 3" })).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    it("should trigger the onChange handler when a new option is selected", async () => {
      const { user, props } = setup();
      const selectElement = screen.getByTestId(props.testId as string);

      await user.selectOptions(selectElement, "2");
      await user.selectOptions(selectElement, "3");
      expect(props.onChange).toHaveBeenCalledTimes(2);
    });
  });

  describe("Props", () => {
    it("should not append data-testid to options when the testId prop is omitted", () => {
      setup({ testId: undefined });

      const optionElement = screen.getByRole("option", { name: "Option 1" });

      expect(optionElement).not.toHaveAttribute("data-testid");
    });

    it("should not render the label DOM element if the label prop is undefined", () => {
      setup({ label: undefined });

      expect(document.querySelector("label")).not.toBeInTheDocument();
    });

    it("should apply an explicitly provided option ID to the DOM element", () => {
      setup({
        options: [{ label: "Custom Option", value: "custom", id: "explicit-option-id" }],
      });

      const optionElement = screen.getByRole("option", { name: "Custom Option" });

      expect(optionElement).toHaveAttribute("id", "explicit-option-id");
    });
  });
});
