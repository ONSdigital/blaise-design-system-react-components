import { type ChangeEvent, useState } from "react";

import { TextInput } from "./TextInput";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type React from "react";

type TextInputArgs = React.ComponentProps<typeof TextInput>;

const TextInputRender = (args: TextInputArgs) => {
  const [currentValue, setCurrentValue] = useState(args.value || "");

  return (
    <TextInput
      {...args}
      value={currentValue}
      onChange={(e: ChangeEvent<HTMLInputElement>, label?: string) => {
        setCurrentValue(e.target.value);
        args.onChange?.(e, label);
      }}
    />
  );
};

const meta = {
  title: "Components/Text Input",
  component: TextInput,
  argTypes: {
    onChange: { action: "changed" },
    onClick: { action: "clicked" },
  },
  render: (args: TextInputArgs) => <TextInputRender {...args} />,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "text-input",
    label: "Text Input",
    autoFocus: true,
    value: "",
  },
};

export const Placeholder: Story = {
  args: {
    ...Default.args,
    id: "text-input-placeholder",
    label: "Name",
    placeholder: "e.g. John Doe",
    value: "",
  },
};

export const Value: Story = {
  args: {
    ...Default.args,
    id: "text-input-value",
    label: "Biff",
    value: "Well, lookee what we have here",
  },
};

export const Fit: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <TextInput
          {...args}
          id="text-input-fit-false"
          label="False (Design System default)"
          fit={false}
        />
      </div>
      <div>
        <TextInput
          {...args}
          id="text-input-fit-true"
          label="True (browser default)"
          fit={true}
        />
      </div>
    </div>
  ),
  args: {
    value: "",
    autoFocus: false,
  },
};
