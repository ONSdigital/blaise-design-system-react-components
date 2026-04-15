import { ReactElement } from "react";

/*
 * This one is not an 'official' ONS component. It is based on the census branded warning panel.
 * Shown at the top of the page above the header, to warn users they are not using a production environment.
 */

export const NotProductionWarning = (): ReactElement => {
    return (
        <div style={{ background: "#222", color: "#222" }}>
            <div className="ons-container">
                <div className="ons-panel ons-panel--warn-branded ons-panel--no-title" style={{ background: "#222" }}>
                    <span className="ons-panel__icon" aria-hidden="true" style={{ color: "#222" }}>!</span>
                    <span className="ons-panel__assistive-text ons-u-vh">Warning: </span>
                    <div className="ons-panel__body">
                        <p className="ons-u-mb-no">This is not a production environment. Do not upload any production data to this service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
