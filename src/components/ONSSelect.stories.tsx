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
export const Default = Template.bind({});

const Selection = [
    { label: "LMS", value: "lms" },
    { label: "OPN", value: "opn" },
    { label: "DST", value: "dst" },
];

Default.args = {
    id: "select-survey",
    label: "Select survey",
    options: Selection,
    defaultValue: Selection[0].value,
};
