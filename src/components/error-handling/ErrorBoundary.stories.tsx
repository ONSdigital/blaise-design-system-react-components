import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorBoundary } from "./ErrorBoundary";

/**
 * A utility component that allows us to manually trigger an error state for testing.
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
        <span className="ons-btn__inner">Click Me to Trigger Panel Error</span>
      </button>
    );
  }
};

const meta = {
  title: "Components/Error Boundary/Panel",
  component: ErrorBoundary,
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ErrorBoundary {...args} />,
  args: {
    id: "error-boundary",
    children: <DodgyComponent />,
    errorMessageText: "D'oh! This specific section has failed to load.",
  },
};
