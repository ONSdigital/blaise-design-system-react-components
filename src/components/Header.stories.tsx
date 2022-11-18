import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Header from "./Header";

export default {
    component: Header,
    title: "Components/Header",
} as Meta;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
export const WithSignOut = Template.bind({});
export const WithSaveSignOut = Template.bind({});
export const WithNavigation = Template.bind({});

Default.args = {
    title: "Yet another secret 🐿️ service being built",
};

WithSaveSignOut.args = {
    title: "Yet another secret 🐿️ service being built",
    signOutButton: true,
    signOutFunction: () => console.log("User clicked sign out"),
};

WithSignOut.args = {
    title: "Yet another secret 🐿️ service being built",
    noSave: true,
    signOutButton: true,
    signOutFunction: () => console.log("User clicked sign out"),
};

WithNavigation.args = {
    title: "Yet another secret 🐿️ service being built",
    navigationLinks: [
        { label: "Home", endpoint: "/" },
        { label: "Deploy a questionnaire", endpoint: "/deploy" },
        { label: "View deployment history", endpoint: "/history" },
        { label: "Check Blaise Status", endpoint: "/status" },
    ],
};
