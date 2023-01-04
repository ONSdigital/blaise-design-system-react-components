import React from "react";
import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Test", () => {
    it("matches snapshot", () => {
        expect(render(<Footer />)).toMatchSnapshot();
    });

    it("should display 'Office for National Statistics' as part of the SVG", () => {
        render(<Footer />);
        expect(screen.getByTitle(/Office for National Statistics/)).toBeInTheDocument();
    });
});
