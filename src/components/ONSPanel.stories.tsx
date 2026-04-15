import type { Meta, StoryObj } from "@storybook/react";
import { ONSPanel } from "./ONSPanel";

const meta = {
    title: "Components/Panel",
    component: ONSPanel,
    tags: ["autodocs"],
    argTypes: {
        children: { control: false },
        status: {
            control: "select",
            options: ["success", "error", "warn", "info"],
        },
    },
} satisfies Meta<typeof ONSPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
    render: (args) => <ONSPanel {...args} />,
    args: {
        children: <p>Some message in a panel</p>,
    },
};

export const Success: Story = {
    render: (args) => <ONSPanel {...args} />,
    args: {
        status: "success",
        bigIcon: true,
        children: (
            <div>
                <h1>Title in a panel</h1>
                <p>And then some text</p>
            </div>
        ),
    },
};

export const Error: Story = {
    render: (args) => <ONSPanel {...args} />,
    args: {
        status: "error",
        children: <p>Some message in an error panel</p>,
    },
};

export const Warn: Story = {
    render: (args) => <ONSPanel {...args} />,
    args: {
        status: "warn",
        children: <p>All data will be removed</p>,
    },
};

export const Spacious: Story = {
    render: (args) => <ONSPanel {...args} />,
    args: {
        status: "info",
        children: <p>So much room for activities!</p>,
        spacious: true,
    },
};
