import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-BAi17vnA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/NotProductionWarning.tsx
var import_jsx_runtime, NotProductionWarning;
var init_NotProductionWarning = __esmMin((() => {
	require_react();
	import_jsx_runtime = require_jsx_runtime();
	NotProductionWarning = ({ id } = {}) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id,
			"data-testid": id ? `${id}-warning` : void 0,
			style: {
				background: "#222",
				color: "#fff"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ons-container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ons-panel ons-panel--warn-branded ons-panel--no-title",
					style: { background: "#222" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ons-panel__icon",
							"aria-hidden": "true",
							style: { color: "#222" },
							children: "!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ons-panel__assistive-text ons-u-vh",
							children: "Warning: "
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ons-panel__body",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ons-u-mb-no",
								children: "This is not a production environment. Do not upload any production data to this service."
							})
						})
					]
				})
			})
		});
	};
	try {
		NotProductionWarning.displayName = "NotProductionWarning";
		NotProductionWarning.__docgenInfo = {
			"description": "Renders the non-production warning banner.",
			"displayName": "NotProductionWarning",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/NotProductionWarning.tsx",
			"methods": [],
			"props": { "id": {
				"defaultValue": null,
				"declarations": [{
					"fileName": "blaise-design-system-react-components/src/components/NotProductionWarning.tsx",
					"name": "Props"
				}],
				"description": "Element ID.",
				"name": "id",
				"parent": {
					"fileName": "blaise-design-system-react-components/src/components/NotProductionWarning.tsx",
					"name": "Props"
				},
				"required": false,
				"tags": {},
				"type": { "name": "string | undefined" }
			} },
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/NotProductionWarning.stories.tsx
var meta, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_NotProductionWarning();
	meta = {
		title: "Components/Not Production Warning",
		component: NotProductionWarning
	};
	Default = { args: { id: "not-production-warning" } };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"not-production-warning\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
