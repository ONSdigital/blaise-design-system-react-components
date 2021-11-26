import React, {ReactElement} from "react";

/**
 * This is a Standard Panel with an error status, with a prepared message.
 */
function ONSErrorPanel(): ReactElement {
    return (
        <>
            <div className="panel panel--error panel--no-title">
                <div className="panel__body">
                    <p>
                        Sorry, there is a problem with this service. We are working to fix the problem. Please try again later.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ONSErrorPanel;
