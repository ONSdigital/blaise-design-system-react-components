'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var formik = require('formik');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * This one is not an 'Official' component. But is based on the Branded Census warning panel.
 * Shown at the top of a page, above the header to warn users.
 */
function NotProductionWarning() {
    return (React__default["default"].createElement("div", { style: { background: "#222", color: "#222" } },
        React__default["default"].createElement("div", { className: "ons-container" },
            React__default["default"].createElement("div", { className: "ons-panel ons-panel--warn-branded ons-panel--no-title", style: { background: "#222" } },
                React__default["default"].createElement("span", { className: "ons-panel__icon", "aria-hidden": "true", style: { color: "#222" } }, "!"),
                React__default["default"].createElement("span", { className: "ons-panel__assistive-text ons-u-vh" }, "Warning: "),
                React__default["default"].createElement("div", { className: "ons-panel__body" },
                    React__default["default"].createElement("p", { className: "ons-u-mb-no" }, "This environment is not a production environment. Do not upload any live data to this service."))))));
}

function Footer() {
    return (React__default["default"].createElement("footer", { className: "ons-footer" },
        React__default["default"].createElement("div", { className: "ons-footer__body", "data-analytics": "footer" },
            React__default["default"].createElement("div", { className: "ons-container" },
                React__default["default"].createElement("div", { className: "ons-grid" }),
                React__default["default"].createElement("div", { className: "ons-grid ons-grid--flex ons-grid--vertical-top ons-grid--between" },
                    React__default["default"].createElement("div", { className: "ons-grid__col" },
                        React__default["default"].createElement("div", { className: "ons-footer__poweredby ons-u-mb-m" },
                            React__default["default"].createElement("svg", { className: "ons-svg-logo", xmlns: "http://www.w3.org/2000/svg", width: "197", height: "19", viewBox: "33 2 552 60", "aria-labelledby": "ons-logo-en-footer-alt" },
                                React__default["default"].createElement("title", { id: "ons-logo-en-footer-alt" }, "Office for National Statistics"),
                                React__default["default"].createElement("g", { className: "ons-svg-logo__group ons-svg-logo__group--secondary", fill: "#a8bd3a" },
                                    React__default["default"].createElement("path", { d: "M0,34.6c.8-1.69,1.39-3,2.32-4.6A38.28,38.28,0,0,1,0,23.4V34.6M5,3S0,3,0,9.25v1A62.12,62.12,0,0,0,4.2,27a43.77,43.77,0,0,1,9.42-10.79C21.69,9.21,31.16,5.13,45.9,3Z" })),
                                React__default["default"].createElement("g", { className: "ons-svg-logo__group ons-svg-logo__group--primary", fill: "#003c57" },
                                    React__default["default"].createElement("path", { d: "M53.06,6.42C36.2,8,24.68,12.92,16.43,20.07A41.46,41.46,0,0,0,6.4,32.2C12.87,44.93,28.88,57,46.6,57H47s6.32.21,6.32-6.91V6.36a1.22,1.22,0,0,1-.26.06M9.72,42.67a44.25,44.25,0,0,1-5-7.42A80.59,80.59,0,0,0,0,46.38V56.91L31.06,57c-9.83-3-15.74-7.64-21.34-14.3" })),
                                React__default["default"].createElement("g", { className: "ons-svg-logo__group ons-svg-logo__group--text", fill: "#003c57" },
                                    React__default["default"].createElement("path", { d: "M82,47.49c-9.07,0-13.13-7.51-13.13-16.77S72.91,14,82,14s13.1,7.61,13.1,16.77S91.1,47.54,82,47.54m0-30.91c-6.69,0-9.07,7.33-9.07,14.05s2.16,13.9,9.07,13.9,9-7.28,9-13.9-2.34-14-9-14" }),
                                    React__default["default"].createElement("path", { d: "M106.36,23.81V46.88h-3.67V23.81H98.93V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z" }),
                                    React__default["default"].createElement("path", { d: "M121.53,23.81V46.88h-3.67V23.81H114.1V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z" }),
                                    React__default["default"].createElement("path", { d: "M132.85,16.72a2.28,2.28,0,0,1-2.33-2.23v0a2.34,2.34,0,0,1,4.67,0,2.28,2.28,0,0,1-2.3,2.26h0M131,21.56h3.71V46.88H131Z" }),
                                    React__default["default"].createElement("path", { d: "M150.53,47.49c-6,0-10.63-5.16-10.63-13.29S144.52,21,150.66,21a9.76,9.76,0,0,1,6.17,1.74l-1,2.25a7.53,7.53,0,0,0-4.4-1.36c-5.15,0-7.78,4.46-7.78,10.48,0,6.2,3,10.62,7.65,10.62a8,8,0,0,0,4.49-1.37l1,2.45a10.21,10.21,0,0,1-6.3,1.73" }),
                                    React__default["default"].createElement("path", { d: "M162.84,35.75c.48,6,3.76,9,8.9,9a14.66,14.66,0,0,0,6.88-1.55l1.08,2.59a18,18,0,0,1-8.22,1.73c-7.12,0-12.18-4.23-12.18-13.34,0-8.69,4.67-13.2,11-13.2s10.37,3.95,10.37,12.4Zm7.35-12.41c-4.1,0-7.56,3.2-7.52,10.29l14.39-2c0-5.87-2.81-8.32-6.87-8.32" }),
                                    React__default["default"].createElement("path", { d: "M198.57,23.81V46.88H194.9V23.81h-3.76V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.39,0,.87.05.87.05v2.35h-.44c-2.54,0-4.84,1.64-4.84,5.12v4.09h5.28v2.25Z" }),
                                    React__default["default"].createElement("path", { d: "M217.28,47.49c-7.47,0-10.89-5.78-10.89-13.24S209.81,21,217.28,21s10.85,5.82,10.85,13.3-3.37,13.24-10.85,13.24m0-24c-5.53,0-7.13,5.59-7.13,10.81s1.73,10.56,7.13,10.56,7.13-5.35,7.13-10.56-1.6-10.81-7.13-10.81" }),
                                    React__default["default"].createElement("path", { d: "M244.08,23.91c-2.34-.61-5.75-.52-7.35.47v22.5H233V22.69c2.67-1.13,5.36-1.74,10.11-1.74H245Z" }),
                                    React__default["default"].createElement("path", { d: "M277.42,47.13,263.07,25a32.2,32.2,0,0,1-1.85-3.29h-.09s.13,1.88.13,3.85V47.13h-4.71V14.8h5.31l13.61,20.82A28.76,28.76,0,0,1,277.38,39h.08s-.17-1.84-.17-3.77V14.8H282V47.13Z" }),
                                    React__default["default"].createElement("path", { d: "M297.52,47.79c-7.43,0-10.93-3-10.93-7.81,0-6.8,7.12-8.64,15.59-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L288.23,23a24,24,0,0,1,9.12-1.83c5.61,0,9.93,2.3,9.93,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.26.67-10.45,1.84-10.45,6.73,0,3.42,2.42,4.88,6.22,4.88a10.09,10.09,0,0,0,4.23-.84Z" }),
                                    React__default["default"].createElement("path", { d: "M322,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.55V21.81h3.55V16.12l5.4-1.5v7.19H325v3.28h-5V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52" }),
                                    React__default["default"].createElement("path", { d: "M331.91,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z" }),
                                    React__default["default"].createElement("path", { d: "M350.88,47.79c-7.73,0-11.57-5.74-11.57-13.3s3.84-13.34,11.57-13.34,11.54,5.78,11.54,13.34-3.8,13.3-11.54,13.3m0-23.17c-4.66,0-6.05,4.89-6.05,9.82s1.47,9.63,6.05,9.63,6.05-4.7,6.05-9.63-1.38-9.82-6.05-9.82" }),
                                    React__default["default"].createElement("path", { d: "M382.52,47.13V29c0-3.24-2.77-4.47-5.88-4.47a12.3,12.3,0,0,0-4.37.76v21.8h-5.39V23a26.81,26.81,0,0,1,10.06-1.83c6.61,0,11,2.25,11,7.8V47.13Z" }),
                                    React__default["default"].createElement("path", { d: "M403.18,47.79c-7.43,0-10.94-3-10.94-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L393.89,23A24,24,0,0,1,403,21.15c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.43,4.88,6.23,4.88a10.09,10.09,0,0,0,4.23-.84Z" }),
                                    React__default["default"].createElement("polygon", { points: "418.52 47.13 418.52 34.91 418.52 10.25 423.92 10.25 423.92 22.76 423.92 47.13 418.52 47.13" }),
                                    React__default["default"].createElement("path", { d: "M445.39,47.79A19.11,19.11,0,0,1,436.58,46l1.51-4a13.48,13.48,0,0,0,6.22,1.55c3.76,0,6.44-2.21,6.44-5.41,0-7.09-13.44-4.36-13.44-14.42,0-5.13,4.15-9.59,10.72-9.59A15.82,15.82,0,0,1,455.8,16l-1.38,3.52a11.93,11.93,0,0,0-5.66-1.5c-3.5,0-5.79,2.11-5.79,5.12,0,7,13.74,3.94,13.74,14.65,0,5.74-4.71,10-11.32,10" }),
                                    React__default["default"].createElement("path", { d: "M470.41,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.12,5.12,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52" }),
                                    React__default["default"].createElement("path", { d: "M487.27,47.79c-7.44,0-10.93-3-10.93-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.38-4.51-5.84-4.51a18,18,0,0,0-6.87,1.46L478,23a23.94,23.94,0,0,1,9.11-1.83c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83M492,33.16c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.42,4.88,6.22,4.88a10,10,0,0,0,4.24-.84Z" }),
                                    React__default["default"].createElement("path", { d: "M511.73,47.69c-5.32,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52" }),
                                    React__default["default"].createElement("path", { d: "M521.66,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.45V47.13h-5.45Z" }),
                                    React__default["default"].createElement("path", { d: "M536.19,47.79A15.9,15.9,0,0,1,528.54,46L530,42.48a10.53,10.53,0,0,0,5.52,1.5c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.86-7.42A13.56,13.56,0,0,1,545.34,23l-1.42,3.14a8.47,8.47,0,0,0-4.62-1.45c-2.81,0-4.54,1.69-4.54,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9" }),
                                    React__default["default"].createElement("path", { d: "M559.83,47.69c-5.31,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.93v3.28h-4.93V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.64,5.64,0,0,0,1.47-.23v3.33a7.72,7.72,0,0,1-3,.52" }),
                                    React__default["default"].createElement("path", { d: "M569.77,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z" }),
                                    React__default["default"].createElement("path", { d: "M588.14,47.79c-6.23,0-11-5.08-11-13.35s4.88-13.29,11-13.29A10.51,10.51,0,0,1,594.66,23l-1.21,3a6.87,6.87,0,0,0-4-1.22c-4.4,0-6.69,3.81-6.69,9.49s2.63,9.59,6.61,9.59a6.74,6.74,0,0,0,4-1.28L594.7,46c-1.12.94-3.33,1.84-6.56,1.84" }),
                                    React__default["default"].createElement("path", { d: "M605.1,47.79A15.9,15.9,0,0,1,597.45,46l1.42-3.47A10.54,10.54,0,0,0,604.4,44c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.85-7.42a13.49,13.49,0,0,1,7.1,1.83l-1.42,3.14a8.42,8.42,0,0,0-4.63-1.45c-2.8,0-4.53,1.69-4.53,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9" }))))))))));
}

