import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const setup = () => {
    return {
        ...render(<Footer />),
    };
};

describe("Footer", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the ONS logo with the correct accessible name", () => {
            setup();
            const logo = screen.getByRole("img", { name: /office for national statistics/i });

            expect(logo).toBeVisible();
        });

        it("should render as a semantic 'contentinfo' landmark", () => {
            setup();
            expect(screen.getByRole("contentinfo")).toBeInTheDocument();
        });
    });
});
