import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-BAi17vnA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/Panel.tsx
var import_react, import_jsx_runtime, Panel;
var init_Panel = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime = require_jsx_runtime();
	Panel = ({ children, status = "info", spacious, id, hidden, bigIcon }) => {
		const generatedId = (0, import_react.useId)();
		const baseId = id ?? `panel-${generatedId}`;
		if (hidden) return null;
		const className = [
			"ons-panel",
			`ons-panel--${status}`,
			"ons-panel--no-title",
			spacious && "ons-panel--spacious",
			"ons-u-mt-m"
		].filter(Boolean).join(" ");
		const assistiveTextMap = {
			info: "Important information:",
			success: "Completed:",
			warn: "Warning:",
			error: "Error:"
		};
		const isSuccess = status === "success";
		const alertId = isSuccess ? `${baseId}-alert` : void 0;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-testid": id ? `${id}-panel` : void 0,
			id: baseId,
			className,
			role: isSuccess ? "alert" : void 0,
			tabIndex: isSuccess ? -1 : void 0,
			"aria-labelledby": alertId,
			children: [
				status === "warn" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ons-panel__icon",
					"aria-hidden": "true",
					children: "!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					id: alertId,
					className: "ons-panel__assistive-text ons-u-vh",
					children: [assistiveTextMap[status], " "]
				}),
				isSuccess && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ons-panel__icon ons-u-fs-r",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: `ons-icon ${bigIcon ? "ons-icon--xl" : ""}`,
						viewBox: "0 0 13 10",
						xmlns: "http://www.w3.org/2000/svg",
						"aria-hidden": "true",
						focusable: "false",
						fill: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z",
							transform: "translate(-1.51 -3.04)"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `ons-panel__body ${bigIcon && isSuccess ? "ons-icon-margin--xl" : ""}`,
					children
				})
			]
		});
	};
	try {
		Panel.displayName = "Panel";
		Panel.__docgenInfo = {
			"description": "Renders a panel.",
			"displayName": "Panel",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Panel.tsx",
			"methods": [],
			"props": {
				"children": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					}],
					"description": "Content rendered inside the panel body.",
					"name": "children",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "ReactNode" }
				},
				"status": {
					"defaultValue": { "value": "info" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					}],
					"description": "Panel status.",
					"name": "status",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "\"success\" | \"error\" | \"info\" | \"warn\" | undefined" }
				},
				"spacious": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					}],
					"description": "Whether to use the spacious variant.",
					"name": "spacious",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"hidden": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					}],
					"description": "Whether to hide the panel.",
					"name": "hidden",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"bigIcon": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					}],
					"description": "Whether to enlarge the success icon.",
					"name": "bigIcon",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Panel.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
export { init_Panel as n, Panel as t };
