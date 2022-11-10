import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ONSTable from "./ONSTable";

describe("ONSTable", () => {
    it("renders a formatted table", async () => {
        render(
            <ONSTable columns={["column1", "column2", "column3"]} tableID="my-test-table">
                <tr>
                    <td>Value column 1</td>
                    <td>Value column 2</td>
                    <td>Value column 3</td>
                </tr>
            </ONSTable>,
        );

        await waitFor(() => {
            expect(screen.getByTestId("my-test-table")).toMatchSnapshot();
        });
    });
});
