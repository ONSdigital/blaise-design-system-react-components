import React from 'react';
import { ComponentStory } from "@storybook/react";
import { Meta } from '@storybook/react';
import StyledForm from "./StyledForm";

export default {
    component: StyledForm,
    title: 'Components/Forms/StyledForm'
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof StyledForm> = (args) => <StyledForm {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    fields: [
        {
            name: "Survey TLA",
            description: "Select survey",
            type: "radio",
            initial_value: "undefined",
            radioOptions: [
                { id: "all", value: "undefined", label: "Show all surveys" },
                { id: "lms", value: "lms", label: "LMS", description: "Labour Market Survey" },
                { id: "opn", value: "opn", label: "OPN", description: "Opinions and Lifestyle Survey" }
            ]
        },
        {
            name: "Questionnaire",
            description: "Select questionnaires",
            type: "checkbox",
            initial_value: "undefined",
            checkboxOptions: [
                { id: "checkbox_1", value: "lms", label: "LMS"},
                { id: "checkbox_2", value: "opn", label: "OPN"},
                { id: "checkbox_3", value: "dst", label: "DST"}
            ]
        },
        {
            name: "Interviewer ID",
            type: "text"
        },
        {
            name: "Start date",
            type: "date",
        },
        {
            name: "End date",
            type: "date",

        }
    ],
    submitLabel: "Submit label"
};
