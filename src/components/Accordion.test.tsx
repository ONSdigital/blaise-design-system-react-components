import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./Accordion";

interface ExpandableItem {
    title: string;
    content: React.ReactNode;
    contentId: string;
}

const setup = (showAllEnabled = false) => {
    const expandables: ExpandableItem[] = [
        { title: "Foo", content: <p>foo</p>, contentId: "foo" },
        { title: "Bar", content: <p>bar</p>, contentId: "bar" },
    ];

    return {
        user: userEvent.setup(),
        expandables,
        ...render(
            <Accordion
                ContentId="test"
                ShowAllEnabled={showAllEnabled}
                Expandables={expandables}
            />,
        ),
    };
};

const expectShowAllButtonLabel = (text: "Show all" | "Hide all") => {
    const button = screen.getByTestId("test-accordion-show-all");

    expect(button).toBeVisible();
    expect(button).toHaveTextContent(text);
};

const expectExpandableState = (contentId: string, index: number, state: "open" | "closed") => {
    const isHidden = state === "closed";
    const content = screen.getByTestId(`${contentId}-accordion-${index}-content`);

    expect(content).toHaveAttribute("aria-hidden", isHidden.toString());
};

describe("Accordion", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe("Props", () => {
        describe("when ShowAllEnabled is true", () => {
            it("should display the 'Show all' button", () => {
                setup(true);
                expectShowAllButtonLabel("Show all");
            });

            it("should only expand the clicked item", async () => {
                const { user } = setup(true);

                expectExpandableState("foo", 0, "closed");
                expectExpandableState("bar", 1, "closed");
                await user.click(screen.getByText("Foo"));
                expectExpandableState("foo", 0, "open");
                expectExpandableState("bar", 1, "closed");
            });

            describe("when clicking the 'Show all' button", () => {
                it("should expand all items", async () => {
                    const { user } = setup(true);

                    await user.click(screen.getByRole("button", { name: /show all/i }));
                    expectExpandableState("foo", 0, "open");
                    expectExpandableState("bar", 1, "open");
                });

                it("should update the button label to 'Hide all'", async () => {
                    const { user } = setup(true);

                    await user.click(screen.getByRole("button", { name: /show all/i }));
                    expectShowAllButtonLabel("Hide all");
                });

                it("should toggle all items open/closed when clicked multiple times", async () => {
                    const { user } = setup(true);
                    const toggleBtn = screen.getByTestId("test-accordion-show-all");

                    await user.click(toggleBtn);
                    await user.click(toggleBtn);
                    expectShowAllButtonLabel("Show all");
                    expectExpandableState("foo", 0, "closed");
                });

                it("should reset the label to 'Show all' if an item is closed while all are open", async () => {
                    const { user } = setup(true);

                    await user.click(screen.getByRole("button", { name: /show all/i }));
                    await user.click(screen.getByText("Foo"));
                    expectExpandableState("foo", 0, "closed");
                    expectShowAllButtonLabel("Show all");
                });
            });
        });

        describe("when ShowAllEnabled is false", () => {
            it("should not render the 'Show all' button", () => {
                setup(false);
                expect(screen.queryByTestId("test-accordion-show-all")).not.toBeInTheDocument();
            });

            it("should initialize all items as collapsed", () => {
                setup(false);
                expectExpandableState("foo", 0, "closed");
                expectExpandableState("bar", 1, "closed");
            });

            it("should reveal content when an item is clicked", async () => {
                const { user } = setup(false);

                await user.click(screen.getByText("Foo"));
                expectExpandableState("foo", 0, "open");
            });
        });
    });
});
