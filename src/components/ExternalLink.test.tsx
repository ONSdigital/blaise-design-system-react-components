import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { ExternalLink } from "./ExternalLink";

type ExternalLinkProps = ComponentProps<typeof ExternalLink>;

const setup = (overrideProps: Partial<ExternalLinkProps> = {}) => {
  const props: ExternalLinkProps = {
    text: "Click Me",
    link: "/link",
    ariaLabel: "Aria label description",
    ...overrideProps,
  } as ExternalLinkProps;

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
      const { props } = setup();
      const linkElement = screen.getByRole("link");

      expect(linkElement).toHaveAttribute("aria-label", props.ariaLabel);
    });
  });
});
