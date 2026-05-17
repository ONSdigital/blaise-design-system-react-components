import { ComboBox, type ComboBoxOption } from "./ComboBox";

import type { Meta, StoryObj } from "@storybook/react-vite";

const tankOptions: ComboBoxOption[] = [
  { label: "D.Va", value: "d.va" },
  { label: "Domina", value: "domina" },
  { label: "Doomfist", value: "doomfist" },
  { label: "Hazard", value: "hazard" },
  { label: "Junker Queen", value: "junker queen" },
  { label: "Mauga", value: "mauga" },
  { label: "Orisa", value: "orisa" },
  { label: "Ramattra", value: "ramattra" },
  { label: "Reinhardt", value: "reinhardt" },
  { label: "Roadhog", value: "roadhog" },
  { label: "Sigma", value: "sigma" },
  { label: "Winston", value: "winston" },
  { label: "Wrecking Ball", value: "wrecking ball" },
  { label: "Zarya", value: "zarya" },
];

const meta = {
  title: "Components/Combo Box",
  component: ComboBox,
  argTypes: {
    onChange: { action: "changed" },
    onClick: { action: "clicked" },
    onOpenChange: { action: "toggled" },
    onSelect: { action: "selected" },
    options: { control: false },
  },
} satisfies Meta<typeof ComboBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "combo-box",
    label: "Select tank",
    description: "Type to narrow the list and then choose an option.",
    placeholder: "Start typing tank name",
    options: tankOptions,
    autoFocus: true,
  },
};

export const LimitedResults: Story = {
  args: {
    ...Default.args,
    id: "combo-box-limited-results",
    label: "Select tank",
    description: "Only the first 5 matching results are shown.",
    maxVisibleOptions: 5,
    autoFocus: false,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    id: "combo-box-loading",
    label: "Select tank",
    description: "Type to search. Results will appear once the list has loaded.",
    loading: true,
    loadingText: "Loading available tanks",
    autoFocus: false,
  },
};

export const DefaultSelection: Story = {
  args: {
    ...Default.args,
    id: "combo-box-default-selection",
    description: "An exact selection reopens the full list for browsing with arrow keys.",
    defaultValue: "Orisa",
    autoFocus: false,
  },
};
