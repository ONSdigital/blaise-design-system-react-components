import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
    component: Header,
    title: "Components/Header",
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        title: "Yet another secret 🐿️ service being built",
    },
};

export const WithSaveSignOut: Story = {
    args: {
        title: "Yet another secret 🐿️ service being built",
        signOutButton: true,
        signOutFunction: () => console.log("User clicked sign out"),
    },
};

export const WithSignOut: Story = {
    args: {
        title: "Yet another secret 🐿️ service being built",
        noSave: true,
        signOutButton: true,
        signOutFunction: () => console.log("User clicked sign out"),
    },
};

export const WithNavigation: Story = {
    args: {
        title: "Yet another secret 🐿️ service being built",
        navigationLinks: [
            { id: "home-link", label: "Home", endpoint: "/" },
            { id: "deploy-questionnaire-link", label: "Deploy a questionnaire", endpoint: "/deploy" },
            { id: "audit-logs-link", label: "View deployment history", endpoint: "/history" },
            { id: "blaise-status-link", label: "Check Blaise status", endpoint: "/status" },
        ],
    },
};
