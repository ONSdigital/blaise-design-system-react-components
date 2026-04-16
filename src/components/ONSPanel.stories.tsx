import type { Meta, StoryObj } from "@storybook/react";
import { ONSPanel } from "./ONSPanel";

const meta = {
    title: "Components/Panel",
    component: ONSPanel,
    tags: ["autodocs"],
    argTypes: {
        children: { control: false },
    },
} satisfies Meta<typeof ONSPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        children: <p>Some message in an info panel</p>,
    },
};

export const Success: Story = {
    args: {
        status: "success",
        bigIcon: true,
        children: (
            <div>
                <h1>Title in a success panel</h1>
                <p>And then some text</p>
            </div>
        ),
    },
};

export const Error: Story = {
    args: {
        status: "error",
        children: <p>Some message in an error panel</p>,
    },
};

export const Warn: Story = {
    args: {
        status: "warn",
        children: <p>{"It's a trap!"}</p>,
    },
};

export const Spacious: Story = {
    args: {
        status: "info",
        children: <p>So much room for activities!</p>,
        spacious: true,
    },
};
