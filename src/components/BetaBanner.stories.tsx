import React from "react";
import { Meta } from "@storybook/react-webpack5";
import BetaBanner from "./BetaBanner";

export default {
    component: BetaBanner,
    title: "Components/BetaBanner",
} as Meta;

export const Default = () => <BetaBanner />;