function Header(_a) {
    var title = _a.title, signOutButton = _a.signOutButton, noSave = _a.noSave, signOutFunction = _a.signOutFunction, navigationLinks = _a.navigationLinks, currentLocation = _a.currentLocation, createNavLink = _a.createNavLink;
    var createLink = function (id, label, endpoint) {
        if (createNavLink) {
            return createNavLink(id, label, endpoint);
        }
        return (React__default["default"].createElement("a", { className: "ons-navigation__link", id: id, href: endpoint, role: "link" }, label));
    };
    var signOutText = "Save and sign out";
    if (noSave) {
        signOutText = "Sign out";
    }
    return (React__default["default"].createElement("header", { className: "ons-header ons-header--internal" },
        React__default["default"].createElement("div", { className: "ons-header__top", role: "banner" },
            React__default["default"].createElement("div", { className: "ons-container" },
                React__default["default"].createElement("div", { className: "ons-header__grid-top ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap " },
                    React__default["default"].createElement("div", { className: "ons-grid__col ons-col-auto" },
                        React__default["default"].createElement("a", { className: "header__logo-link", href: "/" },
                            React__default["default"].createElement("picture", null,
                                React__default["default"].createElement("img", { className: "ons-header__logo", src: "https://cdn.ons.gov.uk/sdc/design-system/31.4.0/img/ons-logo-neg-en.svg", alt: "Office for National Statistics logo" }))))))),
        React__default["default"].createElement("div", { className: "ons-header__main" },
            React__default["default"].createElement("div", { className: "ons-container" },
                React__default["default"].createElement("div", { className: "ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap" },
                    React__default["default"].createElement("div", { className: "ons-grid__col ons-col-auto ons-u-flex-shrink" },
                        React__default["default"].createElement("div", { className: "ons-header__title" }, title)),
                    signOutButton
                        && (React__default["default"].createElement("div", { className: "ons-grid__col ons-col-auto ons-u-flex-no-shrink ons-u-d-no@xxs@m" },
                            React__default["default"].createElement("button", { id: "signout-button", "data-test-id": "signout-button", className: "ons-btn ons-btn--ghost ons-u-d-no@xxs@m ons-btn--exit", onClick: function () { return signOutFunction && signOutFunction(); }, type: "button" },
                                React__default["default"].createElement("span", { className: "ons-btn__inner" },
                                    React__default["default"].createElement("span", { className: "ons-btn__text" }, signOutText),
                                    React__default["default"].createElement("svg", { className: "ons-svg-icon ons-u-ml-xs", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", focusable: "false" },
                                        React__default["default"].createElement("path", { d: "M13.85,7.65l-2.5-2.5a.5.5,0,0,0-.71,0,.48.48,0,0,0-.15.36V7h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3v1.5A.49.49,0,0,0,11,11a.48.48,0,0,0,.34-.14l2.51-2.5a.49.49,0,0,0,0-.68Z", transform: "translate(-2 -2)" }),
                                        React__default["default"].createElement("path", { d: "M8.5,14h-6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2.5,2h6a.5.5,0,0,1,.5.5V3a.5.5,0,0,1-.5.5h-5v9h5A.5.5,0,0,1,9,13v.5A.5.5,0,0,1,8.5,14Z", transform: "translate(-2 -2)" }))))))))),
        (navigationLinks && navigationLinks.length !== 0)
            && (React__default["default"].createElement("div", { className: "ons-navigation-wrapper" },
                React__default["default"].createElement("div", { className: "ons-container ons-container--gutterless@xxs@l" },
                    React__default["default"].createElement("nav", { className: "ons-navigation ons-navigation--main ons-js-navigation", id: "main-nav", "aria-label": "Main menu", "data-analytics": "header-navigation", role: "navigation" },
                        React__default["default"].createElement("ul", { className: "ons-navigation__list" }, navigationLinks.map(function (_a, index) {
                            var id = _a.id, label = _a.label, endpoint = _a.endpoint;
                            return (React__default["default"].createElement("li", { key: index, className: "ons-navigation__item  ".concat((currentLocation === endpoint ? "ons-navigation__item--active" : "")) }, createLink(id, label, endpoint)));
                        }))))))));
}

function BetaBanner() {
    return (React__default["default"].createElement("div", { className: "ons-phase-banner" },
        React__default["default"].createElement("div", { className: "ons-container " },
            React__default["default"].createElement("div", { className: "ons-grid ons-grid--flex ons-grid--gutterless ons-grid--vertical-center ons-grid--no-wrap" },
                React__default["default"].createElement("div", { className: "ons-grid__col ons-col-auto ons-u-flex-no-grow" },
                    React__default["default"].createElement("h3", { className: "ons-phase-banner__badge" }, "BETA")),
                React__default["default"].createElement("div", { className: "ons-grid__col ons-col-auto ons-u-flex-shrink" },
                    React__default["default"].createElement("p", { className: "ons-phase-banner__desc ons-u-fs-s ons-u-mb-no" },
                        "This is a new service \u2013 your\u00A0",
                        React__default["default"].createElement("a", { href: "https://ons.service-now.com/" }, "feedback"),
                        "\u00A0will help us improve it."))))));
}

function ExternalLink(props) {
    return (React__default["default"].createElement("a", { href: props.link, id: props.id, "aria-label": props.ariaLabel, className: "ons-external-link", target: "_blank", rel: "noopener noreferrer" },
        props.text,
        React__default["default"].createElement("svg", { className: "ons-svg-icon", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" },
            React__default["default"].createElement("path", { d: "M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z", transform: "translate(-2 -1.99)" }),
            React__default["default"].createElement("path", { d: "M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z", transform: "translate(-2 -1.99)" }))));
}

/**
 * This is a Standard Panel with an error status, with a prepared message.
 */
function ONSErrorPanel() {
    return (React__default["default"].createElement("div", { className: "ons-panel ons-panel--error ons-panel--no-title" },
        React__default["default"].createElement("div", { className: "ons-panel__body" },
            React__default["default"].createElement("p", null, "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later."))));
}

var ONSButton = function (props) {
    var spacing = function () {
        if (props.hidden)
            return { display: "none" };
        return {
            marginRight: "".concat(String(props.marginRight), "px"),
        };
    };
    var testId = function () {
        if (props.testid) {
            return "".concat(props.testid, "-button");
        }
        return "button";
    };
    var className = [
        "ons-btn ",
        props.action ? "ons-btn--link" : null,
        props.loading ? "ons-btn--loader ons-is-loading" : null,
        props.field ? "ons-field" : null,
        props.primary ? null : "ons-btn--secondary",
        props.small ? "ons-btn--small" : null,
        props.disabled ? "ons-btn--disabled" : null,
    ].filter(function (name) { return name !== null; }).join(" ");
    return (React__default["default"].createElement("button", { id: props.id, style: spacing(), type: props.submit ? "submit" : "button", disabled: props.loading || props.disabled, className: className, onClick: props.onClick, "data-testid": testId() },
        React__default["default"].createElement("span", { className: "ons-btn__inner" },
            props.label,
            props.loading
                && (React__default["default"].createElement("svg", { className: "ons-svg-icon uil-default", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                    React__default["default"].createElement("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none", className: "bk" }),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(0 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(30 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.08333333333333333s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(60 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.16666666666666666s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(90 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.25s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(120 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.3333333333333333s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(150 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.4166666666666667s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(180 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.5s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(210 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.5833333333333334s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(240 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.6666666666666666s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(270 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.75s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(300 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.8333333333333334s", repeatCount: "indefinite" })),
                    React__default["default"].createElement("rect", { x: "46.5", y: "40", width: "7", height: "20", rx: "5", ry: "5", transform: "rotate(330 50 50) translate(0 -30)" },
                        React__default["default"].createElement("animate", { attributeName: "opacity", from: "1", to: "0", dur: "1s", begin: "0.9166666666666666s", repeatCount: "indefinite" })))))));
};

var ONSPanel = function (props) {
    var className = "ons-panel ons-panel--".concat(props.status ? props.status : "info", " ons-panel--no-title ").concat(props.spacious ? "ons-panel--spacious" : "", " ons-u-mt-m");
    return (React__default["default"].createElement("div", { "data-testid": props.testID, id: props.id, className: className, hidden: props.hidden },
        props.status === "success"
            && (React__default["default"].createElement("span", { className: "ons-panel__icon" },
                React__default["default"].createElement("svg", { className: "ons-svg-icon ".concat(props.bigIcon === true ? "ons-svg-icon--xl" : ""), viewBox: "0 0 13 10", xmlns: "http://www.w3.org/2000/svg" },
                    React__default["default"].createElement("path", { d: "M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z", transform: "translate(-1.51 -3.04)" })))),
        props.status === "warn"
            && (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("span", { className: "ons-panel__icon", "aria-hidden": "true" }, "!"),
                React__default["default"].createElement("span", { className: "ons-u-vh" }, "Warning: "))),
        React__default["default"].createElement("div", { className: "ons-panel__body ".concat(props.bigIcon === true ? "ons-svg-icon-margin--xl" : "") }, props.children)));
};

/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var ONSPasswordInput = /** @class */ (function (_super) {
    __extends(ONSPasswordInput, _super);
    function ONSPasswordInput(props) {
        var _this = _super.call(this, props) || this;
        _this.togglePassword = function () {
            _this.setState(function (prevState) { return ({ password: !prevState.password }); });
        };
        _this.handleChange = function (e) {
            if (_this.props.onChange !== undefined) {
                _this.props.onChange(e, _this.props.value);
            }
        };
        _this.spacing = function () {
            var buttonStyle = {
                marginTop: "".concat(String(_this.props.marginTop), "px"),
            };
            return buttonStyle;
        };
        _this.state = { password: true };
        return _this;
    }
    ONSPasswordInput.prototype.render = function () {
        var _this = this;
        return (React__default["default"].createElement("p", { className: "ons-field" },
            React__default["default"].createElement("label", { className: "ons-label", htmlFor: this.props.inputId || "password" }, this.props.label),
            React__default["default"].createElement("span", { className: "ons-checkbox ons-checkbox--toggle", style: this.spacing() },
                React__default["default"].createElement("input", { autoFocus: this.props.autoFocus, autoComplete: "new-password", type: "checkbox", id: "password-toggle", className: "ons-checkbox__input", name: "show-password", onClick: this.togglePassword, "data-testid": "login-password-toggle" }),
                React__default["default"].createElement("label", { id: "password-toggle-label", className: "ons-checkbox__label ", htmlFor: "password-toggle" }, "Show password")),
            React__default["default"].createElement("input", { type: this.state.password ? "password" : "text", id: this.props.inputId || "password", className: "ons-input ons-input--text ons-input-type__input ons-u-mt-xs", value: this.props.value, onChange: function (e) { return _this.handleChange(e); }, "data-testid": "login-password-input" })));
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
        return (React__default["default"].createElement("div", null,
            this.props.label !== undefined
                && (React__default["default"].createElement("label", { className: "ons-label", htmlFor: this.props.id },
                    this.props.label,
                    " ")),
            React__default["default"].createElement("select", { id: this.props.id, name: "select", defaultValue: this.defaultValue(), className: "ons-input ", onChange: function (e) { return _this.handleChange(e); }, "data-testid": this.props.testId },
                React__default["default"].createElement("option", { value: "", disabled: true, "data-testid": "select-".concat(this.props.id) }, "Select an option"),
                this.props.options.map(function (option, index) { return (React__default["default"].createElement("option", { value: option.value, key: index, id: option.id, "data-testid": "option-".concat(_this.props.id, "-").concat(option.value) }, option.label)); }))));
    };
    return ONSSelect;
}(React.Component));

var ONSTextInput = /** @class */ (function (_super) {
    __extends(ONSTextInput, _super);
    function ONSTextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            if (_this.props.onChange !== undefined)
                _this.props.onChange(e, _this.props.label);
        };
        return _this;
    }
    ONSTextInput.prototype.render = function () {
        var _this = this;
        return (React__default["default"].createElement("p", { className: "ons-field" },
            this.props.label !== undefined
                && React__default["default"].createElement("label", { className: "ons-label", htmlFor: this.props.id }, this.props.label),
            React__default["default"].createElement("input", { value: this.props.value, style: { width: this.props.fit === true ? "unset" : "", zIndex: this.props.zIndex ? this.props.zIndex : 0 }, autoFocus: this.props.autoFocus === true, autoComplete: this.props.autoComplete, type: this.props.password === true ? "password" : this.props.number === true ? "number" : "text", id: this.props.id, className: "ons-input ons-input--text ons-input-type__input ", placeholder: this.props.placeholder, onChange: function (e) { return _this.handleChange(e); }, onClick: function (e) { return (_this.props.onClick !== undefined && _this.props.onClick(e)); }, "data-testid": this.props.testId !== undefined ? this.props.testId : "text-input" })));
    };
    return ONSTextInput;
}(React.Component));

var ONSUpload = /** @class */ (function (_super) {
    __extends(ONSUpload, _super);
    function ONSUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            if (_this.props.onChange !== undefined) {
                _this.props.onChange(e);
            }
        };
        return _this;
    }
    ONSUpload.prototype.render = function () {
        var _this = this;
        return (React__default["default"].createElement("div", { className: "ons-field" },
            React__default["default"].createElement("p", { className: "ons-field" },
                React__default["default"].createElement("label", { className: "ons-label", htmlFor: this.props.fileID },
                    this.props.label,
                    React__default["default"].createElement("br", null),
                    React__default["default"].createElement("span", { className: "ons-label__description" }, this.props.description)),
                React__default["default"].createElement("input", { style: { position: "static" }, type: "file", id: this.props.fileID, className: "ons-input ons-input--text ons-input-type__input ons-input--upload", name: this.props.fileName, accept: this.props.accept, onChange: function (e) { return _this.handleChange(e); }, disabled: (this.props.disabled), "data-testid": "upload-input" }))));
    };
    return ONSUpload;
}(React.Component));

/**
 * Error summary list
 *  - Displayed when isValid is false.
 *  - Focuses div when error lists changes.
 *
 */
function StyledFormErrorSummary() {
    var _a = formik.useFormikContext(), errors = _a.errors, isValid = _a.isValid;
    var errorFocus;
    React.useEffect(function () {
        errorFocus === null || errorFocus === void 0 ? void 0 : errorFocus.focus();
    }, [errors, isValid]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, !isValid
        && (React__default["default"].createElement("div", { "aria-labelledby": "error-summary-title", role: "alert", tabIndex: -1, ref: function (inputEl) { return (errorFocus = inputEl); }, className: "ons-panel ons-panel--error" },
            React__default["default"].createElement("div", { className: "ons-panel__header" },
                React__default["default"].createElement("h2", { id: "error-summary-title", "data-qa": "error-header", className: "ons-panel__title ons-u-fs-r--b" }, (Object.keys(errors).length === 1
                    ? "There is 1 problem with your answer"
                    : "There are ".concat(Object.keys(errors).length, " problems with your answer")))),
            React__default["default"].createElement("div", { className: "ons-panel__body" },
                React__default["default"].createElement("ol", { className: "ons-list" }, Object.keys(errors).map(function (field, index) { return (React__default["default"].createElement("li", { key: index, className: "ons-list__item " },
                    React__default["default"].createElement("a", { href: "#".concat(field), className: "ons-list__link ons-js-inpagelink" }, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    errors[field]))); })))))));
}

// eslint-disable-next-line import/prefer-default-export
function isObjectWithProperty(value, propertyName) {
    if (typeof value !== "object") {
        return false;
    }
    if (value == null) {
        return false;
    }
    return propertyName in value;
}

function toUpperCase(string) {
    return string.trim().replace(/^\w/, function (c) { return c.toUpperCase(); });
}
function RadioFieldset(_a) {
    var description = _a.description, name = _a.name, radioOptions = _a.radioOptions, props = __rest(_a, ["description", "name", "radioOptions"]);
    return (React__default["default"].createElement("fieldset", { className: "ons-fieldset" },
        React__default["default"].createElement("legend", { className: "ons-fieldset__legend" }, description),
        React__default["default"].createElement("div", { className: "ons-radios__items", id: name }, (radioOptions && radioOptions.length > 0
            && radioOptions.map(function (radioOption, radioOptionIndex) { return (React__default["default"].createElement(React.Fragment, { key: radioOption.id },
                React__default["default"].createElement("p", { className: "ons-radios__item" },
                    React__default["default"].createElement("span", { className: "ons-radio" },
                        React__default["default"].createElement(formik.Field, __assign({ type: "radio", id: radioOption.id, name: name, value: radioOption.value, className: "ons-radio__input js-radio" }, props, { autoFocus: props.autoFocus && radioOptionIndex === 0 })),
                        React__default["default"].createElement("label", { className: "ons-radio__label ".concat(radioOption.description !== undefined ? "ons-label--with-description" : ""), htmlFor: radioOption.id, id: "".concat(radioOption.id, "-label") },
                            radioOption.label,
                            radioOption.description !== undefined
                                && (React__default["default"].createElement("span", { id: "white-label-description-hint", className: "ons-label__description ons-radio__label--with-description" }, radioOption.description))),
                        radioOption.specifyOption && (React__default["default"].createElement("span", { className: "ons-radio__other ons-radio__other--open", id: "other-radio-other-wrap" },
                            React__default["default"].createElement("label", { className: "ons-label ons-u-fs-s--b ", htmlFor: radioOption.specifyOption.id, id: "other-textbox-label" }, radioOption.specifyOption.description),
                            React__default["default"].createElement(formik.Field, { type: radioOption.specifyOption.type, id: radioOption.specifyOption.id, name: radioOption.specifyOption.name, validate: radioOption.specifyOption.validate, min: radioOption.specifyOption.min, className: "ons-input ons-input--text ons-input-type__input ons-input--w-auto" }))))),
                React__default["default"].createElement("br", null))); })))));
}
function CheckboxesFieldset(_a) {
    var description = _a.description, checkboxOptions = _a.checkboxOptions, name = _a.name, props = __rest(_a, ["description", "checkboxOptions", "name"]);
    var _b = formik.useFormikContext(), values = _b.values, setFieldValue = _b.setFieldValue;
    var allValues = (checkboxOptions || []).map(function (checkboxOption) { return checkboxOption.value; });
    function areArraysEqual(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        return array1.every(function (item) { return array2.includes(item); });
    }
    function isAllSelected() {
        if (!isObjectWithProperty(values, name)) {
            return [];
        }
        return areArraysEqual(values[name] || [], allValues);
    }
    function handleSelectAll() {
        if (isAllSelected()) {
            setFieldValue(name, []);
        }
        else {
            setFieldValue(name, allValues);
        }
    }
    return (React__default["default"].createElement("fieldset", { className: "ons-fieldset" },
        React__default["default"].createElement("legend", { className: "ons-fieldset__legend" }, description),
        React__default["default"].createElement("button", { type: "button", className: "ons-btn ons-u-mb-s js-auto-selector ons-btn--small ons-btn--secondary", onClick: handleSelectAll },
            React__default["default"].createElement("span", { className: "ons-btn__inner" },
                React__default["default"].createElement("span", { className: "js-button-text" }, isAllSelected() ? "Unselect All" : "Select All"),
                React__default["default"].createElement("span", { className: "ons-u-vh" }, " following checkboxes"))),
        React__default["default"].createElement("div", { className: "checkboxes__items", id: name }, (checkboxOptions && checkboxOptions.length > 0
            && checkboxOptions.map(function (checkboxOption, checkboxIndex) { return (React__default["default"].createElement(React.Fragment, { key: checkboxOption.id },
                React__default["default"].createElement("p", { className: "ons-checkboxes__item" },
                    React__default["default"].createElement("span", { className: "ons-checkbox" },
                        React__default["default"].createElement(formik.Field, __assign({ type: "checkbox", id: checkboxOption.id, name: name, value: checkboxOption.value, className: "ons-checkbox__input js-checkbox" }, props, { autoFocus: props.autoFocus && checkboxIndex === 0 })),
                        React__default["default"].createElement("label", { className: "ons-checkbox__label ".concat(checkboxOption.description !== undefined ? "ons-label--with-description" : ""), htmlFor: checkboxOption.id, id: "".concat(checkboxOption.id, "-label") },
                            checkboxOption.label,
                            checkboxOption.description !== undefined
                                && (React__default["default"].createElement("span", { id: "white-label-description-hint", className: "ons-label__description checkbox__label--with-description" }, checkboxOption.description))))),
                React__default["default"].createElement("br", null))); })))));
}
function ONSInputField(_a) {
    var field = _a.field, description = _a.description, props = __rest(_a, ["field", "description"]);
    var id = (props.id ? props.id : field.name);
    return (React__default["default"].createElement("div", { className: "ons-field" },
        React__default["default"].createElement("label", { className: "ons-label ".concat((description ? "ons-label--with-description" : "")), htmlFor: id }, toUpperCase(field.name)),
        description
            && (React__default["default"].createElement("span", { id: "description-hint", className: "ons-label__description ons-input--with-description" }, description)),
        React__default["default"].createElement("input", __assign({ id: id, className: "ons-input ons-input--text ons-input-type__input" }, field, props))));
}

function StyledFormFieldErrorWrapper(fieldError, fieldName, field) {
    return (React__default["default"].createElement("div", { className: "ons-panel ons-panel--error ons-panel--no-title ons-u-mb-s", id: "".concat(fieldName, "-error") },
        React__default["default"].createElement("span", { className: "ons-u-vh" }, "Error: "),
        React__default["default"].createElement("div", { className: "ons-panel__body" },
            React__default["default"].createElement("p", { className: "ons-panel__error" },
                React__default["default"].createElement("strong", null, fieldError)),
            field)));
}
var StyledFormField = function (_a) {
    var name = _a.name, description = _a.description, _b = _a.radioOptions, radioOptions = _b === void 0 ? [] : _b, _c = _a.checkboxOptions, checkboxOptions = _c === void 0 ? [] : _c, props = __rest(_a, ["name", "description", "radioOptions", "checkboxOptions"]);
    var errors = formik.useFormikContext().errors;
    var newField;
    if (props.type === "radio") {
        newField = (React__default["default"].createElement(RadioFieldset, __assign({ description: description, name: name, radioOptions: radioOptions }, props)));
    }
    else if (props.type === "checkbox") {
        newField = (React__default["default"].createElement(CheckboxesFieldset, __assign({ description: description, name: name, checkboxOptions: checkboxOptions }, props)));
    }
    else {
        newField = React__default["default"].createElement(formik.Field, __assign({ name: name, description: description }, props, { component: ONSInputField }));
    }
    return (React__default["default"].createElement(React.Fragment, { key: name }, errors[name]
        ? StyledFormFieldErrorWrapper(errors[name], "name", newField)
        : newField));
};

/**
 * Formik form styled to ONS design guide with form error panel
 *
 * @param Props
 *
 *  - fields: List of fields to display on form.
 *  - onSubmitFunction: Function to call after submit of form and all field validation is valid.
 */
function StyledForm(_a) {
    var fields = _a.fields, onSubmitFunction = _a.onSubmitFunction, submitLabel = _a.submitLabel;
    var initialFieldValues = {};
    fields.forEach(function (_a) {
        var name = _a.name, initial_value = _a.initial_value;
        initialFieldValues[name] = initial_value;
    });
    return (React__default["default"].createElement(formik.Formik, { validateOnBlur: false, validateOnChange: false, initialValues: initialFieldValues, onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            onSubmitFunction(values, setSubmitting);
        } }, function (_a) {
        var isValid = _a.isValid, isSubmitting = _a.isSubmitting;
        return (React__default["default"].createElement(formik.Form, null,
            React__default["default"].createElement(StyledFormErrorSummary, null),
            fields.map(function (field, index) {
                // eslint-disable-next-line no-param-reassign
                field.autoFocus = (isValid && index === 0);
                return (React__default["default"].createElement(React.Fragment, { key: field.name }, // @ts-ignore
                React__default["default"].createElement(StyledFormField, __assign({}, field))));
            }),
            React__default["default"].createElement("br", null),
            React__default["default"].createElement(ONSButton, { submit: true, label: (submitLabel || "Save and continue"), primary: true, testid: "submit", loading: isSubmitting })));
    }));
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

var has$1 = has$2;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret$1;
  var loggedTypeFailures = {};
  var has = has$1;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret$1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var require$$1$1 = factoryWithTypeCheckers;

var require$$2 = factoryWithThrowingShims;

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require$$1$1(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require$$2();
}
});

var require$$1 = propTypes;

var Circles_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circles = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Circles = function Circles(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 135 135",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "-360 67 67",
    dur: "2.5s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 67 67",
    to: "360 67 67",
    dur: "8s",
    repeatCount: "indefinite"
  })));
};

exports.Circles = Circles;
Circles.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Circles.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
});

