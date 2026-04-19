import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { ONSTable } from "./ONSTable";

type TableProps = ComponentProps<typeof ONSTable>;

const setup = (overrideProps: Partial<TableProps> = {}) => {
    const props: TableProps = {
        columns: ["column1", "column2", "column3"],
        tableID: "my-test-table",
        children: (
            <tr>
                <td>Value column 1</td>
                <td>Value column 2</td>
                <td>Value column 3</td>
            </tr>
        ),
        ...overrideProps,
    } as TableProps;

    return {
        props,
        ...render(<ONSTable {...props} />),
    };
};

describe("ONSTable", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setup();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the provided column headings", () => {
            const { props } = setup();

            props.columns.forEach((columnName) => {
                expect(screen.getByText(columnName)).toBeVisible();
            });
        });

        it("should display the children rows correctly within the table body", () => {
            setup();

            expect(screen.getByText(/Value column 1/i)).toBeVisible();
            expect(screen.getByText(/Value column 2/i)).toBeVisible();
            expect(screen.getByText(/Value column 3/i)).toBeVisible();
        });

        it("should apply the correct data-testid to the table element", () => {
            const { props } = setup();

            expect(screen.getByTestId(props.tableID!)).toBeVisible();
        });
    });
});
