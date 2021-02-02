import React from 'react';

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

export { Footer, Header, NotProductionWarning };
//# sourceMappingURL=index.es.js.map
