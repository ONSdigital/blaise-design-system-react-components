import { useState, ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const Selection = [
  { label: "LMS", value: "lms" },
  { label: "OPN", value: "opn" },
  { label: "DST", value: "dst" },
];

const meta = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(args.value || "");

    return (
      <Select
        {...args}
        value={selectedValue}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setSelectedValue(e.target.value);
          args.onChange?.(e);
        }}
      />
    );
  },
  args: {
    id: "select-survey",
    label: "Select survey",
    options: Selection,
    value: Selection[0].value,
  },
};
