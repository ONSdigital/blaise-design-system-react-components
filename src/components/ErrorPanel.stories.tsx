import { ErrorPanel } from "./ErrorPanel";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Error Panel",
  component: ErrorPanel,
  argTypes: {
    text: {
      control: "text",
    },
  },
} satisfies Meta<typeof ErrorPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "error-panel",
  },
};

export const CustomMessage: Story = {
  args: {
    id: "error-panel-survey",
    text: "I'm sorry, Dave. I'm afraid I can't do that.",
  },
};
