import { ExternalLink } from "./ExternalLink";

import type { Meta, StoryObj } from "@storybook/react-vite";

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
    id: "external-link",
  },
};
