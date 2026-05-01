import { render, screen } from "@testing-library/react";
import {
  SummaryGroupTable,
  SummaryItemRow,
  GroupedSummary,
  type SummaryGroupTableProps,
  type SummaryItemProps,
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
