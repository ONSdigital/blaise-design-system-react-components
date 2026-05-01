import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotProductionWarning } from "./NotProductionWarning";

const meta = {
  title: "Components/Not Production Warning",
  component: NotProductionWarning,
} satisfies Meta<typeof NotProductionWarning>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "not-production-warning",
  },
};
