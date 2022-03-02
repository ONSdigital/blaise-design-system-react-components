import React from "react";
import Accordion from "./Accordion";
import {render, fireEvent, RenderResult} from "@testing-library/react";

describe("Accordion tests", () => {
    describe("when show all is enabled", () => {
        let wrapper: RenderResult
        beforeEach(() => {
            wrapper = renderAccordionWithShowAllEnabledAndTwoExpandables()
        });

        it("displays a 'Show all' button", async () => {
            showAllButtonIsDefined(wrapper)
        })

        it("expands a single expandable when 'Show' on that expandable is clicked", async () => {
            expandableIsClosed("Foo", 0, wrapper)
            expandableIsClosed("Foo Bar", 1, wrapper)

            clickShowOnASingleExpandable(0, wrapper)

            expandableIsOpen("Foo", 0, wrapper)
            expandableIsClosed("Foo Bar", 1, wrapper)
        })

        describe("and show all is clicked", () => {
            it("expands all accordions", async () => {
                clickShowAll(wrapper);

                expandableIsOpen("Foo", 0, wrapper)
                expandableIsOpen("Foo Bar", 1, wrapper)
            })

            it("changes 'Show all' to 'Hide all'", async () => {
                clickShowAll(wrapper)
                hideAllButtonIsDefined(wrapper)
            })

            it("toggles between 'Hide all' and 'Show all' when the button is clicked", async () => {
                clickShowAll(wrapper)
                hideAllButtonIsDefined(wrapper)

                clickHideAll(wrapper)
                showAllButtonIsDefined(wrapper)

                clickShowAll(wrapper)
                hideAllButtonIsDefined(wrapper)
            })

            it("hides a single expandable when 'Hide' on that expandable is clicked", async () => {
                showAllButtonIsDefined(wrapper)
                clickShowAll(wrapper)
                hideAllButtonIsDefined(wrapper)
                clickHideOnASingleExpandable(0, wrapper)
                expandableIsClosed("Foo", 0, wrapper)
                showAllButtonIsDefined(wrapper)
            })
        })
    })

    describe("when show all is not enabled", () => {
        let wrapper: RenderResult
        beforeEach(() => {
            wrapper = renderAccordionWithShowAllDisabledAndTwoExpandables()
        });

        it("does not display a 'Show all' button", async () => {
            showAllButtonIsNotDefined(wrapper)
        })

        it("initialises with all expandables closed", async () => {
            expandableIsClosed("Foo", 0, wrapper)
            expandableIsClosed("Foo Bar", 1, wrapper)
        })

        it("expands a single expandable when 'Show' on that expandable is clicked", async () => {
            expandableIsClosed("Foo", 0, wrapper)
            clickShowOnASingleExpandable(0, wrapper)
            expandableIsOpen("Foo", 0, wrapper)
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

function clickShowAll(wrapper: RenderResult){
    fireEvent.click(wrapper.getByTestId("accordion-show-all"))
}

function clickHideAll(wrapper: RenderResult){
    fireEvent.click(wrapper.getByTestId("accordion-show-all"))
}

function clickShowOnASingleExpandable(id: number, wrapper: RenderResult){
    fireEvent.click(wrapper.getByTestId(`accordion-${id}-button`))
}

function clickHideOnASingleExpandable(id: number, wrapper: RenderResult){
    fireEvent.click(wrapper.getByTestId(`accordion-${id}-button`))
}

function showAllButtonIsDefined(wrapper: RenderResult) {
    expect(wrapper.getByTestId("accordion-show-all")).toBeDefined()
    expect(wrapper.getByTestId("accordion-show-all")).toHaveTextContent("Show all")
}

function showAllButtonIsNotDefined(wrapper: RenderResult) {
    expect(wrapper.queryByTestId("accordion-show-all")).toBeFalsy();
}

function hideAllButtonIsDefined(wrapper: RenderResult) {
    expect(wrapper.getByTestId("accordion-show-all")).toBeDefined()
    expect(wrapper.getByTestId("accordion-show-all")).toHaveTextContent("Hide all")
}

function expandableIsClosed(title: string, id: number, wrapper: RenderResult) {
    expect(wrapper.getByTestId(`accordion-${id}-heading`)).toHaveTextContent(title)
    expect(wrapper.getByTestId(`accordion-${id}-button`)).toHaveTextContent("Show")
    expect(wrapper.getByTestId(`accordion-${id}-content`)).toHaveAttribute("aria-hidden", "true")
}

function expandableIsOpen(title: string, id: number, wrapper: RenderResult) {
    expect(wrapper.getByTestId(`accordion-${id}-heading`)).toHaveTextContent(title)
    expect(wrapper.getByTestId(`accordion-${id}-button`)).toHaveTextContent("Hide")
    expect(wrapper.getByTestId(`accordion-${id}-content`)).toHaveAttribute("aria-hidden", "false")
}
