import React, { useState } from "react";
import { ComponentStory, Meta } from "@storybook/react";
import ErrorBoundary from "./ErrorBoundary";

const DodgyComponent = () => {
    const [error, setError] = useState(false);
    if (error) {
        throw new Error("I crashed!");
    } else {
        return <button type="button" onClick={() => setError(true)}>Click Me</button>;
    }
};

export default {
    component: ErrorBoundary,
    title: "Components/Error Boundary/Panel",
} as Meta;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => <ErrorBoundary {...args} />;

export const Panel = Template.bind({});

Panel.args = {
    children: <DodgyComponent />,
    errorMessageText: "D'oh!",
};
