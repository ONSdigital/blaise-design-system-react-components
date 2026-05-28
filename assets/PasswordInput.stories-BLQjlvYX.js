import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-DcM16Kr9.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/PasswordInput.tsx
var import_react$1, import_jsx_runtime$1, PasswordInput;
var init_PasswordInput = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$1 = require_jsx_runtime();
	PasswordInput = ({ label = "Password", id, marginTop, onChange, value, autoFocus }) => {
		const [passwordHidden, setPasswordHidden] = (0, import_react$1.useState)(true);
		const generatedId = (0, import_react$1.useId)();
		const baseId = id ?? `password-input-${generatedId}`;
		const togglePassword = () => setPasswordHidden((prev) => !prev);
		const handleChange = (e) => {
			onChange?.(e, e.target.value);
		};
		const spacingStyle = { marginTop: marginTop ? `${marginTop}px` : void 0 };
		return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
			className: "ons-field",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
					className: "ons-label",
					htmlFor: baseId,
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("span", {
					className: "ons-checkbox ons-checkbox--toggle",
					style: spacingStyle,
					children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
						type: "checkbox",
						id: `${baseId}-toggle`,
						className: "ons-checkbox__input",
						name: "show-password",
						checked: !passwordHidden,
						onChange: togglePassword,
						"data-testid": id ? `${id}-toggle` : void 0
					}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
						className: "ons-checkbox__label",
						htmlFor: `${baseId}-toggle`,
						children: "Show password"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("input", {
					type: passwordHidden ? "password" : "text",
					id: baseId,
					className: "ons-input ons-input--text ons-input-type__input ons-u-mt-2xs",
					value: value ?? "",
					onChange: handleChange,
					autoFocus,
					autoComplete: "new-password",
					"data-testid": id ? `${id}-input` : void 0
				})
			]
		});
	};
	try {
		PasswordInput.displayName = "PasswordInput";
		PasswordInput.__docgenInfo = {
			"description": "Renders a password input.",
			"displayName": "PasswordInput",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/PasswordInput.tsx",
			"methods": [],
			"props": {
				"label": {
					"defaultValue": { "value": "Password" },
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					}],
					"description": "Label text.",
					"name": "label",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"marginTop": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					}],
					"description": "Top margin for the toggle, in pixels.",
					"name": "marginTop",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "number | undefined" }
				},
				"onChange": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					}],
					"description": "Called when the value changes.",
					"name": "onChange",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((e: ChangeEvent<HTMLInputElement, Element>, value: string) => void) | undefined" }
				},
				"value": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					}],
					"description": "Controlled input value.",
					"name": "value",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"autoFocus": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
						"name": "Props"
					}],
					"description": "Whether to focus the input on mount.",
					"name": "autoFocus",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/PasswordInput.tsx",
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
//#region src/components/PasswordInput.stories.tsx
var import_react, import_jsx_runtime, PasswordInputRender, ConfirmPasswordRender, meta, Default, ConfirmPassword, __namedExportsOrder;
//#endregion
__esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_PasswordInput();
	import_jsx_runtime = require_jsx_runtime();
	PasswordInputRender = (args) => {
		const [currentValue, setCurrentValue] = (0, import_react.useState)(args.value || "");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
			...args,
			value: currentValue,
			onChange: (e, val) => {
				setCurrentValue(val);
				args.onChange?.(e, val);
			}
		});
	};
	ConfirmPasswordRender = (args) => {
		const [password, setPassword] = (0, import_react.useState)("");
		const [confirm, setConfirm] = (0, import_react.useState)("");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: "1rem"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
				...args,
				label: "Create password",
				id: "password-create",
				value: password,
				onChange: (_e, val) => setPassword(val),
				autoFocus: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
				...args,
				label: "Confirm password",
				id: "password-confirm",
				value: confirm,
				onChange: (_e, val) => setConfirm(val),
				autoFocus: false
			})]
		});
	};
	meta = {
		title: "Components/Password Input",
		component: PasswordInput,
		argTypes: { onChange: { action: "changed" } },
		render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInputRender, { ...args })
	};
	Default = { args: {
		value: "",
		label: "Password",
		id: "password-input",
		autoFocus: true
	} };
	ConfirmPassword = {
		render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmPasswordRender, { ...args }),
		args: { value: "" }
	};
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    value: \"\",\n    label: \"Password\",\n    id: \"password-input\",\n    autoFocus: true\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	ConfirmPassword.parameters = {
		...ConfirmPassword.parameters,
		docs: {
			...ConfirmPassword.parameters?.docs,
			source: {
				originalSource: "{\n  render: args => <ConfirmPasswordRender {...args} />,\n  args: {\n    value: \"\"\n  }\n}",
				...ConfirmPassword.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default", "ConfirmPassword"];
}))();
export { ConfirmPassword, Default, __namedExportsOrder, meta as default };
