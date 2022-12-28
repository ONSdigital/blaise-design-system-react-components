import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { ONSTextInput } from "./ONSTextInput";

export default {
    component: ONSTextInput,
    title: "Components/Text Input",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ONSTextInput> = (args) => <ONSTextInput {...args} />;

// 👇 Each story then reuses that template
export const DefaultMessage = Template.bind({});

DefaultMessage.args = {
    label: "Text Input",
    placeholder: "Type here",
    autoFocus: true,
};
