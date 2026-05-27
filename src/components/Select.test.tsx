import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { type Props, Select } from "./Select";

const defaultOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    id: "select",
    label: "Select From",
    value: "",
    options: defaultOptions,
    onChange: vi.fn(),
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<Select {...props} />),
  };
};

describe("Select", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the label", () => {
      const { props } = setup();

      expect(screen.getByLabelText(props.label as string)).toBeVisible();
    });

    it("shows every option", () => {
      setup();
      expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "Option 2" })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: "Option 3" })).toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("calls onChange when a new option is selected", async () => {
      const { user, props } = setup();
      const selectElement = screen.getByTestId(`${props.id}-input`);

      await user.selectOptions(selectElement, "2");
      expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it("renders an empty value when no value is provided", () => {
      setup({ value: undefined });
      const selectElement = screen.getByTestId<HTMLSelectElement>("select-input");

      expect(selectElement).toHaveValue("");
    });
  });

  describe("props", () => {
    it("falls back to a generated ID when no ID is provided", () => {
      render(
        <Select
          label="Default Select"
          value=""
          options={defaultOptions}
          onChange={vi.fn()}
        />,
      );

      const selectElement = screen.getByLabelText("Default Select");

      expect(selectElement).toHaveAttribute("id");
      expect(selectElement.getAttribute("id")).toMatch(/select-.*$/);
    });

    it("does not apply a data-testid when no ID is provided", () => {
      render(
        <Select
          label="No ID Select"
          value=""
          options={defaultOptions}
          onChange={vi.fn()}
        />,
      );

      const selectElement = screen.getByLabelText("No ID Select");

      expect(selectElement).not.toHaveAttribute("data-testid");
    });

    it("does not render a label when label is undefined", () => {
      setup({ label: undefined });
      expect(document.querySelector("label")).not.toBeInTheDocument();
    });

    it("applies the provided option ID", () => {
      setup({
        options: [{ label: "Custom Option", value: "custom", id: "select-option-custom" }],
      });

      const optionElement = screen.getByRole("option", { name: "Custom Option" });

      expect(optionElement).toHaveAttribute("id", "select-option-custom");
    });
  });
});
