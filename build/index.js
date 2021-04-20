'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function NotProductionWarning() {
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "census-warning", style: { background: "#222", color: "#222" } },
            React__default['default'].createElement("div", { className: "container" },
                React__default['default'].createElement("div", { className: "panel panel--warn-branded panel--no-title", style: { background: "#222" } },
                    React__default['default'].createElement("span", { className: "panel__icon", "aria-hidden": "true", style: { color: "#222" } }, "!"),
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

function Header(_a) {
    var title = _a.title, signOutButton = _a.signOutButton, signOutFunction = _a.signOutFunction;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("header", { className: "header header--internal" },
            React__default['default'].createElement("div", { className: "header__top", role: "banner" },
                React__default['default'].createElement("div", { className: "container" },
                    React__default['default'].createElement("div", { className: "header__grid-top grid grid--gutterless grid--flex grid--between grid--vertical-center grid--no-wrap " },
                        React__default['default'].createElement("div", { className: "grid__col col-auto" },
                            React__default['default'].createElement("a", { className: "header__logo-link", href: "/" },
                                React__default['default'].createElement("picture", null,
                                    React__default['default'].createElement("img", { className: "header__logo", src: "https://ons-design-system.netlify.app/img/ons-logo-neg-en.svg", alt: "Office for National Statistics logo" }))))))),
            React__default['default'].createElement("div", { className: "header__main" },
                React__default['default'].createElement("div", { className: "container" },
                    React__default['default'].createElement("div", { className: "grid grid--gutterless grid--flex grid--between grid--vertical-center grid--no-wrap" },
                        React__default['default'].createElement("div", { className: "grid__col col-auto u-flex-shrink" },
                            React__default['default'].createElement("div", { className: "header__title" }, title)),
                        (signOutButton &&
                            React__default['default'].createElement("div", { className: "grid__col col-auto u-flex-no-shrink u-d-no@xxs@m" },
                                React__default['default'].createElement("button", { className: "btn btn--ghost u-d-no@xxs@m btn--exit", onClick: function () { return signOutFunction && signOutFunction(); } },
                                    React__default['default'].createElement("span", { className: "btn__inner" },
                                        "Save and sign out",
                                        React__default['default'].createElement("svg", { className: "svg-icon", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", focusable: "false" },
                                            React__default['default'].createElement("path", { d: "M13.85,7.65l-2.5-2.5a.5.5,0,0,0-.71,0,.48.48,0,0,0-.15.36V7h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3v1.5A.49.49,0,0,0,11,11a.48.48,0,0,0,.34-.14l2.51-2.5a.49.49,0,0,0,0-.68Z", transform: "translate(-2 -2)" }),
                                            React__default['default'].createElement("path", { d: "M8.5,14h-6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2.5,2h6a.5.5,0,0,1,.5.5V3a.5.5,0,0,1-.5.5h-5v9h5A.5.5,0,0,1,9,13v.5A.5.5,0,0,1,8.5,14Z", transform: "translate(-2 -2)" }))))))))))));
}

function BetaBanner() {
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "phase-banner" },
            React__default['default'].createElement("div", { className: "container " },
                React__default['default'].createElement("div", { className: "grid grid--flex grid--gutterless grid--vertical-center grid--no-wrap" },
                    React__default['default'].createElement("div", { className: "grid__col col-auto u-flex-no-grow" },
                        React__default['default'].createElement("h3", { className: "phase-banner__badge" }, "BETA")),
                    React__default['default'].createElement("div", { className: "grid__col col-auto u-flex-shrink" },
                        React__default['default'].createElement("p", { className: "phase-banner__desc u-fs-s u-mb-no" },
                            "This is a new service \u2013 your ",
                            React__default['default'].createElement("a", { href: "https://ons.service-now.com/" }, "feedback"),
                            " will help us improve it.")))))));
}

function ExternalLink(props) {
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("a", { href: props.link, id: props.id, "aria-label": props.ariaLabel, className: "external-link", target: "_blank", rel: "noopener noreferrer" },
            props.text,
            React__default['default'].createElement("svg", { className: "svg-icon", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" },
                React__default['default'].createElement("path", { d: "M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z", transform: "translate(-2 -1.99)" }),
                React__default['default'].createElement("path", { d: "M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z", transform: "translate(-2 -1.99)" })))));
}

