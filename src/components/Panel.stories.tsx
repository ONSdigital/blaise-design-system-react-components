import { Panel } from "./Panel";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Panel",
  component: Panel,
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    id: "panel-info",
    children: <p>Some message in an info panel</p>,
  },
};

export const Success: Story = {
  args: {
    id: "panel-success",
    status: "success",
    bigIcon: true,
    children: <p>Information has been successfully submitted</p>,
  },
};

export const SuccessWithTitleAndSubtext: Story = {
  args: {
    id: "panel-success-title",
    status: "success",
    bigIcon: true,
    children: (
      <div>
        <p className="ons-u-fs-r--b ons-u-mb-xs">Title in a success panel</p>
        <p className="ons-u-mt-no">And then some subtext</p>
      </div>
    ),
  },
};

export const Error: Story = {
  args: {
    id: "panel-error",
    status: "error",
    children: <p>Some message in an error panel</p>,
  },
};

export const Warn: Story = {
  args: {
    id: "panel-warn",
    status: "warn",
    children: <p>{"It's a trap!"}</p>,
  },
};

export const Spacious: Story = {
  args: {
    id: "panel-spacious",
    status: "info",
    children: <p>So much room for activities!</p>,
    spacious: true,
  },
};
