import {
    cleanup, render, waitFor, screen, fireEvent,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React, { useState } from "react";
import DefaultErrorBoundary from "./DefaultErrorBoundary";

describe("Default Error Boundary", () => {
    it("should render children correctly when there are no issues", async () => {
        render(
            <DefaultErrorBoundary>
                <p>Simple text</p>
            </DefaultErrorBoundary>,
        );

        await waitFor(() => {
            expect(screen.getByText(/Simple text/i)).toBeDefined();
        });
    });

    it("should display default error is any issues occur", async () => {
        const DodgyComponent = () => {
            const [error, setError] = useState(false);
            if (error) {
                throw new Error("I crashed!");
            } else {
                return <button type="button" onClick={() => setError(true)}>Click Me</button>;
            }
        };

        render(
            <DefaultErrorBoundary>
                <DodgyComponent />
            </DefaultErrorBoundary>,
        );

        await act(async () => {
            fireEvent.click(screen.getByText(/click me/i));
        });

        await waitFor(() => {
            expect(screen.getByText(/Sorry, there is a problem with the service/i)).toBeDefined();
        });
    });

    afterAll(() => {
        jest.clearAllMocks();
        cleanup();
    });
});
