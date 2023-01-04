import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ONSSelect } from "./ONSSelect";

describe("ONS Select Test", () => {
    const Selection = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
    ];

    const Props = {
        id: "select-thing",
        label: "Select From",
        value: "select value",
        options: Selection,
    };

    const changeProps = {
        id: "select-thing",
        label: "Select From",
        options: Selection,
        onChange: jest.fn(),
    };

    function wrapper(render: any, props: any) {
        return render(
            <ONSSelect
                id={props.id}
                label={props.label}
                onChange={props.onChange}
                value={props.value}
                options={props.options}
            />,
        );
    }

    it("matches Snapshot", () => {
        expect(wrapper(render, Props)).toMatchSnapshot();
    });

    it("should render with the correct label", () => {
        wrapper(render, Props);
        expect(screen.getByLabelText(Props.label)).toBeVisible();
    });

    it("should pass in and trigger callback once after one user event", async () => {
        wrapper(render, changeProps);

        const selectElement = screen.getByLabelText("Select From");
        await userEvent.selectOptions(selectElement, "Option 2");

        expect(changeProps.onChange).toHaveBeenCalledTimes(1);
    });

    it("should select 'Option 3' from the 'Select' dropdown", async () => {
        wrapper(render, changeProps);

        const selectElement = screen.getByLabelText("Select From");
        await userEvent.selectOptions(selectElement, "Option 3");

        expect(screen.getByRole("option", { name: "Option 1" }).selected).toBe(false);
        expect(screen.getByRole("option", { name: "Option 2" }).selected).toBe(false);
        expect(screen.getByRole("option", { name: "Option 3" }).selected).toBe(true);
    });
});
