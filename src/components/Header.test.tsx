import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Header, { Props } from "./Header";

const testProps: Props = {
    title: "ONS Service",
    navigationLinks: [
        { id: "home-link", label: "Home", endpoint: "/" },
        { id: "deploy-questionnaire-link", label: "Deploy a questionnaire", endpoint: "/deploy" },
        { id: "audit-logs-link", label: "View deployment history", endpoint: "/history" },
        { id: "blaise-status-link", label: "Check Blaise status", endpoint: "/status" },
    ],
};

describe("Check default Header:", () => {
    it("matches Snapshot", () => {
        const wrapper = render(
            <Header title={testProps.title} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const wrapper = render(
            <Header title={testProps.title} />,
        );
        expect(wrapper).toBeDefined();
    });

    it("should render with the title displayed", () => {
        const wrapper = render(
            <Header title={testProps.title} />,
        );
        expect(wrapper.getByText(testProps.title)).toBeVisible();
    });

    it("should not show the signout button by default", () => {
        const wrapper = render(
            <Header title={testProps.title} />,
        );
        expect(wrapper.queryAllByText(/Save and sign out/)).toStrictEqual([]);
        expect(wrapper.queryAllByText(/Sign out/)).toStrictEqual([]);
    });

    it("should not show the navigation by default", () => {
        const wrapper = render(
            <Header title={testProps.title} />,
        );
        expect(wrapper.queryByRole("navigation")).toStrictEqual(null);
    });
});

describe("Check Header with sign out button:", () => {
    it("matches Snapshot with sign out button", () => {
        const wrapper = render(
            <Header title={testProps.title} signOutButton signOutFunction={jest.fn()} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("shows sign out button", () => {
        const wrapper = render(
            <Header title={testProps.title} signOutButton signOutFunction={jest.fn()} />,
        );
        expect(wrapper.getByText(/Save and sign out/)).toBeVisible();
    });

    it("shows sign out button with special text", () => {
        const wrapper = render(
            <Header title={testProps.title} signOutButton noSave signOutFunction={jest.fn()} />,
        );
        expect(wrapper.getByText(/Sign out/)).toBeDefined();
        expect(wrapper.queryAllByText(/Save and sign out/)).toStrictEqual([]);
    });

    it("passes in the sign out function correctly button", () => {
        const mockFunction = jest.fn();
        const wrapper = render(
            <Header title={testProps.title} signOutButton signOutFunction={mockFunction} />,
        );
        fireEvent.click(wrapper.getByText(/Save and sign out/));
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});

describe("Check Header with navigation bar:", () => {
    it("matches Snapshot with navigation", () => {
        const wrapper = render(
            <Header title={testProps.title} navigationLinks={testProps.navigationLinks} currentLocation="/" />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("shows the navigation with links by name", () => {
        const wrapper = render(
            <Header title={testProps.title} navigationLinks={testProps.navigationLinks} currentLocation="/" />,
        );
        expect(wrapper.queryByRole("navigation")).not.toStrictEqual(null);
        expect(wrapper.getByRole("link", { name: /Home/ })).toBeVisible();
        expect(wrapper.getByRole("link", { name: /Deploy a questionnaire/ })).toBeVisible();
        expect(wrapper.getByRole("link", { name: /View deployment history/ })).toBeVisible();
        expect(wrapper.getByRole("link", { name: /Check Blaise status/ })).toBeVisible();
    });

    it("shows active link", () => {
        const wrapper = render(
            <Header title={testProps.title} navigationLinks={testProps.navigationLinks} currentLocation="/deploy" />,
        );
        expect(wrapper.getByRole("link", { name: /Deploy a questionnaire/ }).parentElement).toHaveClass("ons-navigation__item--active");
    });
});
