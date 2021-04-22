import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import {ONSPanel} from "./ONSPanel";
import Adapter from "enzyme-adapter-react-16";

describe("ONS Panel Test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    const panelProps = {
        children: <p>Succceeesssss</p>,
    };

    const statusPanelProps = {
        children: <p>Statusssss</p>,
        status: "success",
        // spacious: false
    };

    const spaciousPanelProps = {
        children: <p>Spaciooouuusssss</p>,
        status: "error",
        spacious: true,
        id: "spacious"
    }

    const bigIconStatusPanelProps = {
        children: <p>Statusssss</p>,
        status: "success",
        bigIcon: true
        // spacious: false
    };
    
    function wrapper (render: any, props: any) {
        return render(
            <ONSPanel   {...props}
                        >{props.children}</ONSPanel>)}

    it("matches Snapshot", () => {
        expect(wrapper(shallow, panelProps)).toMatchSnapshot()
    });

    it("should render correctly", () => expect(wrapper(shallow, panelProps).exists()).toEqual(true));


    it("should render the correct children", () => {
        expect(wrapper(shallow, panelProps).find("div.panel__body").getElement().props.children).toEqual(panelProps.children)
    })

    it("should render the correct status", () => {
        expect(wrapper(shallow, statusPanelProps).find("div.panel").hasClass('panel--success')).toEqual(true)
    })
    
    it('displays a spacious panel button', () => {
        expect(wrapper(shallow, spaciousPanelProps).find('div.panel').hasClass('panel--spacious')).toEqual(true)
    })

    it("should render the big success tick", () => {
        expect(wrapper(shallow, bigIconStatusPanelProps).find("svg.svg-icon").hasClass('svg-icon--xl')).toEqual(true)
        expect(wrapper(shallow, bigIconStatusPanelProps).find("div.panel__body").hasClass('svg-icon-margin--xl')).toEqual(true)
    })

    it("matches Snapshot a big success icon", () => {
        expect(wrapper(shallow, bigIconStatusPanelProps)).toMatchSnapshot();
    })
})