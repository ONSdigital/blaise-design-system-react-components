import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    expandables: {
      control: false,
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "accordion",
    showAllEnabled: true,
    expanded: false,
    expandables: [
      {
        id: "meaning-of-life",
        title: "What is the meaning of life, the universe, and everything?",
        content: <p>42</p>,
      },
      {
        id: "airspeed-velocity",
        title: "What is the airspeed velocity of an unladen swallow?",
        content: <p>African or European?</p>,
      },
    ],
  },
};
