import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-Bm8km1dN.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
import { n as init_url, t as getSafeHref } from "./url-Dxwi98wm.js";
//#region src/components/BetaBanner.tsx
var import_jsx_runtime, BetaBanner;
var init_BetaBanner = __esmMin((() => {
	require_react();
	init_url();
	import_jsx_runtime = require_jsx_runtime();
	BetaBanner = ({ feedbackLink = "https://ons.service-now.com/", id }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ons-phase-banner",
			id,
			"data-testid": id ? `${id}-beta-banner` : void 0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ons-container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ons-grid ons-grid-flex ons-grid--gutterless ons-grid-flex--vertical-center ons-grid-flex--no-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ons-grid__col ons-col-auto ons-u-flex-no-grow ons-u-flex-no-shrink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "ons-phase-banner__badge",
							children: "Beta"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ons-grid__col ons-col-auto ons-u-flex-shrink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "ons-phase-banner__desc ons-u-fs-s ons-u-mb-no",
							children: [
								"This is a new service. To help us improve it,",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: getSafeHref(feedbackLink),
									className: "ons-external-link",
									target: "_blank",
									rel: "noopener noreferrer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ons-external-link__text",
											children: "give feedback"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "ons-external-link__icon",
											children: ["\xA0", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "ons-icon",
												viewBox: "0 0 12 12",
												xmlns: "http://www.w3.org/2000/svg",
												focusable: "false",
												"aria-hidden": "true",
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
								})
							]
						})
					})]
				})
			})
		});
	};
	try {
		BetaBanner.displayName = "BetaBanner";
		BetaBanner.__docgenInfo = {
			"description": "Renders a beta banner.",
			"displayName": "BetaBanner",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/BetaBanner.tsx",
			"methods": [],
			"props": {
				"feedbackLink": {
					"defaultValue": { "value": "https://ons.service-now.com/" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/BetaBanner.tsx",
						"name": "Props"
					}],
					"description": "Feedback URL.",
					"name": "feedbackLink",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/BetaBanner.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/BetaBanner.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/BetaBanner.tsx",
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
//#region src/components/BetaBanner.stories.tsx
var meta, Default, CustomLink, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_BetaBanner();
	meta = {
		title: "Components/Beta Banner",
		component: BetaBanner
	};
	Default = { args: {
		id: "beta-banner",
		feedbackLink: "https://ons.service-now.com/"
	} };
	CustomLink = { args: {
		id: "beta-banner-custom-link",
		feedbackLink: "https://example.com/feedback"
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"beta-banner\",\n    feedbackLink: \"https://ons.service-now.com/\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	CustomLink.parameters = {
		...CustomLink.parameters,
		docs: {
			...CustomLink.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"beta-banner-custom-link\",\n    feedbackLink: \"https://example.com/feedback\"\n  }\n}",
				...CustomLink.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default", "CustomLink"];
}))();
export { CustomLink, Default, __namedExportsOrder, meta as default };