unwrapExports(Circles_1);
Circles_1.Circles;

var Watch_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Watch = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Watch = function Watch(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    version: "1.1",
    id: "L2",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100",
    xmlSpace: "preserve",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "none",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    cx: "50",
    cy: "50",
    r: props.radius
  }), /*#__PURE__*/_react["default"].createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "85",
    y2: "50.5"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("line", {
    fill: "none",
    strokeLinecap: "round",
    stroke: props.color,
    strokeWidth: "4",
    strokeMiterlimit: "10",
    x1: "50",
    y1: "50",
    x2: "49.5",
    y2: "74"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "15s",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })));
};

exports.Watch = Watch;
Watch.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Watch.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 48
};
});

unwrapExports(Watch_1);
Watch_1.Watch;

var Audio_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audio = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Audio = function Audio(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    height: props.height,
    width: props.width,
    fill: props.color,
    viewBox: "0 0 55 80",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "matrix(1 0 0 -1 0 80)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "10",
    height: "20",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "4.3s",
    values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "15",
    width: "10",
    height: "80",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "80;55;33;5;75;23;73;33;12;14;60;80",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "30",
    width: "10",
    height: "50",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1.4s",
    values: "50;34;78;23;56;23;34;76;80;54;21;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "45",
    width: "10",
    height: "30",
    rx: "3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "30;45;13;80;56;72;45;76;34;23;67;30",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

exports.Audio = Audio;
Audio.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Audio.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
});

