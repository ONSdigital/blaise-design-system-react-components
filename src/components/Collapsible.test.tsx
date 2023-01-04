import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Collapsible from "./Collapsible";

describe("Collapsible Test", () => {
    const contentText = "Inside the Collapsible";

    const Props = {
        title: "What is the Collapsible title?",
        content: <p>{contentText}</p>,
    };

    it("matches Snapshot", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders title", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        expect(wrapper.queryAllByText(Props.title)).toHaveLength(1);
    });

    it("renders children inside the Collapsible", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        expect(wrapper.getByText(contentText)).toBeInTheDocument();
    });

    it("children inside the Collapsible should be hidden by aria by default", () => {
        const wrapper = render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);
        expect(wrapper.getByTestId("collapsible-content")).toHaveAttribute("aria-hidden", "true");
    });

    it("should change content div to aria-hidden false when title is clicked on", async () => {
        render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);

        const collapsibleHeading = screen.getByTestId("collapsible-heading");
        const collapsibleContent = screen.getByTestId("collapsible-content");
        await userEvent.click(collapsibleHeading);

        expect(collapsibleContent).toHaveAttribute("aria-hidden", "false");
    });

    it("should change content div to aria-hidden false when you press the SpaceBar key on the title", async () => {
        render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);

        const collapsibleHeading = screen.getByTestId("collapsible-heading");
        const collapsibleContent = screen.getByTestId("collapsible-content");
        fireEvent.keyPress(collapsibleHeading, { key: "Space", code: 32, charCode: 32 });

        expect(collapsibleContent).toHaveAttribute("aria-hidden", "false");
    });

    it("should change content div to aria-hidden false when you press the enter key on the title", () => {
        render(<Collapsible title={Props.title}>{Props.content}</Collapsible>);

        const collapsibleHeading = screen.getByTestId("collapsible-heading");
        const collapsibleContent = screen.getByTestId("collapsible-content");
        fireEvent.keyPress(collapsibleHeading, { key: "Enter", code: 13, charCode: 13 });

        expect(collapsibleContent).toHaveAttribute("aria-hidden", "false");
    });
});
