import type { Meta, StoryObj } from "@storybook/react";
import { ONSLoadingPanel } from "./ONSLoadingPanel";

const meta = {
    title: "Components/Loading Panel",
    component: ONSLoadingPanel,
    tags: ["autodocs"],
    argTypes: {
        message: { control: "text" },
        hidden: { control: "boolean" },
    },
} satisfies Meta<typeof ONSLoadingPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultMessage: Story = {
    args: {},
};

export const CustomMessage: Story = {
    args: {
        message: "Waiting till the cows come home...",
    },
};

export const Hidden: Story = {
    args: {
        hidden: true,
    },
};
