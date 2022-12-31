import React from "react";
import { screen, render } from "@testing-library/react";
import { ONSLoadingPanel } from "./ONSLoadingPanel";

describe("ONS Loading Panel test", () => {
    it("matches Snapshot", () => {
        expect(render(<ONSLoadingPanel />)).toMatchSnapshot();
    });

    it("shows default loading text when no message has been passed through", () => {
        render(<ONSLoadingPanel />);
        expect(screen.getByText(/Loading/)).toBeVisible();
    });

    it("shows passed in loading text message has been passed through", () => {
        render(<ONSLoadingPanel message="A different message for loading" />);
        expect(screen.getByText(/A different message for loading/)).toBeVisible();
    });
});
