import React, {ReactElement} from "react";

function BetaBanner(): ReactElement {
    return (
        <>
            <div className="ons-phase-banner">
                <div className="ons-container ">
                    <div className="ons-grid ons-grid--flex ons-grid--gutterless ons-grid--vertical-center ons-grid--no-wrap">
                        <div className="ons-grid__col ons-col-auto ons-u-flex-no-grow">
                            <h3 className="ons-phase-banner__badge">BETA</h3>
                        </div>
                        <div className="ons-grid__col ons-col-auto ons-u-flex-shrink">
                            <p className="ons-phase-banner__desc ons-u-fs-s ons-u-mb-no">This is a new service – your <a
                                href="https://ons.service-now.com/">feedback</a> will help us improve it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BetaBanner;
