import React, { useState } from "react";
import { ComponentStory, Meta } from "@storybook/react";
import DefaultErrorBoundary from "./DefaultErrorBoundary";

const DodgyComponent = () => {
    const [error, setError] = useState(false);
    if (error) {
        throw new Error("I crashed!");
    } else {
        return <button onClick={() => setError(true)}>Click Me</button>;
    }
};

export default {
    component: DefaultErrorBoundary,
    title: "Components/Error Boundary/Default",
} as Meta;

const Template: ComponentStory<typeof DefaultErrorBoundary> = (args) => <DefaultErrorBoundary {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: <DodgyComponent />,
};
