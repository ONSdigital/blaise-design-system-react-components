import React from "react";
import {cleanup, render} from "@testing-library/react";
import Header from "./Header";

describe("Header Test", () => {
    afterEach(() => {
        cleanup();
    });

    const Props = {
        title: "App Title"
    };

    it("matches Snapshot", () => {
        const wrapper = render(<Header title={Props.title}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const wrapper = render(<Header title={Props.title}/>);
        expect(wrapper).toBeDefined();
    });

    it("should render with the title displayed", () => {
        const wrapper = render(<Header title={Props.title}/>);
        expect(wrapper.getByText(Props.title)).toBeDefined();
    });
});
