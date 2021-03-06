import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import ExternalLink from "./ExternalLink";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("External Link Test",  () => {
    Enzyme.configure({adapter: new Adapter()});
    afterEach(() => {
        cleanup();
    });

    const Props = {
        text: "Click Me",
        link: "/link",
        ariaLabel: "Aria label description"
    };

    it("matches Snapshot", () => {
        const wrapper = render(<ExternalLink {...Props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const wrapper = render(<ExternalLink {...Props}/>);
        expect(wrapper).toBeDefined();
    });

    it("should render with the correct text displayed", () => {
        render(<ExternalLink {...Props}/>);
        expect(screen.getByText(/Click Me/i)).toBeDefined();
    });

    it("should render with the correct href passed in", () => {
        const wrapper = shallow(<ExternalLink {...Props}/>);
        const href = wrapper.find("a").props().href;
        expect(href).toEqual(Props.link);
    });

    it("should render with the correct aria label passed in", () => {
        const wrapper = shallow(<ExternalLink {...Props}/>);
        const ariaLabel = wrapper.find("a").props()["aria-label"];
        expect(ariaLabel).toEqual(Props.ariaLabel);
    });
});
