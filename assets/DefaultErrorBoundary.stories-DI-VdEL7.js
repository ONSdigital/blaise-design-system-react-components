import { i as __esmMin, s as __toESM } from "./preload-helper-D6TR99Xr.js";
import { R as require_react } from "./iframe-Bm8km1dN.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
//#region src/components/error-handling/DefaultErrorBoundary.tsx
var import_react$1, import_jsx_runtime$1, DefaultErrorBoundary;
var init_DefaultErrorBoundary = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$1 = require_jsx_runtime();
	DefaultErrorBoundary = class extends import_react$1.Component {
		static getDerivedStateFromError(_error) {
			return { hasError: true };
		}
		state = { hasError: false };
		generatedMainContentId = `default-error-boundary-main-content-${crypto.randomUUID()}`;
		componentDidCatch(error, errorInfo) {
			const { onError } = this.props;
			if (onError) {
				onError(error, errorInfo);
				return;
			}
			console.error("DefaultErrorBoundary caught an error:", error, errorInfo);
		}
		render() {
			const { id, children } = this.props;
			const mainContentId = id ? `${id}-main-content` : this.generatedMainContentId;
			if (this.state.hasError) return /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				className: "ons-page",
				id,
				"data-testid": id ? `${id}-boundary` : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
					className: "ons-page__content",
					children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("a", {
						className: "ons-skip-to-content ons-u-fs-r--b",
						href: `#${mainContentId}`,
						children: "Skip to main content"
					}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
						className: "ons-container",
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("main", {
							id: mainContentId,
							className: "ons-page__main ons-u-mt-l",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("h1", { children: "Sorry, there is a problem with the service" }),
								/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("p", { children: "Try again later." }),
								/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("p", { children: [
									"If the problem persists, please report this issue to",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("a", {
										href: "https://ons.service-now.com/",
										className: "ons-external-link",
										target: "_blank",
										rel: "noopener noreferrer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
												className: "ons-external-link__text",
												children: "Service Desk"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("span", {
												className: "ons-external-link__icon",
												children: ["\xA0", /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("svg", {
													className: "ons-icon",
													viewBox: "0 0 12 12",
													xmlns: "http://www.w3.org/2000/svg",
													"aria-hidden": "true",
													focusable: "false",
													role: "img",
													children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("path", {
														d: "M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z",
														transform: "translate(-2 -1.99)"
													}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("path", {
														d: "M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z",
														transform: "translate(-2 -1.99)"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
												className: "ons-external-link__new-window-description ons-u-vh",
												children: "(opens in a new tab)"
											})
										]
									}),
									" ",
									"and include the page you were using and the date and time the problem occurred."
								] })
							]
						})
					})]
				})
			});
			return children;
		}
	};
	try {
		DefaultErrorBoundary.displayName = "DefaultErrorBoundary";
		DefaultErrorBoundary.__docgenInfo = {
			"description": "Renders the page fallback when children throw.",
			"displayName": "DefaultErrorBoundary",
			"filePath": "/home/runner/work/blaise-design-system-react-components/blaise-design-system-react-components/src/components/error-handling/DefaultErrorBoundary.tsx",
			"methods": [],
			"props": {
				"children": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/error-handling/DefaultErrorBoundary.tsx",
						"name": "Props"
					}],
					"description": "Wrapped content.",
					"name": "children",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/error-handling/DefaultErrorBoundary.tsx",
						"name": "Props"
					},
					"required": true,
					"tags": {},
					"type": { "name": "ReactNode" }
				},
				"id": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/error-handling/DefaultErrorBoundary.tsx",
						"name": "Props"
					}],
					"description": "Element ID.",
					"name": "id",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/error-handling/DefaultErrorBoundary.tsx",
						"name": "Props"
					},
					"required": false,
					"tags": {},
					"type": { "name": "string | undefined" }
				},
				"onError": {
					"defaultValue": null,
					"declarations": [{
						"fileName": "blaise-design-system-react-components/src/components/error-handling/DefaultErrorBoundary.tsx",
						"name": "Props"
					}],
					"description": "Optional error reporter for host applications.",
					"name": "onError",
					"parent": {
						"fileName": "blaise-design-system-react-components/src/components/error-handling/DefaultErrorBoundary.tsx",
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
//#region src/components/error-handling/DefaultErrorBoundary.stories.tsx
var import_react, import_jsx_runtime, DodgyComponent, meta, Default, __namedExportsOrder;
//#endregion
__esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_DefaultErrorBoundary();
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
				children: "Click Me to Trigger Error"
			})
		});
	};
	meta = {
		title: "Components/Error Boundary/Default",
		component: DefaultErrorBoundary,
		argTypes: { children: { control: false } }
	};
	Default = {
		render: (args) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultErrorBoundary, { ...args }),
		args: {
			id: "default-error-boundary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DodgyComponent, {})
		}
	};
	Default.parameters = {
		...Default.parameters,
		docs: {
			...Default.parameters?.docs,
			source: {
				originalSource: "{\n  render: args => <DefaultErrorBoundary {...args} />,\n  args: {\n    id: \"default-error-boundary\",\n    children: <DodgyComponent />\n  }\n}",
				...Default.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = ["Default"];
}))();
export { Default, __namedExportsOrder, meta as default };
