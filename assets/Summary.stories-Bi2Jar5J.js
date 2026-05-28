import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-DcM16Kr9.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
import { i as init_textFormatting, n as formatKey, r as formatTitle } from "./textFormatting-CU-sI5Wy.js";
//#region src/components/Summary.tsx
function isSummaryRenderableRecord(value) {
	return typeof value === "object" && value !== null && "display" in value;
}
function getDisplayValue(value) {
	if (isSummaryRenderableRecord(value)) return value.display;
	return value;
}
function getCsvValue(value) {
	if (isSummaryRenderableRecord(value)) return value.csv;
	return value;
}
/** Renders a summary row. */
function SummaryItemRow({ id, fieldName, fieldValue }) {
	let displayValue = fieldValue;
	if (typeof fieldValue === "boolean") displayValue = fieldValue ? "Yes" : "No";
	else if (fieldValue === null || fieldValue === void 0 || fieldValue === "") displayValue = "Not provided";
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		className: "ons-summary__item",
		"data-testid": id ? `${id}-row` : void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("dt", {
			className: "ons-summary__item-title",
			children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				className: "ons-summary__item--text",
				children: formatTitle(fieldName)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("dd", {
			className: "ons-summary__values",
			children: typeof displayValue === "string" || typeof displayValue === "number" ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
				className: "ons-summary__text",
				"data-testid": id ? `${id}-value` : void 0,
				children: displayValue
			}) : displayValue
		})]
	});
}
/** Renders grouped summary data. */
function SummaryGroupTable({ id, className, groupedSummary }) {
	const summaryClassName = ["ons-summary", className].filter(Boolean).join(" ");
	const normalizedSummary = Array.isArray(groupedSummary) ? new GroupedSummary(groupedSummary) : groupedSummary;
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
		className: summaryClassName,
		id,
		"data-testid": id ? `${id}-summary` : void 0,
		children: normalizedSummary.groups.map((group) => {
			const groupKey = formatKey(group.title);
			const rows = Object.entries(group.records ?? {});
			return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				className: "ons-summary__group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("h2", {
						className: "ons-summary__group-title",
						children: group.title
					}),
					group.preamble,
					rows.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("dl", {
						className: "ons-summary__items",
						id: group.rowsId ?? (id ? `${id}-${groupKey}-list` : void 0),
						children: rows.map(([field, value]) => {
							const rowKey = formatKey(field);
							return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SummaryItemRow, {
								id: id ? `${id}-${groupKey}-${rowKey}` : void 0,
								fieldName: field,
								fieldValue: getDisplayValue(value)
							}, `summary-table-row-${rowKey}`);
						})
					})
				]
			}, `summary-group-wrapper-${groupKey}`);
		})
	});
}
var import_jsx_runtime$1, GroupedSummary;
var init_Summary = __esmMin((() => {
	require_react();
	init_textFormatting();
	import_jsx_runtime$1 = require_jsx_runtime();
	GroupedSummary = class {
		groups;
		constructor(groups) {
			this.groups = groups.map((group) => ({
				...group,
				records: group.records ? { ...group.records } : void 0
			}));
		}
		/** Returns a single CSV row. */
		csv() {
			return [this.groups.reduce((acc, group) => {
				if (!group.records) return acc;
				const flattenedRecords = Object.fromEntries(Object.entries(group.records).map(([field, value]) => {
					return [field, getCsvValue(value)];
				}));
				return {
					...acc,
					...flattenedRecords
				};
			}, {})];
		}
	};
	try {
		SummaryItemRow.displayName = "SummaryItemRow";
		SummaryItemRow.__docgenInfo = {
			"description": "Renders a summary row.",
			"displayName": "SummaryItemRow",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Summary.tsx",
			"methods": [],
			"props": {
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryItemProps"
					}],
					"description": "Base ID for generated test ids.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryItemProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"fieldName": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryItemProps"
					}],
					"description": "Field name.",
					"name": "fieldName",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryItemProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"fieldValue": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryItemProps"
					}],
					"description": "Field value.",
					"name": "fieldValue",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryItemProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "ReactNode" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		SummaryGroupTable.displayName = "SummaryGroupTable";
		SummaryGroupTable.__docgenInfo = {
			"description": "Renders grouped summary data.",
			"displayName": "SummaryGroupTable",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Summary.tsx",
			"methods": [],
			"props": {
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryGroupTableProps"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryGroupTableProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"className": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryGroupTableProps"
					}],
					"description": "Optional class name for spacing utilities.",
					"name": "className",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryGroupTableProps"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"groupedSummary": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryGroupTableProps"
					}],
					"description": "Summary data (class instance or raw groups).",
					"name": "groupedSummary",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Summary.tsx",
						"name": "SummaryGroupTableProps"
					},
					"required": true,
					"tags": {},
					"type": { "name": "GroupedSummary | SummaryGroup[]" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
	try {
		GroupedSummary.displayName = "GroupedSummary";
		GroupedSummary.__docgenInfo = {
			"description": "Grouped summary data.",
			"displayName": "GroupedSummary",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Summary.tsx",
			"methods": [],
			"props": {},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/Summary.stories.tsx
var import_jsx_runtime, meta, tmntSummaryGroups, Default, tmntPreambleSummaryGroups, Preamble, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_Summary();
	import_jsx_runtime = require_jsx_runtime();
	meta = {
		title: "Components/Summary",
		component: SummaryGroupTable,
		argTypes: { groupedSummary: { control: false } }
	};
	tmntSummaryGroups = [
		{
			title: "Leonardo",
			records: {
				Colour: "Blue",
				Weapon: "Katana",
				Role: "Leader",
				Personality: "Disciplined"
			}
		},
		{
			title: "Michelangelo",
			records: {
				Colour: "Orange",
				Weapon: "Nunchaku",
				Role: "Party Dude",
				Personality: "Fun-loving"
			}
		},
		{
			title: "Donatello",
			records: {
				Colour: "Purple",
				Weapon: "Bo Staff",
				Role: "Technician",
				Personality: "Intellectual"
			}
		},
		{
			title: "Raphael",
			records: {
				Colour: "Red",
				Weapon: "Sai",
				Role: "Enforcer",
				Personality: "Aggressive"
			}
		}
	];
	Default = { args: {
		id: "summary",
		groupedSummary: tmntSummaryGroups
	} };
	tmntPreambleSummaryGroups = [{
		title: "Leonardo",
		preamble: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Leonardo is the leader of the group. Review his details below." }),
		records: {
			Colour: "Blue",
			Weapon: "Katana",
			Role: "Leader",
			Personality: "Disciplined"
		}
	}, {
		title: "Michelangelo",
		preamble: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Michelangelo is the fun-loving member of the group. Review his details below." }),
		records: {
			Colour: "Orange",
			Weapon: "Nunchaku",
			Role: "Party Dude",
			Personality: "Fun-loving"
		}
	}];
	Preamble = { args: {
		id: "summary-preamble",
		groupedSummary: tmntPreambleSummaryGroups
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"summary\",\n    groupedSummary: tmntSummaryGroups\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	Preamble.parameters = {
		...Preamble.parameters,
		docs: {
			...Preamble.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"summary-preamble\",\n    groupedSummary: tmntPreambleSummaryGroups\n  }\n}",
				...Preamble.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default", "Preamble"];
}))();
export { Default, Preamble, __namedExportsOrder, meta as default };
