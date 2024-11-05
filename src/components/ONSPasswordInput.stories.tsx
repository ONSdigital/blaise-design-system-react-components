import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { ONSPasswordInput } from "./ONSPasswordInput";

export default {
    component: ONSPasswordInput,
    title: "Components/Password Input",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ONSPasswordInput> = (args) => <ONSPasswordInput {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    label: "Password",
    inputId: "password",
    placeholder: "Confirm password",
    autoFocus: true,
};
