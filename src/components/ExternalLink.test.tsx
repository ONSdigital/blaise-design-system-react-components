import { render, screen } from "@testing-library/react";
import { ExternalLink, type Props } from "./ExternalLink";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    text: "Click Me",
    link: "/link",
    ...overrideProps,
  };

  return {
    props,
    ...render(<ExternalLink {...props} />),
  };
};

describe("ExternalLink", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display the correct anchor text", () => {
      const { props } = setup();

      expect(screen.getByText(new RegExp(props.text as string, "i"))).toBeVisible();
    });

    it("should have the correct destination URL mapped to the href attribute", () => {
      const { props } = setup();
      const linkElement = screen.getByRole("link");

      expect(linkElement).toHaveAttribute("href", props.link);
    });

    it("should apply the provided aria-label for accessibility support", () => {
      const ariaLabel = "Accessible label";

      setup({ ariaLabel });
      const linkElement = screen.getByRole("link");

      expect(linkElement).toHaveAttribute("aria-label", ariaLabel);
    });
  });
});
