import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Upload, type Props } from "./Upload";

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    label: "Upload",
    description: "This is the upload",
    fileName: "file.csv",
    id: "upload",
    accept: ".csv",
    onChange: vi.fn(),
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<Upload {...props} />),
  };
};

describe("Upload", () => {
  describe("rendering", () => {
    it("renders the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("shows the label and description", () => {
      const { props } = setup();

      expect(screen.getByText(props.label)).toBeVisible();
      expect(screen.getByText(props.description)).toBeVisible();
    });

    it("applies the accept attribute to the file input", () => {
      const { props } = setup();
      const input = screen.getByTestId("upload-input");

      expect(input).toHaveAttribute("accept", props.accept);
    });

    it("applies the provided ID and data-testid", () => {
      setup({ id: "upload-custom" });
      const input = screen.getByTestId("upload-custom-input");

      expect(input).toHaveAttribute("id", "upload-custom");
    });

    it("does not apply a data-testid when no ID is provided", () => {
      render(
        <Upload
          label="No ID"
          description="desc"
          fileName="test"
          accept=".csv"
        />,
      );
      const input = screen.getByLabelText("No ID");

      expect(input).not.toHaveAttribute("data-testid");
    });
  });

  describe("props", () => {
    it("falls back to a generated ID when no ID is provided", () => {
      render(
        <Upload
          label="Generated ID"
          description="desc"
          fileName="test"
          accept=".csv"
        />,
      );
      const input = screen.getByLabelText("Generated ID");

      expect(input).toHaveAttribute("id");
      expect(input.getAttribute("id")).toMatch(/upload-.*$/);
    });
  });

  describe("interactions", () => {
    it("calls onChange when a file is selected", async () => {
      const { user, props } = setup();
      const input = screen.getByTestId("upload-input");
      const file = new File(["(⌐□_□)"], "test.csv", { type: "text/csv" });

      await user.upload(input, file);

      expect(props.onChange).toHaveBeenCalledTimes(1);
      expect(props.onChange).toHaveBeenCalledWith(expect.anything(), "Upload");
    });
  });
});
