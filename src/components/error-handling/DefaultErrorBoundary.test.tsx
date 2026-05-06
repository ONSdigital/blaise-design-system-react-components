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

  const { children, ...rest } = props;

  return {
    user: userEvent.setup(),
    props,
    ...render(<DefaultErrorBoundary {...rest}>{children}</DefaultErrorBoundary>),
  };
};

describe("DefaultErrorBoundary", () => {
  describe("when children render without errors", () => {
    it("renders the children", () => {
      setup();
      expect(screen.getByText(/Simple text/i)).toBeVisible();
    });
  });

  describe("when a child throws an error", () => {
    let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
      consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    });

    afterEach(() => {
      consoleErrorSpy.mockRestore();
    });

    it("shows the default error message", async () => {
      const { user } = setup({ children: <DodgyComponent /> });

      const crashButton = screen.getByRole("button", { name: /click me/i });

      await user.click(crashButton);

      expect(screen.getByText(/Sorry, there is a problem with the service/i)).toBeVisible();
      expect(screen.queryByRole("button", { name: /click me/i })).not.toBeInTheDocument();

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "DefaultErrorBoundary caught an error:",
        expect.any(Error),
        expect.anything(),
      );
    });

    it("applies the provided ID and data-testid", async () => {
      const { user } = setup({ id: "default-error-boundary-custom", children: <DodgyComponent /> });

      await user.click(screen.getByRole("button", { name: /click me/i }));

      const boundaryRoot = screen.getByTestId("default-error-boundary-custom-boundary");
      const skipLink = screen.getByText(/Skip to main content/i);
      const main = screen.getByRole("main");

      expect(boundaryRoot).toHaveAttribute("id", "default-error-boundary-custom");
      expect(skipLink).toHaveAttribute("href", "#default-error-boundary-custom-main-content");
      expect(main).toHaveAttribute("id", "default-error-boundary-custom-main-content");
    });

    it("does not apply a data-testid when no ID is provided", async () => {
      const { user } = setup({ id: undefined, children: <DodgyComponent /> });

      await user.click(screen.getByRole("button", { name: /click me/i }));

      const skipLink = screen.getByText(/Skip to main content/i);
      const main = screen.getByRole("main");
      const boundaryRoot = skipLink.closest(".ons-page");

      expect(boundaryRoot).not.toHaveAttribute("data-testid");
      expect(main.id).toMatch(/^default-error-boundary-main-content-\d+$/);
      expect(skipLink).toHaveAttribute("href", `#${main.id}`);
    });
  });
});
