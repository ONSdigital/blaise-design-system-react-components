import {
    cleanup, render, waitFor, screen, fireEvent,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

describe("Error Boundary", () => {
    it("should render children correctly when there are no issues", async () => {
        render(
            <ErrorBoundary errorMessageText="Super dodgy component has failed">
                <p>Simple text</p>
            </ErrorBoundary>,
        );

        await waitFor(() => {
            expect(screen.getByText(/Simple text/i)).toBeDefined();
        });
    });

    it("should display passed in error message is any issues occur", async () => {
        const DodgyComponent = () => {
            const [error, setError] = useState(false);
            if (error) {
                throw new Error("I crashed!");
            } else {
                return <button onClick={() => setError(true)}>Click Me</button>;
            }
        };

        render(
            <ErrorBoundary errorMessageText="Super dodgy component has failed">
                <DodgyComponent />
            </ErrorBoundary>,
        );

        await act(async () => {
            fireEvent.click(screen.getByText(/click me/i));
        });

        await waitFor(() => {
            expect(screen.getByText(/Super dodgy component has failed/i)).toBeDefined();
        });
    });

    afterAll(() => {
        jest.clearAllMocks();
        cleanup();
    });
});
