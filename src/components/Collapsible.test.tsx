import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Collapsible, type Props } from "./Collapsible";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    title: "Collapsible Title",
    children: <p>Collapsible Content</p>,
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<Collapsible {...props} />),
  };
};

describe("Collapsible", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should display the title", () => {
      const { props } = setup();

      expect(screen.getByText(props.title)).toBeVisible();
    });

    it("should hide the content by default (aria-hidden)", () => {
      setup();
      const content = screen.getByTestId("collapsible-content");

      expect(content).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("Interactions", () => {
    it("should reveal the content when the toggle button is clicked", async () => {
      const { user, props } = setup();
      const button = screen.getByRole("button", { name: props.title });

      await user.click(button);
      expect(screen.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "false");
    });

    it.each([
      { key: " ", description: "space key" },
      { key: "{Enter}", description: "enter key" },
    ])("should reveal the content when the $description is pressed", async ({ key }) => {
      const { user } = setup();
      const heading = screen.getByTestId("collapsible-heading");

      heading.focus();
      await user.keyboard(key);
      expect(screen.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "false");
    });

    it("should ignore keyboard events that are not Enter or Space", async () => {
      const { user } = setup();
      const heading = screen.getByTestId("collapsible-heading");

      expect(screen.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "true");

      heading.focus();
      await user.keyboard("A");

      expect(screen.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "true");
    });
  });
});
