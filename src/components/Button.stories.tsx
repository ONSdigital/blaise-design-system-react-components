import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
    },
} satisfies Meta<typeof Button>;

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
