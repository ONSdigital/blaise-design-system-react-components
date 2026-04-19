import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { ONSPanel } from "./ONSPanel";

type PanelProps = ComponentProps<typeof ONSPanel>;

const setup = (overrideProps: Partial<PanelProps> = {}) => {
    const props: PanelProps = {
        children: <p data-testid="panel-child">Panel Content</p>,
        testID: "test-panel",
        ...overrideProps,
    };

    return {
        props,
        ...render(<ONSPanel {...props} />),
    };
};

describe("ONSPanel", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should match the snapshot for a success status panel", () => {
            const { asFragment } = setup({ status: "success" });

            expect(asFragment()).toMatchSnapshot();
        });

        it("should match the snapshot for a warning status panel", () => {
            const { asFragment } = setup({ status: "warn" });

            expect(asFragment()).toMatchSnapshot();
        });

        it("should match the snapshot for a big icon success panel", () => {
            const { asFragment } = setup({ status: "success", bigIcon: true });

            expect(asFragment()).toMatchSnapshot();
        });

        it("should render the provided children within the panel", () => {
            const { props } = setup();
            const parentPanel = screen.getByTestId(props.testID!);
            const childElement = screen.getByTestId("panel-child");

            expect(parentPanel).toContainElement(childElement);
        });
    });

    describe("Props", () => {
        it("should append the success class when status is 'success'", () => {
            const { props } = setup({ status: "success" });
            const panel = screen.getByTestId(props.testID!);

            expect(panel).toHaveClass("ons-panel--success");
        });

        it("should append the spacious class when spacious is true", () => {
            const { props } = setup({ status: "error", spacious: true });
            const panel = screen.getByTestId(props.testID!);

            expect(panel).toHaveClass("ons-panel--spacious");
        });

        it("should render the extra-large margin class on the icon when bigIcon is true", () => {
            const { props } = setup({ status: "success", bigIcon: true });
            const panel = screen.getByTestId(props.testID!);
            const iconElement = panel.querySelector(".ons-svg-icon-margin--xl");

            expect(iconElement).toBeVisible();
        });
    });
});