unwrapExports(Audio_1);
Audio_1.Audio;

var BallTriangle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BallTriangle = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BallTriangle = function BallTriangle(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    height: props.height,
    width: props.width,
    stroke: props.color,
    viewBox: "0 0 57 57",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "5",
    cy: "50",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;5;50;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    values: "5;27;49;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "27",
    cy: "5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    from: "5",
    to: "5",
    values: "5;50;50;5",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    from: "27",
    to: "27",
    values: "27;49;5;27",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "49",
    cy: "50",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;50;5;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "cx",
    from: "49",
    to: "49",
    begin: "0s",
    dur: "2.2s",
    values: "49;5;27;49",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
};

exports.BallTriangle = BallTriangle;
BallTriangle.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
BallTriangle.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 5,
  label: "audio-loading"
};
});

unwrapExports(BallTriangle_1);
BallTriangle_1.BallTriangle;

var Bars_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bars = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Bars = function Bars(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    fill: props.color,
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.Bars = Bars;
Bars.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Bars.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
});

unwrapExports(Bars_1);
Bars_1.Bars;

var CradleLoader_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CradleLoader = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CradleLoader = function CradleLoader(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "aria-label": props.label,
    role: "presentation",
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing-l"
  }), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-swing-r"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow-l"
  }), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-shadow-r"
  })));
};

