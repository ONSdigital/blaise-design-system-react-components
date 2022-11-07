import React, {ReactElement} from "react";

function Footer(): ReactElement {
    return (
        <>
            <footer className="ons-footer">
                <div className="ons-footer__body" data-analytics="footer">
                    <div className="ons-container ">
                        <div className="ons-grid ons-grid--flex ons-grid--between">
                            <div className="ons-grid__col">
                                <div className="ons-u-mt-m ons-u-mb-s">
                                    <img src="https://ons-design-system.netlify.app/img/ons-logo-black-en.svg"
                                         alt="Office for National Statistics"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
