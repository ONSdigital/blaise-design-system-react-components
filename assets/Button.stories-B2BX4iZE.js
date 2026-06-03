import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
import { n as init_Button, t as Button } from "./Button-D2Iwefyw.js";
//#region src/components/Button.stories.tsx
var import_jsx_runtime, meta, Primary, Secondary, Small, Loading, Hidden, MarginRight, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_Button();
	import_jsx_runtime = require_jsx_runtime();
	meta = {
		title: "Components/Button",
		component: Button,
		argTypes: { onClick: { action: "clicked" } }
	};
	Primary = { args: {
		id: "button-primary",
		primary: true,
		label: "Primary Button"
	} };
	Secondary = { args: {
		id: "button-secondary",
		primary: false,
		label: "Secondary Button"
	} };
	Small = { args: {
		...Primary.args,
		id: "button-small",
		label: "Small Button",
		small: true
	} };
	Loading = { args: {
		...Primary.args,
		id: "button-loading",
		label: "Loading Button",
		loading: true
	} };
	Hidden = { args: {
		...Primary.args,
		id: "button-hidden",
		label: "Hidden Button",
		hidden: true
	} };
	MarginRight = {
		args: {
			id: "button-margin-right",
			primary: true,
			label: "Margin Right Buttons"
		},
		render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				alignItems: "flex-start"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					id: "button-no-margin",
					primary: true,
					label: "Button"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No right margin" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					id: "button-with-margin",
					primary: true,
					label: "Button",
					marginRight: 24
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "With right margin (24px)" })]
			})]
		})
	};
	Primary.parameters = {
		...Primary.parameters,
		docs: {
			...Primary.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"button-primary\",\n    primary: true,\n    label: \"Primary Button\"\n  }\n}",
				...Primary.parameters?.docs?.source
			}
		}
	};
	Secondary.parameters = {
		...Secondary.parameters,
		docs: {
			...Secondary.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"button-secondary\",\n    primary: false,\n    label: \"Secondary Button\"\n  }\n}",
				...Secondary.parameters?.docs?.source
			}
		}
	};
	Small.parameters = {
		...Small.parameters,
		docs: {
			...Small.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    ...Primary.args,\n    id: \"button-small\",\n    label: \"Small Button\",\n    small: true\n  }\n}",
				...Small.parameters?.docs?.source
			}
		}
	};
	Loading.parameters = {
		...Loading.parameters,
		docs: {
			...Loading.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    ...Primary.args,\n    id: \"button-loading\",\n    label: \"Loading Button\",\n    loading: true\n  }\n}",
				...Loading.parameters?.docs?.source
			}
		}
	};
	Hidden.parameters = {
		...Hidden.parameters,
		docs: {
			...Hidden.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    ...Primary.args,\n    id: \"button-hidden\",\n    label: \"Hidden Button\",\n    hidden: true\n  }\n}",
				...Hidden.parameters?.docs?.source
			}
		}
	};
	MarginRight.parameters = {
		...MarginRight.parameters,
		docs: {
			...MarginRight.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"button-margin-right\",\n    primary: true,\n    label: \"Margin Right Buttons\"\n  },\n  render: () => <div style={{\n    display: \"flex\",\n    flexDirection: \"column\",\n    gap: \"1rem\",\n    alignItems: \"flex-start\"\n  }}>\n      <div style={{\n      display: \"flex\",\n      alignItems: \"center\"\n    }}>\n        <Button id=\"button-no-margin\" primary={true} label=\"Button\" />\n        <span>No right margin</span>\n      </div>\n      <div style={{\n      display: \"flex\",\n      alignItems: \"center\"\n    }}>\n        <Button id=\"button-with-margin\" primary={true} label=\"Button\" marginRight={24} />\n        <span>With right margin (24px)</span>\n      </div>\n    </div>\n}",
				...MarginRight.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = [
		"Primary",
		"Secondary",
		"Small",
		"Loading",
		"Hidden",
		"MarginRight"
	];
}))();
export { Hidden, Loading, MarginRight, Primary, Secondary, Small, __namedExportsOrder, meta as default };
