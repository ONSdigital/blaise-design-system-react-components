import type { Meta, StoryObj } from "@storybook/react-vite";
import { ONSUpload } from "./ONSUpload";

const meta = {
    title: "Components/Upload",
    component: ONSUpload,
    argTypes: {
        onChange: { action: "changed" },
    },
} satisfies Meta<typeof ONSUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Upload",
        description: "Upload a file with the following extension: .pdf",
        fileName: "file-upload",
        fileID: "file-upload-input",
        accept: ".pdf",
    },
};
