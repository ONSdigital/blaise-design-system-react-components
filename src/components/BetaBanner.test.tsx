import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import BetaBanner from "./BetaBanner";

describe("ONS In Dev Banner Test", () => {
    afterEach(() => {
        cleanup();
    });

    it("matches Snapshot", () => {
        expect(render(<BetaBanner/>)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const wrapper = render(<BetaBanner/>)
        expect(screen.getByText(/This is a new service/i)).toBeDefined();
        expect(screen.getByText(/BETA/i)).toBeDefined();
    });
});