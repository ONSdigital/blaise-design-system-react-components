import { render } from "@testing-library/react";
import { ComponentProps } from "react";
import { ONSErrorPanel } from "./ONSErrorPanel";

type ErrorPanelProps = ComponentProps<typeof ONSErrorPanel>;

const setup = (overrideProps: Partial<ErrorPanelProps> = {}) => {
    const props: ErrorPanelProps = {
        ...overrideProps,
    } as ErrorPanelProps;

    return {
        props,
        ...render(<ONSErrorPanel {...props} />),
    };
};

describe("ONSErrorPanel", () => {
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
