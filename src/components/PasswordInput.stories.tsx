import { useState, ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "./PasswordInput";

const meta = {
  title: "Components/Password Input",
  component: PasswordInput,
  argTypes: {
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [currentValue, setCurrentValue] = useState(args.value);

    return (
      <PasswordInput
        {...args}
        value={currentValue}
        onChange={(e: ChangeEvent<HTMLInputElement>, val: string) => {
          setCurrentValue(val);
          args.onChange?.(e, val);
        }}
      />
    );
  },
  args: {
    value: "",
    label: "Password",
    inputId: "password",
    autoFocus: true,
  },
};
