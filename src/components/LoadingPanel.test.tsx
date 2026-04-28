import { render, screen } from "@testing-library/react";
import { LoadingPanel, type Props } from "./LoadingPanel";

const setup = (overrideProps: Partial<Props> = {}) => {
  return {
    props: overrideProps,
    ...render(<LoadingPanel {...overrideProps} />),
  };
};

describe("LoadingPanel", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display the default 'Loading' text when no custom message is provided", () => {
      setup();
      expect(screen.getByText("Loading...")).toBeVisible();
    });

    it("should display the custom message when provided via props", () => {
      const customMessage = "Two hours later...";

      setup({ message: customMessage });
      expect(screen.getByText(customMessage)).toBeVisible();
    });

    it("should return null when hidden is true", () => {
      const { container } = setup({ hidden: true });

      expect(container.firstChild).toBeNull();
    });
  });
});
