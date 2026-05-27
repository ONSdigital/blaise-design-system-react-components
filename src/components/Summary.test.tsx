import { render, screen } from "@testing-library/react";

import {
  GroupedSummary,
  SummaryGroupTable,
  type SummaryGroupTableProps,
  type SummaryItemProps,
  SummaryItemRow,
  type SummaryRenderableRecord,
} from "./Summary";

const setup = (records: Record<string, string | number | boolean | null | undefined>) => {
  const summaryGroup = new GroupedSummary([
    {
      title: "Test Group",
      records: records,
    },
  ]);

  const props: SummaryGroupTableProps = {
    id: "summary",
    groupedSummary: summaryGroup,
  };

  return render(<SummaryGroupTable {...props} />);
};

describe("SummaryGroupTable", () => {
  describe("rendering", () => {
    it("renders string and numeric values", () => {
      setup({
        Name: "John Doe",
        Age: 30,
      });

      expect(screen.getByText("Name")).toBeVisible();
      expect(screen.getByText("John Doe")).toBeVisible();

      expect(screen.getByText("Age")).toBeVisible();
      expect(screen.getByText("30")).toBeVisible();
    });

    it("renders a SummaryRenderableRecord using its display value", () => {
      const renderable: SummaryRenderableRecord = {
        display: <strong data-testid="renderable-display">Rich Value</strong>,
        csv: "Rich Value",
      };

      const summaryGroup = new GroupedSummary([
        { title: "Test Group", records: { Label: renderable } },
      ]);

      render(
        <SummaryGroupTable
          id="summary"
          groupedSummary={summaryGroup}
        />,
      );

      expect(screen.getByTestId("renderable-display")).toBeVisible();
      expect(screen.getByTestId("renderable-display")).toHaveTextContent("Rich Value");
    });

    it("applies an additional className to the root element", () => {
      const summaryGroup = new GroupedSummary([{ title: "Test Group", records: { Key: "Val" } }]);
      const { container } = render(
        <SummaryGroupTable
          className="ons-u-mt-m"
          groupedSummary={summaryGroup}
        />,
      );

      expect(container.firstChild).toHaveClass("ons-summary", "ons-u-mt-m");
    });

    it("uses rowsId as the dl id when provided", () => {
      const summaryGroup = new GroupedSummary([
        { title: "Test Group", records: { Key: "Val" }, rowsId: "custom-dl-id" },
      ]);

      render(
        <SummaryGroupTable
          id="summary"
          groupedSummary={summaryGroup}
        />,
      );

      expect(document.getElementById("custom-dl-id")).toBeInTheDocument();
    });

    it("renders a preamble-only group without a dl", () => {
      const summaryGroup = new GroupedSummary([
        { title: "Info", preamble: <p data-testid="preamble-text">Some context.</p> },
      ]);

      render(<SummaryGroupTable groupedSummary={summaryGroup} />);

      expect(screen.getByTestId("preamble-text")).toBeVisible();
      expect(document.querySelector("dl")).not.toBeInTheDocument();
    });
  });

  describe("edge cases", () => {
    it("renders 'Yes' and 'No' for boolean values", () => {
      setup({
        "Is Registered": true,
        "Is Active": false,
      });

      expect(screen.getByText("Is Registered")).toBeVisible();
      expect(screen.getByText("Yes")).toBeVisible();

      expect(screen.getByText("Is Active")).toBeVisible();
      expect(screen.getByText("No")).toBeVisible();
    });

    it("renders 'Not provided' for null, undefined and empty strings", () => {
      setup({
        "Missing Null": null,
        "Missing Undefined": undefined,
        "Empty String": "",
      });

      expect(screen.getByText("Missing Null")).toBeVisible();
      expect(screen.getByText("Missing Undefined")).toBeVisible();
      expect(screen.getByText("Empty String")).toBeVisible();

      const fallbackElements = screen.getAllByText("Not provided");

      expect(fallbackElements).toHaveLength(3);
    });
  });

  describe("IDs and test IDs", () => {
    it("applies the provided ID and data-testid to the root container", () => {
      setup({ Test: "Value" });
      const table = screen.getByTestId("summary-summary");

      expect(table).toBeInTheDocument();
      expect(table).toHaveAttribute("id", "summary");
    });

    it("applies data-testids to rows and values based on the root ID", () => {
      setup({ "User Role": "Admin" });

      const row = screen.getByTestId("summary-Test-Group-User-Role-row");
      const value = screen.getByTestId("summary-Test-Group-User-Role-value");

      expect(row).toBeInTheDocument();
      expect(value).toBeInTheDocument();
      expect(value).toHaveTextContent("Admin");
    });

    it("does not apply data-testids when the root ID is omitted", () => {
      const summaryGroup = new GroupedSummary([{ title: "Group", records: { Key: "Val" } }]);
      const props: SummaryGroupTableProps = {
        groupedSummary: summaryGroup,
      };
      const { container } = render(<SummaryGroupTable {...props} />);

      const root = container.firstChild as HTMLElement;

      expect(root).not.toHaveAttribute("data-testid");

      const row = document.querySelector(".ons-summary__item");

      expect(row).not.toHaveAttribute("data-testid");
    });
  });

  describe("CSV export", () => {
    it("reduces the groups into a single CSV row", () => {
      const summary = new GroupedSummary([
        { title: "Personal", records: { Name: "Alice" } },
        { title: "Status", records: { Active: true, Notes: null } },
      ]);

      const csvData = summary.csv();

      expect(csvData).toEqual([
        {
          Name: "Alice",
          Active: true,
          Notes: null,
        },
      ]);
    });

    it("extracts the csv value from a SummaryRenderableRecord", () => {
      const summary = new GroupedSummary([
        {
          title: "Personal",
          records: {
            Name: { display: <strong>Alice</strong>, csv: "Alice" },
            NoExport: { display: <span>hidden</span> },
          },
        },
      ]);

      const csvData = summary.csv();

      expect(csvData).toEqual([{ Name: "Alice", NoExport: undefined }]);
    });

    it("skips preamble-only groups with no records", () => {
      const summary = new GroupedSummary([
        { title: "Intro", preamble: <p>Some context.</p> },
        { title: "Data", records: { Key: "Value" } },
      ]);

      const csvData = summary.csv();

      expect(csvData).toEqual([{ Key: "Value" }]);
    });
  });
});

describe("SummaryItemRow", () => {
  it("renders React elements without wrapping them in a text span", () => {
    const props: SummaryItemProps = {
      fieldName: "Custom JSX",
      fieldValue: <strong data-testid="custom-jsx">Complex Data</strong>,
    };

    render(
      <dl>
        <SummaryItemRow {...props} />
      </dl>,
    );

    const customElement = screen.getByTestId("custom-jsx");

    expect(customElement).toBeVisible();
    expect(customElement).toHaveTextContent("Complex Data");
    expect(customElement.tagName).toBe("STRONG");
    expect(customElement.parentElement).toHaveClass("ons-summary__values");
    expect(customElement.parentElement).not.toHaveClass("ons-summary__text");
  });
});
