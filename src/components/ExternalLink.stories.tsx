import type { Meta, StoryObj } from "@storybook/react";
import { ExternalLink } from "./ExternalLink";

const meta = {
    title: "Components/External Link",
    component: ExternalLink,
    tags: ["autodocs"],
    argTypes: {
        text: { control: "text" },
        link: { control: "text" },
        ariaLabel: { control: "text" },
        id: { control: "text" },
    },
} satisfies Meta<typeof ExternalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <ExternalLink {...args} />,
    args: {
        text: "Go Bing it!",
        link: "https://bing.com",
        ariaLabel: "Navigate to the Bing homepage",
        id: "bing-link",
    },
};

export const ONS: Story = {
    render: (args) => <ExternalLink {...args} />,
    args: {
        text: "Office for National Statistics",
        link: "https://www.ons.gov.uk",
        ariaLabel: "Visit the ONS homepage",
        id: "ons-link",
    },
};
