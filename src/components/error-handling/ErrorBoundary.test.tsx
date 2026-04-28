import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { ErrorBoundary, type Props } from "./ErrorBoundary";

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
    errorMessageText: "Super dodgy component has failed",
    children: <p>Simple text</p>,
    ...overrideProps,
  };

  return {
    user: userEvent.setup(),
    props,
    ...render(<ErrorBoundary {...props} />),
  };
};

describe("ErrorBoundary", () => {
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

    it("should catch the error and display the fallback error message", async () => {
      const { user, props } = setup({ children: <DodgyComponent /> });
      const crashButton = screen.getByRole("button", { name: /click me/i });

      await user.click(crashButton);

      expect(screen.getByText(props.errorMessageText!)).toBeVisible();
      expect(screen.queryByRole("button", { name: /click me/i })).not.toBeInTheDocument();
    });
  });
});
