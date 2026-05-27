import { type ChangeEvent, useState } from "react";

import { Select } from "./Select";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type React from "react";

type SelectArgs = React.ComponentProps<typeof Select>;

const Selection = [
  { label: "Scout", value: "scout" },
  { label: "Sniper", value: "sniper" },
  { label: "Soldier", value: "soldier" },
  { label: "Demoman", value: "demoman" },
  { label: "Medic", value: "medic" },
  { label: "Heavy", value: "heavy" },
  { label: "Pyro", value: "pyro" },
  { label: "Spy", value: "spy" },
  { label: "Engineer", value: "engineer" },
  { label: "Civilian", value: "civilian" },
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
    label: "Select class",
    options: Selection,
    value: Selection[0].value,
  },
};
