import React from "react";
import Enzyme, { shallow, render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import NotProductionWarning from "./NotProductionWarning";

describe("ONS Not production warning Test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    it("matches Snapshot", () => {
        expect(render(<NotProductionWarning/>)).toMatchSnapshot();
    });

    it("should render correctly", () => expect(shallow(<NotProductionWarning/>).exists()).toEqual(true));
});
