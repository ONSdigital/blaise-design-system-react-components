import React, {useState} from 'react';
import {ComponentStory, Meta} from '@storybook/react';
import ErrorBoundary from "./ErrorBoundary";

const DodgyComponent = () => {
    const [error, setError] = useState(false);
    if (error) {
        throw new Error("I crashed!");
    } else {
        return <button onClick={() => setError(true)}>Click Me</button>;
    }
};


export default {
    component: ErrorBoundary,
    title: 'Components/Panel Error Boundary'
} as Meta;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => <ErrorBoundary {...args}/>;

export const Default = Template.bind({});

Default.args = {
    children: <DodgyComponent/>,
    errorMessageText: "Bloody things broken again!"
};