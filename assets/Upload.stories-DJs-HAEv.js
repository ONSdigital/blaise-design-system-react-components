import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-Bm8km1dN.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/Upload.tsx
var import_react, import_jsx_runtime, Upload;
var init_Upload = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime = require_jsx_runtime();
	Upload = ({ label, description, name, fileName, id, accept, onChange, disabled }) => {
		const generatedId = (0, import_react.useId)();
		const baseId = id ?? `upload-${generatedId}`;
		const inputName = name ?? fileName ?? "file";
		const handleChange = (e) => {
			onChange?.(e, e.target.value);
		};
		const hintId = `${baseId}-hint`;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ons-field",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "ons-label ons-label--with-description",
					htmlFor: baseId,
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					id: hintId,
					className: "ons-label__description ons-input--with-description",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					id: baseId,
					className: "ons-input ons-input--text ons-input-type__input ons-input--upload",
					name: inputName,
					accept,
					onChange: handleChange,
					disabled,
					"data-testid": id ? `${id}-input` : void 0,
					"aria-describedby": hintId
				})
			]
		});
	};
	try {
		Upload.displayName = "Upload";
		Upload.__docgenInfo = {
			"description": "Renders a file input.",
			"displayName": "Upload",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Upload.tsx",
			"methods": [],
			"props": {
				"label": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					}],
					"description": "Label text.",
					"name": "label",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"description": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					}],
					"description": "Hint text.",
					"name": "description",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"name": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					}],
					"description": "Name attribute.",
					"name": "name",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"fileName": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					}],
					"description": "Backward-compatible alias for the name attribute.",
					"name": "fileName",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"accept": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					}],
					"description": "Accepted file types.",
					"name": "accept",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"onChange": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					}],
					"description": "Called when the file selection changes.",
					"name": "onChange",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((e: ChangeEvent<HTMLInputElement, Element>, value: string) => void) | undefined" }
				},
				"disabled": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
						"name": "Props"
					}],
					"description": "Whether to disable the input.",
					"name": "disabled",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Upload.tsx",
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
//#region src/components/Upload.stories.tsx
var meta, Default, Disabled, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_Upload();
	meta = {
		title: "Components/Upload",
		component: Upload,
		argTypes: { onChange: { action: "changed" } }
	};
	Default = { args: {
		label: "Upload",
		description: "Upload a file with the following extension: pdf",
		name: "file-upload",
		id: "upload",
		accept: ".pdf"
	} };
	Disabled = { args: {
		label: "Upload",
		description: "Go on, try it...",
		name: "file-upload",
		id: "upload-disabled",
		accept: ".pdf",
		disabled: true
	} };
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    label: \"Upload\",\n    description: \"Upload a file with the following extension: pdf\",\n    name: \"file-upload\",\n    id: \"upload\",\n    accept: \".pdf\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	Disabled.parameters = {
		...Disabled.parameters,
		docs: {
			...Disabled.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    label: \"Upload\",\n    description: \"Go on, try it...\",\n    name: \"file-upload\",\n    id: \"upload-disabled\",\n    accept: \".pdf\",\n    disabled: true\n  }\n}",
				...Disabled.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default", "Disabled"];
}))();
export { Default, Disabled, __namedExportsOrder, meta as default };
