import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "button-primary",
    primary: true,
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    id: "button-secondary",
    primary: false,
    label: "Secondary Button",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    id: "button-small",
    label: "Small Button",
    small: true,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    id: "button-loading",
    label: "Loading Button",
    loading: true,
  },
};

export const Hidden: Story = {
  args: {
    ...Primary.args,
    id: "button-hidden",
    label: "Hidden Button",
    hidden: true,
  },
};

export const MarginRight: Story = {
  args: {
    id: "button-margin-right",
    primary: true,
    label: "Margin Right Buttons",
  },
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          id="button-no-margin"
          primary={true}
          label="Button"
        />
        <span>No right margin</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          id="button-with-margin"
          primary={true}
          label="Button"
          marginRight={24}
        />
        <span>With right margin (24px)</span>
      </div>
    </div>
  ),
};
