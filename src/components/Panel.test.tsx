import { render, screen } from "@testing-library/react";
import { Panel, type Props } from "./Panel";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    children: <p data-testid="panel-child">Panel Content</p>,
    testID: "test-panel",
    ...overrideProps,
  };

  return {
    props,
    ...render(<Panel {...props} />),
  };
};

describe("Panel", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should match the snapshot for a success status panel", () => {
      const { asFragment } = setup({ status: "success" });

      expect(asFragment()).toMatchSnapshot();
    });

    it("should match the snapshot for a warning status panel", () => {
      const { asFragment } = setup({ status: "warn" });

      expect(asFragment()).toMatchSnapshot();
    });

    it("should match the snapshot for a big icon success panel", () => {
      const { asFragment } = setup({ status: "success", bigIcon: true });

      expect(asFragment()).toMatchSnapshot();
    });

    it("should render the provided children within the panel", () => {
      const { props } = setup();
      const parentPanel = screen.getByTestId(props.testID!);
      const childElement = screen.getByTestId("panel-child");

      expect(parentPanel).toContainElement(childElement);
    });

    it("should return null when hidden is true", () => {
      const { container } = setup({ hidden: true });

      expect(container.firstChild).toBeNull();
    });
  });

  describe("Props", () => {
    it("should append the success class when status is 'success'", () => {
      const { props } = setup({ status: "success" });
      const panel = screen.getByTestId(props.testID!);

      expect(panel).toHaveClass("ons-panel--success");
    });

    it("should append the spacious class when spacious is true", () => {
      const { props } = setup({ status: "error", spacious: true });
      const panel = screen.getByTestId(props.testID!);

      expect(panel).toHaveClass("ons-panel--spacious");
    });

    it("should render the extra-large margin class on the icon when bigIcon is true", () => {
      const { props } = setup({ status: "success", bigIcon: true });
      const panel = screen.getByTestId(props.testID!);
      const bodyElement = panel.querySelector(".ons-panel__body.ons-icon-margin--xl");

      expect(bodyElement).toBeVisible();
      expect(bodyElement).toHaveClass("ons-icon-margin--xl");
    });

    it("should not render the extra-large margin class when bigIcon is false", () => {
      const { props } = setup({ status: "success", bigIcon: false });
      const panel = screen.getByTestId(props.testID!);
      const bodyElement = panel.querySelector(".ons-panel__body");

      expect(bodyElement).toBeInTheDocument();
      expect(bodyElement).not.toHaveClass("ons-icon-margin--xl");
    });

    it("should not render the extra-large margin class when status is not success, even if bigIcon is true", () => {
      const { props } = setup({ status: "info", bigIcon: true });
      const panel = screen.getByTestId(props.testID!);
      const bodyElement = panel.querySelector(".ons-panel__body");

      expect(bodyElement).not.toHaveClass("ons-icon-margin--xl");
    });
  });
});
