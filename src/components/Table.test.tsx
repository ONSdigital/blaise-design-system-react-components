import { render, screen } from "@testing-library/react";

import { type Props, Table } from "./Table";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    columns: ["column1", "column2", "column3"],
    id: "table",
    children: (
      <tr>
        <td>Value column 1</td>
        <td>Value column 2</td>
        <td>Value column 3</td>
      </tr>
    ),
    ...overrideProps,
  };

  const { children, ...rest } = props;

  return {
    props,
    ...render(<Table {...rest}>{children}</Table>),
  };
};

describe("Table", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the column headings", () => {
      const { props } = setup();

      props.columns.forEach((columnName) => {
        expect(screen.getByText(columnName)).toBeVisible();
      });
    });

    it("shows the rows in the table body", () => {
      setup();
      expect(screen.getByText(/Value column 1/i)).toBeVisible();
      expect(screen.getByText(/Value column 2/i)).toBeVisible();
      expect(screen.getByText(/Value column 3/i)).toBeVisible();
    });
  });

  describe("props", () => {
    it("applies the provided ID and data-testid", () => {
      setup({ id: "table-custom" });
      const table = screen.getByTestId("table-custom-table");

      expect(table).toHaveAttribute("id", "table-custom");
    });

    it("falls back to a generated ID when no ID is provided", () => {
      render(
        <Table
          columns={["col1"]}
          id={undefined}
        >
          <tr>
            <td>val</td>
          </tr>
        </Table>,
      );
      const table = screen.getByRole("table");

      expect(table).toHaveAttribute("id");
      expect(table.getAttribute("id")).toMatch(/table-.*$/);
    });

    it("does not apply a data-testid when no ID is provided", () => {
      render(
        <Table
          columns={["col1"]}
          id={undefined}
        >
          <tr>
            <td>val</td>
          </tr>
        </Table>,
      );
      const table = screen.getByRole("table");

      expect(table).not.toHaveAttribute("data-testid");
    });

    it("shows the table caption when it is provided", () => {
      const captionText = "Test Table Caption";

      setup({ tableCaption: captionText });
      const caption = screen.getByText(captionText);

      expect(caption).toBeInTheDocument();
      expect(caption.tagName).toBe("CAPTION");
      expect(caption).toHaveClass("ons-table__caption");
    });
  });
});
