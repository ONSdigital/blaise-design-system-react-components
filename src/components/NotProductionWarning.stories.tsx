import React from "react";
import { Meta } from "@storybook/react";
import NotProductionWarning from "./NotProductionWarning";

export default {
    component: NotProductionWarning,
    title: "Components/Not Production Warning",
} as Meta;

export const Default = () => <NotProductionWarning/>;
