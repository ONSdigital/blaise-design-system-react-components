import React from 'react';
import {ComponentStory, Meta} from '@storybook/react';
import ExternalLink from './ExternalLink';


export default {
    component: ExternalLink,
    title: 'Components/External Link'
} as Meta;

const Template: ComponentStory<typeof ExternalLink> = (args) => <ExternalLink {...args}/>;

export const Default = Template.bind({});

Default.args = {
    text: "Go Bing it!",
    link: "https://bing.com",
    ariaLabel: "Navigate to the Bing homepage",
    id: "bing-link"
};