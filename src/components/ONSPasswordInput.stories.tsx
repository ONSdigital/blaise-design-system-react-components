import { useState, ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ONSPasswordInput } from "./ONSPasswordInput";

const meta = {
    title: "Components/Password Input",
    component: ONSPasswordInput,
    argTypes: {
        onChange: {
            action: "changed",
        },
    },
} satisfies Meta<typeof ONSPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [currentValue, setCurrentValue] = useState(args.value);

        return (
            <ONSPasswordInput
                {...args}
                value={currentValue}
                onChange={(e: ChangeEvent<HTMLInputElement>, val: string) => {
                    setCurrentValue(val);
                    args.onChange?.(e, val);
                }}
            />
        );
    },
    args: {
        value: "",
        label: "Password",
        inputId: "password",
        autoFocus: true,
    },
};
