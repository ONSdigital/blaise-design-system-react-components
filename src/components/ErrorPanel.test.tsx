import { render } from "@testing-library/react";
import { ErrorPanel, type Props } from "./ErrorPanel";

const setup = (overrideProps: Partial<Props> = {}) => {
  return {
    props: overrideProps,
    ...render(<ErrorPanel {...overrideProps} />),
  };
};

describe("ErrorPanel", () => {
  describe("Rendering", () => {
    it("should match the snapshot", () => {
      const { asFragment } = setup();

      expect(asFragment()).toMatchSnapshot();
    });

    it("should render the error panel container", () => {
      const { container } = setup();

      expect(container).not.toBeEmptyDOMElement();
    });

    it("should return null when hidden is true", () => {
      const { container } = setup({ hidden: true });

      expect(container.firstChild).toBeNull();
    });
  });
});
