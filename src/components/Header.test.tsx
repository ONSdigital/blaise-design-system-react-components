import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe.only("Check default Header:", () => {
    it("matches Snapshot", () => {
        const wrapper = render(
            <Header title={testProps.title} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it("should render with the title displayed", () => {
        render(
            <Header title={testProps.title} />,
        );
        expect(screen.getByText(testProps.title)).toBeVisible();
    });

    it("should not show the signout button by default", () => {
        render(
            <Header title={testProps.title} />,
        );
        expect(screen.queryAllByText(/Save and sign out/)).toStrictEqual([]);
        expect(screen.queryAllByText(/Sign out/)).toStrictEqual([]);
    });

    it("should not show the navigation by default", () => {
        render(
            <Header title={testProps.title} />,
        );
        expect(screen.queryByRole(/navigation/)).toStrictEqual(null);
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
        render(
            <Header title={testProps.title} signOutButton signOutFunction={jest.fn()} />,
        );
        expect(screen.getByText(/Save and sign out/)).toBeVisible();
    });

    it("shows sign out button with special text", () => {
        render(
            <Header title={testProps.title} signOutButton noSave signOutFunction={jest.fn()} />,
        );
        expect(screen.getByText(/Sign out/)).toBeDefined();
        expect(screen.queryAllByText(/Save and sign out/)).toStrictEqual([]);
    });

    it("passes in the sign out function correctly button", async () => {
        const mockFunction = jest.fn();

        render(
            <Header title={testProps.title} signOutButton signOutFunction={mockFunction} />,
        );
        const signOutButton = screen.getByText(/Save and sign out/);
        await userEvent.click(signOutButton);

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
        render(
            <Header title={testProps.title} navigationLinks={testProps.navigationLinks} currentLocation="/" />,
        );
        expect(screen.queryByRole(/navigation/)).not.toStrictEqual(null);
        expect(screen.getByRole("link", { name: /Home/ })).toBeVisible();
        expect(screen.getByRole("link", { name: /Deploy a questionnaire/ })).toBeVisible();
        expect(screen.getByRole("link", { name: /View deployment history/ })).toBeVisible();
        expect(screen.getByRole("link", { name: /Check Blaise status/ })).toBeVisible();
    });

    it("has navigation links with IDs for integrated tests)", () => {
        render(
            <Header title={testProps.title} navigationLinks={testProps.navigationLinks} currentLocation="/" />,
        );
        expect(screen.queryByRole(/navigation/)).not.toStrictEqual(null);
        expect(screen.getByRole("link", { name: /Home/ })).toHaveAttribute("id", "home-link");
        expect(screen.getByRole("link", { name: /Deploy a questionnaire/ })).toHaveAttribute("id", "deploy-questionnaire-link");
        expect(screen.getByRole("link", { name: /View deployment history/ })).toHaveAttribute("id", "audit-logs-link");
        expect(screen.getByRole("link", { name: /Check Blaise status/ })).toHaveAttribute("id", "blaise-status-link");
    });

    it("shows active link", () => {
        render(
            <Header title={testProps.title} navigationLinks={testProps.navigationLinks} currentLocation="/deploy" />,
        );
        expect(screen.getByRole("link", { name: /Deploy a questionnaire/ }).parentElement).toHaveClass("ons-navigation__item--active");
    });
});
