import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentProps } from "react";
import { Button } from "./Button";

type ButtonProps = ComponentProps<typeof Button>;

const setup = (overrideProps: Partial<ButtonProps> = {}) => {
  const props: ButtonProps = {
    label: "Submit",
    onClick: vi.fn(),
    ...overrideProps,
  } as ButtonProps;

  return {
    user: userEvent.setup(),
    props,
    ...render(<Button {...props} />),
  };
};

describe("Button", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display the correct label text", () => {
      const { props } = setup({ label: "Custom Label" });

      expect(screen.getByText(props.label as string)).toBeVisible();
    });

    it("should apply the custom data-testid", () => {
      const { props } = setup({ testid: "custom-btn-id" });
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("data-testid", `${props.testid}-button`);
    });
  });

  describe("Interactions", () => {
    it("should trigger the onClick handler when clicked", async () => {
      const { user, props } = setup();
      const button = screen.getByRole("button", {
        name: props.label as string,
      });

      await user.click(button);
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Props", () => {
    it("should append the loader class when loading is true", () => {
      setup({ loading: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--loader");
    });

    it("should append the small class when small is true", () => {
      setup({ small: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--small");
    });

    it("should append the disabled class when disabled is true", () => {
      setup({ disabled: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--disabled");
    });

    it("should append the link class when action is true", () => {
      setup({ action: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--link");
    });

    it("should apply 'display: none' inline style when hidden is true", () => {
      setup({ hidden: true });
      const button = screen.getByRole("button", { hidden: true });

      expect(button).toHaveStyle({ display: "none" });
    });

    it("should apply the correct right margin inline style when marginRight is provided", () => {
      setup({ marginRight: 24 });
      const button = screen.getByRole("button");

      expect(button).toHaveStyle({ marginRight: "24px" });
    });

    it("should append the field class when the field prop is true", () => {
      setup({ field: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-field");
    });

    it("should set the button type to 'submit' when submit is true", () => {
      setup({ submit: true });
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("type", "submit");
    });

    it("should not append the secondary class when primary is true", () => {
      setup({ primary: true });
      const button = screen.getByRole("button");

      expect(button).not.toHaveClass("ons-btn--secondary");
    });
  });
});
