import React, { ReactElement } from "react";

/**
 * This one is not an 'Official' component. But is based on the Branded Census warning panel.
 * Shown at the top of a page, above the header to warn users.
 */
function NotProductionWarning(): ReactElement {
    return (
        <>
            <div style={{ background: "#222", color: "#222" }}>
                <div className="ons-container">
                    <div className="ons-panel ons-panel--warn-branded ons-panel--no-title" style={{ background: "#222" }}>
                        <span className="ons-panel__icon" aria-hidden="true" style={{ color: "#222" }}>!</span>
                        <div className="ons-panel__body">
                            <p className="ons-u-mb-no">This environment is not a production environment. Do not upload any live data to this service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotProductionWarning;
