import React from "react";
import { screen, render } from "@testing-library/react";
import ONSErrorPanel from "./ONSErrorPanel";

describe("ONS Error Panel Test", () => {
    it("matches Snapshot", () => {
        expect(render(<ONSErrorPanel />)).toMatchSnapshot();
    });

    it("should display paragraph text", () => {
        render(<ONSErrorPanel />);
        expect(screen.getByText(/Sorry, there is a problem with this service. We are working to fix the problem. Please try again later./i)).toBeVisible();
    });
});
