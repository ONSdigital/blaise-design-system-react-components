import React from "react";
import Accordion from "./Accordion";
import { render, fireEvent } from "@testing-library/react";

describe("Accordion tests", () => {
    describe("when show all is enabled", () => {

        it("displays a 'Show all' button", async () => {

        })

        it("expands a single element when 'Show' on that element is clicked", async () => {
            // the arrow icon changes direction

        })

        describe("and show all is clicked", () => {
            it("expands all accordions", async () => {
                // the arrow icons change direction
            })

            it("changes 'Show all' to 'Hide all'", async () => {

            })

            it("hides a single element when 'Hide' on that element is clicked", async () => {
                //    Show all changes back to Show all
                // the arrow icons change direction
            })
        })
    })

    describe("when show all is not enabled", () => {
        it("does not display a 'Show all' button", async () => {

        })

        it("expands a single element when 'Show' on that element is clicked", async () => {
            const wrapper = render(<Accordion Expandables={[{ title: "Foo", content: <p>bar</p> }]} />)

            expect(wrapper.getByTestId("accordion-0-content")).toHaveAttribute("aria-hidden", "true")
            fireEvent.click(wrapper.getByTestId("accordion-0-heading"))
            expect(wrapper.getByTestId("accordion-0-content")).toHaveAttribute("aria-hidden", "false")
            expect(wrapper.getByTestId("accordion-0-content")).toHaveTextContent("bar")
        })
    })
})
