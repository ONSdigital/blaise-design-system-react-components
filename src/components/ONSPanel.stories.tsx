import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { ONSPanel } from "./ONSPanel";

export default {
    component: ONSPanel,
    title: "Components/Panel",
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ONSPanel> = (args) => <ONSPanel {...args} />;

// 👇 Each story then reuses that template
export const Info = Template.bind({});
export const Success = Template.bind({});
export const Error = Template.bind({});
export const Warn = Template.bind({});
export const Spacious = Template.bind({});

Info.args = {
    children: <p>Some message in a panel</p>,
};

Success.args = {
    status: "success",
    bigIcon: true,
    children: (
        <div>
            <h1>Title in a panel</h1>
            <p>And then some text</p>
        </div>
    ),
};

Error.args = {
    status: "error",
    children: <p>Some message in a panel</p>,
};

Warn.args = {
    status: "warn",
    children: <p>All data will be removed</p>,
};

Spacious.args = {
    status: "info",
    children: <p>Wow look at all this space</p>,
    spacious: true,
};
