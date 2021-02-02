import React from "react";
import Enzyme, { render, shallow} from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

describe("Header Test", () => {
    Enzyme.configure({adapter: new Adapter()});

    const Props = {
        title: "App Title"
    };

    it("matches Snapshot", () => {
        const wrapper = render(<Header title={Props.title}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const wrapper = shallow(<Header title={Props.title}/>);
        expect(wrapper.exists()).toEqual(true);
    });

    it("should render with the title displayed", () => {
        const wrapper = shallow(<Header title={Props.title}/>);
        expect(wrapper.html()).toContain(Props.title);
    });
});
