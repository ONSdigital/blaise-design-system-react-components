import React from 'react';
import { ComponentStory } from "@storybook/react";
import { Meta } from '@storybook/react';
import Checkboxes from "./Checkboxes";

export default {
    component: Checkboxes,
    title: 'Components/Checkboxes'
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Checkboxes> = (args) => <Checkboxes {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    content: ["Sentret", "Gliscor", "Altaria"]
};
