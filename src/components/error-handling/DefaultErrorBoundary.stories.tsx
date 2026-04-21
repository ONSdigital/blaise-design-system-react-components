import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DefaultErrorBoundary } from "./DefaultErrorBoundary";

/**
 * A utility component used to manually trigger an error for testing the boundary.
 */
const DodgyComponent = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error("I crashed!");
  } else {
    return (
      <button
        type="button"
        className="ons-btn ons-btn--secondary"
        onClick={() => setError(true)}
      >
        <span className="ons-btn__inner">Click Me to Trigger Error</span>
      </button>
    );
  }
};

const meta = {
  title: "Components/Error Boundary/Default",
  component: DefaultErrorBoundary,
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof DefaultErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <DodgyComponent />,
  },
};
