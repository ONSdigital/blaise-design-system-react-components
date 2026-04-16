import { useState, ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ONSSelect, Props } from "./ONSSelect"; 

const Selection = [
    { label: "LMS", value: "lms" },
    { label: "OPN", value: "opn" },
    { label: "DST", value: "dst" },
];

const meta: Meta<Props> = {
    title: "Components/Select",
    component: ONSSelect,
    tags: ["autodocs"],
    argTypes: {
        onChange: { action: "changed" },
    },
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState(args.value || "");

        return (
            <ONSSelect
                {...args}
                value={selectedValue}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setSelectedValue(e.target.value);
                    args.onChange?.(e);
                }}
            />
        );
    },
    args: {
        id: "select-survey",
        label: "Select survey",
        options: Selection,
        value: Selection[0].value,
    },
};
