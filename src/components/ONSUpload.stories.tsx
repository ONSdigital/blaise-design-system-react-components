import React from "react";
import { ComponentStory, Meta } from "@storybook/react-webpack5";
import { ONSUpload } from "./ONSUpload";

export default {
    component: ONSUpload,
    title: "Components/Upload",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ONSUpload> = (args) => <ONSUpload {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    label: "Upload",
    description: "Upload a file with the following extension: .pdf",
};
