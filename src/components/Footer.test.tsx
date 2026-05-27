import { render, screen } from "@testing-library/react";

import { Footer, type Props } from "./Footer";

const setup = (props: Partial<Props> = {}) => {
  return {
    ...render(<Footer {...props} />),
  };
};

describe("Footer", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the ONS logos with the correct accessible name", () => {
      setup();

      const logos = screen.getAllByRole("img", {
        name: /office for national statistics/i,
      });

      expect(logos).toHaveLength(2);
      expect(logos[0]).toBeVisible();
      expect(logos[1]).toBeVisible();
    });

    it("shows the logo accessible names across multiple footer instances", () => {
      render(
        <>
          <Footer />
          <Footer />
        </>,
      );

      const logos = screen.getAllByRole("img", {
        name: /office for national statistics/i,
      });

      expect(logos).toHaveLength(4);
    });

    it("renders a contentinfo landmark", () => {
      setup();
      expect(screen.getByRole("contentinfo")).toBeVisible();
    });
  });

  describe("props", () => {
    it("applies the provided ID and data-testid to the root element", () => {
      setup({ id: "footer-custom" });
      const footer = screen.getByRole("contentinfo");

      expect(footer).toHaveAttribute("id", "footer-custom");
      expect(screen.getByTestId("footer-custom-footer")).toBeInTheDocument();
    });

    it("does not apply a data-testid when no ID is provided", () => {
      setup();
      const footer = screen.getByRole("contentinfo");

      expect(footer).not.toHaveAttribute("data-testid");
    });
  });
});
