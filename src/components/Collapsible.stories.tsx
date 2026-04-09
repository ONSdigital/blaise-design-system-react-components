import React from "react";
import { ComponentStory, Meta } from "@storybook/react-webpack5";
import Collapsible from "./Collapsible";

export default {
    component: Collapsible,
    title: "Components/Collapsible",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Collapsible> = (args) => <Collapsible {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    title: "What is the meaning of life the universe and everything?",
    children: <p>42</p>,
};
