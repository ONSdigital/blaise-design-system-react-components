import { Footer } from "./Footer";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "footer",
  },
};
