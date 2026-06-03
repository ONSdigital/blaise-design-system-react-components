import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-Bm8km1dN.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
import { n as init_Panel, t as Panel } from "./Panel-DOTucgBz.js";
//#region src/components/LoadingPanel.tsx
var import_jsx_runtime, loadingPanelContentStyles, loadingIconWrapperStyles, loadingIconStyles, LoadingPanel;
var init_LoadingPanel = __esmMin((() => {
	require_react();
	init_Panel();
	import_jsx_runtime = require_jsx_runtime();
	loadingPanelContentStyles = {
		display: "flex",
		alignItems: "center"
	};
	loadingIconWrapperStyles = {
		display: "flex",
		marginRight: "1rem"
	};
	loadingIconStyles = {
		width: "30px",
		height: "30px"
	};
	LoadingPanel = ({ hidden, message = "Loading...", id }) => {
		if (hidden) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
			id,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ons-u-pt-xs ons-u-pb-xs",
				style: loadingPanelContentStyles,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: loadingIconWrapperStyles,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						style: loadingIconStyles,
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 100 100",
						preserveAspectRatio: "xMidYMid",
						"aria-hidden": "true",
						focusable: "false",
						fill: "#064868",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "0",
							y: "0",
							width: "100",
							height: "100",
							fill: "none"
						}), [
							0,
							30,
							60,
							90,
							120,
							150,
							180,
							210,
							240,
							270,
							300,
							330
						].map((rotation, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "46.5",
							y: "40",
							width: "7",
							height: "20",
							rx: "5",
							ry: "5",
							transform: `rotate(${rotation} 50 50) translate(0 -30)`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "opacity",
								from: "1",
								to: "0",
								dur: "1s",
								begin: `${i * (1 / 12)}s`,
								repeatCount: "indefinite"
							})
						}, rotation))]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: message })]
			})
		});
	};
	try {
		LoadingPanel.displayName = "LoadingPanel";
		LoadingPanel.__docgenInfo = {
			"description": "Renders a loading panel.",
			"displayName": "LoadingPanel",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/LoadingPanel.tsx",
			"methods": [],
			"props": {
				"hidden": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/LoadingPanel.tsx",
						"name": "Props"
					}],
					"description": "When true, renders nothing.",
					"name": "hidden",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/LoadingPanel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"message": {
					"defaultValue": { "value": "Loading..." },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/LoadingPanel.tsx",
						"name": "Props"
					}],
					"description": "Loading message.",
					"name": "message",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/LoadingPanel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/LoadingPanel.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/LoadingPanel.tsx",
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
//#region src/components/LoadingPanel.stories.tsx
var meta, Default, CustomMessage, Hidden, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_LoadingPanel();
	meta = {
		title: "Components/Loading Panel",
		component: LoadingPanel
	};
	Default = { args: { id: "loading-panel" } };
	CustomMessage = { args: {
		id: "loading-panel-message",
		message: "Waiting till the cows come home..."
	} };
	Hidden = { args: {
		id: "loading-panel-hidden",
		hidden: true
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"loading-panel\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	CustomMessage.parameters = {
		...CustomMessage.parameters,
		docs: {
			...CustomMessage.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"loading-panel-message\",\n    message: \"Waiting till the cows come home...\"\n  }\n}",
				...CustomMessage.parameters?.docs?.source
			}
		}
	};
	Hidden.parameters = {
		...Hidden.parameters,
		docs: {
			...Hidden.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"loading-panel-hidden\",\n    hidden: true\n  }\n}",
				...Hidden.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = [
		"Default",
		"CustomMessage",
		"Hidden"
	];
}))();
export { CustomMessage, Default, Hidden, __namedExportsOrder, meta as default };
