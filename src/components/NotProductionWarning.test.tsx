import React from "react";
import { render, screen } from "@testing-library/react";
import NotProductionWarning from "./NotProductionWarning";

describe("ONS Not production warning Test", () => {
    it("matches Snapshot", () => {
        expect(<NotProductionWarning />).toMatchSnapshot();
    });

    it("should display warning paragraph text", () => {
        render(<NotProductionWarning />);
        expect(screen.getByText(/This environment is not a production environment. Do not upload any live data to this service./i)).toBeVisible();
    });
});