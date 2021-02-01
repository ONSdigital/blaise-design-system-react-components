import React, {ReactElement} from "react";


function NotProductionWarning(): ReactElement {
    return (
        <>
            <div className="census-warning" style={{background: "#d0021b", color: "#d0021b"}}>
                <div className="container">
                    <div className="panel panel--warn-branded panel--no-title" style={{background: "#d0021b"}}>
                        <span className="panel__icon" aria-hidden="true" style={{color: "#d0021b"}}>!</span>
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
