import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ONSUpload } from "./ONSUpload";

const setup = (overrideProps = {}) => {
    const props = {
        label: "Upload",
        description: "This is the upload",
        fileName: "file.csv",
        fileID: "file",
        accept: ".csv",
        onChange: vi.fn(),
        ...overrideProps,
    };

    return {
        user: userEvent.setup(),
        props,
        ...render(
            <ONSUpload
                label={props.label}
                description={props.description}
                fileName={props.fileName}
                fileID={props.fileID}
                accept={props.accept}
                onChange={props.onChange}
            />,
        ),
    };
};

describe("ONSUpload", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the correct label and description", () => {
            const { props } = setup();

            expect(screen.getByText(props.label)).toBeVisible();
            expect(screen.getByText(props.description)).toBeVisible();
        });

        it("should apply the correct 'accept' attribute to the file input", () => {
            const { props } = setup();
            const input = screen.getByTestId("upload-input");

            expect(input).toHaveAttribute("accept", props.accept);
        });
    });

    describe("Interactions", () => {
        it("should trigger the onChange handler when a file is selected", async () => {
            const { user, props } = setup();
            const input = screen.getByTestId("upload-input");
            const file1 = new File(["(⌐□_□)"], "test1.csv", { type: "text/csv" });
            const file2 = new File(["(⌐□_□)"], "test2.csv", { type: "text/csv" });

            await user.upload(input, file1);
            await user.upload(input, file2);
            expect(props.onChange).toHaveBeenCalledTimes(2);
        });
    });
});
