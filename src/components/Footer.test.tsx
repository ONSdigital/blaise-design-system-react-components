import React from "react";
import Enzyme, { render as enzymeRender, shallow } from "enzyme";
import { render } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

describe("Footer Test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    it("matches Snapshot (using enzyme render)", () => {
        const wrapper = enzymeRender(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });

    it("should display 'Office for National Statistics' as part of the SVG", () => {
        const wrapper = render(<Footer />);
        expect(wrapper.getByTitle(/Office for National Statistics/)).toBeInTheDocument();
    });
});
