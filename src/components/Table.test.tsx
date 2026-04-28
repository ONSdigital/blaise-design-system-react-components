import { render, screen } from "@testing-library/react";
import { Table, type Props } from "./Table";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
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
  };

  return {
    props,
    ...render(<Table {...props} />),
  };
};

describe("Table", () => {
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

    describe("Props", () => {
      it("should display the table caption when provided", () => {
        const captionText = "Test Table Caption";

        setup({ tableCaption: captionText });

        const caption = screen.getByText(captionText);

        expect(caption).toBeInTheDocument();
        expect(caption.tagName).toBe("CAPTION");
        expect(caption).toHaveClass("ons-table__caption");
      });

      it("should not render a caption element if tableCaption is undefined", () => {
        setup();
        expect(screen.queryByRole("caption")).not.toBeInTheDocument();
      });
    });
  });
});
