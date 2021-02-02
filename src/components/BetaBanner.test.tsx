import React from "react";
import Enzyme, {shallow, render} from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import BetaBanner from "./BetaBanner";

describe("ONS In Dev Banner Test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    it("matches Snapshot", () => {
        expect(render(<BetaBanner/>)).toMatchSnapshot();
    });

    it("should render correctly", () => expect(shallow(<BetaBanner/>).exists()).toEqual(true));
});