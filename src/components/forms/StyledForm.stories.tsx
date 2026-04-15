import type { Meta, StoryObj } from "@storybook/react";
import { StyledForm } from "./StyledForm";

const meta = {
    title: "Components/Forms/StyledForm",
    component: StyledForm,
    tags: ["autodocs"],
    argTypes: {
        onSubmitFunction: { action: "submitted" },
    },
} satisfies Meta<typeof StyledForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSubmitFunction: (values, setSubmitting) => {
            console.log("Form Values:", values);
            setSubmitting(false);
        },
        fields: [
            {
                name: "Survey TLA",
                description: "Select survey",
                type: "radio",
                initial_value: "undefined",
                radioOptions: [
                    { id: "all", value: "undefined", label: "Show all surveys" },
                    {
                        id: "lms", value: "lms", label: "LMS", description: "Labour Market Survey",
                    },
                    {
                        id: "opn", value: "opn", label: "OPN", description: "Opinions and Lifestyle Survey",
                    },
                ],
            },
            {
                name: "Questionnaire",
                description: "Select questionnaires",
                type: "checkbox",
                initial_value: [],
                checkboxOptions: [
                    { id: "checkbox_1", value: "lms", label: "LMS" },
                    { id: "checkbox_2", value: "opn", label: "OPN" },
                    { id: "checkbox_3", value: "dst", label: "DST" },
                ],
            },
            {
                name: "Interviewer ID",
                type: "text",
            },
            {
                name: "Start date",
                type: "date",
            },
            {
                name: "End date",
                type: "date",
            },
        ],
        submitLabel: "Submit label",
    },
};
