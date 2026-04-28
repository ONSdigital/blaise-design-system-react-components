import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const setup = () => {
  return {
    ...render(<Footer />),
  };
};

describe("Footer", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display the ONS logos with the correct accessible name", () => {
      setup();

      const logos = screen.getAllByRole("img", {
        name: /office for national statistics/i,
      });

      expect(logos).toHaveLength(2);
      expect(logos[0]).toBeVisible();
      expect(logos[1]).toBeVisible();
    });

    it("should render as a semantic 'contentinfo' landmark", () => {
      setup();
      expect(screen.getByRole("contentinfo")).toBeVisible();
    });
  });
});
