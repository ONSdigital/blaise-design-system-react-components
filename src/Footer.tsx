import React, {ReactElement} from "react";

function Footer(): ReactElement {
    return (
        <>
            <footer className="footer">
                <div className="footer__body" data-analytics="footer">
                    <div className="container ">
                        <div className="grid grid--flex grid--between">
                            <div className="grid__col">
                                <div className="u-mt-m u-mb-s">
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
