import React from "react";
import Enzyme, {render, shallow} from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import ExternalLink from "./ExternalLink";

describe("External Link Test", () => {
    Enzyme.configure({adapter: new Adapter()});

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
        const wrapper = shallow(<ExternalLink {...Props}/>);
        expect(wrapper.exists()).toEqual(true);
    });

    it("should render with the correct text displayed", () => {
        const wrapper = shallow(<ExternalLink {...Props}/>);
        const children = wrapper.find("a");
        expect(children.html()).toContain(Props.text);
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
