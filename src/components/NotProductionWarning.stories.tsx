import type { Meta, StoryObj } from "@storybook/react";
import { NotProductionWarning } from "./NotProductionWarning";

const meta = {
    title: "Components/Not Production Warning",
    component: NotProductionWarning,
    tags: ["autodocs"],
} satisfies Meta<typeof NotProductionWarning>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
