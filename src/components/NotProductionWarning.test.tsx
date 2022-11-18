import React from "react";
import Enzyme, { render as enzymeRender, shallow } from "enzyme";
import { render } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import NotProductionWarning from "./NotProductionWarning";

describe("ONS Not production warning Test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    it("matches Snapshot", () => {
        expect(enzymeRender(<NotProductionWarning />)).toMatchSnapshot();
    });

    it("should render correctly", () => expect(shallow(<NotProductionWarning />).exists()).toEqual(true));

    it("should display warning paragraph text", () => {
        const wrapper = render(<NotProductionWarning />);
        expect(wrapper.getByText(/This environment is not a production environment. Do not upload any live data to this service./)).toBeVisible();
    });
});
