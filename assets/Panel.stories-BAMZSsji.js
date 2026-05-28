import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
import { t as require_jsx_runtime } from "./jsx-runtime-zKrvQtwx.js";
import { n as init_Panel, t as Panel } from "./Panel-4yJ8gQ1_.js";
//#region src/components/Panel.stories.tsx
var import_jsx_runtime, meta, Info, Success, SuccessWithTitleAndSubtext, Error, Warn, Spacious, __namedExportsOrder;
//#endregion
__esmMin((() => {
	init_Panel();
	import_jsx_runtime = require_jsx_runtime();
	meta = {
		title: "Components/Panel",
		component: Panel,
		argTypes: { children: { control: false } }
	};
	Info = { args: {
		id: "panel-info",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Some message in an info panel" })
	} };
	Success = { args: {
		id: "panel-success",
		status: "success",
		bigIcon: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Some message in a success panel" })
	} };
	SuccessWithTitleAndSubtext = { args: {
		id: "panel-success-title",
		status: "success",
		bigIcon: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "ons-u-fs-r--b ons-u-mb-xs",
			children: "Title in a success panel"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "ons-u-mt-no",
			children: "And then some subtext"
		})] })
	} };
	Error = { args: {
		id: "panel-error",
		status: "error",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Some message in an error panel" })
	} };
	Warn = { args: {
		id: "panel-warn",
		status: "warn",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It's a trap!" })
	} };
	Spacious = { args: {
		id: "panel-spacious",
		status: "info",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "So much room for activities!" }),
		spacious: true
	} };
	Info.parameters = {
		...Info.parameters,
		docs: {
			...Info.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"panel-info\",\n    children: <p>Some message in an info panel</p>\n  }\n}",
				...Info.parameters?.docs?.source
			}
		}
	};
	Success.parameters = {
		...Success.parameters,
		docs: {
			...Success.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"panel-success\",\n    status: \"success\",\n    bigIcon: true,\n    children: <p>Some message in a success panel</p>\n  }\n}",
				...Success.parameters?.docs?.source
			}
		}
	};
	SuccessWithTitleAndSubtext.parameters = {
		...SuccessWithTitleAndSubtext.parameters,
		docs: {
			...SuccessWithTitleAndSubtext.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"panel-success-title\",\n    status: \"success\",\n    bigIcon: true,\n    children: <div>\n        <p className=\"ons-u-fs-r--b ons-u-mb-xs\">Title in a success panel</p>\n        <p className=\"ons-u-mt-no\">And then some subtext</p>\n      </div>\n  }\n}",
				...SuccessWithTitleAndSubtext.parameters?.docs?.source
			}
		}
	};
	Error.parameters = {
		...Error.parameters,
		docs: {
			...Error.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"panel-error\",\n    status: \"error\",\n    children: <p>Some message in an error panel</p>\n  }\n}",
				...Error.parameters?.docs?.source
			}
		}
	};
	Warn.parameters = {
		...Warn.parameters,
		docs: {
			...Warn.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"panel-warn\",\n    status: \"warn\",\n    children: <p>{\"It's a trap!\"}</p>\n  }\n}",
				...Warn.parameters?.docs?.source
			}
		}
	};
	Spacious.parameters = {
		...Spacious.parameters,
		docs: {
			...Spacious.parameters?.docs,
			source: {
				originalSource: "{\n  args: {\n    id: \"panel-spacious\",\n    status: \"info\",\n    children: <p>So much room for activities!</p>,\n    spacious: true\n  }\n}",
				...Spacious.parameters?.docs?.source
			}
		}
	};
	__namedExportsOrder = [
		"Info",
		"Success",
		"SuccessWithTitleAndSubtext",
		"Error",
		"Warn",
		"Spacious"
	];
}))();
export { Error, Info, Spacious, Success, SuccessWithTitleAndSubtext, Warn, __namedExportsOrder, meta as default };
