import React from "react";
import { fireEvent, render } from "@testing-library/react";
import sinon from "sinon";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import Header, { Props } from "./Header";

const testProps: Props = {
    title: "ONS Service",
    navigationLinks: [
        { label: "Home", endpoint: "/" },
        { label: "Deploy a questionnaire", endpoint: "/deploy" },
        { label: "View deployment history", endpoint: "/history" },
        { label: "Check Blaise status", endpoint: "/status" },
    ],
};

describe("Check default Header:", () => {
    it("matches Snapshot", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} />
            </Router>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} />
            </Router>,
        );
        expect(wrapper).toBeDefined();
    });

    it("should render with the title displayed", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} />
            </Router>,
        );
        expect(wrapper.getByText(testProps.title)).toBeVisible();
    });

    it("should not show the signout button by default", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} />
            </Router>,
        );
        expect(wrapper.queryAllByText(/Save and sign out/)).toStrictEqual([]);
        expect(wrapper.queryAllByText(/Sign out/)).toStrictEqual([]);
    });

    it("should not show the navigation by default", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} />
            </Router>,
        );
        expect(wrapper.queryByRole(/navigation/)).toStrictEqual(null);
    });
});

describe("Check Header with sign out button:", () => {
    it("matches Snapshot with sign out button", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} signOutButton signOutFunction={jest.fn()} />
                )
            </Router>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("shows sign out button", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} signOutButton signOutFunction={jest.fn()} />
            </Router>,
        );
        expect(wrapper.getByText(/Save and sign out/)).toBeVisible();
    });

    it("shows sign out button with special text", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} signOutButton noSave signOutFunction={jest.fn()} />
            </Router>,
        );
        expect(wrapper.getByText(/Sign out/)).toBeDefined();
        expect(wrapper.queryAllByText(/Save and sign out/)).toStrictEqual([]);
    });

    it("passes in the sign out function correctly button", () => {
        const mockFunction = sinon.spy();
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} signOutButton signOutFunction={mockFunction} />
            </Router>,
        );
        fireEvent.click(wrapper.getByText(/Save and sign out/));
        expect(mockFunction).toHaveProperty("callCount", 1);
    });
});

describe("Check Header with navigation bar:", () => {
    it("matches Snapshot with navigation", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} navigationLinks={testProps.navigationLinks} />
                )
            </Router>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("shows the navigation with links", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} navigationLinks={testProps.navigationLinks} />
                )
            </Router>,
        );
        expect(wrapper.queryByRole(/navigation/)).not.toStrictEqual(null);
        expect(wrapper.getByRole("link", { name: /Home/ })).toBeVisible();
        expect(wrapper.getByRole("link", { name: /Deploy a questionnaire/ })).toBeVisible();
        expect(wrapper.getByRole("link", { name: /View deployment history/ })).toBeVisible();
        expect(wrapper.getByRole("link", { name: /Check Blaise status/ })).toBeVisible();
    });

    it("navigates to the homepage when clicking the 'Home' link", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} navigationLinks={testProps.navigationLinks} />
                )
            </Router>,
        );

        const homeLink = wrapper.getByRole("link", { name: /Home/ });

        fireEvent.click(homeLink);
        expect(history.location.pathname).toEqual("/");
    });

    it("navigates to the homepage when clicking the 'Deploy a questionnaire' link", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} navigationLinks={testProps.navigationLinks} />
                )
            </Router>,
        );

        const deployLink = wrapper.getByRole("link", { name: /Deploy a questionnaire/ });

        fireEvent.click(deployLink);
        expect(history.location.pathname).toEqual("/deploy");
    });

    it("navigates to the homepage when clicking the 'View deployment history' link", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} navigationLinks={testProps.navigationLinks} />
                )
            </Router>,
        );

        const historyLink = wrapper.getByRole("link", { name: /View deployment history/ });

        fireEvent.click(historyLink);
        expect(history.location.pathname).toEqual("/history");
    });

    it("navigates to the homepage when clicking the 'Check Blaise status' link", () => {
        const history = createMemoryHistory();
        const wrapper = render(
            <Router location={history.location} navigator={history}>
                <Header title={testProps.title} navigationLinks={testProps.navigationLinks} />
                )
            </Router>,
        );

        const statusLink = wrapper.getByRole("link", { name: /Check Blaise status/ });

        fireEvent.click(statusLink);
        expect(history.location.pathname).toEqual("/status");
    });
});
