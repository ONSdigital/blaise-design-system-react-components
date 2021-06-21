import React from "react";
import {cleanup, render} from "@testing-library/react";
import {ONSLoadingPanel} from "./ONSLoadingPanel";

describe("Header Test", () => {
    afterEach(() => {
        cleanup();
    });

    it("matches Snapshot", () => {
        const wrapper = render(<ONSLoadingPanel/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("shows loading text", () => {
        const wrapper = render(<ONSLoadingPanel/>);
        expect(wrapper.getByText(/Loading/)).toBeDefined();
    });
});

