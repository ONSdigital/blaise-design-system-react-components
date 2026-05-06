import { render, screen } from "@testing-library/react";

import { BetaBanner, type Props } from "./BetaBanner";

const setup = (props: Partial<Props> = {}) => {
  return {
    ...render(<BetaBanner {...props} />),
  };
};

describe("BetaBanner", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the 'BETA' text", () => {
      setup();
      expect(screen.getByText(/BETA/i)).toBeVisible();
    });

    it("shows the beta service message", () => {
      setup();
      const message = screen.getByText(/This is a new service/i);

      expect(message).toBeVisible();
    });

    it("uses the provided feedback link", () => {
      const customLink = "https://test.com/feedback";

      setup({ feedbackLink: customLink });

      const link = screen.getByRole("link", { name: /give feedback/i });

      expect(link).toHaveAttribute("href", customLink);
    });
  });

  describe("props", () => {
    it("applies the provided ID and data-testid to the root element", () => {
      const { container } = setup({ id: "beta-banner-custom" });
      const rootDiv = container.firstChild as HTMLElement;

      expect(rootDiv).toHaveAttribute("id", "beta-banner-custom");
      expect(screen.getByTestId("beta-banner-custom-beta-banner")).toBeInTheDocument();
    });

    it("does not apply a data-testid when no ID is provided", () => {
      const { container } = setup();
      const rootDiv = container.firstChild as HTMLElement;

      expect(rootDiv).not.toHaveAttribute("data-testid");
    });
  });
});
