import { type ChangeEvent, useState } from "react";

import { PasswordInput } from "./PasswordInput";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type React from "react";

type PasswordInputArgs = React.ComponentProps<typeof PasswordInput>;

const PasswordInputRender = (args: PasswordInputArgs) => {
  const [currentValue, setCurrentValue] = useState(args.value || "");

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
};

const ConfirmPasswordRender = (args: PasswordInputArgs) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <PasswordInput
        {...args}
        label="Create password"
        id="password-create"
        value={password}
        onChange={(_e, val) => setPassword(val)}
        autoFocus={true}
      />
      <PasswordInput
        {...args}
        label="Confirm password"
        id="password-confirm"
        value={confirm}
        onChange={(_e, val) => setConfirm(val)}
        autoFocus={false}
      />
    </div>
  );
};

const meta = {
  title: "Components/Password Input",
  component: PasswordInput,
  argTypes: {
    onChange: {
      action: "changed",
    },
  },
  render: (args: PasswordInputArgs) => <PasswordInputRender {...args} />,
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    label: "Password",
    id: "password-input",
    autoFocus: true,
  },
};

export const ConfirmPassword: Story = {
  render: (args) => <ConfirmPasswordRender {...args} />,
  args: {
    value: "",
  },
};
