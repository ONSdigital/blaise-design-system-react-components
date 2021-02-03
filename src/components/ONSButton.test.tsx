import React from "react";
import Enzyme, {shallow} from "enzyme";
import {cleanup, render, screen, fireEvent} from "@testing-library/react";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import {ONSButton} from "./ONSButton";


describe("ONS Button Test", () => {
    Enzyme.configure({adapter: new Adapter()});

    afterEach(() => {
        cleanup();
    });

    const Props = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
    };

    const exportButtonProps = {
        label: "Submit1.5",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
        loading: false
    };

    const smallButtonProps = {
        label: "Submit2",
        primary: true,
        onButtonClick: sinon.spy(),
        loading: true,
        small: true
    };
    const loadingButtonProps = {
        label: "Submit4",
        primary: true,
        small: false,
        onButtonClick: sinon.spy(),
        loading: true,
        field: true,
    };

    const disabledProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
        disabled: true
    };

    const callToActionProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
        disabled: false,
        action: true
    };

    const testIdProps = {
        label: "Submit1",
        primary: false,
        small: true,
        field: true,
        onButtonClick: sinon.spy(),
        disabled: false,
        action: true,
        testId: "Unique-ID"
    };

    function wrapper(render: any, props: any) {
        return render(
            <ONSButton label={props.label}
                       id={props.id}
                       primary={props.primary}
                       small={props.small}
                       field={props.field}
                       loading={props.loading}
                       marginRight={props.marginRight}
                       onClick={props.onButtonClick}
                       disabled={props.disabled}
                       action={props.action}
                       testid={props.testId}/>
        );
    }

    it("matches Snapshot", () => {
        expect(wrapper(render, Props)).toMatchSnapshot()
    });

    it("should render correctly", () => expect(wrapper(shallow, Props).exists()).toEqual(true));

    it("should render with the correct label", () => {
        wrapper(render, Props)
        expect(screen.getByText(/Submit1/i).textContent).toContain(Props.label);
    });

    it("simulates click events", () => {
        wrapper(render, exportButtonProps)
        fireEvent.click(screen.getByText(/Submit1.5/i));
        expect(exportButtonProps.onButtonClick).toHaveProperty("callCount", 1);
    });

    it("displays loading button", () => {
        expect(wrapper(shallow, loadingButtonProps).find("button").hasClass("btn--loader")).toEqual(true);
    });

    it("displays small button", () => {
        expect(wrapper(shallow, smallButtonProps).find("button").hasClass("btn--small")).toEqual(true);
    });

    it("displays disabled button", () => {
        expect(wrapper(shallow, disabledProps).find("button").hasClass("btn--disabled")).toEqual(true);
    });

    it("displays Call to Action button", () => {
        expect(wrapper(shallow, callToActionProps).find("button").hasClass("btn--link")).toEqual(true);
    });

    it("has data-testid set correctly", () => {
        const button = wrapper(shallow, testIdProps).find("button").get(0)
        expect(button.props['data-testid']).toEqual(testIdProps.testId + "-button");
    });
});