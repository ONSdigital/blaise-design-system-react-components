'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function NotProductionWarning() {
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "census-warning", style: { background: "#d0021b", color: "#d0021b" } },
            React__default['default'].createElement("div", { className: "container" },
                React__default['default'].createElement("div", { className: "panel panel--warn-branded panel--no-title", style: { background: "#d0021b" } },
                    React__default['default'].createElement("span", { className: "panel__icon", "aria-hidden": "true", style: { color: "#d0021b" } }, "!"),
                    React__default['default'].createElement("div", { className: "panel__body" },
                        React__default['default'].createElement("p", { className: "u-mb-no" }, "This environment is not a production environment. Do not upload any live data to this service.")))))));
}

exports.default = NotProductionWarning;
//# sourceMappingURL=index.js.map
