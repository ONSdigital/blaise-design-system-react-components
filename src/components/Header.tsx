import React, { ReactElement, ReactNode } from "react";

export interface NavigationLinks {
    label: string,
    endpoint: string
}

export interface Props {
    title: string
    signOutButton?: boolean
    noSave?: boolean
    signOutFunction?: () => void
    navigationLinks?: NavigationLinks[]
    currentLocation?: string
    createLink: (label: string, endpoint: string) => ReactNode
}

function Header({
    title, signOutButton, noSave, signOutFunction, navigationLinks, currentLocation, createLink
}: Props): ReactElement {
    let signOutText = "Save and sign out";
    if (noSave) {
        signOutText = "Sign out";
    }
    return (
        <header className="ons-header ons-header--internal">
            <div className="ons-header__top" role="banner">
                <div className="ons-container">
                    <div
                        className="ons-header__grid-top ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap "
                    >
                        <div className="ons-grid__col ons-col-auto">
                            <a className="header__logo-link" href="/">
                                <picture>
                                    {/* <source media="(max-width: 499px)" srcSet="/img/ons-logo-stacked-neg-en.svg" */}
                                    {/*        alt="Office for National Statistics logo"/> */}
                                    <img
                                        className="ons-header__logo"
                                        src="https://cdn.ons.gov.uk/sdc/design-system/31.4.0/img/ons-logo-neg-en.svg"
                                        alt="Office for National Statistics logo"
                                    />
                                </picture>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ons-header__main">
                <div className="ons-container">
                    <div
                        className="ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap"
                    >
                        <div className="ons-grid__col ons-col-auto ons-u-flex-shrink">
                            <div className="ons-header__title">{title}</div>
                        </div>
                        {
                            signOutButton
                            && (
                                <div className="ons-grid__col ons-col-auto ons-u-flex-no-shrink ons-u-d-no@xxs@m">
                                    <button
                                        id="signout-button"
                                        data-test-id="signout-button"
                                        className="ons-btn ons-btn--ghost ons-u-d-no@xxs@m ons-btn--exit"
                                        onClick={() => signOutFunction && signOutFunction()}
                                        type="button"
                                    >
                                        <span className="ons-btn__inner">
                                            <span className="ons-btn__text">{signOutText}</span>
                                            <svg
                                                className="ons-svg-icon ons-u-ml-xs"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                                focusable="false"
                                            >
                                                <path
                                                    d="M13.85,7.65l-2.5-2.5a.5.5,0,0,0-.71,0,.48.48,0,0,0-.15.36V7h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3v1.5A.49.49,0,0,0,11,11a.48.48,0,0,0,.34-.14l2.51-2.5a.49.49,0,0,0,0-.68Z"
                                                    transform="translate(-2 -2)"
                                                />
                                                <path
                                                    d="M8.5,14h-6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2.5,2h6a.5.5,0,0,1,.5.5V3a.5.5,0,0,1-.5.5h-5v9h5A.5.5,0,0,1,9,13v.5A.5.5,0,0,1,8.5,14Z"
                                                    transform="translate(-2 -2)"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {
                (navigationLinks && navigationLinks.length !== 0)
                && (
                    <div className="ons-navigation-wrapper">
                        <div className="ons-container ons-container--gutterless@xxs@l">
                            <nav
                                className="ons-navigation ons-navigation--main ons-js-navigation"
                                id="main-nav"
                                aria-label="Main menu"
                                data-analytics="header-navigation"
                                role="navigation"
                            >
                                <ul className="ons-navigation__list">
                                    {
                                        navigationLinks.map(({ label, endpoint }, index) => (
                                            <li
                                                key={index}
                                                className={`ons-navigation__item  ${(currentLocation === endpoint ? "ons-navigation__item--active" : "")}`}
                                            >
                                                {createLink(label, endpoint)}
                                                {/* <Link
                                                    className="ons-navigation__link"
                                                    to={endpoint}
                                                    role="link"
                                                >
                                                    {label}
                                                </Link> */}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                )
            }
        </header>
    );
}

export default Header;
