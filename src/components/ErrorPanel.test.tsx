import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import { ErrorPanel } from "./ErrorPanel";

type ErrorPanelProps = ComponentProps<typeof ErrorPanel>;

const setup = (overrideProps: Partial<ErrorPanelProps> = {}) => {
    const props: ErrorPanelProps = {
        ...overrideProps,
    } as ErrorPanelProps;

    return {
        props,
        ...render(<ErrorPanel {...props} />),
    };
};

describe("ErrorPanel", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should render the error panel container", () => {
            const { container } = setup();

            expect(container).not.toBeEmptyDOMElement();
        });
    });
});
