import type { Meta, StoryObj } from "@storybook/react-vite";
import { GroupedSummary, SummaryGroupTable } from "./Summary";

const meta = {
  title: "Components/Summary",
  component: SummaryGroupTable,
  argTypes: {
    groupedSummary: { control: false },
  },
} satisfies Meta<typeof SummaryGroupTable>;

export default meta;

type TableStory = StoryObj<typeof SummaryGroupTable>;

const popCultureSummary = new GroupedSummary([
  {
    title: "The Batcave",
    records: {
      Location: "Gotham City",
      "Primary Resident": "Bruce Wayne (Batman)",
      "Number of Vehicles": 5,
      "Secret Entrance": "Grandfather clock in Wayne Manor",
      "Alfred's Approval": "Required",
      "Batcomputer Status": "Online",
      "Villain Alerts": "Joker, Penguin, Riddler",
    },
  },
  {
    title: "Millennium Falcon",
    records: {
      Captain: "Han Solo",
      CoPilot: "Chewbacca",
      "Top Speed (MGLT)": 75,
      "Special Features": "Kessel Run in less than 12 parsecs",
      "Docked At": "Mos Eisley, Tatooine",
      Passengers: "Luke Skywalker, Leia Organa, C-3PO, R2-D2",
    },
  },
]);

export const Table: TableStory = {
  args: {
    groupedSummary: popCultureSummary,
  },
};
