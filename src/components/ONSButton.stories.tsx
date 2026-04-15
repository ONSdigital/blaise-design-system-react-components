import type { Meta, StoryObj } from "@storybook/react";
import { ONSButton } from "./ONSButton";

const meta = {
    title: "Components/Button",
    component: ONSButton,
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
        primary: { control: "boolean" },
        small: { control: "boolean" },
        loading: { control: "boolean" },
        hidden: { control: "boolean" },
    },
} satisfies Meta<typeof ONSButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: "Primary Button",
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        label: "Secondary Button",
    },
};

export const Small: Story = {
    args: {
        ...Primary.args,
        label: "Small Button",
        small: true,
    },
};

export const Loading: Story = {
    args: {
        ...Primary.args,
        label: "Loading Button",
        loading: true,
    },
};

export const Hidden: Story = {
    args: {
        ...Primary.args,
        label: "Hidden Button",
        hidden: true,
    },
};
