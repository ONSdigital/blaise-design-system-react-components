import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { DefaultErrorBoundary, type Props } from "./DefaultErrorBoundary";

const DodgyComponent = () => {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("I intentionally crashed for testing!");
  }

  return (
    <button
      type="button"
      onClick={() => setShouldCrash(true)}
    >
      Click Me
    </button>
  );
};

const setup = (overrideProps: Partial<Props> = {}) => {
  const props: Props = {
    children: <p>Simple text</p>,
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<DefaultErrorBoundary {...props} />),
  };
};

describe("DefaultErrorBoundary", () => {
  describe("When there are no rendering errors", () => {
    it("should render the provided children correctly", () => {
      setup();

      expect(screen.getByText(/Simple text/i)).toBeVisible();
    });
  });

  describe("When a child component throws an error", () => {
    let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    });

    afterEach(() => {
      consoleErrorSpy.mockRestore();
    });

    it("should catch the error and display the default fallback message", async () => {
      const { user } = setup({ children: <DodgyComponent /> });

      const crashButton = screen.getByRole("button", { name: /click me/i });

      await user.click(crashButton);

      expect(screen.getByText(/Sorry, there is a problem with the service/i)).toBeVisible();
      expect(screen.queryByRole("button", { name: /click me/i })).not.toBeInTheDocument();
    });
  });
});
