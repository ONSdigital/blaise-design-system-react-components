import React, { Component } from 'react';

function NotProductionWarning() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "census-warning", style: { background: "#d0021b", color: "#d0021b" } },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "panel panel--warn-branded panel--no-title", style: { background: "#d0021b" } },
                    React.createElement("span", { className: "panel__icon", "aria-hidden": "true", style: { color: "#d0021b" } }, "!"),
                    React.createElement("div", { className: "panel__body" },
                        React.createElement("p", { className: "u-mb-no" }, "This environment is not a production environment. Do not upload any live data to this service.")))))));
}

function Footer() {
    return (React.createElement(React.Fragment, null,
        React.createElement("footer", { className: "footer" },
            React.createElement("div", { className: "footer__body", "data-analytics": "footer" },
                React.createElement("div", { className: "container " },
                    React.createElement("div", { className: "grid grid--flex grid--between" },
                        React.createElement("div", { className: "grid__col" },
                            React.createElement("div", { className: "u-mt-m u-mb-s" },
                                React.createElement("img", { src: "https://ons-design-system.netlify.app/img/ons-logo-black-en.svg", alt: "Office for National Statistics" })))))))));
}

function Header(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "header header--internal" },
            React.createElement("div", { className: "header__top", role: "banner" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "header__grid-top grid grid--gutterless grid--flex grid--between grid--vertical-center grid--no-wrap " },
                        React.createElement("div", { className: "grid__col col-auto" },
                            React.createElement("a", { className: "header__logo-link", href: "/" },
                                React.createElement("picture", null,
                                    React.createElement("img", { className: "header__logo", src: "https://ons-design-system.netlify.app/img/ons-logo-neg-en.svg", alt: "Office for National Statistics logo" }))))))),
            React.createElement("div", { className: "header__main" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "grid grid--gutterless grid--flex grid--between grid--vertical-center grid--no-wrap" },
                        React.createElement("div", { className: "grid__col col-auto u-flex-shrink" },
                            React.createElement("div", { className: "header__title" }, props.title))))))));
}

function BetaBanner() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "phase-banner" },
            React.createElement("div", { className: "container " },
                React.createElement("div", { className: "grid grid--flex grid--gutterless grid--vertical-center grid--no-wrap" },
                    React.createElement("div", { className: "grid__col col-auto u-flex-no-grow" },
                        React.createElement("h3", { className: "phase-banner__badge" }, "BETA")),
                    React.createElement("div", { className: "grid__col col-auto u-flex-shrink" },
                        React.createElement("p", { className: "phase-banner__desc u-fs-s u-mb-no" },
                            "This is a new service \u2013 your ",
                            React.createElement("a", { href: "https://ons.service-now.com/" }, "feedback"),
                            " will help us improve it.")))))));
}

function ExternalLink(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("a", { href: props.link, id: props.id, "aria-label": props.ariaLabel, className: "external-link", target: "_blank", rel: "noopener noreferrer" },
            props.text,
            React.createElement("svg", { className: "svg-icon", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z", transform: "translate(-2 -1.99)" }),
                React.createElement("path", { d: "M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z", transform: "translate(-2 -1.99)" })))));
}

function ONSErrorPanel() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "panel panel--error panel--no-title" },
            React.createElement("div", { className: "panel__body" },
                React.createElement("p", null, "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later.")))));
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
    var className = "btn ";
    if (props.exportExcelBtn) {
        className = className + " " + (props.loading ? "btn--secondary btn--loader is-loading  " : " btn--excel btn--secondary");
    }
    else {
        className = className +
            (props.action ? "btn--link " : "") +
            (props.loading ? "btn--loader is-loading " : "") +
            (props.field ? "field " : "") +
            (props.primary ? "" : "btn--secondary ") +
            (props.small ? "btn--small " : "") +
            (props.disabled ? "btn--disabled " : "");
    }
    return (React.createElement("button", { id: props.id, style: spacing(), type: "button", disabled: props.loading || props.disabled, className: className, onClick: props.onClick, "data-testid": test_id() },
        React.createElement("span", { className: "btn__inner" },
            props.label,
            props.loading &&
                React.createElement("svg", { className: "svg-icon uil-default", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                    React.createElement("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none", className: "bk" }),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(0 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(30 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.08333333333333333s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(60 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.16666666666666666s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(90 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.25s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(120 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.3333333333333333s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(150 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.4166666666666667s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(180 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.5s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(210 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.5833333333333334s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(240 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.6666666666666666s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(270 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.75s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(300 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.8333333333333334s', repeatCount: 'indefinite' })),
                    React.createElement("rect", { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', transform: 'rotate(330 50 50) translate(0 -30)' },
                        React.createElement("animate", { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.9166666666666666s', repeatCount: 'indefinite' }))))));
};

var ONSPanel = function (props) {
    var className = "panel panel--" + (props.status === "success" ? "success" : props.status === "error" ? "error" : "info") + " panel--no-title " + (props.spacious ? "panel--spacious" : "") + " u-mt-m";
    return (React.createElement("div", { "data-testid": props.testID, id: props.id, className: className, hidden: props.hidden },
        props.status === "success" &&
            React.createElement("span", { className: "panel__icon" },
                React.createElement("svg", { className: "svg-icon", viewBox: "0 0 13 10", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z", transform: "translate(-1.51 -3.04)" }))),
        React.createElement("div", { className: "panel__body" }, props.children)));
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
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
        return (React.createElement("div", { className: "field" },
            React.createElement("p", { className: "field" },
                React.createElement("label", { className: "label", htmlFor: this.props.fileID },
                    this.props.label,
                    React.createElement("br", null),
                    React.createElement("span", { className: "label__description" }, this.props.description)),
                React.createElement("input", { style: { position: "static" }, type: "file", id: this.props.fileID, className: "input input--text input-type__input input--upload", name: this.props.fileName, accept: this.props.accept, onChange: function (e) { return _this.handleChange(e); }, disabled: (this.props.disabled) }))));
    };
    return ONSUpload;
}(Component));

export { BetaBanner, ExternalLink, Footer, Header, NotProductionWarning, ONSButton, ONSErrorPanel, ONSPanel, ONSUpload };
//# sourceMappingURL=index.es.js.map
