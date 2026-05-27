import { GroupedSummary, SummaryGroupTable } from "./Summary";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Summary",
  component: SummaryGroupTable,
  argTypes: {
    groupedSummary: { control: false },
  },
} satisfies Meta<typeof SummaryGroupTable>;

export default meta;

type Story = StoryObj<typeof SummaryGroupTable>;

const tmntSummary = new GroupedSummary([
  {
    title: "Leonardo",
    records: {
      Colour: "Blue",
      Weapon: "Katana",
      Role: "Leader",
      Personality: "Disciplined",
    },
  },
  {
    title: "Michelangelo",
    records: {
      Colour: "Orange",
      Weapon: "Nunchaku",
      Role: "Party Dude",
      Personality: "Fun-loving",
    },
  },
  {
    title: "Donatello",
    records: {
      Colour: "Purple",
      Weapon: "Bo Staff",
      Role: "Technician",
      Personality: "Intellectual",
    },
  },
  {
    title: "Raphael",
    records: {
      Colour: "Red",
      Weapon: "Sai",
      Role: "Enforcer",
      Personality: "Aggressive",
    },
  },
]);

export const Default: Story = {
  args: {
    id: "summary",
    groupedSummary: tmntSummary,
  },
};

const tmntPreambleSummary = new GroupedSummary([
  {
    title: "Leonardo",
    preamble: <p>Leonardo is the leader of the group. Review his details below.</p>,
    records: {
      Colour: "Blue",
      Weapon: "Katana",
      Role: "Leader",
      Personality: "Disciplined",
    },
  },
  {
    title: "Michelangelo",
    preamble: <p>Michelangelo is the fun-loving member of the group. Review his details below.</p>,
    records: {
      Colour: "Orange",
      Weapon: "Nunchaku",
      Role: "Party Dude",
      Personality: "Fun-loving",
    },
  },
]);

export const Preamble: Story = {
  args: {
    id: "summary-preamble",
    groupedSummary: tmntPreambleSummary,
  },
};