exports.CradleLoader = CradleLoader;
CradleLoader.propTypes = {
  label: _propTypes["default"].string
};
CradleLoader.defaultProps = {
  label: "audio-loading"
};
});

unwrapExports(CradleLoader_1);
CradleLoader_1.CradleLoader;

var Grid_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Grid = function Grid(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 105 105",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "100ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "300ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "600ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "12.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "800ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "52.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "400ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "700ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "52.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "500ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "92.5",
    cy: "92.5",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "200ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.Grid = Grid;
Grid.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Grid.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 12.5,
  label: "audio-loading"
};
});

unwrapExports(Grid_1);
Grid_1.Grid;

var Hearts_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hearts = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Hearts = function Hearts(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 140 64",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
    attributeName: "fill-opacity",
    from: "0",
    to: ".5"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fill-opacity",
    begin: "0.7s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
  }));
};

exports.Hearts = Hearts;
Hearts.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Hearts.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
});

unwrapExports(Hearts_1);
Hearts_1.Hearts;

var MutatingDots_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MutatingDots = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MutatingDots = function MutatingDots(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    id: "goo-loader",
    width: props.width,
    height: props.height,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "fancy-goo"
  }, /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "6",
    result: "blur"
  }), /*#__PURE__*/_react["default"].createElement("feColorMatrix", {
    "in": "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
    result: "goo"
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    "in": "SourceGraphic",
    in2: "goo",
    operator: "atop"
  })), /*#__PURE__*/_react["default"].createElement("g", {
    filter: "url(#fancy-goo)"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    id: "mainAnim",
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    from: "0 50 50",
    to: "359 50 50",
    dur: "1.2s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50%",
    cy: "40",
    r: props.radius,
    fill: props.color
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    id: "cAnim1",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0;cAnim1.end+0.2s",
    calcMode: "spline",
    values: "40;20;40",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50%",
    cy: "60",
    r: props.radius,
    fill: props.secondaryColor
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    id: "cAnim2",
    attributeType: "XML",
    attributeName: "cy",
    dur: "0.6s",
    begin: "0.4s;cAnim2.end+0.2s",
    calcMode: "spline",
    values: "60;80;60",
    keyTimes: "0;0.3;1",
    keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
  }))));
};

