import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { ONSSelect } from "./ONSSelect";

export default {
    component: ONSSelect,
    title: "Components/Select",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ONSSelect> = (args) => <ONSSelect {...args} />;

// 👇 Each story then reuses that template
export const DefaultMessage = Template.bind({});

const Selection = [
    { label: "Brown Bear", value: "brown-bear" },
    { label: "Giant Panda", value: "giant-panda" },
    { label: "Polar Bear", value: "polar-bear" },
    { label: "Black Bear", value: "black-bear" },
];

DefaultMessage.args = {
    id: "select-thing",
    label: "Select bear",
    value: "select value",
    options: Selection,
    defaultValue: Selection[0].value,
};
