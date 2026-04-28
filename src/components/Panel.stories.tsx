import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "./Panel";

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
    children: <p>Some message in an info panel</p>,
  },
};

export const Success: Story = {
  args: {
    status: "success",
    bigIcon: true,
    children: <p>Information has been successfully submitted</p>,
  },
};

export const SuccessWithTitleAndSubtext: Story = {
  args: {
    status: "success",
    bigIcon: true,
    children: (
      <div>
        <p className="ons-u-fs-r--b ons-u-mb-xs">Title in a success panel</p>
        <p className="ons-u-mt-no">And then some text</p>
      </div>
    ),
  },
};

export const Error: Story = {
  args: {
    status: "error",
    children: <p>Some message in an error panel</p>,
  },
};

export const Warn: Story = {
  args: {
    status: "warn",
    children: <p>{"It's a trap!"}</p>,
  },
};

export const Spacious: Story = {
  args: {
    status: "info",
    children: <p>So much room for activities!</p>,
    spacious: true,
  },
};
