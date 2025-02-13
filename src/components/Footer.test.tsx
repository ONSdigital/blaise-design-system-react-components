import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

describe("Footer Test", () => {
    it("matches Snapshot", () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const { container } = render(<Footer />);
        expect(container).toBeDefined();
    });

    it("should display 'Office for National Statistics' as part of the SVG", () => {
        const screen = render(<Footer />);
        expect(screen.getByText(/Office for National Statistics/i)).toBeInTheDocument();
    });
});
