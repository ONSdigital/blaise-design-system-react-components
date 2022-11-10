import React from "react";
import { Meta } from "@storybook/react";
import ONSErrorPanel from "./ONSErrorPanel";

export default {
    component: ONSErrorPanel,
    title: "Components/Error Panel",
} as Meta;

export const Default = () => <ONSErrorPanel/>;
