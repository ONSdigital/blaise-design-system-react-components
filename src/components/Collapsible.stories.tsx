import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible } from "./Collapsible";

const meta = {
    title: "Components/Collapsible",
    component: Collapsible,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: false, 
        }
    },
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "How much power is required for a single temporal displacement?",
        children: <p>1.21 Gigawatts! (Great Scott!)</p>,
    },
};
