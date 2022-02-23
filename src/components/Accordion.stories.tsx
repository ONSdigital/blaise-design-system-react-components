import React from 'react';
import {ComponentStory} from "@storybook/react";
import {Meta} from '@storybook/react';
import Accordion from "./Accordion";

export default {
    component: Accordion,
    title: 'Components/Accordion'
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args}/>;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    Expandables: [{
        title: "What is the meaning of life the universe and everything?",
        content: <p>42</p>
    }]
};