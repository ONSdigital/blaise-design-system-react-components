import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import ExternalLink from "./ExternalLink";

describe("External Link Test", () => {
    afterEach(() => {
        cleanup();
    });

    const Props = {
        text: "Click Me",
        link: "/link",
        ariaLabel: "Aria label description",
    };

    it("matches Snapshot", () => {
        const { asFragment } = render(<ExternalLink {...Props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const { container } = render(<ExternalLink {...Props} />);
        expect(container).toBeDefined();
    });

    it("should render with the correct text displayed", () => {
        render(<ExternalLink {...Props} />);
        expect(screen.getByText(/Click Me/i)).toBeVisible();
    });

    it("should render with the correct href passed in", () => {
        render(<ExternalLink {...Props} />);
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", Props.link);
    });

    it("should render with the correct aria label passed in", () => {
        render(<ExternalLink {...Props} />);
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("aria-label", Props.ariaLabel);
    });
});
