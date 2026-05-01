import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Collapsible, type Props } from "./Collapsible";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    title: "Collapsible Title",
    children: <p>Collapsible Content</p>,
    id: "collapsible",
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<Collapsible {...props} />),
  };
};

describe("Collapsible", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the title", () => {
      const { props } = setup();

      expect(screen.getByText(props.title)).toBeVisible();
    });

    it("hides the content by default", () => {
      setup();
      const content = screen.getByTestId("collapsible-content");

      expect(content).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("interactions", () => {
    it("shows the content when the toggle is clicked", async () => {
      const { user, props } = setup();
      const button = screen.getByRole("button", { name: props.title });

      await user.click(button);
      expect(screen.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "false");
    });

    it.each([
      { key: " ", description: "space key" },
      { key: "{Enter}", description: "enter key" },
    ])("shows the content when the $description is pressed", async ({ key }) => {
      const { user } = setup();
      const heading = screen.getByTestId("collapsible-heading");

      heading.focus();
      await user.keyboard(key);
      expect(screen.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "false");
    });

    it("ignores keys other than Enter and Space", async () => {
      const { user } = setup();
      const heading = screen.getByTestId("collapsible-heading");

      expect(screen.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "true");

      heading.focus();
      await user.keyboard("A");

      expect(screen.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("props", () => {
    it("does not apply data-testid attributes when no ID is provided", () => {
      render(
        <Collapsible title="No ID Collapsible">
          <p>Hidden Content</p>
        </Collapsible>,
      );

      const headingWithTestId = screen.queryByTestId(/heading/i);
      const contentWithTestId = screen.queryByTestId(/content/i);

      expect(headingWithTestId).not.toBeInTheDocument();
      expect(contentWithTestId).not.toBeInTheDocument();
    });

    it("links the heading to the content panel when no ID is provided", () => {
      render(
        <Collapsible title="Fallback ID Test">
          <p>Content</p>
        </Collapsible>,
      );

      const heading = screen.getByRole("button", { name: "Fallback ID Test" });
      const controlsId = heading.getAttribute("aria-controls");

      expect(controlsId).toMatch(/collapsible-.*-content/);

      const contentBlock = document.getElementById(controlsId!);

      expect(contentBlock).toBeInTheDocument();
      expect(contentBlock).toHaveTextContent("Content");
    });
  });
});
