import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { ONSLoadingPanel } from "./ONSLoadingPanel";

type LoadingPanelProps = ComponentProps<typeof ONSLoadingPanel>;

const setup = (overrideProps: Partial<LoadingPanelProps> = {}) => {
    const props: LoadingPanelProps = {
        ...overrideProps,
    };

    return {
        props,
        ...render(<ONSLoadingPanel message={props.message} />),
    };
};

describe("ONSLoadingPanel", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the default 'Loading' text when no custom message is provided", () => {
            setup();
            expect(screen.getByText(/loading/i)).toBeVisible();
        });

        it("should display the custom message when provided via props", () => {
            const customMessage = "Two hours later...";

            setup({ message: customMessage });
            expect(screen.getByText(new RegExp(customMessage, "i"))).toBeVisible();
        });
    });
});
