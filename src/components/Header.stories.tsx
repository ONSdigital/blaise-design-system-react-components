import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta = {
    title: "Components/Header",
    component: Header,
    argTypes: {
        signOutFunction: { action: "signed-out" },
        navigationLinks: { control: "object" },
        createNavLink: { control: false },
    },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Service title",
    },
};

export const WithSaveSignOut: Story = {
    args: {
        title: "Service title",
        signOutButton: true,
    },
};

export const WithSignOut: Story = {
    args: {
        title: "Service title",
        noSave: true,
        signOutButton: true,
    },
};

export const WithNavigation: Story = {
    args: {
        title: "Service title",
        navigationLinks: [
            { id: "home", label: "Home", endpoint: "#" },
            { id: "menu-1", label: "Menu #1", endpoint: "#" },
            { id: "menu-2", label: "Menu #2", endpoint: "#" },
            { id: "menu-3", label: "Menu #3", endpoint: "#" },
        ],
        currentLocation: "/deploy",
    },
};
