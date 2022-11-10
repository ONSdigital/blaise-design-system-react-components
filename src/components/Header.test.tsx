import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Header from "./Header";
import sinon from "sinon";

describe("Header Test", () => {
    afterEach(() => {
        cleanup();
    });

    const Props = {
        title: "App Title"
    };

    it("matches Snapshot", () => {
        const wrapper = render(<Header title={Props.title} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("matches Snapshot with signout button", () => {
        const wrapper = render(<Header title={Props.title} signOutButton={true} signOutFunction={jest.fn()} />);
        expect(wrapper).toMatchSnapshot();
    });


    it("should not show the signout button by default", () => {
        const wrapper = render(<Header title={Props.title} />);
        expect(wrapper.queryAllByText(/Save and sign out/)).toStrictEqual([]);
        expect(wrapper.queryAllByText(/Sign out/)).toStrictEqual([]);
    });

    it("shows Sign out button button", () => {
        const wrapper = render(<Header title={Props.title} signOutButton={true} signOutFunction={jest.fn()} />);
        expect(wrapper.getByText(/Save and sign out/)).toBeVisible();
    });

    it("shows Sign out button button with special text", () => {
        const wrapper = render(<Header title={Props.title} signOutButton={true} noSave={true} signOutFunction={jest.fn()} />);
        expect(wrapper.getByText(/Sign out/)).toBeDefined();
        expect(wrapper.queryAllByText(/Save and sign out/)).toStrictEqual([]);
    });

    it("passes in the Sign out function correctly button", () => {
        const mockFunction = sinon.spy();
        const wrapper = render(<Header title={Props.title} signOutButton={true} signOutFunction={mockFunction} />);
        act(() => {
            fireEvent.click(wrapper.getByText(/Save and sign out/))
        });

        expect(mockFunction).toHaveProperty('callCount', 1);
    });



    it("should render correctly", () => {
        const wrapper = render(<Header title={Props.title} />);
        expect(wrapper).toBeDefined();
    });

    it("should render with the title displayed", () => {
        const wrapper = render(<Header title={Props.title} />);
        expect(wrapper.getByText(Props.title)).toBeVisible();
    });
});
