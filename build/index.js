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

function Footer() {
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("footer", { className: "footer" },
            React__default['default'].createElement("div", { className: "footer__body", "data-analytics": "footer" },
                React__default['default'].createElement("div", { className: "container " },
                    React__default['default'].createElement("div", { className: "grid grid--flex grid--between" },
                        React__default['default'].createElement("div", { className: "grid__col" },
                            React__default['default'].createElement("div", { className: "u-mt-m u-mb-s" },
                                React__default['default'].createElement("img", { src: "https://ons-design-system.netlify.app/img/ons-logo-black-en.svg", alt: "Office for National Statistics" })))))))));
}

exports.Footer = Footer;
exports.NotProductionWarning = NotProductionWarning;
//# sourceMappingURL=index.js.map
