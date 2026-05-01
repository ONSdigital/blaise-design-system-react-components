import { render, screen } from "@testing-library/react";
import { ErrorPanel, type Props } from "./ErrorPanel";

const setup = (overrideProps: Partial<Props> = {}) => {
  return {
    props: overrideProps,
    ...render(<ErrorPanel {...overrideProps} />),
  };
};

describe("ErrorPanel", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the default error text", () => {
      setup();
      expect(screen.getByText(/Sorry, there is a problem/i)).toBeVisible();
    });

    it("shows custom error text", () => {
      setup({ text: "A fatal error occurred connecting to the database." });
      expect(screen.getByText("A fatal error occurred connecting to the database.")).toBeVisible();
    });

    it("renders nothing when hidden is true", () => {
      const { container } = setup({ hidden: true });

      expect(container.firstChild).toBeNull();
    });
  });

  describe("props", () => {
    it("derives the data-testid from the provided ID", () => {
      setup({ id: "error-panel-custom" });

      const panel = screen.getByTestId("error-panel-custom-error-panel");

      expect(panel).toBeInTheDocument();
    });

    it("does not apply a data-testid when no ID is provided", () => {
      const { container } = setup();
      const panel = container.firstChild as HTMLElement;

      expect(panel).not.toHaveAttribute("data-testid");
    });
  });
});
