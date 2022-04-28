import React from 'react';
import { ComponentStory } from "@storybook/react";
import { Meta } from '@storybook/react';
import CheckboxesFieldset from "./Fields";

export default {
    component: CheckboxesFieldset,
    title: 'Components/Forms/FormElementsFields/CheckboxFieldset'
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CheckboxesFieldset> = (args) => <CheckboxesFieldset {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    description: "this is a group of checkboxes",
    name: "selected_checkboxes",
    checkboxOptions: [
        {
            value: "checkbox_1_value",
            id: "checkbox_1_id",
            label: "checkbox_1_label",
            description: "checkbox_1_description",
        }
    ]
};
