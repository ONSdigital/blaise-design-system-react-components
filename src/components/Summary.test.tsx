import { render, screen } from "@testing-library/react";
import {
  SummaryGroupTable,
  SummaryItemRow,
  GroupedSummary,
  type SummaryGroupTableProps,
  type SummaryItemProps,
} from "./Summary";

const setupTable = (overrideProps: Partial<SummaryGroupTableProps> = {}) => {
  const props: SummaryGroupTableProps = {
    groupedSummary: new GroupedSummary([{ title: "test", records: { foo: "bar" } }]),
    ...overrideProps,
  };

  return {
    props,
    ...render(<SummaryGroupTable {...props} />),
  };
};

const setupRow = (overrideProps: Partial<SummaryItemProps> = {}) => {
  const props: SummaryItemProps = {
    fieldName: "foo",
    fieldValue: "bar",
    ...overrideProps,
  };

  return {
    props,
    ...render(
      <table>
        <SummaryItemRow {...props} />
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

      expect(screen.getByText(fieldNameRegex)).toBeVisible();
      expect(screen.getByText(fieldValueRegex)).toBeVisible();
    });

    it("should render complex ReactNodes (JSX) directly without wrapping in a span", () => {
      const customValue = <span data-testid="custom-node">Complex Value</span>;

      setupRow({ fieldValue: customValue });

      expect(screen.getByTestId("custom-node")).toBeVisible();
      expect(screen.queryByText("Complex Value")).toBeInTheDocument();
    });
  });
});

describe("GroupedSummary Logic", () => {
  describe("Data Formatting", () => {
    it("should merge all summary group records into a single object", () => {
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
