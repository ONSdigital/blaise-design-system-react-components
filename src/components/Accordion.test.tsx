import React from "react";
import Accordion from "./Accordion";
import { render, fireEvent, RenderResult } from "@testing-library/react";

describe("Accordion tests", () => {
    describe("when show all is enabled", () => {
        let wrapper: RenderResult
        beforeEach(() => {
            wrapper = renderAccordionWithShowAllEnabledAndTwoExpandables()
        });

        it("displays a 'Show all' button", async () => {
            expectShowAllButtonToBeDefined(wrapper)
        })

        it("expands a single expandable when that expandable is clicked", async () => {
            expectExpandableToBeClosed("Foo", 0, wrapper)
            expectExpandableToBeClosed("Foo Bar", 1, wrapper)

            clickOnASingleExpandable(0, wrapper)

            expectExpandableToBeOpen("Foo", 0, wrapper)
            expectExpandableToBeClosed("Foo Bar", 1, wrapper)
        })

        describe("and show all is clicked", () => {
            it("expands all accordions", async () => {
                clickShowAll(wrapper);

                expectExpandableToBeOpen("Foo", 0, wrapper)
                expectExpandableToBeOpen("Foo Bar", 1, wrapper)
            })

            it("changes 'Show all' to 'Hide all'", async () => {
                clickShowAll(wrapper)
                expectHideAllButtonToBeDefined(wrapper)
            })

            it("toggles between 'Hide all' and 'Show all' when the button is clicked", async () => {
                clickShowAll(wrapper)
                expectHideAllButtonToBeDefined(wrapper)

                clickHideAll(wrapper)
                expectShowAllButtonToBeDefined(wrapper)

                clickShowAll(wrapper)
                expectHideAllButtonToBeDefined(wrapper)
            })

            it("hides a single expandable when that expandable is clicked", async () => {
                expectShowAllButtonToBeDefined(wrapper)
                clickShowAll(wrapper)
                expectHideAllButtonToBeDefined(wrapper)
                clickOnASingleExpandable(0, wrapper)
                expectExpandableToBeClosed("Foo", 0, wrapper)
                expectShowAllButtonToBeDefined(wrapper)
            })
        })
    })

    describe("when show all is not enabled", () => {
        let wrapper: RenderResult
        beforeEach(() => {
            wrapper = renderAccordionWithShowAllDisabledAndTwoExpandables()
        });

        it("does not display a 'Show all' button", async () => {
            expectShowAllButtonNotToBeDefined(wrapper)
        })

        it("initialises with all expandables closed", async () => {
            expectExpandableToBeClosed("Foo", 0, wrapper)
            expectExpandableToBeClosed("Foo Bar", 1, wrapper)
        })

        it("expands a single expandable when 'Show' on that expandable is clicked", async () => {
            expectExpandableToBeClosed("Foo", 0, wrapper)
            clickOnASingleExpandable(0, wrapper)
            expectExpandableToBeOpen("Foo", 0, wrapper)
        })
    })
})

function renderAccordionWithShowAllEnabledAndTwoExpandables(): RenderResult {
    return render(
        <Accordion ShowAllEnabled={true} Expandables={
            [
                { title: "Foo", content: <p>bar</p> },
                { title: "Foo Bar", content: <p>bar foo</p> }
            ]
        } />)
}

function renderAccordionWithShowAllDisabledAndTwoExpandables(): RenderResult {
    return render(
        <Accordion Expandables={
            [
                { title: "Foo", content: <p>bar</p> },
                { title: "Foo Bar", content: <p>bar foo</p> }
            ]
        } />)
}

function clickShowAll(wrapper: RenderResult) {
    fireEvent.click(wrapper.getByText("Show all"))
}

function clickHideAll(wrapper: RenderResult) {
    fireEvent.click(wrapper.getByText("Hide all"))
}

function clickOnASingleExpandable(id: number, wrapper: RenderResult) {
    const expandable = wrapper.getByTestId(`accordion-${id}-heading`)
    fireEvent.click(expandable)
}

function expectShowAllButtonToBeDefined(wrapper: RenderResult) {
    expect(wrapper.getByTestId("accordion-show-all")).toBeDefined()
    expect(wrapper.getByTestId("accordion-show-all")).toHaveTextContent("Show all")
}

function expectShowAllButtonNotToBeDefined(wrapper: RenderResult) {
    expect(wrapper.queryByTestId("accordion-show-all")).toBeFalsy();
}

function expectHideAllButtonToBeDefined(wrapper: RenderResult) {
    expect(wrapper.getByTestId("accordion-show-all")).toBeDefined()
    expect(wrapper.getByTestId("accordion-show-all")).toHaveTextContent("Hide all")
}

function expectExpandableToBeClosed(title: string, id: number, wrapper: RenderResult) {
    expect(wrapper.getByTestId(`accordion-${id}-heading`)).toHaveTextContent(title)
    expect(wrapper.getByTestId(`accordion-${id}-content`)).toHaveAttribute("aria-hidden", "true")
}

function expectExpandableToBeOpen(title: string, id: number, wrapper: RenderResult) {
    expect(wrapper.getByTestId(`accordion-${id}-heading`)).toHaveTextContent(title)
    expect(wrapper.getByTestId(`accordion-${id}-content`)).toHaveAttribute("aria-hidden", "false")
}
