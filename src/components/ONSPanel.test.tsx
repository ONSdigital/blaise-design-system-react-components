import React from "react";
import { render } from "@testing-library/react";
import { ONSPanel } from "./ONSPanel";

describe("ONS Panel Test", () => {
    const panelProps = {
        children: <p data-testid="child">Succceeesssss</p>,
        testID: "panel",
    };

    const statusPanelProps = {
        children: <p>Statusssss</p>,
        status: "success",
        testID: "status-panel",
        // spacious: false
    };

    const spaciousPanelProps = {
        children: <p>Spaciooouuusssss</p>,
        status: "error",
        spacious: true,
        id: "spacious",
        testID: "spacious-panel",
    };

    const bigIconStatusPanelProps = {
        children: <p>Statusssss</p>,
        status: "success",
        bigIcon: true,
        testID: "big-icon-panel",
        // spacious: false
    };

    const warnStatusPanelProps = {
        children: <p>Statusssss</p>,
        status: "warn",
    };

    function wrapper(render: any, props: any) {
        return render(
            <ONSPanel {...props}>
                {props.children}
            </ONSPanel>,
        );
    }

    it("matches Snapshot", () => {
        expect(wrapper(render, panelProps)).toMatchSnapshot();
    });

    it("success panel matches Snapshot", () => {
        expect(wrapper(render, statusPanelProps)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        expect(wrapper(render, panelProps)).toBeDefined();
    });

    it("should render the correct children", () => {
        const view = wrapper(render, panelProps);
        const parent = view.getByTestId("panel");
        const child = view.getByTestId("child");
        expect(parent).toContainElement(child);
    });

    it("should render the correct status", () => {
        const view = wrapper(render, statusPanelProps);
        const panel = view.getByTestId("status-panel");
        expect(panel.getAttribute("class")).toMatch(/ons-panel--success/gi);
    });

    it("displays a spacious panel button", () => {
        const view = wrapper(render, spaciousPanelProps);
        const panel = view.getByTestId("spacious-panel");
        expect(panel.getAttribute("class")).toMatch(/ons-panel--spacious/gi);
    });

    it("should render the big success tick", () => {
        const view = wrapper(render, bigIconStatusPanelProps);
        const panel = view.getByTestId("big-icon-panel");
        const child = panel.querySelector(".ons-svg-icon-margin--xl");
        expect(child.getAttribute("class")).toMatch(/ons-svg-icon-margin--xl/gi);
    });

    it("matches Snapshot a big success icon", () => {
        expect(wrapper(render, bigIconStatusPanelProps)).toMatchSnapshot();
    });

    it("matches Snapshot for warning panel", () => {
        expect(wrapper(render, warnStatusPanelProps)).toMatchSnapshot();
    });
});
