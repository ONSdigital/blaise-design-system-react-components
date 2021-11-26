import React, {ReactElement} from "react";

/**
 * This one is not an 'Official' component. But is based on the Branded Census warning panel.
 * Shown at the top of a page, above the header to warn users.
 */
function NotProductionWarning(): ReactElement {
    return (
        <>
            <div className="census-warning" style={{background: "#222", color: "#222"}}>
                <div className="container">
                    <div className="panel panel--warn-branded panel--no-title" style={{background: "#222"}}>
                        <span className="panel__icon" aria-hidden="true" style={{color: "#222"}}>!</span>
                        <div className="panel__body">
                            <p className="u-mb-no">This environment is not a production environment. Do not upload any live data to this service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotProductionWarning;
