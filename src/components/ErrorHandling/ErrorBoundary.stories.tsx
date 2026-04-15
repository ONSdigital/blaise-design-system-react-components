import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ErrorBoundary } from "./ErrorBoundary";

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
                Click Me to Trigger Panel Error
            </button>
        );
    }
};

const meta = {
    title: "Components/Error Boundary/Panel",
    component: ErrorBoundary,
    tags: ["autodocs"],
    argTypes: {
        children: { control: false },
        errorMessageText: { control: "text" },
    },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Panel: Story = {
    args: {
        children: <DodgyComponent />,
        errorMessageText: "D'oh!",
    },
};
