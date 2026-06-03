import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-BAi17vnA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/Collapsible.tsx
var import_react, import_jsx_runtime$1, Collapsible;
var init_Collapsible = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$1 = require_jsx_runtime();
	Collapsible = ({ children, title, id }) => {
		const [panelOpen, setPanelOpen] = (0, import_react.useState)(false);
		const generatedId = (0, import_react.useId)();
		const baseId = id ?? `collapsible-${generatedId}`;
		const handleToggle = (event) => {
			event.preventDefault();
			setPanelOpen((prevOpen) => !prevOpen);
		};
		const handleKeyDown = (e) => {
			if (e.key === "Enter" || e.key === " ") handleToggle(e);
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
			id: baseId,
			className: `ons-details ons-details--initialised ons-u-mt-l ${panelOpen ? "ons-details--open" : ""}`,
			"data-save-state": "true",
			role: "group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				className: "ons-details__heading",
				role: "button",
				"data-testid": id ? `${id}-heading` : void 0,
				onClick: handleToggle,
				onKeyDown: handleKeyDown,
				tabIndex: 0,
				"aria-expanded": panelOpen,
				"aria-controls": `${baseId}-content`,
				"data-ga-action": `${panelOpen ? "Close" : "Open"} panel`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("h2", {
					className: "ons-details__title ons-u-fs-r--b",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
					className: "ons-details__icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("svg", {
						className: "ons-icon",
						viewBox: "0 0 8 13",
						xmlns: "http://www.w3.org/2000/svg",
						focusable: "false",
						"aria-hidden": "true",
						fill: "currentColor",
						role: "img",
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("path", {
							d: "M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z",
							transform: "translate(-5.02 -1.59)"
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				id: `${baseId}-content`,
				className: "ons-details__content",
				"aria-hidden": !panelOpen,
				"data-testid": id ? `${id}-content` : void 0,
				children
			})]
		});
	};
	try {
		Collapsible.displayName = "Collapsible";
		Collapsible.__docgenInfo = {
			"description": "Renders a collapsible panel.",
			"displayName": "Collapsible",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Collapsible.tsx",
			"methods": [],
			"props": {
				"children": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Collapsible.tsx",
						"name": "Props"
					}],
					"description": "Panel content.",
					"name": "children",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Collapsible.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "ReactNode" }
				},
				"title": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Collapsible.tsx",
						"name": "Props"
					}],
					"description": "Panel title.",
					"name": "title",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Collapsible.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Collapsible.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Collapsible.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/Collapsible.stories.tsx
var import_jsx_runtime, meta, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_Collapsible();
	import_jsx_runtime = require_jsx_runtime();
	meta = {
		title: "Components/Collapsible",
		component: Collapsible,
		argTypes: { children: { control: false } }
	};
	Default = { args: {
		id: "collapsible",
		title: "How much power is required for a single temporal displacement?",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "1.21 Gigawatts! (Great Scott!)" })
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"collapsible\",\n    title: \"How much power is required for a single temporal displacement?\",\n    children: <p>1.21 Gigawatts! (Great Scott!)</p>\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
