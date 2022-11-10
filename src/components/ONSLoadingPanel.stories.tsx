import React from "react";
import { ComponentStory } from "@storybook/react";
import { Meta } from "@storybook/react";
import { ONSLoadingPanel } from "./ONSLoadingPanel";

export default {
    component: ONSLoadingPanel,
    title: "Components/Loading Panel",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ONSLoadingPanel> = (args) => <ONSLoadingPanel {...args}/>;

// 👇 Each story then reuses that template
export const DefaultMessage = Template.bind({});
export const CustomMessage = Template.bind({});
export const Hidden = Template.bind({});

DefaultMessage.args = {
};

CustomMessage.args = {
    message: "Waiting till the cows come home...",
};

Hidden.args = {
    hidden: true,
};
