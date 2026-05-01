import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header, Props } from "./Header";

const defaultNavigationLinks = [
  { id: "nav-home", label: "Home", endpoint: "/" },
  { id: "nav-menu-one", label: "Menu #1", endpoint: "/menu1" },
  { id: "nav-menu-two", label: "Menu #2", endpoint: "/menu2" },
  { id: "nav-menu-three", label: "Menu #3", endpoint: "/menu3" },
];

const navigationLinksWithoutIds = [
  { label: "Home", endpoint: "/" },
  { label: "Menu #1", endpoint: "/menu1" },
];

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    title: "Awesome React Service Extra",
    ...overrideProps,
  } as Props;

  return {
    user: userEvent.setup(),
    props,
    ...render(<Header {...props} />),
  };
};

describe("Header", () => {
  describe("rendering", () => {
    it("renders the default snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the title", () => {
      const { props } = setup();

      expect(screen.getByText(props.title)).toBeVisible();
    });

    it("does not show the sign-out buttons", () => {
      setup();
      expect(screen.queryByText(/Save and sign out/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
    });

    it("does not show the navigation", () => {
      setup();
      expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });

    it("renders the sign-out snapshot", () => {
      const { asFragment } = setup({
        signOutButton: true,
        signOutFunction: vi.fn(),
      });

      expect(asFragment()).toMatchSnapshot();
    });

    it("renders the navigation snapshot", () => {
      const { asFragment } = setup({
        navigationLinks: defaultNavigationLinks,
        currentLocation: "/",
      });

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("applies the provided ID and data-testid to the root element", () => {
      const { container } = setup({ id: "header-custom" });
      const header = container.firstChild as HTMLElement;

      expect(header).toHaveAttribute("id", "header-custom");
      expect(screen.getByTestId("header-custom-header")).toBeInTheDocument();
    });

    it("does not apply a data-testid when no ID is provided", () => {
      const { container } = setup();
      const header = container.firstChild as HTMLElement;

      expect(header).not.toHaveAttribute("data-testid");
    });

    it("shows the 'Save and sign out' button when enabled", () => {
      setup({ signOutButton: true, signOutFunction: vi.fn() });
      expect(screen.getByText(/Save and sign out/i)).toBeVisible();
    });

    it("shows only 'Sign out' when noSave is true", () => {
      setup({ signOutButton: true, noSave: true, signOutFunction: vi.fn() });
      expect(screen.getByText(/Sign out/i)).toBeVisible();
      expect(screen.queryByText(/Save and sign out/i)).not.toBeInTheDocument();
    });

    it("shows the navigation links", () => {
      setup({ navigationLinks: defaultNavigationLinks, currentLocation: "/" });
      expect(screen.getByRole("navigation")).toBeVisible();
      expect(screen.getByRole("link", { name: /Home/i })).toBeVisible();
      expect(screen.getByRole("link", { name: /Menu #1/i })).toBeVisible();
      expect(screen.getByRole("link", { name: /Menu #2/i })).toBeVisible();
      expect(screen.getByRole("link", { name: /Menu #3/i })).toBeVisible();
    });

    it("shows navigation links without applying link IDs when they are omitted", () => {
      setup({ navigationLinks: navigationLinksWithoutIds, currentLocation: "/" });

      const homeLink = screen.getByRole("link", { name: /Home/i });

      expect(homeLink).toBeVisible();
      expect(homeLink).not.toHaveAttribute("id");
    });

    it("marks the current route as active", () => {
      setup({
        navigationLinks: defaultNavigationLinks,
        currentLocation: "/menu1",
      });
      const activeLink = screen.getByRole("link", { name: /Menu #1/i });

      expect(activeLink.parentElement).toHaveClass("ons-navigation__item--active");
    });

    it("uses createNavLink for custom routing", () => {
      const mockCreateNavLink = vi.fn((id, label, endpoint) => (
        <span
          data-testid={`custom-link-${id || label}`}
          data-url={endpoint}
        >
          {label}
        </span>
      ));

      setup({
        navigationLinks: defaultNavigationLinks,
        createNavLink: mockCreateNavLink,
      });

      expect(mockCreateNavLink).toHaveBeenCalledTimes(defaultNavigationLinks.length);

      const customElement = screen.getByTestId("custom-link-nav-home");

      expect(customElement).toBeVisible();
      expect(customElement).toHaveAttribute("data-url", "/");
      expect(screen.queryByRole("link", { name: /Home/i })).not.toBeInTheDocument();
    });

    it("shows the logo accessible names across multiple header instances", () => {
      render(
        <>
          <Header title="Header one" />
          <Header title="Header two" />
        </>,
      );

      const logos = screen.getAllByRole("img", {
        name: /office for national statistics logo/i,
      });

      expect(logos).toHaveLength(4);
    });
  });

  describe("interactions", () => {
    it("calls the sign-out function when the button is clicked", async () => {
      const { user, props } = setup({
        signOutButton: true,
        signOutFunction: vi.fn(),
      });
      const signOutBtn = screen.getByText(/Save and sign out/i);

      await user.click(signOutBtn);
      expect(props.signOutFunction).toHaveBeenCalledTimes(1);
    });
  });
});
