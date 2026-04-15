import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
    title: "Components/Accordion",
    component: Accordion,
    tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <Accordion {...args} />,
    args: {
        ContentId: "example-accordion", 
        Expandables: [
            {
                contentId: "the-hitchhikers-guide-to-the-galaxy,",
                title: "What is the meaning of life, the universe, and everything?",
                content: <p>42</p>,
            },
            {
                contentId: "monty-python-and-the-holy-grail,",
                title: "What is the airspeed velocity of an unladen swallow?",
                content: <p>African or European?</p>,
            },
        ],
    },
};
