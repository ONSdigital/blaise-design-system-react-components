import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { i as useMDXComponents, t as init_react } from "./react-DBuAsWs3.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region node_modules/@storybook/addon-docs/dist/mdx-react-shim.js
var init_mdx_react_shim = __esmMin((() => {
	init_react();
}));
//#endregion
//#region src/StorybookIntroduction.mdx
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		strong: "strong",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "storybook-introduction",
			children: "Storybook Introduction"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Storybook is used in this project to develop, document, and visually test React components in isolation. This guide explains how to view, create, and document components using Storybook." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "viewing-documentation",
			children: "Viewing Documentation"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "online",
			children: "Online"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A GitHub Action automatically builds and deploys the latest Storybook documentation to GitHub Pages after each merge to ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "main" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://onsdigital.github.io/blaise-design-system-react-components",
				rel: "nofollow",
				children: "View Storybook documentation"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "locally",
			children: "Locally"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "To run Storybook locally:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-shell",
			children: "yarn storybook\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"This will start Storybook at ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "http://localhost:6006",
				rel: "nofollow",
				children: "http://localhost:6006"
			}),
			", where you can browse and interact with all documented components."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "creating-component-stories",
			children: "Creating Component Stories"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"To document a component, create a ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ".stories.tsx" }),
			" file next to the component file. For example, for ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button.tsx" }),
			", create ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Button.stories.tsx" }),
			" in the same folder."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "basic-story-structure",
			children: "Basic Story Structure"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-tsx",
			children: "import type { Meta, StoryObj } from \"@storybook/react-vite\";\nimport { Button } from \"./Button\";\n\nconst meta = {\n  title: \"Components/Button\", // Controls sidebar grouping\n  component: Button,\n  argTypes: {\n    onClick: { action: \"clicked\" }, // Example: add actions for events\n  },\n} satisfies Meta<typeof Button>;\n\nexport default meta;\n\ntype Story = StoryObj<typeof meta>;\n\nexport const Primary: Story = {\n  args: {\n    primary: true,\n    label: \"Primary Button\",\n  },\n};\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "title" }) }),
				": Controls where the story appears in the sidebar. Use slashes for subfolders (e.g., ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "Components/Error Boundary/Panel" }),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "component" }) }), ": The React component being documented."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "argTypes" }) }), ": (Optional) Configure controls and actions for props/events."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "args" }) }), ": Default props for each story variant."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "creating-variants",
			children: "Creating Variants"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "You can define multiple variants by exporting additional stories:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-tsx",
			children: "export const Secondary: Story = {\n  args: {\n    primary: false,\n    label: \"Secondary Button\",\n  },\n};\n\nexport const Small: Story = {\n  args: {\n    ...Primary.args,\n    label: \"Small Button\",\n    small: true,\n  },\n};\n\nexport const Loading: Story = {\n  args: {\n    ...Primary.args,\n    label: \"Loading Button\",\n    loading: true,\n  },\n};\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "adding-additional-information",
			children: "Adding Additional Information"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Storybook automatically pulls TSDoc comments from your components and props into the Docs tab. For richer documentation:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Add TSDoc comments above your component and its props:" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
			className: "language-tsx",
			children: "/** A button component for user actions. */\nexport function Button(props: Props) { ... }\n\nexport interface Props {\n  /** The label to display inside the button. */\n  label: string;\n  /** Whether the button is styled as primary. */\n  primary?: boolean;\n  // ...other props\n}\n"
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"You can also use the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "parameters.docs.description" }),
				" field in your story meta for extra context."
			] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = {
		...useMDXComponents(),
		...props.components
	};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
var import_jsx_runtime;
//#endregion
__esmMin((() => {
	import_jsx_runtime = require_jsx_runtime();
	init_mdx_react_shim();
}))();
export { MDXContent as default };
