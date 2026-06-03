import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-BAi17vnA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
import { n as init_url, t as getSafeHref } from "./url-Dxwi98wm.js";
//#region src/components/ExternalLink.tsx
var import_jsx_runtime, ExternalLink;
var init_ExternalLink = __esmMin((() => {
	require_react();
	init_url();
	import_jsx_runtime = require_jsx_runtime();
	ExternalLink = ({ text, link, ariaLabel, id }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: getSafeHref(link),
			id,
			"data-testid": id ? `${id}-external-link` : void 0,
			"aria-label": ariaLabel,
			className: "ons-external-link",
			target: "_blank",
			rel: "noopener noreferrer",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ons-external-link__text",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ons-external-link__icon",
					children: ["\xA0", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "ons-icon",
						viewBox: "0 0 12 12",
						xmlns: "http://www.w3.org/2000/svg",
						"aria-hidden": "true",
						focusable: "false",
						role: "img",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z",
							transform: "translate(-2 -1.99)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z",
							transform: "translate(-2 -1.99)"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ons-external-link__new-window-description ons-u-vh",
					children: "(opens in a new tab)"
				})
			]
		});
	};
	try {
		ExternalLink.displayName = "ExternalLink";
		ExternalLink.__docgenInfo = {
			"description": "Renders an external link.",
			"displayName": "ExternalLink",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/ExternalLink.tsx",
			"methods": [],
			"props": {
				"text": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ExternalLink.tsx",
						"name": "Props"
					}],
					"description": "Visible link text.",
					"name": "text",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ExternalLink.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"link": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ExternalLink.tsx",
						"name": "Props"
					}],
					"description": "Destination URL for the link.",
					"name": "link",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ExternalLink.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"ariaLabel": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ExternalLink.tsx",
						"name": "Props"
					}],
					"description": "Accessible label override.",
					"name": "ariaLabel",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ExternalLink.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/ExternalLink.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/ExternalLink.tsx",
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
//#region src/components/ExternalLink.stories.tsx
var meta, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_ExternalLink();
	meta = {
		title: "Components/External Link",
		component: ExternalLink
	};
	Default = { args: {
		text: "Go Bing it!",
		link: "https://bing.com",
		ariaLabel: "Navigate to the Bing homepage",
		id: "external-link"
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    text: \"Go Bing it!\",\n    link: \"https://bing.com\",\n    ariaLabel: \"Navigate to the Bing homepage\",\n    id: \"external-link\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
