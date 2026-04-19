import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExternalLink } from "./ExternalLink";

const meta = {
    title: "Components/External Link",
    component: ExternalLink,
} satisfies Meta<typeof ExternalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Go Bing it!",
        link: "https://bing.com",
        ariaLabel: "Navigate to the Bing homepage",
        id: "bing-link",
    },
};

export const ONS: Story = {
    args: {
        text: "Office for National Statistics",
        link: "https://www.ons.gov.uk",
        ariaLabel: "Visit the ONS homepage",
        id: "ons-link",
    },
};
