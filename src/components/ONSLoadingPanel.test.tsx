import React from "react";
import { cleanup, render } from "@testing-library/react";
import { ONSLoadingPanel } from "./ONSLoadingPanel";

describe("Header Test", () => {
    afterEach(() => {
        cleanup();
    });

    it("matches Snapshot", () => {
        const wrapper = render(<ONSLoadingPanel/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("shows default loading text when no message has been passed through", () => {
        const wrapper = render(<ONSLoadingPanel/>);
        expect(wrapper.getByText(/Loading/)).toBeDefined();
    });

    it("shows passed in loading text message has been passed through", () => {
        const wrapper = render(<ONSLoadingPanel message={"A different message for loading"}/>);
        expect(wrapper.getByText(/A different message for loading/)).toBeDefined();
    });
});