exports.MutatingDots = MutatingDots;
MutatingDots.propTypes = {
  width: _propTypes["default"].number,
  secondaryColor: _propTypes["default"].string,
  height: _propTypes["default"].number,
  color: _propTypes["default"].string,
  radius: _propTypes["default"].number,
  label: _propTypes["default"].string
};
MutatingDots.defaultProps = {
  width: 80,
  height: 90,
  color: "green",
  radius: 11,
  secondaryColor: "green",
  label: "audio-loading"
};
});

unwrapExports(MutatingDots_1);
MutatingDots_1.MutatingDots;

var Oval_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Oval = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Oval = function Oval(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: props.radius
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite"
  })))));
};

exports.Oval = Oval;
Oval.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Oval.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 18
};
});

unwrapExports(Oval_1);
Oval_1.Oval;

var Plane_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Plane = function Plane(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "react-spinner-loader-svg-calLoader",
    xmlns: "http://www.w3.org/2000/svg",
    width: "230",
    height: "230",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("desc", null, "Plane animation. Loading "), /*#__PURE__*/_react["default"].createElement("path", {
    className: "react-spinner-loader-cal-loader__path",
    style: {
      stroke: props.secondaryColor
    },
    d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
    fill: "none",
    stroke: "#0099cc",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "10 10 10 10 10 10 10 432",
    strokeDashoffset: "77"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    className: "cal-loader__plane",
    style: {
      fill: props.color
    },
    d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
    fill: "#000033"
  }));
};

exports.Plane = Plane;
Plane.propTypes = {
  secondaryColor: _propTypes["default"].string,
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Plane.defaultProps = {
  secondaryColor: "grey",
  color: "#FFA500",
  label: "async-loading"
};
});

unwrapExports(Plane_1);
Plane_1.Plane;

var Puff_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Puff = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Puff = function Puff(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
};

exports.Puff = Puff;
Puff.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Puff.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 1
};
});

unwrapExports(Puff_1);
Puff_1.Puff;

var RevolvingDot_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RevolvingDot = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RevolvingDot = function RevolvingDot(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    version: "1.1",
    width: props.width,
    height: props.height,
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "none",
    stroke: props.color,
    strokeWidth: "4",
    cx: "50",
    cy: "50",
    r: props.radius + 38,
    style: {
      opacity: 0.5
    }
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: props.color,
    stroke: props.color,
    strokeWidth: "3",
    cx: "8",
    cy: "54",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    dur: "2s",
    type: "rotate",
    from: "0 50 48",
    to: "360 50 52",
    repeatCount: "indefinite"
  })));
};

exports.RevolvingDot = RevolvingDot;
RevolvingDot.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
RevolvingDot.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 6
};
});

unwrapExports(RevolvingDot_1);
RevolvingDot_1.RevolvingDot;

var Rings_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rings = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Rings = function Rings(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)",
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius,
    strokeOpacity: "0"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius,
    strokeOpacity: "0"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeOpacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "strokeWidth",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "22",
    cy: "22",
    r: props.radius + 2
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

exports.Rings = Rings;
Rings.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
Rings.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 6,
  label: "audio-loading"
};
});

unwrapExports(Rings_1);
Rings_1.Rings;

var TailSpin_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TailSpin = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TailSpin = function TailSpin(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
    x1: "8.042%",
    y1: "0%",
    x2: "65.682%",
    y2: "23.865%",
    id: "a"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    stopOpacity: "0",
    offset: "0%"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    stopOpacity: ".631",
    offset: "63.146%"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    stopColor: props.color,
    offset: "100%"
  }))), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(1 1)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    id: "Oval-2",
    stroke: props.color,
    strokeWidth: "2"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: "#fff",
    cx: "36",
    cy: "18",
    r: props.radius
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })))));
};

exports.TailSpin = TailSpin;
TailSpin.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
TailSpin.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  radius: 1,
  label: "audio-loading"
};
});

unwrapExports(TailSpin_1);
TailSpin_1.TailSpin;

var ThreeDots_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreeDots = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ThreeDots = function ThreeDots(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: props.width,
    height: props.height,
    viewBox: "0 0 120 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: props.color,
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "15",
    cy: "15",
    r: props.radius + 6
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "60",
    cy: "15",
    r: props.radius,
    attributeName: "fillOpacity",
    from: "1",
    to: "0.3"
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "105",
    cy: "15",
    r: props.radius + 6
  }, /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/_react["default"].createElement("animate", {
    attributeName: "fillOpacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

exports.ThreeDots = ThreeDots;
ThreeDots.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  radius: _propTypes["default"].number
};
ThreeDots.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 9
};
});

unwrapExports(ThreeDots_1);
ThreeDots_1.ThreeDots;

var Triangle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Triangle = void 0;

var _react = _interopRequireDefault(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Triangle = function Triangle(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-spinner-loader-svg"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    id: "triangle",
    width: props.width,
    height: props.height,
    viewBox: "-3 -4 39 39",
    "aria-label": props.label
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: "transparent",
    stroke: props.color,
    strokeWidth: "1",
    points: "16,0 32,32 0,32"
  })));
};

