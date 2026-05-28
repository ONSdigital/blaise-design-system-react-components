import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-DcM16Kr9.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/Button.tsx
var import_jsx_runtime, Button;
var init_Button = __esmMin((() => {
	require_react();
	import_jsx_runtime = require_jsx_runtime();
	Button = ({ label, id, primary, small, loading, marginRight, onClick, disabled, action, hidden, submit }) => {
		const styles = {
			display: hidden ? "none" : void 0,
			marginRight: marginRight ? `${marginRight}px` : void 0
		};
		const classNames = [
			"ons-btn",
			action && "ons-btn--link",
			loading && "ons-btn--loader ons-is-loading",
			!primary && "ons-btn--secondary",
			small && "ons-btn--small",
			disabled && "ons-btn--disabled"
		].filter(Boolean).join(" ");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			id,
			style: styles,
			type: submit ? "submit" : "button",
			disabled: loading || disabled,
			className: classNames,
			onClick,
			"data-testid": id ? `${id}-button` : void 0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ons-btn__inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ons-btn__text",
					children: label
				}), loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "ons-icon ons-u-ml-2xs",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 100 100",
					preserveAspectRatio: "xMidYMid",
					"aria-hidden": "true",
					focusable: "false",
					fill: "currentColor",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "0",
						y: "0",
						width: "100",
						height: "100",
						fill: "none"
					}), [
						0,
						30,
						60,
						90,
						120,
						150,
						180,
						210,
						240,
						270,
						300,
						330
					].map((rotation, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "46.5",
						y: "40",
						width: "7",
						height: "20",
						rx: "5",
						ry: "5",
						transform: `rotate(${rotation} 50 50) translate(0 -30)`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
							attributeName: "opacity",
							from: "1",
							to: "0",
							dur: "1s",
							begin: `${i * (1 / 12)}s`,
							repeatCount: "indefinite"
						})
					}, rotation))]
				})]
			})
		});
	};
	try {
		Button.displayName = "Button";
		Button.__docgenInfo = {
			"description": "Renders a button.",
			"displayName": "Button",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/Button.tsx",
			"methods": [],
			"props": {
				"label": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Visible button text.",
					"name": "label",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"primary": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Whether to use the primary variant.",
					"name": "primary",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "boolean" }
				},
				"small": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Whether to use the small variant.",
					"name": "small",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"loading": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Whether to show a loading spinner and disable the button.",
					"name": "loading",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"marginRight": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Right margin in pixels.",
					"name": "marginRight",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "number | undefined" }
				},
				"onClick": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Called when the button is clicked.",
					"name": "onClick",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "MouseEventHandler<HTMLButtonElement> | undefined" }
				},
				"disabled": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Whether to disable the button.",
					"name": "disabled",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"action": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Whether to use the link-style variant.",
					"name": "action",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"hidden": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Whether to hide the button.",
					"name": "hidden",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "boolean | undefined" }
				},
				"submit": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
						"name": "Props"
					}],
					"description": "Whether to use `type=\"submit\"`.",
					"name": "submit",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/Button.tsx",
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
export { init_Button as n, Button as t };
