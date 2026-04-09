import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { ONSButton } from "./ONSButton";

export default {
    component: ONSButton,
    title: "Components/Button",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ONSButton> = (args) => <ONSButton {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Small = Template.bind({});
export const Loading = Template.bind({});
export const Hidden = Template.bind({});

Primary.args = {
    primary: true,
    label: "Button",
};

Secondary.args = {
    primary: false,
    label: "Button",
};

Small.args = {
    primary: true,
    label: "Button",
    small: true,
};

Loading.args = {
    primary: true,
    label: "Button",
    loading: true,
};

Hidden.args = {
    primary: true,
    label: "Button",
    hidden: true,
};
