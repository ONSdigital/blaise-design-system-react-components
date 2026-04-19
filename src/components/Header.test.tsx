import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header, Props } from "./Header";

const defaultNavigationLinks = [
    { id: "home", label: "Home", endpoint: "/" },
    { id: "menu-1", label: "Menu #1", endpoint: "/menu1" },
    { id: "menu-2", label: "Menu #2", endpoint: "/menu2" },
    { id: "menu-3", label: "Menu #3", endpoint: "/menu3" },
];

const setup = (overrideProps: Partial<Props> = {}) => {
    const props: Props = {
        title: "ONS Service",
        ...overrideProps,
    } as Props;

    return {
        user: userEvent.setup(),
        props,
        ...render(<Header {...props} />),
    };
};

describe("Header", () => {
    describe("Rendering", () => {
        it("should match the snapshot with default props", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the provided title", () => {
            const { props } = setup();

            expect(screen.getByText(props.title)).toBeVisible();
        });

        it("should not display the sign-out buttons", () => {
            setup();
            expect(screen.queryByText(/Save and sign out/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
        });

        it("should not display the navigation block", () => {
            setup();
            expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
        });

        it("should match the snapshot with sign-out functionality", () => {
            const { asFragment } = setup({ signOutButton: true, signOutFunction: vi.fn() });

            expect(asFragment()).toMatchSnapshot();
        });

        it("should match the snapshot with navigation links", () => {
            const { asFragment } = setup({
                navigationLinks: defaultNavigationLinks,
                currentLocation: "/",
            });

            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe("Props", () => {
        it("should display the 'Save and sign out' button when enabled", () => {
            setup({ signOutButton: true, signOutFunction: vi.fn() });
            expect(screen.getByText(/Save and sign out/i)).toBeVisible();
        });

        it("should display 'Sign out' only when noSave is true", () => {
            setup({ signOutButton: true, noSave: true, signOutFunction: vi.fn() });
            expect(screen.getByText(/Sign out/i)).toBeVisible();
            expect(screen.queryByText(/Save and sign out/i)).not.toBeInTheDocument();
        });

        it("should display navigation block with provided links", () => {
            setup({ navigationLinks: defaultNavigationLinks, currentLocation: "/" });
            expect(screen.getByRole("navigation")).toBeInTheDocument();
            expect(screen.getByRole("link", { name: /Home/i })).toBeVisible();
            expect(screen.getByRole("link", { name: /Menu #1/i })).toBeVisible();
            expect(screen.getByRole("link", { name: /Menu #2/i })).toBeVisible();
            expect(screen.getByRole("link", { name: /Menu #3/i })).toBeVisible();
        });

        it("should apply the active class modifier to the currently active route", () => {
            setup({ navigationLinks: defaultNavigationLinks, currentLocation: "/menu1" });
            const activeLink = screen.getByRole("link", { name: /Menu #1/i });

            expect(activeLink.parentElement).toHaveClass("ons-navigation__item--active");
        });
    });

    describe("Interactions", () => {
        it("should trigger the sign out function upon click", async () => {
            const { user, props } = setup({ signOutButton: true, signOutFunction: vi.fn() });
            const signOutBtn = screen.getByText(/Save and sign out/i);

            await user.click(signOutBtn);
            expect(props.signOutFunction).toHaveBeenCalledTimes(1);
        });
    });
});
