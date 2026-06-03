import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-Bm8km1dN.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/Table.tsx
var import_react, import_jsx_runtime$1, Table;
var init_Table = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$1 = require_jsx_runtime();
	Table = ({ columns, children, tableCaption, id, scrollableLabel = "Table" }) => {
		const generatedId = (0, import_react.useId)();
		const baseId = id ?? `table-${generatedId}`;
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
			className: "ons-table-scrollable ons-table-scrollable--on",
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				className: "ons-table-scrollable__content",
				tabIndex: 0,
				role: "region",
				"aria-label": scrollableLabel,
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("table", {
					className: "ons-table",
					"data-testid": id ? `${id}-table` : void 0,
					id: baseId,
					children: [
						tableCaption && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("caption", {
							className: "ons-table__caption",
							children: tableCaption
						}),
						/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("thead", {
							className: "ons-table__head",
							children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("tr", {
								className: "ons-table__row",
								children: columns.map((title) => /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("th", {
									scope: "col",
									className: "ons-table__header ons-table__header--top",
									children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
										className: "ons-table__header-text",
										children: title
									})
								}, `${baseId}-header-${title}`))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("tbody", {
							className: "ons-table__body",
							children
						})
					]
				})
			})
		});
	};
	try {
		Table.displayName = "Table";
		Table.__docgenInfo = {
			"description": "Renders a table.",
			"displayName": "Table",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Table.tsx",
			"methods": [],
			"props": {
				"columns": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					}],
					"description": "Column header labels rendered in order.",
					"name": "columns",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string[]" }
				},
				"children": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					}],
					"description": "Table body rows.",
					"name": "children",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "ReactNode" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"tableCaption": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					}],
					"description": "Table caption.",
					"name": "tableCaption",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"scrollableLabel": {
					"defaultValue": { "value": "Table" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
						"name": "Props"
					}],
					"description": "Accessible name for the scroll area.",
					"name": "scrollableLabel",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Table.tsx",
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
//#region src/components/Table.stories.tsx
var import_jsx_runtime, meta, columns, tableBody, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_Table();
	import_jsx_runtime = require_jsx_runtime();
	meta = {
		title: "Components/Table",
		component: Table,
		argTypes: { children: { control: false } }
	};
	columns = [
		"Column 1",
		"Column 2",
		"Column 3"
	];
	tableBody = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "ons-table__row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell A1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell B1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell C1"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "ons-table__row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell A2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell B2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell C2"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: "ons-table__row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell A3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell B3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "ons-table__cell",
					children: "Cell C3"
				})
			]
		})
	] });
	Default = { args: {
		columns,
		children: tableBody,
		id: "table",
		tableCaption: "An example table"
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    columns,\n    children: tableBody,\n    id: \"table\",\n    tableCaption: \"An example table\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
