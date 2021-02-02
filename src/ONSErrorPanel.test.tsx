import React from "react";
import Enzyme, {shallow, render} from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import ONSErrorPanel from "./ONSErrorPanel";

describe("ONS Error Panel Test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    it("matches Snapshot", () => {
        expect(render(<ONSErrorPanel/>)).toMatchSnapshot();
    });

    it("should render correctly", () => expect(shallow(<ONSErrorPanel/>).exists()).toEqual(true));
});