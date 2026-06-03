import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-BAi17vnA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
import { n as init_Panel, t as Panel } from "./Panel-RY9cMGDs.js";
//#region src/components/error-handling/ErrorBoundary.tsx
var import_react$1, import_jsx_runtime$1, ErrorBoundary;
var init_ErrorBoundary = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Panel();
	import_jsx_runtime$1 = require_jsx_runtime();
	ErrorBoundary = class extends import_react$1.Component {
		static getDerivedStateFromError(_) {
			return { hasError: true };
		}
		state = { hasError: false };
		componentDidCatch(error, errorInfo) {
			const { onError } = this.props;
			if (onError) {
				onError(error, errorInfo);
				return;
			}
			console.error("ErrorBoundary caught an error:", error, errorInfo);
		}
		render() {
			const { id, children, errorMessageText } = this.props;
			if (this.state.hasError) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Panel, {
				id,
				status: "error",
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("p", { children: errorMessageText })
			});
			return children;
		}
	};
	try {
		ErrorBoundary.displayName = "ErrorBoundary";
		ErrorBoundary.__docgenInfo = {
			"description": "Renders a fallback panel when children throw.",
			"displayName": "ErrorBoundary",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
			"methods": [],
			"props": {
				"errorMessageText": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
						"name": "Props"
					}],
					"description": "Fallback message.",
					"name": "errorMessageText",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "string" }
				},
				"children": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
						"name": "Props"
					}],
					"description": "Wrapped content.",
					"name": "children",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "ReactNode" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"onError": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
						"name": "Props"
					}],
					"description": "Optional error reporter for host applications.",
					"name": "onError",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/error-handling/ErrorBoundary.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "((error: Error, errorInfo: ErrorInfo) => void) | undefined" }
				}
			},
			"tags": {}
		};
	} catch (__react_docgen_typescript_loader_error) {}
}));
//#endregion
//#region src/components/error-handling/ErrorBoundary.stories.tsx
var import_react, import_jsx_runtime, DodgyComponent, meta, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_ErrorBoundary();
	import_jsx_runtime = require_jsx_runtime();
	DodgyComponent = () => {
		const [error, setError] = (0, import_react.useState)(false);
		if (error) throw new Error("I crashed!");
		else return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "ons-btn ons-btn--secondary",
			onClick: () => setError(true),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ons-btn__inner",
				children: "Click Me to Trigger Panel Error"
			})
		});
	};
	meta = {
		title: "Components/Error Boundary/Panel",
		component: ErrorBoundary,
		argTypes: { children: { control: false } }
	};
	Default = {
		render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { ...args }),
		args: {
			id: "error-boundary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DodgyComponent, {}),
			errorMessageText: "D'oh! This specific section has failed to load."
		}
	};
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  render: args => <ErrorBoundary {...args} />,\n  args: {\n    id: \"error-boundary\",\n    children: <DodgyComponent />,\n    errorMessageText: \"D'oh! This specific section has failed to load.\"\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
