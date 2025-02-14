import { render } from "@testing-library/react";
import React from "react";
import ONSErrorPanel from "./ONSErrorPanel";

describe("ONS Error Panel Test", () => {
    it("matches Snapshot", () => {
        expect(render(<ONSErrorPanel />)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const { container } = render(<ONSErrorPanel />);
        expect(container).toBeDefined();
    });
});
