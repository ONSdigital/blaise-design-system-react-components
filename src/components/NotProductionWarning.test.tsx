import { render, screen } from "@testing-library/react";
import { NotProductionWarning } from "./NotProductionWarning";

const setup = () => {
  return {
    ...render(<NotProductionWarning />),
  };
};

describe("NotProductionWarning", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should render the warning container", () => {
      const { container } = setup();

      expect(container).not.toBeEmptyDOMElement();
    });

    it("should display the correct warning text regarding production data", () => {
      setup();
      expect(
        screen.getByText(
          /This is not a production environment. Do not upload any production data to this service./i,
        ),
      ).toBeVisible();
    });
  });
});
