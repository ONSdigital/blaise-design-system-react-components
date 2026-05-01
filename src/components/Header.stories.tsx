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
    id: "header",
    title: "Service title",
  },
};

export const SignOut: Story = {
  args: {
    id: "header-sign-out",
    title: "Service title",
    noSave: true,
    signOutButton: true,
  },
};

export const SaveSignOut: Story = {
  args: {
    id: "header-save-sign-out",
    title: "Service title",
    signOutButton: true,
  },
};

export const Navigation: Story = {
  args: {
    id: "header-nav",
    title: "Service title",
    navigationLinks: [
      { id: "nav-home", label: "Home", endpoint: "#" },
      { id: "nav-menu-one", label: "Menu #1", endpoint: "#" },
      { id: "nav-menu-two", label: "Menu #2", endpoint: "#" },
      { id: "nav-menu-three", label: "Menu #3", endpoint: "#" },
    ],
    currentLocation: "/deploy",
  },
};
