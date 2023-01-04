import React from "react";
import { render, screen } from "@testing-library/react";
import ExternalLink from "./ExternalLink";

describe("External Link Test", () => {
    const Props = {
        text: "Click Me",
        link: "/link",
        ariaLabel: "Aria label description",
    };

    it("matches Snapshot", () => {
        const wrapper = render(<ExternalLink {...Props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render with the correct text displayed", () => {
        render(<ExternalLink {...Props} />);
        expect(screen.getByText(/Click Me/i)).toBeVisible();
    });

    it("should render with the correct href passed in", async () => {
        render(<ExternalLink {...Props} />);

        const linkElement = screen.getByText("Click Me");

        expect(linkElement).toHaveAttribute("href", "/link");
    });

    it.only("should render with the correct aria label passed in", async () => {
        render(<ExternalLink {...Props} />);

        const linkElement = await screen.findByLabelText(Props.ariaLabel);

        expect(linkElement).toHaveAttribute("aria-label");
        expect(linkElement.getAttribute("aria-label")).toEqual("Aria label description");
    });
});