exports.Triangle = Triangle;
Triangle.propTypes = {
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  label: _propTypes["default"].string
};
Triangle.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
});

unwrapExports(Triangle_1);
Triangle_1.Triangle;

var loader = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;



































var Spinner = {
  Circles: Circles_1.Circles,
  Audio: Audio_1.Audio,
  BallTriangle: BallTriangle_1.BallTriangle,
  Bars: Bars_1.Bars,
  CradleLoader: CradleLoader_1.CradleLoader,
  Grid: Grid_1.Grid,
  Hearts: Hearts_1.Hearts,
  MutatingDots: MutatingDots_1.MutatingDots,
  Oval: Oval_1.Oval,
  Plane: Plane_1.Plane,
  Puff: Puff_1.Puff,
  RevolvingDot: RevolvingDot_1.RevolvingDot,
  Rings: Rings_1.Rings,
  TailSpin: TailSpin_1.TailSpin,
  ThreeDots: ThreeDots_1.ThreeDots,
  Triangle: Triangle_1.Triangle,
  Watch: Watch_1.Watch
};
exports.Spinner = Spinner;
});

unwrapExports(loader);
loader.Spinner;

var dist = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loader;

var _react = _interopRequireWildcard(React__default["default"]);

var _propTypes = _interopRequireDefault(require$$1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var componentNames = ["Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots", "Watch", "RevolvingDot", "Triangle", "Plane", "MutatingDots", "CradleLoader"];

function componentName(type) {
  if (componentNames.includes(type)) {
    return loader.Spinner[type];
  }

  return loader.Spinner.Audio;
}
/**
 * @return {null}
 */


function Loader(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      display = _useState2[0],
      setDisplay = _useState2[1];

  (0, _react.useEffect)(function () {
    var timer;

    if (props.timeout && props.timeout > 0) {
      timer = setTimeout(function () {
        setDisplay(false);
      }, props.timeout);
    }

    return function () {
      if (timer) clearTimeout(timer);
    };
  });

  if (!props.visible || props.visible === "false") {
    return null;
  }

  return display ? /*#__PURE__*/_react["default"].createElement("div", {
    "aria-busy": "true",
    className: props.className,
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement(componentName(props.type), _objectSpread({}, props))) : null;
}

Loader.propTypes = {
  type: _propTypes["default"].oneOf([].concat(componentNames)),
  style: _propTypes["default"].objectOf(_propTypes["default"].string),
  className: _propTypes["default"].string,
  visible: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  timeout: _propTypes["default"].number
};
Loader.defaultProps = {
  type: "Audio",
  style: {},
  className: "",
  visible: true,
  timeout: 0
};
});

var Loader = unwrapExports(dist);

/**
 * This is a Standard Panel with an info status, with a loading spinner and "Loading" message.
 * Uses [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) for the loading spinner.
 */
var ONSLoadingPanel = function (_a) {
    var hidden = _a.hidden, message = _a.message;
    return (React__default["default"].createElement(ONSPanel, { hidden: hidden },
        React__default["default"].createElement("div", { style: { textAlign: "center" } },
            React__default["default"].createElement(Loader, { type: "TailSpin", color: "#064868", height: 30, width: 30 }),
            message || "Loading")));
};

function Collapsible(_a) {
    var children = _a.children, title = _a.title;
    var _b = React.useState(false), panelOpen = _b[0], setPanelOpen = _b[1];
    return (React__default["default"].createElement("details", { id: "collapsible-with-save", className: "ons-collapsible ons-js-collapsible ons-u-mt-l", "data-save-state": "true", role: "group" },
        React__default["default"].createElement("summary", { className: "ons-collapsible__heading ons-js-collapsible-heading", role: "link", "data-testid": "collapsible-heading", onClick: function () { return setPanelOpen(!panelOpen); }, onKeyPress: function () { return setPanelOpen(!panelOpen); }, tabIndex: 0, "aria-expanded": panelOpen ? "true" : "false", "aria-controls": "collapsible-with-save", "data-ga-action": "".concat(panelOpen ? "Close" : "Open", " panel") },
            React__default["default"].createElement("div", { className: "ons-collapsible__controls" },
                React__default["default"].createElement("h2", { className: "ons-collapsible__title" }, title),
                React__default["default"].createElement("span", { className: "ons-collapsible__icon" },
                    React__default["default"].createElement("svg", { className: "ons-svg-icon", viewBox: "0 0 7.5 12.85", xmlns: "http://www.w3.org/2000/svg", focusable: "false" },
                        React__default["default"].createElement("path", { d: "M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z", transform: "translate(-5.02 -1.59)" }))))),
        React__default["default"].createElement("div", { id: "collapsible-with-save-content", className: "ons-collapsible__content ons-js-collapsible-content", "aria-hidden": !panelOpen, "data-testid": "collapsible-content" }, children)));
}

/**
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * Catches any issues and displays a error panel with a custom message provided. For example, you can wrap this around a
 * table, so if it fails to render this panel will show in its place on the page.
 */
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { errorInfo: { componentStack: "Fine" } };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (_, errorInfo) {
        this.setState({
            errorInfo: errorInfo,
        });
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.errorInfo.componentStack !== "Fine") {
            return (React__default["default"].createElement(ONSPanel, { status: "error" },
                React__default["default"].createElement("p", null, this.props.errorMessageText)));
        }
        return React__default["default"].createElement(React__default["default"].Fragment, null, this.props.children);
    };
    return ErrorBoundary;
}(React__default["default"].Component));

/**
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * This is useful for wrapping around the entire page to display a generic `Sorry, there is a problem with the service` message.
 */
var DefaultErrorBoundary = /** @class */ (function (_super) {
    __extends(DefaultErrorBoundary, _super);
    function DefaultErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { errorInfo: { componentStack: "Fine" } };
        return _this;
    }
    DefaultErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({
            errorInfo: errorInfo,
        });
    };
    DefaultErrorBoundary.prototype.render = function () {
        if (this.state.errorInfo.componentStack !== "Fine") {
            return (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement("h1", null, "Sorry, there is a problem with the service"),
                React__default["default"].createElement("p", null, "Try again later."),
                React__default["default"].createElement("p", null, "If you have started a survey, your answers have been saved."),
                React__default["default"].createElement("p", null,
                    React__default["default"].createElement("a", { href: "https://ons.service-now.com/" }, "Contact us"),
                    " ",
                    "if you need to speak to someone about your survey.")));
        }
        return React__default["default"].createElement(React__default["default"].Fragment, null, this.props.children);
    };
    return DefaultErrorBoundary;
}(React__default["default"].Component));

function ONSTable(_a) {
    var columns = _a.columns, children = _a.children, tableCaption = _a.tableCaption, tableID = _a.tableID;
    return (React__default["default"].createElement("table", { className: "ons-table", "data-testid": tableID, id: tableID },
        tableCaption && React__default["default"].createElement("caption", { className: "table__caption" }, tableCaption),
        React__default["default"].createElement("thead", { className: "ons-table__head" },
            React__default["default"].createElement("tr", { className: "ons-table__row" }, columns.map(function (title, index) { return (React__default["default"].createElement("th", { scope: "col", className: "ons-table__header", key: "".concat(title, "-").concat(index) }, title)); }))),
        React__default["default"].createElement("tbody", { className: "ons-table__body" }, children)));
}

function replaceUnderscoreWithSpaces(text) {
    return text.split("_").join(" ");
}
function TitleCase(stringToConvert) {
    var firstCharacter = stringToConvert.substring(0, 1);
    var restString = stringToConvert.substring(1);
    return firstCharacter.toUpperCase() + restString;
}
function FormatTitle(text) {
    return TitleCase(replaceUnderscoreWithSpaces(text));
}
function FormatKey(text) {
    return text.split(" ").join("-");
}

