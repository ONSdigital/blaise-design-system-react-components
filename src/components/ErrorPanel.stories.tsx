import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorPanel } from "./ErrorPanel";

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
  args: {},
};

export const CustomMessage: Story = {
  args: {
    text: "We could not find the survey data you were looking for. Please check the ID and try again.",
  },
};
