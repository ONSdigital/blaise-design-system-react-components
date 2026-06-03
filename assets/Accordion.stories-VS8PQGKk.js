import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-BAi17vnA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/Accordion.tsx
var import_react, import_jsx_runtime$1, Expandable, ShowAll, Accordion;
var init_Accordion = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$1 = require_jsx_runtime();
	Expandable = ({ title, content, panelBaseId, panelsOpen, setPanelsOpen, index, accordionBaseId, hasExplicitId }) => {
		const togglePanel = () => {
			setPanelsOpen((prevPanels) => {
				const newPanels = [...prevPanels];
				newPanels[index] = !newPanels[index];
				return newPanels;
			});
		};
		const handleKeyDown = (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				togglePanel();
			}
		};
		const panelIsOpen = panelsOpen[index];
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
			id: panelBaseId,
			"data-group": accordionBaseId,
			className: `ons-details ons-details--initialised ons-details--accordion ${panelIsOpen ? "ons-details--open" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				className: "ons-details__heading",
				role: "button",
				tabIndex: 0,
				"data-testid": hasExplicitId ? `${panelBaseId}-heading` : void 0,
				onClick: togglePanel,
				onKeyDown: handleKeyDown,
				"aria-expanded": panelIsOpen,
				"aria-controls": `${panelBaseId}-content`,
				"data-ga-action": panelIsOpen ? "Close panel" : "Open panel",
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
				id: `${panelBaseId}-content`,
				"data-testid": hasExplicitId ? `${panelBaseId}-content` : void 0,
				className: "ons-details__content",
				"aria-hidden": !panelIsOpen,
				children: content
			})]
		});
	};
	ShowAll = ({ showAllEnabled, panelsOpen, setPanelsOpen, accordionBaseId, hasExplicitId }) => {
		if (!showAllEnabled) return null;
		const showing = !panelsOpen.includes(false);
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("button", {
			"data-testid": hasExplicitId ? `${accordionBaseId}-show-all` : void 0,
			type: "button",
			className: "ons-btn ons-accordion__toggle-all ons-u-mb-s ons-btn--secondary ons-btn--small",
			onClick: () => setPanelsOpen((prev) => new Array(prev.length).fill(!showing)),
			"data-toggle-button": `${accordionBaseId}-toggle-all`,
			"data-close-all": "Hide all",
			"data-open-aria-label": "Show all sections",
			"data-close-aria-label": "Hide all sections",
			"data-group": accordionBaseId,
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
				className: "ons-btn__inner ons-accordion__toggle-all-inner",
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
					className: "ons-btn__text",
					children: showing ? "Hide all" : "Show all"
				})
			})
		});
	};
	Accordion = ({ showAllEnabled, expandables, id, expanded }) => {
		const generatedId = (0, import_react.useId)();
		const baseId = id ?? `accordion-${generatedId}`;
		const isParentIdExplicit = Boolean(id);
		const [panelsOpen, setPanelsOpen] = (0, import_react.useState)(() => new Array(expandables.length).fill(expanded ?? false));
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
			id: baseId,
			className: "ons-accordion",
			"data-testid": id ? `${id}-accordion` : void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(ShowAll, {
				showAllEnabled,
				panelsOpen,
				setPanelsOpen,
				accordionBaseId: baseId,
				hasExplicitId: isParentIdExplicit
			}), expandables.map((expandable, index) => {
				const panelBaseId = expandable.id ?? `${baseId}-panel-${index}`;
				const panelHasExplicitId = !!expandable.id || isParentIdExplicit;
				return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Expandable, {
					content: expandable.content,
					title: expandable.title,
					panelBaseId,
					index,
					accordionBaseId: baseId,
					setPanelsOpen,
					panelsOpen,
					hasExplicitId: panelHasExplicitId
				}, panelBaseId);
			})]
		});
	};
	try {
		Accordion.displayName = "Accordion";
		Accordion.__docgenInfo = {
			"description": "Renders an accordion.",
			"displayName": "Accordion",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Accordion.tsx",
			"methods": [],
			"props": {
				"showAllEnabled": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Accordion.tsx",
						"name": "Props"
					}],
					"description": "Whether to show the Show all / Hide all button.",
					"name": "showAllEnabled",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Accordion.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"expandables": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Accordion.tsx",
						"name": "Props"
					}],
					"description": "Accordion panels.",
					"name": "expandables",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Accordion.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "ExpandableContent[]" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Accordion.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Accordion.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"expanded": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Accordion.tsx",
						"name": "Props"
					}],
					"description": "Whether every panel starts expanded.",
					"name": "expanded",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Accordion.tsx",
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
//#region src/components/Accordion.stories.tsx
var import_jsx_runtime, meta, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_Accordion();
	import_jsx_runtime = require_jsx_runtime();
	meta = {
		title: "Components/Accordion",
		component: Accordion,
		argTypes: { expandables: { control: false } }
	};
	Default = { args: {
		id: "accordion",
		showAllEnabled: true,
		expanded: false,
		expandables: [{
			id: "meaning-of-life",
			title: "What is the meaning of life, the universe, and everything?",
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "42" })
		}, {
			id: "airspeed-velocity",
			title: "What is the airspeed velocity of an unladen swallow?",
			content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "African or European?" })
		}]
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"accordion\",\n    showAllEnabled: true,\n    expanded: false,\n    expandables: [{\n      id: \"meaning-of-life\",\n      title: \"What is the meaning of life, the universe, and everything?\",\n      content: <p>42</p>\n    }, {\n      id: \"airspeed-velocity\",\n      title: \"What is the airspeed velocity of an unladen swallow?\",\n      content: <p>African or European?</p>\n    }]\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
