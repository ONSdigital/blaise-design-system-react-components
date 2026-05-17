import {
  validateCheckbox,
  validateInterviewerID,
  validateRadio,
} from "./example-form/FormValidation";
import { StyledForm } from "./StyledForm";

import type { Meta, StoryObj } from "@storybook/react-vite";

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
        name: "Survey",
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
          { id: "questionnaire-lms2601_aa1", value: "lms2601_aa1", label: "LMS2601_AA1" },
          { id: "questionnaire-lms2602_aa1", value: "lms2602_aa1", label: "LMS2602_AA1" },
          { id: "questionnaire-opn2601a", value: "opn2601a", label: "OPN2601A" },
          { id: "questionnaire-opn2602a", value: "opn2602a", label: "OPN2602A" },
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
