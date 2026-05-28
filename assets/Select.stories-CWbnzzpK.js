import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-DcM16Kr9.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/Select.tsx
var import_react$1, import_jsx_runtime$1, Select;
var init_Select = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$1 = require_jsx_runtime();
	Select = ({ label, id, name, onChange, value, options }) => {
		const generatedId = (0, import_react$1.useId)();
		const baseId = id ?? `select-${generatedId}`;
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
			className: "ons-field",
			children: [label !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
				className: "ons-label",
				htmlFor: baseId,
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("select", {
				id: baseId,
				name: name ?? "select",
				value: value ?? "",
				className: "ons-input ons-input--select",
				onChange,
				"data-testid": id ? `${id}-input` : void 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
					value: "",
					disabled: true,
					children: "Select an option"
				}), options.map((option, index) => {
					const optionBaseId = option.id ?? `${baseId}-option-${index}`;
					return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("option", {
						value: option.value,
						id: option.id,
						"data-testid": id ? `${id}-option-${option.value}` : void 0,
						children: option.label
					}, optionBaseId);
				})]
			})]
		});
	};
	try {
		Select.displayName = "Select";
		Select.__docgenInfo = {
			"description": "Renders a select input.",
			"displayName": "Select",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Select.tsx",
			"methods": [],
			"props": {
				"label": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					}],
					"description": "Label text.",
					"name": "label",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"name": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					}],
					"description": "Name attribute.",
					"name": "name",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"onChange": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					}],
					"description": "Called when the value changes.",
					"name": "onChange",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((e: ChangeEvent<HTMLSelectElement, Element>) => void) | undefined" }
				},
				"value": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					}],
					"description": "Selected value.",
					"name": "value",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"options": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					}],
					"description": "Select options.",
					"name": "options",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Select.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "Option[]" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/Select.stories.tsx
var import_react, import_jsx_runtime, Selection, SelectRender, meta, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Select();
	import_jsx_runtime = require_jsx_runtime();
	Selection = [
		{
			label: "Scout",
			value: "scout"
		},
		{
			label: "Sniper",
			value: "sniper"
		},
		{
			label: "Soldier",
			value: "soldier"
		},
		{
			label: "Demoman",
			value: "demoman"
		},
		{
			label: "Medic",
			value: "medic"
		},
		{
			label: "Heavy",
			value: "heavy"
		},
		{
			label: "Pyro",
			value: "pyro"
		},
		{
			label: "Spy",
			value: "spy"
		},
		{
			label: "Engineer",
			value: "engineer"
		},
		{
			label: "Civilian",
			value: "civilian"
		}
	];
	SelectRender = (args) => {
		const [selectedValue, setSelectedValue] = (0, import_react.useState)(args.value || "");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
			...args,
			value: selectedValue,
			onChange: (e) => {
				setSelectedValue(e.target.value);
				args.onChange?.(e);
			}
		});
	};
	meta = {
		title: "Components/Select",
		component: Select,
		argTypes: { onChange: { action: "changed" } }
	};
	Default = {
		render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectRender, { ...args }),
		args: {
			id: "select",
			label: "Select class",
			options: Selection,
			value: Selection[0].value
		}
	};
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  render: args => <SelectRender {...args} />,\n  args: {\n    id: \"select\",\n    label: \"Select class\",\n    options: Selection,\n    value: Selection[0].value\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
