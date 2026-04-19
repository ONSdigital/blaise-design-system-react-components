import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { SummaryGroupTable, SummaryItemRow, GroupedSummary } from "./ONSSummary";

type SummaryGroupTableProps = ComponentProps<typeof SummaryGroupTable>;
type SummaryItemRowProps = ComponentProps<typeof SummaryItemRow>;

const setupTable = (overrideProps: Partial<SummaryGroupTableProps> = {}) => {
    const props: SummaryGroupTableProps = {
        groupedSummary: new GroupedSummary([{ title: "test", records: { foo: "bar" } }]),
        ...overrideProps,
    };

    return {
        props,
        ...render(<SummaryGroupTable groupedSummary={props.groupedSummary} />),
    };
};

const setupRow = (overrideProps: Partial<SummaryItemRowProps> = {}) => {
    const props: SummaryItemRowProps = {
        fieldName: "foo",
        fieldValue: "bar",
        ...overrideProps,
    };

    return {
        props,
        ...render(
            <table>
                <tbody>
                    <SummaryItemRow
                        fieldName={props.fieldName}
                        fieldValue={props.fieldValue}
                    />
                </tbody>
            </table>,
        ),
    };
};

describe("SummaryGroupTable", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setupTable();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the group title and record values", () => {
            setupTable();
            expect(screen.getByText(/test/i)).toBeVisible();
            expect(screen.getByText(/foo/i)).toBeVisible();
            expect(screen.getByText(/bar/i)).toBeVisible();
        });
    });
});

describe("SummaryItemRow", () => {
    describe("Rendering", () => {
        it("should match the snapshot", () => {
            const { asFragment } = setupRow();

            expect(asFragment()).toMatchSnapshot();
        });

        it("should display the field name and its corresponding value", () => {
            const { props } = setupRow();
            const fieldNameRegex = new RegExp(props.fieldName, "i");
            const fieldValueRegex = new RegExp(props.fieldValue as string, "i");

            // The actual assertion is missing in the original, but for consistency, let's add:
            expect(screen.getByText(fieldNameRegex)).toBeVisible();
            expect(screen.getByText(fieldValueRegex)).toBeVisible();
        });
    });
});

describe("GroupedSummary Logic", () => {
    describe("Props", () => {
        it("should flatten multiple summary groups into a single array of record objects", () => {
            const groupedSummary = new GroupedSummary([
                { title: "Group 1", records: { foo: "bar" } },
                { title: "Group 2", records: { fwibble: "fish" } },
            ]);
            const expectedCsv = [
                {
                    foo: "bar",
                    fwibble: "fish",
                },
            ];

            expect(groupedSummary.csv()).toEqual(expectedCsv);
        });
    });
});
