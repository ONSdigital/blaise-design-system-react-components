import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingPanel } from "./LoadingPanel";

const meta = {
  title: "Components/Loading Panel",
  component: LoadingPanel,
} satisfies Meta<typeof LoadingPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "loading-panel",
  },
};

export const CustomMessage: Story = {
  args: {
    id: "loading-panel-message",
    message: "Waiting till the cows come home...",
  },
};

export const Hidden: Story = {
  args: {
    id: "loading-panel-hidden",
    hidden: true,
  },
};
