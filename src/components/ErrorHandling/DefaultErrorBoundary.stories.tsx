import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DefaultErrorBoundary } from "./DefaultErrorBoundary";

const DodgyComponent = () => {
    const [error, setError] = useState(false);
    if (error) {
        throw new Error("I crashed!");
    } else {
        return (
            <button 
                type="button" 
                onClick={() => setError(true)}
            >
                Click Me to Trigger Error
            </button>
        );
    }
};

const meta = {
    title: "Components/Error Boundary/Default",
    component: DefaultErrorBoundary,
    tags: ["autodocs"],
    argTypes: {
        children: { control: false },
    },
} satisfies Meta<typeof DefaultErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <DodgyComponent />,
    },
};
