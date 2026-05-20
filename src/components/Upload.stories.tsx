import { Upload } from "./Upload";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Upload",
  component: Upload,
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Upload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Upload",
    description: "Upload a file with the following extension: pdf",
    name: "file-upload",
    id: "upload",
    accept: ".pdf",
  },
};

export const Disabled: Story = {
  args: {
    label: "Upload",
    description: "Go on, try it...",
    name: "file-upload",
    id: "upload-disabled",
    accept: ".pdf",
    disabled: true,
  },
};
