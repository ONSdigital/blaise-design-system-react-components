import React, { ReactElement } from "react";

export interface Props {
    title: string
    signOutButton?: boolean
    noSave?: boolean
    signOutFunction?: () => void
}


function Header({ title, signOutButton, noSave, signOutFunction }: Props): ReactElement {
    let signOutText = "Save and sign out"
    if (noSave) {
        signOutText = "Sign out"
    }
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
                                        <img className="header__logo"
                                            src="https://cdn.ons.gov.uk/sdc/design-system/31.4.0/img/ons-logo-neg-en.svg"
                                            alt="Office for National Statistics logo" />
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
                                <div className="header__title">{title}</div>
                            </div>
                            {
                                (
                                    signOutButton &&
                                    <div className="grid__col col-auto u-flex-no-shrink u-d-no@xxs@m">
                                        <button
                                            id="signout-button"
                                            data-test-id="signout-button"
                                            className="btn btn--ghost u-d-no@xxs@m btn--exit"
                                            onClick={() => signOutFunction && signOutFunction()}>
                                            <span className="btn__inner">{signOutText}
                                                <svg className="svg-icon" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"
                                                    focusable="false">
                                                    <path
                                                        d="M13.85,7.65l-2.5-2.5a.5.5,0,0,0-.71,0,.48.48,0,0,0-.15.36V7h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3v1.5A.49.49,0,0,0,11,11a.48.48,0,0,0,.34-.14l2.51-2.5a.49.49,0,0,0,0-.68Z"
                                                        transform="translate(-2 -2)" />
                                                    <path
                                                        d="M8.5,14h-6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2.5,2h6a.5.5,0,0,1,.5.5V3a.5.5,0,0,1-.5.5h-5v9h5A.5.5,0,0,1,9,13v.5A.5.5,0,0,1,8.5,14Z"
                                                        transform="translate(-2 -2)" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
