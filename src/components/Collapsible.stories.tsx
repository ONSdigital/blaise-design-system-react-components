import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible } from "./Collapsible";

const meta = {
    title: "Components/Collapsible",
    component: Collapsible,
    tags: ["autodocs"],
    argTypes: {
        title: { control: 'text' },
        id: { control: 'text' },
    },
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <Collapsible {...args} />,
    args: {
        title: "What is the meaning of life, the universe, and everything?",
        children: <p>42</p>,
    },
};
