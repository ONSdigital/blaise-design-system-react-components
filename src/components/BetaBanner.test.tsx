import { render, screen } from "@testing-library/react";
import { BetaBanner } from "./BetaBanner";

const setup = () => {
    return {
        ...render(<BetaBanner />),
    };
};

describe("BetaBanner", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the 'BETA' text", () => {
            setup();
            expect(screen.getByText(/BETA/i)).toBeVisible();
        });

        it("should display the BETA service message", () => {
            setup();
            const message = screen.getByText(/This is a new service/i);

            expect(message).toBeVisible();
        });
    });
});
