import { BetaBanner } from "./BetaBanner";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Beta Banner",
  component: BetaBanner,
} satisfies Meta<typeof BetaBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "beta-banner",
    feedbackLink: "https://ons.service-now.com/",
  },
};

export const CustomLink: Story = {
  args: {
    id: "beta-banner-custom-link",
    feedbackLink: "https://example.com/feedback",
  },
};
