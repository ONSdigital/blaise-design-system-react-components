import { render, screen } from "@testing-library/react";
import { NotProductionWarning } from "./NotProductionWarning";

describe("not production warning test", () => {
    it("matches Snapshot", () => {
        expect(render(<NotProductionWarning />)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        const { container } = render(<NotProductionWarning />);
        expect(container).toBeDefined();
    });

    it("should display warning paragraph text", () => {
        render(<NotProductionWarning />);
        expect(
            screen.getByText(
                /This is not a production environment. Do not upload any production data to this service./,
            ),
        ).toBeVisible();
    });
});
