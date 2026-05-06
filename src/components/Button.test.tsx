import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button, type Props } from "./Button";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    label: "Submit",
    primary: true,
    onClick: vi.fn(),
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<Button {...props} />),
  };
};

describe("Button", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the label text", () => {
      const { props } = setup({ label: "Custom Label" });

      expect(screen.getByText(props.label as string)).toBeVisible();
    });

    it("derives the data-testid from the provided ID", () => {
      setup({ id: "button-custom" });
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("data-testid", "button-custom-button");
    });

    it("does not apply a data-testid when no ID is provided", () => {
      setup();
      const button = screen.getByRole("button");

      expect(button).not.toHaveAttribute("data-testid");
    });
  });

  describe("interactions", () => {
    it("calls onClick when clicked", async () => {
      const { user, props } = setup();
      const button = screen.getByRole("button", {
        name: props.label as string,
      });

      await user.click(button);
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("props", () => {
    it("adds the loader class when loading is true", () => {
      setup({ loading: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--loader");
    });

    it("adds the small class when small is true", () => {
      setup({ small: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--small");
    });

    it("adds the disabled class when disabled is true", () => {
      setup({ disabled: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--disabled");
    });

    it("adds the link class when action is true", () => {
      setup({ action: true });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--link");
    });

    it("applies a 'display: none' style when hidden is true", () => {
      setup({ hidden: true });
      const button = screen.getByRole("button", { hidden: true });

      expect(button).toHaveStyle({ display: "none" });
    });

    it("applies the right margin style when marginRight is provided", () => {
      setup({ marginRight: 24 });
      const button = screen.getByRole("button");

      expect(button).toHaveStyle({ marginRight: "24px" });
    });

    it("uses type='submit' when submit is true", () => {
      setup({ submit: true });
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("type", "submit");
    });

    it("does not add the secondary class when primary is true", () => {
      setup({ primary: true });
      const button = screen.getByRole("button");

      expect(button).not.toHaveClass("ons-btn--secondary");
    });

    it("adds the secondary class when primary is false", () => {
      setup({ primary: false });
      const button = screen.getByRole("button");

      expect(button).toHaveClass("ons-btn--secondary");
    });
  });
});
