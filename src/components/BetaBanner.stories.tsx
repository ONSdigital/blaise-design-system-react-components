import type { Meta, StoryObj } from "@storybook/react-vite";
import { BetaBanner } from "./BetaBanner";

const meta = {
    title: "Components/Beta Banner",
    component: BetaBanner,
} satisfies Meta<typeof BetaBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        feedbackLink: "https://ons.service-now.com/",
    },
};

export const CustomLink: Story = {
    args: {
        feedbackLink: "https://example.com/feedback",
    },
};
