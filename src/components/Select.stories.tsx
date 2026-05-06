import { type ChangeEvent, useState } from "react";

import { Select } from "./Select";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type React from "react";

type SelectArgs = React.ComponentProps<typeof Select>;

const Selection = [
  { label: "LMS", value: "lms" },
  { label: "OPN", value: "opn" },
  { label: "DST", value: "dst" },
];

const SelectRender = (args: SelectArgs) => {
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
};

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
  render: (args) => <SelectRender {...args} />,
  args: {
    id: "select",
    label: "Select survey",
    options: Selection,
    value: Selection[0].value,
  },
};
