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

export default NotProductionWarning;
//# sourceMappingURL=index.es.js.map