function ONSErrorPanel() {
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "panel panel--error panel--no-title" },
            React__default['default'].createElement("div", { className: "panel__body" },
                React__default['default'].createElement("p", null, "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later.")))));
}

var ONSButton = function (props) {
    var spacing = function () {
        if (props.hidden)
            return { display: "none" };
        return {
            marginRight: String(props.marginRight) + "px"
        };
    };
    var test_id = function () {
        if (props.testid) {
            return props.testid + "-button";
        }
        return "button";
    };
    var className = "btn " +
        (props.action ? "btn--link " : "") +
        (props.loading ? "btn--loader is-loading " : "") +
        (props.field ? "field " : "") +
        (props.primary ? "" : "btn--secondary ") +
        (props.small ? "btn--small " : "") +
        (props.disabled ? "btn--disabled " : "");
    return (React__default['default'].createElement("button", { id: props.id, style: spacing(), type: props.submit ? "submit" : "button", disabled: props.loading || props.disabled, className: className, onClick: props.onClick, "data-testid": test_id() },
        React__default['default'].createElement("span", { className: "btn__inner" },
            props.label,
            props.loading &&
                React__default['default'].createElement("svg", { className: "svg-icon uil-default", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                    React__default['default'].createElement("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none", className: "bk" }),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(0 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(30 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.08333333333333333s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(60 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.16666666666666666s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(90 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.25s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(120 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.3333333333333333s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(150 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.4166666666666667s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(180 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.5s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(210 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.5833333333333334s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(240 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.6666666666666666s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(270 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.75s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(300 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.8333333333333334s', repeatCount: 'indefinite' })),
                    React__default['default'].createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(330 50 50) translate(0 -30)' },
                        React__default['default'].createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.9166666666666666s', repeatCount: 'indefinite' }))))));
};

var ONSPanel = function (props) {
    var className = "panel panel--" + (props.status === "success" ? "success" : props.status === "error" ? "error" : "info") + " panel--no-title " + (props.spacious ? "panel--spacious" : "") + " u-mt-m";
    return (React__default['default'].createElement("div", { "data-testid": props.testID, id: props.id, className: className, hidden: props.hidden },
        props.status === "success" &&
            React__default['default'].createElement("span", { className: "panel__icon" },
                React__default['default'].createElement("svg", { className: "svg-icon", viewBox: "0 0 13 10", xmlns: "http://www.w3.org/2000/svg" },
                    React__default['default'].createElement("path", { d: "M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z", transform: "translate(-1.51 -3.04)" }))),
        React__default['default'].createElement("div", { className: "panel__body" }, props.children)));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var ONSPasswordInput = /** @class */ (function (_super) {
    __extends(ONSPasswordInput, _super);
    function ONSPasswordInput(props) {
        var _this = _super.call(this, props) || this;
        _this.togglePassword = function () {
            _this.setState({ password: !_this.state.password });
        };
        _this.handleChange = function (e) {
            if (_this.props.onChange !== undefined) {
                _this.props.onChange(e, _this.props.value);
            }
        };
        _this.spacing = function () {
            var buttonStyle = {
                marginTop: String(_this.props.marginTop) + "px",
            };
            return buttonStyle;
        };
        _this.state = { password: true };
        return _this;
    }
    ONSPasswordInput.prototype.render = function () {
        var _this = this;
        return (React__default['default'].createElement("p", { className: "field" },
            React__default['default'].createElement("label", { className: "label", htmlFor: "password" }, this.props.label),
            React__default['default'].createElement("span", { className: "checkbox checkbox--toggle", style: this.spacing() },
                React__default['default'].createElement("input", { autoFocus: this.props.autoFocus, autoComplete: "new-password", type: "checkbox", id: "password-toggle", className: "checkbox__input", name: "show-password", onClick: this.togglePassword }),
                React__default['default'].createElement("label", { id: "password-toggle-label", className: "checkbox__label ", htmlFor: "password-toggle" }, "Show password")),
            React__default['default'].createElement("input", { type: this.state.password ? "password" : "text", id: "password", className: "input input--text input-type__input u-mt-xs", value: this.props.value, onChange: function (e) { return _this.handleChange(e); }, "data-testid": "login-password-input" })));
    };
    return ONSPasswordInput;
}(React.Component));

var ONSSelect = /** @class */ (function (_super) {
    __extends(ONSSelect, _super);
    function ONSSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.value = _this.props.value !== undefined ? _this.props.value : "";
        _this.handleChange = function (e) {
            if (_this.props.onChange !== undefined) {
                _this.props.onChange(e);
            }
            _this.value = e.target.value;
            _this.setState({ value: e.target.value });
        };
        _this.state = { value: props.value !== undefined ? _this.props.value : "" };
        return _this;
    }
    ONSSelect.prototype.defaultValue = function () {
        if (this.props.defaultValue)
            return this.props.defaultValue;
        return "";
    };
    ONSSelect.prototype.render = function () {
        var _this = this;
        return (React__default['default'].createElement("div", null,
            this.props.label !== undefined &&
                React__default['default'].createElement("label", { className: "label", htmlFor: this.props.id },
                    this.props.label,
                    " "),
            React__default['default'].createElement("select", { id: this.props.id, name: "select", defaultValue: this.defaultValue(), className: "input ", onChange: function (e) { return _this.handleChange(e); } },
                React__default['default'].createElement("option", { value: "", disabled: true, "data-testid": "select-" + this.props.id }, "Select an option"),
                this.props.options.map(function (option, index) {
                    return React__default['default'].createElement("option", { value: option.value, key: index, id: option.id, "data-testid": "option-" + _this.props.id + "-" + option.value }, option.label);
                }))));
    };
    return ONSSelect;
}(React.Component));

var ONSTextInput = /** @class */ (function (_super) {
    __extends(ONSTextInput, _super);
    function ONSTextInput(props) {
        var _this = _super.call(this, props) || this;
        _this.value = "";
        _this.handleChange = function (e) {
            if (_this.props.onChange !== undefined)
                _this.props.onChange(e, _this.props.label);
            _this.value = e.target.value;
        };
        _this.state = { value: "" };
        return _this;
    }
    ONSTextInput.prototype.render = function () {
        var _this = this;
        return (React__default['default'].createElement("p", { className: "field" },
            this.props.label !== undefined &&
                React__default['default'].createElement("label", { className: "label", htmlFor: this.props.id }, this.props.label),
            React__default['default'].createElement("input", { value: this.props.value, style: { width: this.props.fit === true ? "unset" : "" }, autoFocus: this.props.autoFocus === true, autoComplete: this.props.autoComplete, type: this.props.password === true ? "password" : "text", id: this.props.id, className: "input input--text input-type__input ", placeholder: this.props.placeholder, onChange: function (e) { return _this.handleChange(e); }, onClick: function (e) { return (_this.props.onClick !== undefined && _this.props.onClick(e)); }, "data-testid": "text-input" })));
    };
    return ONSTextInput;
}(React.Component));

var ONSUpload = /** @class */ (function (_super) {
    __extends(ONSUpload, _super);
    function ONSUpload(props) {
        var _this = _super.call(this, props) || this;
        _this.value = "";
        _this.handleChange = function (e) {
            if (_this.props.onChange !== undefined) {
                _this.props.onChange(e);
            }
            _this.value = e.target.value;
        };
        _this.state = { value: "" };
        return _this;
    }
    ONSUpload.prototype.render = function () {
        var _this = this;
        return (React__default['default'].createElement("div", { className: "field" },
            React__default['default'].createElement("p", { className: "field" },
                React__default['default'].createElement("label", { className: "label", htmlFor: this.props.fileID },
                    this.props.label,
                    React__default['default'].createElement("br", null),
                    React__default['default'].createElement("span", { className: "label__description" }, this.props.description)),
                React__default['default'].createElement("input", { style: { position: "static" }, type: "file", id: this.props.fileID, className: "input input--text input-type__input input--upload", name: this.props.fileName, accept: this.props.accept, onChange: function (e) { return _this.handleChange(e); }, disabled: (this.props.disabled) }))));
    };
    return ONSUpload;
}(React.Component));

exports.BetaBanner = BetaBanner;
exports.ExternalLink = ExternalLink;
exports.Footer = Footer;
exports.Header = Header;
exports.NotProductionWarning = NotProductionWarning;
exports.ONSButton = ONSButton;
exports.ONSErrorPanel = ONSErrorPanel;
exports.ONSPanel = ONSPanel;
exports.ONSPasswordInput = ONSPasswordInput;
exports.ONSSelect = ONSSelect;
exports.ONSTextInput = ONSTextInput;
exports.ONSUpload = ONSUpload;
//# sourceMappingURL=index.js.map
