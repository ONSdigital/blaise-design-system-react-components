import { render, screen } from "@testing-library/react";

import { NotProductionWarning, type Props } from "./NotProductionWarning";

const setup = (props: Partial<Props> = {}) => {
  return {
    ...render(<NotProductionWarning {...props} />),
  };
};

describe("NotProductionWarning", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders the warning container", () => {
      const { container } = setup();

      expect(container).not.toBeEmptyDOMElement();
    });

    it("shows the warning text", () => {
      setup();
      expect(
        screen.getByText(
          /This is not a production environment. Do not upload any production data to this service./i,
        ),
      ).toBeVisible();
    });
  });

  describe("props", () => {
    it("applies the provided ID and data-testid to the root element", () => {
      const { container } = setup({ id: "not-production-warning-custom" });
      const rootDiv = container.firstChild as HTMLElement;

      expect(rootDiv).toHaveAttribute("id", "not-production-warning-custom");
      expect(screen.getByTestId("not-production-warning-custom-warning")).toBeInTheDocument();
    });

    it("does not apply a data-testid when no ID is provided", () => {
      const { container } = setup();
      const rootDiv = container.firstChild as HTMLElement;

      expect(rootDiv).not.toHaveAttribute("data-testid");
    });
  });
});
