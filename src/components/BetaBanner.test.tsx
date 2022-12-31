import React from "react";
import { render, screen } from "@testing-library/react";
import BetaBanner from "./BetaBanner";

describe.only("ONS In Dev Banner Test", () => {
    it("matches Snapshot", () => {
        expect(render(<BetaBanner />)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        render(<BetaBanner />);
        expect(screen.getByText(/This is a new service/i)).toBeVisible();
        expect(screen.getByText(/BETA/i)).toBeVisible();
    });
});
