import { useState, ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ONSTextInput } from "./ONSTextInput";

const meta = {
    title: "Components/Text Input",
    component: ONSTextInput,
    tags: ["autodocs"],
    argTypes: {
        onChange: { action: "changed" },
        autoFocus: { control: "boolean" },
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setCurrentValue(e.target.value);
                    args.onChange?.(e);
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
