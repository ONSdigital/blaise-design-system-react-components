import { render, screen } from "@testing-library/react";
import { LoadingPanel, type Props } from "./LoadingPanel";

const setup = (overrideProps: Partial<Props> = {}) => {
  return {
    props: overrideProps,
    ...render(<LoadingPanel {...overrideProps} />),
  };
};

describe("LoadingPanel", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the default loading text when no custom message is provided", () => {
      setup();
      expect(screen.getByText("Loading...")).toBeVisible();
    });

    it("shows the custom message when one is provided", () => {
      const customMessage = "Two hours later...";

      setup({ message: customMessage });
      expect(screen.getByText(customMessage)).toBeVisible();
    });

    it("renders nothing when hidden is true", () => {
      const { container } = setup({ hidden: true });

      expect(container.firstChild).toBeNull();
    });
  });

  describe("props", () => {
    it("applies the provided ID to the root panel element", () => {
      const { container } = setup({ id: "loading-panel-custom" });
      const panel = container.firstChild as HTMLElement;

      expect(panel).toHaveAttribute("id", "loading-panel-custom");
    });

    it("falls back to a generated ID when no ID is provided", () => {
      const { container } = setup();
      const panel = container.firstChild as HTMLElement;

      expect(panel).toHaveAttribute("id");
      expect(panel.getAttribute("id")).toMatch(/panel-.*$/);
    });
  });
});
