import { render, screen } from "@testing-library/react";
import React from "react";
import NotProductionWarning from "./NotProductionWarning";

describe("ONS Not production warning Test", () => {
    it("matches Snapshot", () => {
        expect(render(<NotProductionWarning />)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const { container } = render(<NotProductionWarning />);
        expect(container).toBeDefined();
    });

    it("should display warning paragraph text", () => {
        render(<NotProductionWarning />);
        expect(screen.getByText(/This environment is not a production environment. Do not upload any live data to this service./)).toBeVisible();
    });
});
