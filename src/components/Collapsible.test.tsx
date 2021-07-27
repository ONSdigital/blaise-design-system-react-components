import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import Collapsible from "./Collapsible";

describe("Collapsible Test", () => {
    afterEach(() => {
        cleanup();
    });

    const contentText = "Inside the Collapsible"

    const Props = {
        title: "What is the Collapsible title?",
        content: <p>{contentText}</p>
    };

    it("matches Snapshot", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders tile", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        expect(wrapper.queryAllByText(Props.title)).toHaveLength(2);
    });

    it("renders children inside the Collapsible", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        expect(wrapper.getByText(contentText)).toBeInTheDocument();
    });

    it("children inside the Collapsible should be hidden by aria by default", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        expect(wrapper.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "true");
    });

    it("should change the to aria-hidden false when title is clicked on", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        fireEvent.click(wrapper.getByRole("link"));
        expect(wrapper.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "false");
    });

    it("should change the to aria-hidden false when you press the SpaceBar key on the title", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        fireEvent.keyPress(wrapper.getByTestId("collapsible-heading"), { key: "Space", code: 32, charCode: 32 });
        expect(wrapper.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "false");

    });

    it("should change the to aria-hidden false when you press the enter key on the title", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        fireEvent.keyPress(wrapper.getByTestId("collapsible-heading"), { key: "Enter", code: 13, charCode: 13 });
        expect(wrapper.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "false");

    });


    it("should change back to aria-hidden true when inner button 'Hide this' is pressed" , () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        fireEvent.click(wrapper.getByRole("link"));
        expect(wrapper.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "false");


        fireEvent.click(wrapper.getByText("Hide this"));
        expect(wrapper.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "true");
    });

});
