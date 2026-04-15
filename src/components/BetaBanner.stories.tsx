import { Meta } from "@storybook/react";
import { BetaBanner } from "./BetaBanner";

export default {
    component: BetaBanner,
    title: "Components/Beta Banner",
} as Meta;

export const Default = () => <BetaBanner />;