var GroupedSummary = /** @class */ (function () {
    function GroupedSummary(groups) {
        this.groups = groups;
    }
    GroupedSummary.prototype.csv = function () {
        var records = [];
        var row = {};
        for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            for (var record in group.records) {
                row[record] = group.records[record];
            }
        }
        records.push(row);
        return records;
    };
    return GroupedSummary;
}());
function SummaryItemRow(_a) {
    var fieldName = _a.fieldName, fieldValue = _a.fieldValue;
    return (React__default["default"].createElement("tbody", { className: "ons-summary__item" },
        React__default["default"].createElement("tr", { className: "ons-summary__row ons-summary__row--has-values" },
            React__default["default"].createElement("td", { className: "ons-summary__item-title" },
                React__default["default"].createElement("div", { className: "ons-summary__item--text" }, FormatTitle(fieldName))),
            React__default["default"].createElement("td", { className: "ons-summary__values", colSpan: 2 }, fieldValue))));
}
function SummaryGroupTable(_a) {
    var groupedSummary = _a.groupedSummary;
    var elementList = [];
    for (var _i = 0, _b = groupedSummary.groups; _i < _b.length; _i++) {
        var group = _b[_i];
        elementList.push(React__default["default"].createElement("h3", { key: "summary-group-heading-".concat(FormatKey(group.title)), className: "ons-summary__group-title" }, group.title));
        var tableFieldsList = [];
        for (var field in group.records) {
            tableFieldsList.push(React__default["default"].createElement(SummaryItemRow, { key: "summary-table-row-".concat(FormatKey(field)), fieldName: field, fieldValue: group.records[field] }));
        }
        elementList.push(React__default["default"].createElement("table", { key: "summary-table-group-".concat(FormatKey(group.title)), className: "ons-summary__items" }, tableFieldsList));
    }
    return (React__default["default"].createElement(React__default["default"].Fragment, null, elementList));
}

function Expandable(_a) {
    var title = _a.title, content = _a.content, contentId = _a.contentId, expandableIndex = _a.expandableIndex, panelsOpen = _a.panelsOpen, setPanelsOpen = _a.setPanelsOpen;
    function togglePanel(event) {
        var newPanelsOpen = __spreadArray([], panelsOpen, true);
        newPanelsOpen[expandableIndex] = !newPanelsOpen[expandableIndex];
        setPanelsOpen(newPanelsOpen);
        event.preventDefault();
    }
    function panelIsOpen() {
        return panelsOpen[expandableIndex];
    }
    return (React__default["default"].createElement("details", { id: "".concat(contentId, "-accordion-").concat(expandableIndex), className: "ons-collapsible ons-js-collapsible ons-collapsible--accordion ", "data-btn-close": "Hide", "data-group": "accordion", open: panelIsOpen() },
        React__default["default"].createElement("summary", { className: "ons-collapsible__heading ons-js-collapsible-heading", role: "link", "data-testid": "".concat(contentId, "-accordion-").concat(expandableIndex, "-heading"), onClick: togglePanel, onKeyPress: togglePanel, "aria-expanded": panelIsOpen() ? "true" : "false", "aria-controls": "".concat(contentId, "-accordion-").concat(expandableIndex), "data-ga-action": panelIsOpen() ? "Close panel" : "Open panel", tabIndex: 0 },
            React__default["default"].createElement("div", { className: "ons-collapsible__controls" },
                React__default["default"].createElement("h2", { className: "ons-collapsible__title" }, title),
                React__default["default"].createElement("span", { className: "ons-collapsible__icon" },
                    React__default["default"].createElement("svg", { className: "ons-svg-icon", viewBox: "0 0 7.5 12.85", xmlns: "http://www.w3.org/2000/svg", focusable: "false" },
                        React__default["default"].createElement("path", { d: "M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z", transform: "translate(-5.02 -1.59)" }))))),
        React__default["default"].createElement("div", { id: "".concat(contentId, "-accordion-").concat(expandableIndex, "-content"), "data-testid": "".concat(contentId, "-accordion-").concat(expandableIndex, "-content"), className: "ons-collapsible__content ons-js-collapsible-content", "aria-hidden": (panelIsOpen() ? "false" : "true") }, content)));
}
function ShowAll(_a) {
    var showAllEnabled = _a.showAllEnabled, panelsOpen = _a.panelsOpen, setPanelsOpen = _a.setPanelsOpen, contentId = _a.contentId;
    var _b = React.useState(false), showing = _b[0], setShowing = _b[1];
    React.useEffect(function () {
        if (panelsOpen.includes(false)) {
            setShowing(false);
        }
        else {
            setShowing(true);
        }
    }, [panelsOpen, setShowing]);
    if (showAllEnabled) {
        return (React__default["default"].createElement("button", { "data-testid": "".concat(contentId, "-accordion-show-all"), type: "button", className: "ons-btn ons-js-collapsible-all ons-u-mb-s ons-btn--secondary ons-btn--small", "data-close-all": "Hide all", "data-group": "accordion", onClick: function () { return setPanelsOpen(new Array(panelsOpen.length).fill(!showing)); } },
            React__default["default"].createElement("span", { className: "ons-btn__inner ons-js-collapsible-all-inner" }, showing ? "Hide all" : "Show all")));
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return React__default["default"].createElement(React__default["default"].Fragment, null);
}
function Accordion(_a) {
    var ShowAllEnabled = _a.ShowAllEnabled, Expandables = _a.Expandables, ContentId = _a.ContentId, Expanded = _a.Expanded;
    var expandableStates = new Array(Expandables.length).fill(Expanded !== null && Expanded !== void 0 ? Expanded : false);
    var _b = React.useState(expandableStates), panelsOpen = _b[0], setPanelsOpen = _b[1];
    return (React__default["default"].createElement("div", { id: "".concat(ContentId, "-accordion"), className: "ons-accordion" },
        React__default["default"].createElement(ShowAll, { showAllEnabled: ShowAllEnabled, panelsOpen: panelsOpen, setPanelsOpen: setPanelsOpen, contentId: ContentId }),
        Expandables.map(function (expandable, index) { return (React__default["default"].createElement(Expandable, { key: "".concat(expandable.contentId, "-accordion-").concat(index), content: expandable.content, contentId: expandable.contentId, title: expandable.title, expandableIndex: index, setPanelsOpen: setPanelsOpen, panelsOpen: panelsOpen })); })));
}

exports.Accordion = Accordion;
exports.BetaBanner = BetaBanner;
exports.Collapsible = Collapsible;
exports.DefaultErrorBoundary = DefaultErrorBoundary;
exports.ErrorBoundary = ErrorBoundary;
exports.ExternalLink = ExternalLink;
exports.Footer = Footer;
exports.FormatTitle = FormatTitle;
exports.GroupedSummary = GroupedSummary;
exports.Header = Header;
exports.NotProductionWarning = NotProductionWarning;
exports.ONSButton = ONSButton;
exports.ONSErrorPanel = ONSErrorPanel;
exports.ONSLoadingPanel = ONSLoadingPanel;
exports.ONSPanel = ONSPanel;
exports.ONSPasswordInput = ONSPasswordInput;
exports.ONSSelect = ONSSelect;
exports.ONSTable = ONSTable;
exports.ONSTextInput = ONSTextInput;
exports.ONSUpload = ONSUpload;
exports.StyledForm = StyledForm;
exports.StyledFormErrorSummary = StyledFormErrorSummary;
exports.StyledFormField = StyledFormField;
exports.SummaryGroupTable = SummaryGroupTable;
exports.SummaryItemRow = SummaryItemRow;
exports.TitleCase = TitleCase;
//# sourceMappingURL=index.js.map
