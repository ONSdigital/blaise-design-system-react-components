import React, {ReactElement} from "react";

interface Props {
    title: string
}


function Header(props: Props): ReactElement {
    return (
        <>
            <header className="header header--internal">
                <div className="header__top" role="banner">
                    <div className="container">
                        <div
                            className="header__grid-top grid grid--gutterless grid--flex grid--between grid--vertical-center grid--no-wrap ">
                            <div className="grid__col col-auto">
                                <a className="header__logo-link" href="/">
                                    <picture>
                                        {/*<source media="(max-width: 499px)" srcSet="/img/ons-logo-stacked-neg-en.svg"*/}
                                        {/*        alt="Office for National Statistics logo"/>*/}
                                            <img className="header__logo" src="https://ons-design-system.netlify.app/img/ons-logo-neg-en.svg"
                                                 alt="Office for National Statistics logo"/>
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__main">
                    <div className="container">
                        <div
                            className="grid grid--gutterless grid--flex grid--between grid--vertical-center grid--no-wrap">
                            <div className="grid__col col-auto u-flex-shrink">
                                <div className="header__title">{props.title}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
);
}

export default Header;
