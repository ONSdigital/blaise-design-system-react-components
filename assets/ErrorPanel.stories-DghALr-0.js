import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-BAi17vnA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/ErrorPanel.tsx
var import_jsx_runtime, ErrorPanel;
var init_ErrorPanel = __esmMin((() => {
	require_react();
	import_jsx_runtime = require_jsx_runtime();
	ErrorPanel = ({ text = "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later.", hidden, id }) => {
		if (hidden) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id,
			"data-testid": id ? `${id}-error-panel` : void 0,
			className: "ons-panel ons-panel--error ons-panel--no-title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ons-panel__assistive-text ons-u-vh",
				children: "Error: "
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ons-panel__body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
			})]
		});
	};
	try {
		ErrorPanel.displayName = "ErrorPanel";
		ErrorPanel.__docgenInfo = {
			"description": "Renders an error panel.",
			"displayName": "ErrorPanel",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/ErrorPanel.tsx",
			"methods": [],
			"props": {
				"text": {
					"defaultValue": { "value": "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later." },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ErrorPanel.tsx",
						"name": "Props"
					}],
					"description": "Error message text.",
					"name": "text",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ErrorPanel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"hidden": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ErrorPanel.tsx",
						"name": "Props"
					}],
					"description": "When true, renders nothing.",
					"name": "hidden",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ErrorPanel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ErrorPanel.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ErrorPanel.tsx",
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
//#region src/components/ErrorPanel.stories.tsx
var meta, Default, CustomMessage, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_ErrorPanel();
	meta = {
		title: "Components/Error Panel",
		component: ErrorPanel,
		argTypes: { text: { control: "text" } }
	};
	Default = { args: { id: "error-panel" } };
	CustomMessage = { args: {
		id: "error-panel-survey",
		text: "I'm sorry, Dave. I'm afraid I can't do that."
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"error-panel\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	CustomMessage.parameters = {
		...CustomMessage.parameters,
		docs: {
			...CustomMessage.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"error-panel-survey\",\n    text: \"I'm sorry, Dave. I'm afraid I can't do that.\"\n  }\n}",
				...CustomMessage.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default", "CustomMessage"];
}))();
export { CustomMessage, Default, __namedExportsOrder, meta as default };
