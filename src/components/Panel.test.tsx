import { render, screen } from "@testing-library/react";
import { Panel, type Props } from "./Panel";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    children: <p data-testid="panel-child">Panel Content</p>,
    id: "panel",
    ...overrideProps,
  };

  return {
    props,
    ...render(<Panel {...props} />),
  };
};

describe("Panel", () => {
  describe("rendering", () => {
    it("renders the default snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders the success snapshot", () => {
      const { asFragment } = setup({ status: "success" });

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders the warning snapshot", () => {
      const { asFragment } = setup({ status: "warn" });

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders the big-icon success snapshot", () => {
      const { asFragment } = setup({ status: "success", bigIcon: true });

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders the children inside the panel", () => {
      const { props } = setup();
      const parentPanel = screen.getByTestId(`${props.id}-panel`);
      const childElement = screen.getByTestId("panel-child");

      expect(parentPanel).toContainElement(childElement);
    });

    it("renders nothing when hidden is true", () => {
      const { container } = setup({ hidden: true });

      expect(container.firstChild).toBeNull();
    });
  });

  describe("props", () => {
    it("adds the success class when status is 'success'", () => {
      const { props } = setup({ status: "success" });
      const panel = screen.getByTestId(`${props.id}-panel`);

      expect(panel).toHaveClass("ons-panel--success");
    });

    it("adds the spacious class when spacious is true", () => {
      const { props } = setup({ status: "error", spacious: true });
      const panel = screen.getByTestId(`${props.id}-panel`);

      expect(panel).toHaveClass("ons-panel--spacious");
    });

    it("adds the extra-large icon margin when bigIcon is true", () => {
      const { props } = setup({ status: "success", bigIcon: true });
      const panel = screen.getByTestId(`${props.id}-panel`);
      const bodyElement = panel.querySelector(".ons-panel__body.ons-icon-margin--xl");

      expect(bodyElement).toBeVisible();
      expect(bodyElement).toHaveClass("ons-icon-margin--xl");
    });

    it("does not add the extra-large icon margin when bigIcon is false", () => {
      const { props } = setup({ status: "success", bigIcon: false });
      const panel = screen.getByTestId(`${props.id}-panel`);
      const bodyElement = panel.querySelector(".ons-panel__body");

      expect(bodyElement).toBeInTheDocument();
      expect(bodyElement).not.toHaveClass("ons-icon-margin--xl");
    });

    it("does not add the extra-large icon margin when status is not success", () => {
      const { props } = setup({ status: "info", bigIcon: true });
      const panel = screen.getByTestId(`${props.id}-panel`);
      const bodyElement = panel.querySelector(".ons-panel__body");

      expect(bodyElement).not.toHaveClass("ons-icon-margin--xl");
    });

    it("does not apply a data-testid when no ID is provided", () => {
      const { container } = setup({ id: undefined });
      const panel = container.firstChild as HTMLElement;

      expect(panel).not.toHaveAttribute("data-testid");
    });

    it("falls back to a generated aria-labelledby ID when no ID is provided", () => {
      setup({ status: "success", id: undefined });
      const assistiveText = screen.getByText(/Completed:/i);

      expect(assistiveText).toHaveAttribute("id");
      expect(assistiveText.getAttribute("id")).toMatch(/panel-.*-alert/);
    });
  });
});
