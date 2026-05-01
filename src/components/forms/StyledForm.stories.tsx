import type { Meta, StoryObj } from "@storybook/react-vite";
import { StyledForm } from "./StyledForm";
import {
  validateRadio,
  validateCheckbox,
  validateInterviewerID,
} from "./example-form/FormValidation";

const meta = {
  title: "Components/Forms/Styled Form",
  component: StyledForm,
  argTypes: {
    onSubmitFunction: {
      action: "submitted",
      control: false,
    },
    fields: {
      control: "object",
    },
  },
} satisfies Meta<typeof StyledForm>;

export default meta;

type Story = StoryObj<typeof StyledForm>;

export const Default: Story = {
  args: {
    id: "styled-form",
    onSubmitFunction: (values, setSubmitting) => {
      setSubmitting(false);
    },
    fields: [
      {
        name: "Survey TLA",
        description: "Select survey",
        type: "radio",
        initialValue: "undefined",
        validate: validateRadio,
        radioOptions: [
          { id: "survey-all", value: "undefined", label: "Show all surveys" },
          {
            id: "survey-lms",
            value: "lms",
            label: "LMS",
            description: "Labour Market Survey",
          },
          {
            id: "survey-opn",
            value: "opn",
            label: "OPN",
            description: "Opinions and Lifestyle Survey",
          },
        ],
      },
      {
        name: "Questionnaire",
        description: "Select questionnaires",
        type: "checkbox",
        initialValue: [],
        validate: validateCheckbox,
        checkboxOptions: [
          { id: "questionnaire-lms", value: "lms", label: "LMS" },
          { id: "questionnaire-opn", value: "opn", label: "OPN" },
          { id: "questionnaire-dst", value: "dst", label: "DST" },
        ],
      },
      {
        name: "Interviewer ID",
        type: "text",
        validate: validateInterviewerID,
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
