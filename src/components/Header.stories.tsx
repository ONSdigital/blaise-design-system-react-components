import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Header from "./Header";

export default {
    component: Header,
    title: "Components/Header",
} as Meta;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Yet another secret 🐿️ service being built",
};
