import React from "react";
import Enzyme, {render, shallow} from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

describe("Footer Test", () => {
    Enzyme.configure({adapter: new Adapter()});

    it("matches Snapshot", () => {
        const wrapper = render(<Footer/>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.exists()).toEqual(true);
    });
});
