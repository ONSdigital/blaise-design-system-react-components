import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion, type Props, type ExpandableContent } from "./Accordion";

const defaultExpandables: ExpandableContent[] = [
  { title: "Foo", content: <p>foo</p>, id: "first-panel" },
  { title: "Bar", content: <p>bar</p>, id: "second-panel" },
];

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    id: "accordion",
    showAllEnabled: false,
    expandables: defaultExpandables,
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<Accordion {...props} />),
  };
};

const expectShowAllButtonLabel = (text: "Show all" | "Hide all") => {
  const buttonEl = screen.getByTestId("accordion-show-all");

  expect(buttonEl).toBeVisible();
  expect(buttonEl).toHaveTextContent(text);
};

const expectExpandableState = (panelBaseId: string, state: "open" | "closed") => {
  const isHidden = state === "closed";
  const content = screen.getByTestId(`${panelBaseId}-content`);

  expect(content).toHaveAttribute("aria-hidden", isHidden.toString());
};

describe("Accordion", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("show-all button", () => {
    describe("when it is enabled", () => {
      it("shows the 'Show all' button", () => {
        setup({ showAllEnabled: true });
        expectShowAllButtonLabel("Show all");
      });

      it("opens only the clicked panel", async () => {
        const { user } = setup({ showAllEnabled: true });

        expectExpandableState("first-panel", "closed");
        expectExpandableState("second-panel", "closed");
        await user.click(screen.getByText("Foo"));
        expectExpandableState("first-panel", "open");
        expectExpandableState("second-panel", "closed");
      });

      describe("when the 'Show all' button is clicked", () => {
        it("opens every panel", async () => {
          const { user } = setup({ showAllEnabled: true });

          await user.click(screen.getByRole("button", { name: /show all/i }));
          expectExpandableState("first-panel", "open");
          expectExpandableState("second-panel", "open");
        });

        it("updates the button label to 'Hide all'", async () => {
          const { user } = setup({ showAllEnabled: true });

          await user.click(screen.getByRole("button", { name: /show all/i }));
          expectShowAllButtonLabel("Hide all");
        });

        it("toggles every panel when clicked twice", async () => {
          const { user } = setup({ showAllEnabled: true });
          const toggleBtn = screen.getByTestId("accordion-show-all");

          await user.click(toggleBtn);
          await user.click(toggleBtn);
          expectShowAllButtonLabel("Show all");
          expectExpandableState("first-panel", "closed");
        });

        it("restores the 'Show all' label when a panel is closed", async () => {
          const { user } = setup({ showAllEnabled: true });

          await user.click(screen.getByRole("button", { name: /show all/i }));
          await user.click(screen.getByText("Foo"));
          expectExpandableState("first-panel", "closed");
          expectShowAllButtonLabel("Show all");
        });
      });
    });

    describe("when it is disabled", () => {
      it("does not show the 'Show all' button", () => {
        setup({ showAllEnabled: false });
        expect(screen.queryByTestId("accordion-show-all")).not.toBeInTheDocument();
      });

      it("initialises every panel as collapsed", () => {
        setup({ showAllEnabled: false });
        expectExpandableState("first-panel", "closed");
        expectExpandableState("second-panel", "closed");
      });

      it("opens a panel when it is clicked", async () => {
        const { user } = setup({ showAllEnabled: false });

        await user.click(screen.getByText("Foo"));
        expectExpandableState("first-panel", "open");
      });
    });
  });

  describe("keyboard support", () => {
    it("opens a panel when Enter is pressed", async () => {
      const { user } = setup();
      const summary = screen.getByRole("button", { name: "Foo" });

      summary.focus();
      await user.keyboard("{Enter}");
      expectExpandableState("first-panel", "open");
    });

    it("opens a panel when Space is pressed", async () => {
      const { user } = setup();
      const summary = screen.getByRole("button", { name: "Foo" });

      summary.focus();
      await user.keyboard(" ");
      expectExpandableState("first-panel", "open");
    });

    it("does nothing when a different key is pressed", async () => {
      const { user } = setup();
      const summary = screen.getByRole("button", { name: "Foo" });

      summary.focus();
      await user.keyboard("{a}");
      expectExpandableState("first-panel", "closed");
    });
  });

  describe("generated IDs", () => {
    it("falls back to an ID based on the root ID and index", async () => {
      const { user } = setup({
        expandables: [{ title: "No ID", content: <p>No ID content</p> }],
      });
      const expectedFallbackId = "accordion-panel-0";
      const content = screen.getByTestId(`${expectedFallbackId}-content`);

      expect(content).toHaveAttribute("aria-hidden", "true");
      await user.click(screen.getByText("No ID"));
      expect(content).toHaveAttribute("aria-hidden", "false");
    });

    it("falls back to a generated root ID when none is provided", () => {
      const { container } = render(<Accordion expandables={defaultExpandables} />);
      const accordionNode = container.firstChild as HTMLElement;

      expect(accordionNode).toHaveAttribute("id");
      expect(accordionNode.getAttribute("id")).toMatch(/accordion-.*$/);
    });
  });

  describe("test IDs", () => {
    it("does not apply panel data-testids when IDs are omitted", () => {
      render(<Accordion expandables={[{ title: "No ID", content: "content" }]} />);

      const heading = screen.getByRole("button", { name: /No ID/i });
      const content = screen.getByText("content").parentElement;

      expect(heading).not.toHaveAttribute("data-testid");
      expect(content).not.toHaveAttribute("data-testid");
    });

    it("does not apply a show-all data-testid when the root ID is omitted", () => {
      render(
        <Accordion
          showAllEnabled={true}
          expandables={defaultExpandables}
        />,
      );
      const showAllBtn = screen.getByRole("button", { name: /Show all/i });

      expect(showAllBtn).not.toHaveAttribute("data-testid");
    });

    it("applies stable data-testids when IDs are provided", () => {
      setup({ id: "accordion-custom", showAllEnabled: true });
      expect(screen.getByTestId("first-panel-heading")).toBeInTheDocument();
      expect(screen.getByTestId("first-panel-content")).toBeInTheDocument();
      expect(screen.getByTestId("accordion-custom-show-all")).toBeInTheDocument();
    });
  });
});
