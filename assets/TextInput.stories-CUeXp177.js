import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-Bm8km1dN.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/TextInput.tsx
var import_react$1, import_jsx_runtime$1, TextInput;
var init_TextInput = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$1 = require_jsx_runtime();
	TextInput = ({ label, id, password, number, onChange, placeholder, fit, autoFocus, value, autoComplete, onClick, zIndex }) => {
		const generatedId = (0, import_react$1.useId)();
		const baseId = id ?? `text-input-${generatedId}`;
		const handleChange = (e) => {
			onChange?.(e, e.target.value);
		};
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
			className: "ons-field",
			children: [label !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
				className: "ons-label",
				htmlFor: baseId,
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
				id: baseId,
				className: "ons-input ons-input--text ons-input-type__input",
				value: value ?? "",
				type: password ? "password" : number ? "number" : "text",
				style: {
					width: fit ? "unset" : void 0,
					zIndex
				},
				autoFocus,
				autoComplete,
				placeholder,
				onChange: handleChange,
				onClick,
				"data-testid": id ? `${id}-input` : void 0
			})]
		});
	};
	try {
		TextInput.displayName = "TextInput";
		TextInput.__docgenInfo = {
			"description": "Renders a text, password, or number input.",
			"displayName": "TextInput",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/TextInput.tsx",
			"methods": [],
			"props": {
				"label": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Label text.",
					"name": "label",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"password": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Whether to use `password` type. Overrides `number`.",
					"name": "password",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"number": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Whether to use `number` type.",
					"name": "number",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"onChange": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Called when the value changes.",
					"name": "onChange",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((e: ChangeEvent<HTMLInputElement, Element>, value: string) => void) | undefined" }
				},
				"placeholder": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Placeholder text displayed when the input is empty.",
					"name": "placeholder",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"fit": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Whether to remove the default width.",
					"name": "fit",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"autoFocus": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Whether to focus the input on mount.",
					"name": "autoFocus",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"value": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Input value.",
					"name": "value",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"autoComplete": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Autocomplete attribute.",
					"name": "autoComplete",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"onClick": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Called when the input is clicked.",
					"name": "onClick",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "MouseEventHandler<HTMLInputElement> | undefined" }
				},
				"zIndex": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					}],
					"description": "Input z-index.",
					"name": "zIndex",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/TextInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "number | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/TextInput.stories.tsx
var import_react, import_jsx_runtime, TextInputRender, meta, Default, Placeholder, Value, Fit, __namedExportsOrder;
//#endregion
__esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_TextInput();
	import_jsx_runtime = require_jsx_runtime();
	TextInputRender = (args) => {
		const [currentValue, setCurrentValue] = (0, import_react.useState)(args.value || "");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			...args,
			value: currentValue,
			onChange: (e, value) => {
				setCurrentValue(value);
				args.onChange?.(e, value);
			}
		});
	};
	meta = {
		title: "Components/Text Input",
		component: TextInput,
		argTypes: {
			onChange: { action: "changed" },
			onClick: { action: "clicked" }
		},
		render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInputRender, { ...args })
	};
	Default = { args: {
		id: "text-input",
		label: "Text Input",
		autoFocus: true,
		value: ""
	} };
	Placeholder = { args: {
		...Default.args,
		id: "text-input-placeholder",
		label: "Name",
		placeholder: "e.g. John Doe",
		value: ""
	} };
	Value = { args: {
		...Default.args,
		id: "text-input-value",
		label: "Biff",
		value: "Well, lookee what we have here"
	} };
	Fit = {
		render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: "1rem"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				...args,
				id: "text-input-fit-false",
				label: "False (Design System default)",
				fit: false
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				...args,
				id: "text-input-fit-true",
				label: "True (browser default)",
				fit: true
			}) })]
		}),
		args: {
			value: "",
			autoFocus: false
		}
	};
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"text-input\",\n    label: \"Text Input\",\n    autoFocus: true,\n    value: \"\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	Placeholder.parameters = {
		...Placeholder.parameters,
		docs: {
			...Placeholder.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    ...Default.args,\n    id: \"text-input-placeholder\",\n    label: \"Name\",\n    placeholder: \"e.g. John Doe\",\n    value: \"\"\n  }\n}",
				...Placeholder.parameters?.docs?.source
			}
		}
	};
	Value.parameters = {
		...Value.parameters,
		docs: {
			...Value.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    ...Default.args,\n    id: \"text-input-value\",\n    label: \"Biff\",\n    value: \"Well, lookee what we have here\"\n  }\n}",
				...Value.parameters?.docs?.source
			}
		}
	};
	Fit.parameters = {
		...Fit.parameters,
		docs: {
			...Fit.parameters?.docs,
			source: {
				originalSource: "{\n  render: args => <div style={{\n    display: \"flex\",\n    flexDirection: \"column\",\n    gap: \"1rem\"\n  }}>\n      <div>\n        <TextInput {...args} id=\"text-input-fit-false\" label=\"False (Design System default)\" fit={false} />\n      </div>\n      <div>\n        <TextInput {...args} id=\"text-input-fit-true\" label=\"True (browser default)\" fit={true} />\n      </div>\n    </div>,\n  args: {\n    value: \"\",\n    autoFocus: false\n  }\n}",
				...Fit.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = [
		"Default",
		"Placeholder",
		"Value",
		"Fit"
	];
}))();
export { Default, Fit, Placeholder, Value, __namedExportsOrder, meta as default };
