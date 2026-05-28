import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t,t as n}from"./react-C9P0hG9j.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";var i=e((()=>{n()}));function a(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:`storybook-introduction`,children:`Storybook Introduction`}),`
`,(0,s.jsx)(n.p,{children:`Storybook is used in this project to develop, document, and visually test React components in isolation. This guide explains how to view, create, and document components using Storybook.`}),`
`,(0,s.jsx)(n.h2,{id:`viewing-documentation`,children:`Viewing Documentation`}),`
`,(0,s.jsx)(n.h3,{id:`online`,children:`Online`}),`
`,(0,s.jsxs)(n.p,{children:[`A GitHub Action automatically builds and deploys the latest Storybook documentation to GitHub Pages after each merge to `,(0,s.jsx)(n.code,{children:`main`}),`:`]}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:`https://onsdigital.github.io/blaise-design-system-react-components`,rel:`nofollow`,children:`View Storybook documentation`})}),`
`]}),`
`,(0,s.jsx)(n.h3,{id:`locally`,children:`Locally`}),`
`,(0,s.jsx)(n.p,{children:`To run Storybook locally:`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-shell`,children:`yarn storybook
`})}),`
`,(0,s.jsxs)(n.p,{children:[`This will start Storybook at `,(0,s.jsx)(n.a,{href:`http://localhost:6006`,rel:`nofollow`,children:`http://localhost:6006`}),`, where you can browse and interact with all documented components.`]}),`
`,(0,s.jsx)(n.h2,{id:`creating-component-stories`,children:`Creating Component Stories`}),`
`,(0,s.jsxs)(n.p,{children:[`To document a component, create a `,(0,s.jsx)(n.code,{children:`.stories.tsx`}),` file next to the component file. For example, for `,(0,s.jsx)(n.code,{children:`Button.tsx`}),`, create `,(0,s.jsx)(n.code,{children:`Button.stories.tsx`}),` in the same folder.`]}),`
`,(0,s.jsx)(n.h3,{id:`basic-story-structure`,children:`Basic Story Structure`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-tsx`,children:`import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button", // Controls sidebar grouping
  component: Button,
  argTypes: {
    onClick: { action: "clicked" }, // Example: add actions for events
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Button",
  },
};
`})}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:`title`})}),`: Controls where the story appears in the sidebar. Use slashes for subfolders (e.g., `,(0,s.jsx)(n.code,{children:`Components/Error Boundary/Panel`}),`).`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:`component`})}),`: The React component being documented.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:`argTypes`})}),`: (Optional) Configure controls and actions for props/events.`]}),`
`,(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:`args`})}),`: Default props for each story variant.`]}),`
`]}),`
`,(0,s.jsx)(n.h3,{id:`creating-variants`,children:`Creating Variants`}),`
`,(0,s.jsx)(n.p,{children:`You can define multiple variants by exporting additional stories:`}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-tsx`,children:`export const Secondary: Story = {
  args: {
    primary: false,
    label: "Secondary Button",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    label: "Small Button",
    small: true,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    label: "Loading Button",
    loading: true,
  },
};
`})}),`
`,(0,s.jsx)(n.h2,{id:`adding-additional-information`,children:`Adding Additional Information`}),`
`,(0,s.jsx)(n.p,{children:`Storybook automatically pulls TSDoc comments from your components and props into the Docs tab. For richer documentation:`}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsx)(n.li,{children:`Add TSDoc comments above your component and its props:`}),`
`]}),`
`,(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:`language-tsx`,children:`/** A button component for user actions. */
export function Button(props: Props) { ... }

export interface Props {
  /** The label to display inside the button. */
  label: string;
  /** Whether the button is styled as primary. */
  primary?: boolean;
  // ...other props
}
`})}),`
`,(0,s.jsxs)(n.ul,{children:[`
`,(0,s.jsxs)(n.li,{children:[`You can also use the `,(0,s.jsx)(n.code,{children:`parameters.docs.description`}),` field in your story meta for extra context.`]}),`
`]})]})}function o(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var s;e((()=>{s=r(),i()}))();export{o as default};