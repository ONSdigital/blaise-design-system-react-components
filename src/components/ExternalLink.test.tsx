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
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the link text", () => {
      const { props } = setup();

      expect(screen.getByText(new RegExp(props.text as string, "i"))).toBeVisible();
    });

    it("maps the destination URL to the href attribute", () => {
      const { props } = setup();
      const linkElement = screen.getByRole("link");

      expect(linkElement).toHaveAttribute("href", props.link);
    });

    it("applies the provided aria-label", () => {
      const ariaLabel = "Accessible label";

      setup({ ariaLabel });
      const linkElement = screen.getByRole("link");

      expect(linkElement).toHaveAttribute("aria-label", ariaLabel);
    });
  });

  describe("props", () => {
    it("derives the data-testid from the provided ID", () => {
      setup({ id: "external-link-custom" });

      const link = screen.getByTestId("external-link-custom-external-link");

      expect(link).toBeInTheDocument();
    });

    it("does not apply a data-testid when no ID is provided", () => {
      setup();
      const link = screen.getByRole("link");

      expect(link).not.toHaveAttribute("data-testid");
    });
  });
});
