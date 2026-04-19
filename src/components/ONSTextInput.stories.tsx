import { useState, ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ONSTextInput } from "./ONSTextInput";

const meta = {
    title: "Components/Text Input",
    component: ONSTextInput,
    argTypes: {
        onChange: { action: "changed" },
        onClick: { action: "clicked" },
    },
} satisfies Meta<typeof ONSTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [currentValue, setCurrentValue] = useState(args.value || "");

        return (
            <ONSTextInput
                {...args}
                value={currentValue}
                onChange={(e: ChangeEvent<HTMLInputElement>, label?: string) => {
                    setCurrentValue(e.target.value);
                    args.onChange?.(e, label);
                }}
            />
        );
    },
    args: {
        label: "Text Input",
        placeholder: "Type here",
        autoFocus: true,
        value: "",
    },
};
