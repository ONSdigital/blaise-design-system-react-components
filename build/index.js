'use strict';

var jsxRuntime = require('react/jsx-runtime');
var t = require('react');
var formik = require('formik');

/**
 * This one is not an 'Official' component. But is based on the Branded Census warning panel.
 * Shown at the top of a page, above the header to warn users.
 */
function NotProductionWarning() {
  return jsxRuntime.jsx("div", {
    style: {
      background: "#222",
      color: "#222"
    },
    children: jsxRuntime.jsx("div", {
      className: "ons-container",
      children: jsxRuntime.jsxs("div", {
        className: "ons-panel ons-panel--warn-branded ons-panel--no-title",
        style: {
          background: "#222"
        },
        children: [jsxRuntime.jsx("span", {
          className: "ons-panel__icon",
          "aria-hidden": "true",
          style: {
            color: "#222"
          },
          children: "!"
        }), jsxRuntime.jsx("span", {
          className: "ons-panel__assistive-text ons-u-vh",
          children: "Warning: "
        }), jsxRuntime.jsx("div", {
          className: "ons-panel__body",
          children: jsxRuntime.jsx("p", {
            className: "ons-u-mb-no",
            children: "This environment is not a production environment. Do not upload any live data to this service."
          })
        })]
      })
    })
  });
}

function Footer() {
  return jsxRuntime.jsx("footer", {
    className: "ons-footer",
    children: jsxRuntime.jsx("div", {
      className: "ons-footer__body",
      "data-analytics": "footer",
      children: jsxRuntime.jsxs("div", {
        className: "ons-container",
        children: [jsxRuntime.jsx("div", {
          className: "ons-grid"
        }), jsxRuntime.jsx("div", {
          className: "ons-grid ons-grid--flex ons-grid--vertical-top ons-grid--between",
          children: jsxRuntime.jsx("div", {
            className: "ons-grid__col",
            children: jsxRuntime.jsx("div", {
              className: "ons-footer__poweredby ons-u-mb-m",
              children: jsxRuntime.jsxs("svg", {
                className: "ons-svg-logo",
                xmlns: "http://www.w3.org/2000/svg",
                width: "197",
                height: "19",
                viewBox: "33 2 552 60",
                "aria-labelledby": "ons-logo-en-footer-alt",
                children: [jsxRuntime.jsx("title", {
                  id: "ons-logo-en-footer-alt",
                  children: "Office for National Statistics"
                }), jsxRuntime.jsx("g", {
                  className: "ons-svg-logo__group ons-svg-logo__group--secondary",
                  fill: "#a8bd3a",
                  children: jsxRuntime.jsx("path", {
                    d: "M0,34.6c.8-1.69,1.39-3,2.32-4.6A38.28,38.28,0,0,1,0,23.4V34.6M5,3S0,3,0,9.25v1A62.12,62.12,0,0,0,4.2,27a43.77,43.77,0,0,1,9.42-10.79C21.69,9.21,31.16,5.13,45.9,3Z"
                  })
                }), jsxRuntime.jsx("g", {
                  className: "ons-svg-logo__group ons-svg-logo__group--primary",
                  fill: "#003c57",
                  children: jsxRuntime.jsx("path", {
                    d: "M53.06,6.42C36.2,8,24.68,12.92,16.43,20.07A41.46,41.46,0,0,0,6.4,32.2C12.87,44.93,28.88,57,46.6,57H47s6.32.21,6.32-6.91V6.36a1.22,1.22,0,0,1-.26.06M9.72,42.67a44.25,44.25,0,0,1-5-7.42A80.59,80.59,0,0,0,0,46.38V56.91L31.06,57c-9.83-3-15.74-7.64-21.34-14.3"
                  })
                }), jsxRuntime.jsxs("g", {
                  className: "ons-svg-logo__group ons-svg-logo__group--text",
                  fill: "#003c57",
                  children: [jsxRuntime.jsx("path", {
                    d: "M82,47.49c-9.07,0-13.13-7.51-13.13-16.77S72.91,14,82,14s13.1,7.61,13.1,16.77S91.1,47.54,82,47.54m0-30.91c-6.69,0-9.07,7.33-9.07,14.05s2.16,13.9,9.07,13.9,9-7.28,9-13.9-2.34-14-9-14"
                  }), jsxRuntime.jsx("path", {
                    d: "M106.36,23.81V46.88h-3.67V23.81H98.93V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M121.53,23.81V46.88h-3.67V23.81H114.1V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M132.85,16.72a2.28,2.28,0,0,1-2.33-2.23v0a2.34,2.34,0,0,1,4.67,0,2.28,2.28,0,0,1-2.3,2.26h0M131,21.56h3.71V46.88H131Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M150.53,47.49c-6,0-10.63-5.16-10.63-13.29S144.52,21,150.66,21a9.76,9.76,0,0,1,6.17,1.74l-1,2.25a7.53,7.53,0,0,0-4.4-1.36c-5.15,0-7.78,4.46-7.78,10.48,0,6.2,3,10.62,7.65,10.62a8,8,0,0,0,4.49-1.37l1,2.45a10.21,10.21,0,0,1-6.3,1.73"
                  }), jsxRuntime.jsx("path", {
                    d: "M162.84,35.75c.48,6,3.76,9,8.9,9a14.66,14.66,0,0,0,6.88-1.55l1.08,2.59a18,18,0,0,1-8.22,1.73c-7.12,0-12.18-4.23-12.18-13.34,0-8.69,4.67-13.2,11-13.2s10.37,3.95,10.37,12.4Zm7.35-12.41c-4.1,0-7.56,3.2-7.52,10.29l14.39-2c0-5.87-2.81-8.32-6.87-8.32"
                  }), jsxRuntime.jsx("path", {
                    d: "M198.57,23.81V46.88H194.9V23.81h-3.76V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.39,0,.87.05.87.05v2.35h-.44c-2.54,0-4.84,1.64-4.84,5.12v4.09h5.28v2.25Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M217.28,47.49c-7.47,0-10.89-5.78-10.89-13.24S209.81,21,217.28,21s10.85,5.82,10.85,13.3-3.37,13.24-10.85,13.24m0-24c-5.53,0-7.13,5.59-7.13,10.81s1.73,10.56,7.13,10.56,7.13-5.35,7.13-10.56-1.6-10.81-7.13-10.81"
                  }), jsxRuntime.jsx("path", {
                    d: "M244.08,23.91c-2.34-.61-5.75-.52-7.35.47v22.5H233V22.69c2.67-1.13,5.36-1.74,10.11-1.74H245Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M277.42,47.13,263.07,25a32.2,32.2,0,0,1-1.85-3.29h-.09s.13,1.88.13,3.85V47.13h-4.71V14.8h5.31l13.61,20.82A28.76,28.76,0,0,1,277.38,39h.08s-.17-1.84-.17-3.77V14.8H282V47.13Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M297.52,47.79c-7.43,0-10.93-3-10.93-7.81,0-6.8,7.12-8.64,15.59-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L288.23,23a24,24,0,0,1,9.12-1.83c5.61,0,9.93,2.3,9.93,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.26.67-10.45,1.84-10.45,6.73,0,3.42,2.42,4.88,6.22,4.88a10.09,10.09,0,0,0,4.23-.84Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M322,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.55V21.81h3.55V16.12l5.4-1.5v7.19H325v3.28h-5V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"
                  }), jsxRuntime.jsx("path", {
                    d: "M331.91,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M350.88,47.79c-7.73,0-11.57-5.74-11.57-13.3s3.84-13.34,11.57-13.34,11.54,5.78,11.54,13.34-3.8,13.3-11.54,13.3m0-23.17c-4.66,0-6.05,4.89-6.05,9.82s1.47,9.63,6.05,9.63,6.05-4.7,6.05-9.63-1.38-9.82-6.05-9.82"
                  }), jsxRuntime.jsx("path", {
                    d: "M382.52,47.13V29c0-3.24-2.77-4.47-5.88-4.47a12.3,12.3,0,0,0-4.37.76v21.8h-5.39V23a26.81,26.81,0,0,1,10.06-1.83c6.61,0,11,2.25,11,7.8V47.13Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M403.18,47.79c-7.43,0-10.94-3-10.94-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L393.89,23A24,24,0,0,1,403,21.15c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.43,4.88,6.23,4.88a10.09,10.09,0,0,0,4.23-.84Z"
                  }), jsxRuntime.jsx("polygon", {
                    points: "418.52 47.13 418.52 34.91 418.52 10.25 423.92 10.25 423.92 22.76 423.92 47.13 418.52 47.13"
                  }), jsxRuntime.jsx("path", {
                    d: "M445.39,47.79A19.11,19.11,0,0,1,436.58,46l1.51-4a13.48,13.48,0,0,0,6.22,1.55c3.76,0,6.44-2.21,6.44-5.41,0-7.09-13.44-4.36-13.44-14.42,0-5.13,4.15-9.59,10.72-9.59A15.82,15.82,0,0,1,455.8,16l-1.38,3.52a11.93,11.93,0,0,0-5.66-1.5c-3.5,0-5.79,2.11-5.79,5.12,0,7,13.74,3.94,13.74,14.65,0,5.74-4.71,10-11.32,10"
                  }), jsxRuntime.jsx("path", {
                    d: "M470.41,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.12,5.12,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"
                  }), jsxRuntime.jsx("path", {
                    d: "M487.27,47.79c-7.44,0-10.93-3-10.93-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.38-4.51-5.84-4.51a18,18,0,0,0-6.87,1.46L478,23a23.94,23.94,0,0,1,9.11-1.83c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83M492,33.16c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.42,4.88,6.22,4.88a10,10,0,0,0,4.24-.84Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M511.73,47.69c-5.32,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"
                  }), jsxRuntime.jsx("path", {
                    d: "M521.66,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.45V47.13h-5.45Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M536.19,47.79A15.9,15.9,0,0,1,528.54,46L530,42.48a10.53,10.53,0,0,0,5.52,1.5c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.86-7.42A13.56,13.56,0,0,1,545.34,23l-1.42,3.14a8.47,8.47,0,0,0-4.62-1.45c-2.81,0-4.54,1.69-4.54,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"
                  }), jsxRuntime.jsx("path", {
                    d: "M559.83,47.69c-5.31,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.93v3.28h-4.93V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.64,5.64,0,0,0,1.47-.23v3.33a7.72,7.72,0,0,1-3,.52"
                  }), jsxRuntime.jsx("path", {
                    d: "M569.77,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"
                  }), jsxRuntime.jsx("path", {
                    d: "M588.14,47.79c-6.23,0-11-5.08-11-13.35s4.88-13.29,11-13.29A10.51,10.51,0,0,1,594.66,23l-1.21,3a6.87,6.87,0,0,0-4-1.22c-4.4,0-6.69,3.81-6.69,9.49s2.63,9.59,6.61,9.59a6.74,6.74,0,0,0,4-1.28L594.7,46c-1.12.94-3.33,1.84-6.56,1.84"
                  }), jsxRuntime.jsx("path", {
                    d: "M605.1,47.79A15.9,15.9,0,0,1,597.45,46l1.42-3.47A10.54,10.54,0,0,0,604.4,44c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.85-7.42a13.49,13.49,0,0,1,7.1,1.83l-1.42,3.14a8.42,8.42,0,0,0-4.63-1.45c-2.8,0-4.53,1.69-4.53,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"
                  })]
                })]
              })
            })
          })
        })]
      })
    })
  });
}

function Header(_ref) {
  var title = _ref.title,
    signOutButton = _ref.signOutButton,
    noSave = _ref.noSave,
    signOutFunction = _ref.signOutFunction,
    navigationLinks = _ref.navigationLinks,
    currentLocation = _ref.currentLocation,
    createNavLink = _ref.createNavLink;
  var createLink = function createLink(id, label, endpoint) {
    if (createNavLink) {
      return createNavLink(id, label, endpoint);
    }
    return jsxRuntime.jsx("a", {
      className: "ons-navigation__link",
      id: id,
      href: endpoint,
      role: "link",
      children: label
    });
  };
  var signOutText = "Save and sign out";
  if (noSave) {
    signOutText = "Sign out";
  }
  return jsxRuntime.jsxs("header", {
    className: "ons-header ons-header--internal",
    children: [jsxRuntime.jsx("div", {
      className: "ons-header__top",
      role: "banner",
      children: jsxRuntime.jsx("div", {
        className: "ons-container",
        children: jsxRuntime.jsx("div", {
          className: "ons-header__grid-top ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap ",
          children: jsxRuntime.jsx("div", {
            className: "ons-grid__col ons-col-auto",
            children: jsxRuntime.jsx("a", {
              className: "header__logo-link",
              href: "/",
              children: jsxRuntime.jsx("picture", {
                children: jsxRuntime.jsx("img", {
                  className: "ons-header__logo",
                  src: "https://cdn.ons.gov.uk/sdc/design-system/31.4.0/img/ons-logo-neg-en.svg",
                  alt: "Office for National Statistics logo"
                })
              })
            })
          })
        })
      })
    }), jsxRuntime.jsx("div", {
      className: "ons-header__main",
      children: jsxRuntime.jsx("div", {
        className: "ons-container",
        children: jsxRuntime.jsxs("div", {
          className: "ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap",
          children: [jsxRuntime.jsx("div", {
            className: "ons-grid__col ons-col-auto ons-u-flex-shrink",
            children: jsxRuntime.jsx("div", {
              className: "ons-header__title",
              children: title
            })
          }), signOutButton && jsxRuntime.jsx("div", {
            className: "ons-grid__col ons-col-auto ons-u-flex-no-shrink ons-u-d-no@xxs@m",
            children: jsxRuntime.jsx("button", {
              id: "signout-button",
              "data-test-id": "signout-button",
              className: "ons-btn ons-btn--ghost ons-u-d-no@xxs@m ons-btn--exit",
              onClick: function onClick() {
                return signOutFunction && signOutFunction();
              },
              type: "button",
              children: jsxRuntime.jsxs("span", {
                className: "ons-btn__inner",
                children: [jsxRuntime.jsx("span", {
                  className: "ons-btn__text",
                  children: signOutText
                }), jsxRuntime.jsxs("svg", {
                  className: "ons-svg-icon ons-u-ml-xs",
                  viewBox: "0 0 12 12",
                  xmlns: "http://www.w3.org/2000/svg",
                  focusable: "false",
                  children: [jsxRuntime.jsx("path", {
                    d: "M13.85,7.65l-2.5-2.5a.5.5,0,0,0-.71,0,.48.48,0,0,0-.15.36V7h-3a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h3v1.5A.49.49,0,0,0,11,11a.48.48,0,0,0,.34-.14l2.51-2.5a.49.49,0,0,0,0-.68Z",
                    transform: "translate(-2 -2)"
                  }), jsxRuntime.jsx("path", {
                    d: "M8.5,14h-6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2.5,2h6a.5.5,0,0,1,.5.5V3a.5.5,0,0,1-.5.5h-5v9h5A.5.5,0,0,1,9,13v.5A.5.5,0,0,1,8.5,14Z",
                    transform: "translate(-2 -2)"
                  })]
                })]
              })
            })
          })]
        })
      })
    }), navigationLinks && navigationLinks.length !== 0 && jsxRuntime.jsx("div", {
      className: "ons-navigation-wrapper",
      children: jsxRuntime.jsx("div", {
        className: "ons-container ons-container--gutterless@xxs@l",
        children: jsxRuntime.jsx("nav", {
          className: "ons-navigation ons-navigation--main ons-js-navigation",
          id: "main-nav",
          "aria-label": "Main menu",
          "data-analytics": "header-navigation",
          role: "navigation",
          children: jsxRuntime.jsx("ul", {
            className: "ons-navigation__list",
            children: navigationLinks.map(function (_ref2, index) {
              var id = _ref2.id,
                label = _ref2.label,
                endpoint = _ref2.endpoint;
              return jsxRuntime.jsx("li", {
                className: "ons-navigation__item  ".concat(currentLocation === endpoint ? "ons-navigation__item--active" : ""),
                children: createLink(id, label, endpoint)
              }, index);
            })
          })
        })
      })
    })]
  });
}

function BetaBanner() {
  return jsxRuntime.jsx("div", {
    className: "ons-phase-banner",
    children: jsxRuntime.jsx("div", {
      className: "ons-container ",
      children: jsxRuntime.jsxs("div", {
        className: "ons-grid ons-grid--flex ons-grid--gutterless ons-grid--vertical-center ons-grid--no-wrap",
        children: [jsxRuntime.jsx("div", {
          className: "ons-grid__col ons-col-auto ons-u-flex-no-grow",
          children: jsxRuntime.jsx("h3", {
            className: "ons-phase-banner__badge",
            children: "BETA"
          })
        }), jsxRuntime.jsx("div", {
          className: "ons-grid__col ons-col-auto ons-u-flex-shrink",
          children: jsxRuntime.jsxs("p", {
            className: "ons-phase-banner__desc ons-u-fs-s ons-u-mb-no",
            children: ["This is a new service \u2013 your\xA0", jsxRuntime.jsx("a", {
              href: "https://ons.service-now.com/",
              children: "feedback"
            }), "\xA0will help us improve it."]
          })
        })]
      })
    })
  });
}

function ExternalLink(props) {
  return jsxRuntime.jsxs("a", {
    href: props.link,
    id: props.id,
    "aria-label": props.ariaLabel,
    className: "ons-external-link",
    target: "_blank",
    rel: "noopener noreferrer",
    children: [props.text, jsxRuntime.jsxs("svg", {
      className: "ons-svg-icon",
      viewBox: "0 0 12 12",
      xmlns: "http://www.w3.org/2000/svg",
      children: [jsxRuntime.jsx("path", {
        d: "M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z",
        transform: "translate(-2 -1.99)"
      }), jsxRuntime.jsx("path", {
        d: "M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z",
        transform: "translate(-2 -1.99)"
      })]
    })]
  });
}

/**
 * This is a Standard Panel with an error status, with a prepared message.
 */
function ONSErrorPanel() {
  return jsxRuntime.jsx("div", {
    className: "ons-panel ons-panel--error ons-panel--no-title",
    children: jsxRuntime.jsx("div", {
      className: "ons-panel__body",
      children: jsxRuntime.jsx("p", {
        children: "Sorry, there is a problem with this service. We are working to fix the problem. Please try again later."
      })
    })
  });
}

var ONSButton = function ONSButton(props) {
  var spacing = function spacing() {
    if (props.hidden) return {
      display: "none"
    };
    return {
      marginRight: "".concat(String(props.marginRight), "px")
    };
  };
  var testId = function testId() {
    if (props.testid) {
      return "".concat(props.testid, "-button");
    }
    return "button";
  };
  var className = ["ons-btn ", props.action ? "ons-btn--link" : null, props.loading ? "ons-btn--loader ons-is-loading" : null, props.field ? "ons-field" : null, props.primary ? null : "ons-btn--secondary", props.small ? "ons-btn--small" : null, props.disabled ? "ons-btn--disabled" : null].filter(function (name) {
    return name !== null;
  }).join(" ");
  return jsxRuntime.jsx("button", {
    id: props.id,
    style: spacing(),
    type: props.submit ? "submit" : "button",
    disabled: props.loading || props.disabled,
    className: className,
    onClick: props.onClick,
    "data-testid": testId(),
    children: jsxRuntime.jsxs("span", {
      className: "ons-btn__inner",
      children: [props.label, props.loading && jsxRuntime.jsxs("svg", {
        className: "ons-svg-icon uil-default",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        children: [jsxRuntime.jsx("rect", {
          x: "0",
          y: "0",
          width: "100",
          height: "100",
          fill: "none",
          className: "bk"
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(0 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(30 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.08333333333333333s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(60 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.16666666666666666s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(90 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.25s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(120 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.3333333333333333s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(150 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.4166666666666667s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(180 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.5s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(210 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.5833333333333334s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(240 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.6666666666666666s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(270 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.75s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(300 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.8333333333333334s",
            repeatCount: "indefinite"
          })
        }), jsxRuntime.jsx("rect", {
          x: "46.5",
          y: "40",
          width: "7",
          height: "20",
          rx: "5",
          ry: "5",
          transform: "rotate(330 50 50) translate(0 -30)",
          children: jsxRuntime.jsx("animate", {
            attributeName: "opacity",
            from: "1",
            to: "0",
            dur: "1s",
            begin: "0.9166666666666666s",
            repeatCount: "indefinite"
          })
        })]
      })]
    })
  });
};

var ONSPanel = function ONSPanel(props) {
  var className = "ons-panel ons-panel--".concat(props.status ? props.status : "info", " ons-panel--no-title ").concat(props.spacious ? "ons-panel--spacious" : "", " ons-u-mt-m");
  return jsxRuntime.jsxs("div", {
    "data-testid": props.testID,
    id: props.id,
    className: className,
    hidden: props.hidden,
    children: [props.status === "success" && jsxRuntime.jsx("span", {
      className: "ons-panel__icon",
      children: jsxRuntime.jsx("svg", {
        className: "ons-svg-icon ".concat(props.bigIcon === true ? "ons-svg-icon--xl" : ""),
        viewBox: "0 0 13 10",
        xmlns: "http://www.w3.org/2000/svg",
        children: jsxRuntime.jsx("path", {
          d: "M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z",
          transform: "translate(-1.51 -3.04)"
        })
      })
    }), props.status === "warn" && jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsx("span", {
        className: "ons-panel__icon",
        "aria-hidden": "true",
        children: "!"
      }), jsxRuntime.jsx("span", {
        className: "ons-u-vh",
        children: "Warning: "
      })]
    }), jsxRuntime.jsx("div", {
      className: "ons-panel__body ".concat(props.bigIcon === true ? "ons-svg-icon-margin--xl" : ""),
      children: props.children
    })]
  });
};

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var ONSPasswordInput = /*#__PURE__*/function (_Component) {
  function ONSPasswordInput(props) {
    var _this;
    _classCallCheck(this, ONSPasswordInput);
    _this = _callSuper(this, ONSPasswordInput, [props]);
    _defineProperty(_this, "togglePassword", function () {
      _this.setState(function (prevState) {
        return {
          password: !prevState.password
        };
      });
    });
    _defineProperty(_this, "handleChange", function (e) {
      if (_this.props.onChange !== undefined) {
        _this.props.onChange(e, _this.props.value);
      }
    });
    _defineProperty(_this, "spacing", function () {
      var buttonStyle = {
        marginTop: "".concat(String(_this.props.marginTop), "px")
      };
      return buttonStyle;
    });
    _this.state = {
      password: true
    };
    return _this;
  }
  _inherits(ONSPasswordInput, _Component);
  return _createClass(ONSPasswordInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return jsxRuntime.jsxs("p", {
        className: "ons-field",
        children: [jsxRuntime.jsx("label", {
          className: "ons-label",
          htmlFor: this.props.inputId || "password",
          children: this.props.label
        }), jsxRuntime.jsxs("span", {
          className: "ons-checkbox ons-checkbox--toggle",
          style: this.spacing(),
          children: [jsxRuntime.jsx("input", {
            autoFocus: this.props.autoFocus,
            autoComplete: "new-password",
            type: "checkbox",
            id: "password-toggle",
            className: "ons-checkbox__input",
            name: "show-password",
            onClick: this.togglePassword,
            "data-testid": "login-password-toggle"
          }), jsxRuntime.jsx("label", {
            id: "password-toggle-label",
            className: "ons-checkbox__label ",
            htmlFor: "password-toggle",
            children: "Show password"
          })]
        }), jsxRuntime.jsx("input", {
          type: this.state.password ? "password" : "text",
          id: this.props.inputId || "password",
          className: "ons-input ons-input--text ons-input-type__input ons-u-mt-xs",
          value: this.props.value,
          onChange: function onChange(e) {
            return _this2.handleChange(e);
          },
          "data-testid": "login-password-input"
        })]
      });
    }
  }]);
}(t.Component);

var ONSSelect = /*#__PURE__*/function (_Component) {
  function ONSSelect(props) {
    var _this;
    _classCallCheck(this, ONSSelect);
    _this = _callSuper(this, ONSSelect, [props]);
    _defineProperty(_this, "value", _this.props.value !== undefined ? _this.props.value : "");
    _defineProperty(_this, "handleChange", function (e) {
      if (_this.props.onChange !== undefined) {
        _this.props.onChange(e);
      }
      _this.value = e.target.value;
      _this.setState({
        value: e.target.value
      });
    });
    _this.state = {
      value: props.value !== undefined ? _this.props.value : ""
    };
    return _this;
  }
  _inherits(ONSSelect, _Component);
  return _createClass(ONSSelect, [{
    key: "defaultValue",
    value: function defaultValue() {
      if (this.props.defaultValue) return this.props.defaultValue;
      return "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return jsxRuntime.jsxs("div", {
        children: [this.props.label !== undefined && jsxRuntime.jsxs("label", {
          className: "ons-label",
          htmlFor: this.props.id,
          children: [this.props.label, " "]
        }), jsxRuntime.jsxs("select", {
          id: this.props.id,
          name: "select",
          defaultValue: this.defaultValue(),
          className: "ons-input ",
          onChange: function onChange(e) {
            return _this2.handleChange(e);
          },
          "data-testid": this.props.testId,
          children: [jsxRuntime.jsx("option", {
            value: "",
            disabled: true,
            "data-testid": "select-".concat(this.props.id),
            children: "Select an option"
          }), this.props.options.map(function (option, index) {
            return jsxRuntime.jsx("option", {
              value: option.value,
              id: option.id,
              "data-testid": "option-".concat(_this2.props.id, "-").concat(option.value),
              children: option.label
            }, index);
          })]
        })]
      });
    }
  }]);
}(t.Component);

var ONSTextInput = /*#__PURE__*/function (_Component) {
  function ONSTextInput() {
    var _this;
    _classCallCheck(this, ONSTextInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ONSTextInput, [].concat(args));
    _defineProperty(_this, "handleChange", function (e) {
      if (_this.props.onChange !== undefined) _this.props.onChange(e, _this.props.label);
    });
    _defineProperty(_this, "determineType", function () {
      if (_this.props.password === true) {
        return "password";
      }
      if (_this.props.number === true) {
        return "number";
      }
      return "text";
    });
    return _this;
  }
  _inherits(ONSTextInput, _Component);
  return _createClass(ONSTextInput, [{
    key: "render",
    value: function render() {
      var _this$props$value,
        _this2 = this;
      return jsxRuntime.jsxs("p", {
        className: "ons-field",
        children: [this.props.label !== undefined && jsxRuntime.jsx("label", {
          className: "ons-label",
          htmlFor: this.props.id,
          children: this.props.label
        }), jsxRuntime.jsx("input", {
          value: (_this$props$value = this.props.value) !== null && _this$props$value !== void 0 ? _this$props$value : "",
          style: {
            width: this.props.fit === true ? "unset" : "",
            zIndex: this.props.zIndex ? this.props.zIndex : 0
          },
          autoFocus: this.props.autoFocus === true,
          autoComplete: this.props.autoComplete,
          type: this.determineType(),
          id: this.props.id,
          className: "ons-input ons-input--text ons-input-type__input ",
          placeholder: this.props.placeholder,
          onChange: function onChange(e) {
            return _this2.handleChange(e);
          },
          onClick: function onClick(e) {
            return _this2.props.onClick !== undefined && _this2.props.onClick(e);
          },
          "data-testid": this.props.testId !== undefined ? this.props.testId : "text-input"
        })]
      });
    }
  }]);
}(t.Component);

var ONSUpload = /*#__PURE__*/function (_Component) {
  function ONSUpload() {
    var _this;
    _classCallCheck(this, ONSUpload);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ONSUpload, [].concat(args));
    _defineProperty(_this, "handleChange", function (e) {
      if (_this.props.onChange !== undefined) {
        _this.props.onChange(e);
      }
    });
    return _this;
  }
  _inherits(ONSUpload, _Component);
  return _createClass(ONSUpload, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return jsxRuntime.jsx("div", {
        className: "ons-field",
        children: jsxRuntime.jsxs("p", {
          className: "ons-field",
          children: [jsxRuntime.jsxs("label", {
            className: "ons-label",
            htmlFor: this.props.fileID,
            children: [this.props.label, jsxRuntime.jsx("br", {}), jsxRuntime.jsx("span", {
              className: "ons-label__description",
              children: this.props.description
            })]
          }), jsxRuntime.jsx("input", {
            style: {
              position: "static"
            },
            type: "file",
            id: this.props.fileID,
            className: "ons-input ons-input--text ons-input-type__input ons-input--upload",
            name: this.props.fileName,
            accept: this.props.accept,
            onChange: function onChange(e) {
              return _this2.handleChange(e);
            },
            disabled: this.props.disabled,
            "data-testid": "upload-input"
          })]
        })
      });
    }
  }]);
}(t.Component);

/**
 * Error summary list
 *  - Displayed when isValid is false.
 *  - Focuses div when error lists changes.
 *
 */
function StyledFormErrorSummary() {
  var _useFormikContext = formik.useFormikContext(),
    errors = _useFormikContext.errors,
    isValid = _useFormikContext.isValid;
  var errorFocus = t.useRef(null);
  t.useEffect(function () {
    if (!isValid) {
      var _errorFocus$current;
      (_errorFocus$current = errorFocus.current) === null || _errorFocus$current === void 0 || _errorFocus$current.focus();
    }
  }, [errors, isValid]);
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: !isValid && jsxRuntime.jsxs("div", {
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      ref: errorFocus,
      className: "ons-panel ons-panel--error",
      children: [jsxRuntime.jsx("div", {
        className: "ons-panel__header",
        children: jsxRuntime.jsx("h2", {
          id: "error-summary-title",
          "data-qa": "error-header",
          className: "ons-panel__title ons-u-fs-r--b",
          children: Object.keys(errors).length === 1 ? "There is 1 problem with your answer" : "There are ".concat(Object.keys(errors).length, " problems with your answer")
        })
      }), jsxRuntime.jsx("div", {
        className: "ons-panel__body",
        children: jsxRuntime.jsx("ol", {
          className: "ons-list",
          children: Object.keys(errors).map(function (field, index) {
            return jsxRuntime.jsx("li", {
              className: "ons-list__item ",
              children: jsxRuntime.jsx("a", {
                href: "#".concat(field),
                className: "ons-list__link ons-js-inpagelink",
                children:
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                errors[field]
              })
            }, index);
          })
        })
      })]
    })
  });
}

function isObjectWithProperty(value, propertyName) {
  if (_typeof(value) !== "object") {
    return false;
  }
  if (value === null) {
    return false;
  }
  return propertyName in value;
}

var _excluded$1 = ["description", "name", "radioOptions"],
  _excluded2 = ["description", "checkboxOptions", "name"],
  _excluded3 = ["field", "description"];
function toUpperCase(string) {
  return string.trim().replace(/^\w/, function (c) {
    return c.toUpperCase();
  });
}
function RadioFieldset(_ref) {
  var description = _ref.description,
    name = _ref.name,
    radioOptions = _ref.radioOptions,
    props = _objectWithoutProperties(_ref, _excluded$1);
  return jsxRuntime.jsxs("fieldset", {
    className: "ons-fieldset",
    children: [jsxRuntime.jsx("legend", {
      className: "ons-fieldset__legend",
      children: description
    }), jsxRuntime.jsx("div", {
      className: "ons-radios__items",
      id: name,
      children: radioOptions && radioOptions.length > 0 && radioOptions.map(function (radioOption, radioOptionIndex) {
        return jsxRuntime.jsxs(t.Fragment, {
          children: [jsxRuntime.jsx("p", {
            className: "ons-radios__item",
            children: jsxRuntime.jsxs("span", {
              className: "ons-radio",
              children: [jsxRuntime.jsx(formik.Field, _objectSpread2(_objectSpread2({
                type: "radio",
                id: radioOption.id,
                name: name,
                value: radioOption.value,
                className: "ons-radio__input js-radio"
              }, props), {}, {
                autoFocus: props.autoFocus && radioOptionIndex === 0
              })), jsxRuntime.jsxs("label", {
                className: "ons-radio__label ".concat(radioOption.description !== undefined ? "ons-label--with-description" : ""),
                htmlFor: radioOption.id,
                id: "".concat(radioOption.id, "-label"),
                children: [radioOption.label, radioOption.description !== undefined && jsxRuntime.jsx("span", {
                  id: "white-label-description-hint",
                  className: "ons-label__description ons-radio__label--with-description",
                  children: radioOption.description
                })]
              }), radioOption.specifyOption && jsxRuntime.jsxs("span", {
                className: "ons-radio__other ons-radio__other--open",
                id: "other-radio-other-wrap",
                children: [jsxRuntime.jsx("label", {
                  className: "ons-label ons-u-fs-s--b ",
                  htmlFor: radioOption.specifyOption.id,
                  id: "other-textbox-label",
                  children: radioOption.specifyOption.description
                }), jsxRuntime.jsx(formik.Field, {
                  type: radioOption.specifyOption.type,
                  id: radioOption.specifyOption.id,
                  name: radioOption.specifyOption.name,
                  validate: radioOption.specifyOption.validate,
                  min: radioOption.specifyOption.min,
                  className: "ons-input ons-input--text ons-input-type__input ons-input--w-auto"
                })]
              })]
            })
          }), jsxRuntime.jsx("br", {})]
        }, radioOption.id);
      })
    })]
  });
}
function CheckboxesFieldset(_ref2) {
  var description = _ref2.description,
    checkboxOptions = _ref2.checkboxOptions,
    name = _ref2.name,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var _useFormikContext = formik.useFormikContext(),
    values = _useFormikContext.values,
    setFieldValue = _useFormikContext.setFieldValue;
  var allValues = (checkboxOptions || []).map(function (checkboxOption) {
    return checkboxOption.value;
  });
  function areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    return array1.every(function (item) {
      return array2.includes(item);
    });
  }
  function isAllSelected() {
    if (!isObjectWithProperty(values, name) || !Array.isArray(values[name])) {
      return false;
    }
    return areArraysEqual(values[name], allValues);
  }
  function handleSelectAll() {
    if (isAllSelected()) {
      setFieldValue(name, []);
    } else {
      setFieldValue(name, allValues);
    }
  }
  return jsxRuntime.jsxs("fieldset", {
    className: "ons-fieldset",
    children: [jsxRuntime.jsx("legend", {
      className: "ons-fieldset__legend",
      children: description
    }), jsxRuntime.jsx("button", {
      type: "button",
      className: "ons-btn ons-u-mb-s js-auto-selector ons-btn--small ons-btn--secondary",
      onClick: handleSelectAll,
      children: jsxRuntime.jsxs("span", {
        className: "ons-btn__inner",
        children: [jsxRuntime.jsx("span", {
          className: "js-button-text",
          children: isAllSelected() ? "Unselect All" : "Select All"
        }), jsxRuntime.jsx("span", {
          className: "ons-u-vh",
          children: " following checkboxes"
        })]
      })
    }), jsxRuntime.jsx("div", {
      className: "checkboxes__items",
      id: name,
      children: checkboxOptions && checkboxOptions.length > 0 && checkboxOptions.map(function (checkboxOption, checkboxIndex) {
        return jsxRuntime.jsxs(t.Fragment, {
          children: [jsxRuntime.jsx("p", {
            className: "ons-checkboxes__item",
            children: jsxRuntime.jsxs("span", {
              className: "ons-checkbox",
              children: [jsxRuntime.jsx(formik.Field, _objectSpread2(_objectSpread2({
                type: "checkbox",
                id: checkboxOption.id,
                name: name,
                value: checkboxOption.value,
                className: "ons-checkbox__input js-checkbox"
              }, props), {}, {
                autoFocus: props.autoFocus && checkboxIndex === 0
              })), jsxRuntime.jsxs("label", {
                className: "ons-checkbox__label ".concat(checkboxOption.description !== undefined ? "ons-label--with-description" : ""),
                htmlFor: checkboxOption.id,
                id: "".concat(checkboxOption.id, "-label"),
                children: [checkboxOption.label, checkboxOption.description !== undefined && jsxRuntime.jsx("span", {
                  id: "white-label-description-hint",
                  className: "ons-label__description checkbox__label--with-description",
                  children: checkboxOption.description
                })]
              })]
            })
          }), jsxRuntime.jsx("br", {})]
        }, checkboxOption.id);
      })
    })]
  });
}
function ONSInputField(_ref3) {
  var _field$value;
  var field = _ref3.field,
    description = _ref3.description,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var id = props.id ? props.id : field.name;
  return jsxRuntime.jsxs("div", {
    className: "ons-field",
    children: [jsxRuntime.jsx("label", {
      className: "ons-label ".concat(description ? "ons-label--with-description" : ""),
      htmlFor: id,
      children: toUpperCase(field.name)
    }), description && jsxRuntime.jsx("span", {
      id: "description-hint",
      className: "ons-label__description ons-input--with-description",
      children: description
    }), jsxRuntime.jsx("input", _objectSpread2(_objectSpread2({
      id: id,
      className: "ons-input ons-input--text ons-input-type__input"
    }, field), {}, {
      value: (_field$value = field.value) !== null && _field$value !== void 0 ? _field$value : ""
    }, props))]
  });
}

var _excluded = ["name", "description", "radioOptions", "checkboxOptions", "autoFocus"];
function StyledFormFieldErrorWrapper(fieldError, fieldName, field) {
  return jsxRuntime.jsxs("div", {
    className: "ons-panel ons-panel--error ons-panel--no-title ons-u-mb-s",
    id: "".concat(fieldName, "-error"),
    children: [jsxRuntime.jsx("span", {
      className: "ons-u-vh",
      children: "Error: "
    }), jsxRuntime.jsxs("div", {
      className: "ons-panel__body",
      children: [jsxRuntime.jsx("p", {
        className: "ons-panel__error",
        children: jsxRuntime.jsx("strong", {
          children: fieldError
        })
      }), field]
    })]
  });
}
var StyledFormField = function StyledFormField(_ref) {
  var name = _ref.name,
    description = _ref.description,
    _ref$radioOptions = _ref.radioOptions,
    radioOptions = _ref$radioOptions === void 0 ? [] : _ref$radioOptions,
    _ref$checkboxOptions = _ref.checkboxOptions,
    checkboxOptions = _ref$checkboxOptions === void 0 ? [] : _ref$checkboxOptions,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useFormikContext = formik.useFormikContext(),
    errors = _useFormikContext.errors;
  var newField;
  if (props.type === "radio") {
    newField = jsxRuntime.jsx(RadioFieldset, _objectSpread2({
      description: description,
      name: name,
      radioOptions: radioOptions,
      autoFocus: autoFocus
    }, props));
  } else if (props.type === "checkbox") {
    newField = jsxRuntime.jsx(CheckboxesFieldset, _objectSpread2({
      description: description,
      name: name,
      checkboxOptions: checkboxOptions,
      autoFocus: autoFocus
    }, props));
  } else {
    newField = jsxRuntime.jsx(formik.Field, _objectSpread2(_objectSpread2({
      name: name,
      description: description,
      autoFocus: autoFocus
    }, props), {}, {
      component: ONSInputField
    }));
  }
  return jsxRuntime.jsx(t.Fragment, {
    children: errors[name] ? StyledFormFieldErrorWrapper(errors[name] || "", name, newField) : newField
  }, name);
};

/*
 * Formik form styled to ONS design guide with form error panel
 *
 * @param Props
 *
 * - fields: List of fields to display on form.
 * - onSubmitFunction: Function to call after submit of form and all field validation is valid.
 */
function StyledForm(_ref) {
  var fields = _ref.fields,
    onSubmitFunction = _ref.onSubmitFunction,
    submitLabel = _ref.submitLabel;
  var initialFieldValues = {};
  fields.forEach(function (field) {
    if (field.initial_value !== undefined) {
      initialFieldValues[field.name] = field.initial_value;
    } else if (field.type === "checkbox") {
      initialFieldValues[field.name] = [];
    } else {
      initialFieldValues[field.name] = "";
    }
  });
  return jsxRuntime.jsx(formik.Formik, {
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: initialFieldValues,
    onSubmit: function onSubmit(values, _ref2) {
      var setSubmitting = _ref2.setSubmitting;
      onSubmitFunction(values, setSubmitting);
    },
    children: function children(_ref3) {
      var isValid = _ref3.isValid,
        isSubmitting = _ref3.isSubmitting;
      return jsxRuntime.jsxs(formik.Form, {
        children: [jsxRuntime.jsx(StyledFormErrorSummary, {}), fields.map(function (field, index) {
          var isAutoFocus = isValid && index === 0;
          return jsxRuntime.jsx(t.Fragment, {
            children: jsxRuntime.jsx(StyledFormField, _objectSpread2(_objectSpread2({}, field), {}, {
              autoFocus: isAutoFocus
            }))
          }, field.name);
        }), jsxRuntime.jsx("br", {}), jsxRuntime.jsx(ONSButton, {
          submit: true,
          label: submitLabel || "Save and continue",
          primary: true,
          testid: "submit",
          loading: isSubmitting
        })]
      });
    }
  });
}

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]});

	append(root, root.siblings);
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
						if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== ' ') characters += ' ';
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length || (variable === 0 && previous === 47)))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else {
								switch (atrule) {
									// c(ontainer)
									case 99:
										if (charat(characters, 3) === 110) break
									// l(ayer)
									case 108:
										if (charat(characters, 2) === 97) break
									default:
										offset = 0;
									// d(ocument) m(edia) s(upports)
									case 100: case 109: case 115:
								}
								if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
								else parse(characters, reference, reference, reference, [''], children, 0, points, children);
							}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings)
}

/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
		case 6391: case 5879: case 5623: case 6135: case 4599:
			return WEBKIT + value + value
		// mask-composite
		case 4855:
			return WEBKIT + value.replace('add', 'source-over').replace('substract', 'source-out').replace('intersect', 'source-in').replace('exclude', 'xor') + value
		// tab-size
		case 4789:
			return MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// writing-mode
		case 5936:
			switch (charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/g, '') + (!match(value, /flex-|baseline/) ? MS + 'grid-row-' + replace(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /space-between/, 'justify') + WEBKIT + value + value
		// justify-self
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + 'grid-column-align' + substr(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return MS + replace(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, match(element.props, /grid-\w+-end/) })) {
				return ~indexof(value + (children = children[length].value), 'span', 0) ? value : (MS + replace(value, '-start', '') + value + MS + 'grid-row-span:' + (~indexof(children, 'span', 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ';')
			}
			return MS + replace(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return match(element.props, /grid-\w+-start/) })) ? value : MS + replace(replace(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (strlen(value) - 1 - length > 6)
				switch (charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch', 0) ? prefix(replace(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (MS + a + ':' + b + f) + (c ? (MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if (charat(value, length + 6) === 121)
				return replace(value, ':', ':' + WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return replace(value, ':', ':' + MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return replace(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case NAMESPACE: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: if (!strlen(element.value = element.props.join(','))) return ''
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children);
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(children = element.props, function (value) {
							switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									lift(copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
								// :placeholder
								case '::placeholder':
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
							}

							return ''
						})
			}
}

var r,i;const l$1="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",a="active",c$1="data-styled-version",u="6.4.0",d$1="/*!sc*/\n",h="undefined"!=typeof window&&"undefined"!=typeof document,p$1=void 0===t.createContext;function f(e){if("undefined"!=typeof process&&void 0!==process.env){const t=process.env[e];if(void 0!==t&&""!==t)return "false"!==t}}const m=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(i=null!==(r=f("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==r?r:f("SC_DISABLE_SPEEDY"))&&void 0!==i?i:"undefined"==typeof process||void 0===process.env||"production"!==process.env.NODE_ENV),g="sc-keyframes-",v="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function S(e,...t){return "production"===process.env.NODE_ENV?new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`):new Error(function(...e){let t=e[0];const n=[];for(let t=1,o=e.length;t<o;t+=1)n.push(e[t]);return n.forEach(e=>{t=t.replace(/%[a-z]/,e);}),t}(v[e],...t).trim())}const w=1<<30;let b=new Map,N=new Map,C=1;const P=e=>{if(b.has(e))return b.get(e);for(;N.has(C);)C++;const t=C++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>w))throw S(16,`${t}`);return b.set(e,t),N.set(t,e),t},O=e=>N.get(e),E=(e,t)=>{C=t+1,b.set(e,t),N.set(t,e);},I=/invalid hook call/i,A=new Set,_=(e,n)=>{if("production"!==process.env.NODE_ENV){if(p$1)return;const o=`The component ${e}${n?` with the id of "${n}"`:""} has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n`,s=console.error;try{let e=!0;console.error=(t,...n)=>{I.test(t)?(e=!1,A.delete(o)):s(t,...n);},"function"==typeof t.useState&&t.useState(null),e&&!A.has(o)&&(console.warn(o),A.add(o));}catch(e){I.test(e.message)&&A.delete(o);}finally{console.error=s;}}},x=Object.freeze([]),$=Object.freeze({});function R(e,t,n=$){return e.theme!==n.theme&&e.theme||t||n.theme}const j=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k=/(^-|-$)/g;function T$1(e){return e.replace(j,"-").replace(k,"")}const D=/(a)(d)/gi,M=e=>String.fromCharCode(e+(e>25?39:97));function V(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=M(t%52)+n;return (M(t%52)+n).replace(D,"$1-$2")}const G=5381,F=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},z=e=>F(G,e);function W(e){return V(z(e)>>>0)}function L(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function B(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}function q(e){return B(e)?`styled.${e}`:`Styled(${L(e)})`}const H=Symbol.for("react.memo"),Y=Symbol.for("react.forward_ref"),U={contextType:true,defaultProps:true,displayName:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,propTypes:true,type:true},J={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true},Z={$$typeof:true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true},X={[Y]:{$$typeof:true,render:true,defaultProps:true,displayName:true,propTypes:true},[H]:Z};function K(e){return ("type"in(t=e)&&t.type.$$typeof)===H?Z:"$$typeof"in e?X[e.$$typeof]:U;var t;}const Q=Object.defineProperty,ee=Object.getOwnPropertyNames,te=Object.getOwnPropertySymbols,ne=Object.getOwnPropertyDescriptor,oe=Object.getPrototypeOf,se=Object.prototype;function re(e,t,n){if("string"!=typeof t){const o=oe(t);o&&o!==se&&re(e,o,n);const s=ee(t).concat(te(t)),r=K(e),i=K(t);for(let o=0;o<s.length;++o){const l=s[o];if(!(l in J||n&&n[l]||i&&l in i||r&&l in r)){const n=ne(t,l);try{Q(e,l,n);}catch(e){}}}}return e}function ie(e){return "function"==typeof e}function le(e){return "object"==typeof e&&"styledComponentId"in e}function ae(e,t){return e&&t?e+" "+t:e||t||""}function ce(e,t){return e.join("")}function ue(e){let t="";for(let n=0;n<e.length;n++)t+=e[n]+d$1;return t}function de(e){return e?e.replaceAll(d$1,""):e}function he(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pe(e,t,n=false){if(!n&&!he(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=pe(e[n],t[n]);else if(he(t))for(const n in t)e[n]=pe(e[n],t[n]);return e}function fe(e){if(!p$1)return null;const n=t.cache;return n?n(e):null}function me(e,t){Object.defineProperty(e,"toString",{value:t});}const ge=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0;}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let o=n;for(;e>=o;)if(o<<=1,o<0)throw S(16,`${e}`);this.groupSizes=new Uint32Array(o),this.groupSizes.set(t),this.length=o;for(let e=n;e<o;e++)this.groupSizes[e]=0;}let n=this.indexOfGroup(e+1),o=0;for(let s=0,r=t.length;s<r;s++)this.tag.insertRule(n,t[s])&&(this.groupSizes[e]++,n++,o++);o>0&&this._cGroup>e&&(this._cIndex+=o);}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(let e=n;e<o;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t);}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],o=this.indexOfGroup(e),s=o+n;for(let e=o;e<s;e++)t+=this.tag.getRule(e)+d$1;return t}},ye=`style[${l$1}][${c$1}="${u}"]`,ve=new RegExp(`^${l$1}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Se=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,we=e=>{if(!e)return document;if(Se(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Se(t))return t}return document},be=(e,t,n)=>{const o=n.split(",");let s;for(let n=0,r=o.length;n<r;n++)(s=o[n])&&e.registerName(t,s);},Ne=(e,t)=>{var n;const o=(null!==(n=t.textContent)&&void 0!==n?n:"").split(d$1),s=[];for(let t=0,n=o.length;t<n;t++){const n=o[t].trim();if(!n)continue;const r=n.match(ve);if(r){const t=0|parseInt(r[1],10),n=r[2];0!==t&&(E(n,t),be(e,n,r[3]),e.getTag().insertRules(t,s)),s.length=0;}else s.push(n);}},Ce=e=>{const t=we(e.options.target).querySelectorAll(ye);for(let n=0,o=t.length;n<o;n++){const o=t[n];o&&o.getAttribute(l$1)!==a&&(Ne(e,o),o.parentNode&&o.parentNode.removeChild(o));}};let Pe=false;function Oe(){if(false!==Pe)return Pe;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Pe=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Pe=t.getAttribute("content")||void 0}return Pe="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0}const Ee=(e,t)=>{const n=document.head,o=e||n,s=document.createElement("style"),r=(e=>{const t=Array.from(e.querySelectorAll(`style[${l$1}]`));return t[t.length-1]})(o),i=void 0!==r?r.nextSibling:null;s.setAttribute(l$1,a),s.setAttribute(c$1,u);const d=t||Oe();return d&&s.setAttribute("nonce",d),o.insertBefore(s,i),s},Ie=class{constructor(e,t){this.element=Ee(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let t=0,o=n.length;t<o;t++){const o=n[t];if(o.ownerNode===e)return o}throw S(17)})(this.element),this.length=0;}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return  false}}deleteRule(e){this.sheet.deleteRule(e),this.length--;}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Ae=class{constructor(e,t){this.element=Ee(e,t),this.nodes=this.element.childNodes,this.length=0;}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,true}return  false}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--;}getRule(e){return e<this.length?this.nodes[e].textContent:""}},_e=class{constructor(e){this.rules=[],this.length=0;}insertRule(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,true)}deleteRule(e){this.rules.splice(e,1),this.length--;}getRule(e){return e<this.length?this.rules[e]:""}};let xe=h;const $e={isServer:!h,useCSSOMInjection:!m};class Re{static registerId(e){return P(e)}constructor(e=$,t={},n){this.options=Object.assign(Object.assign({},$e),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&h&&xe&&(xe=false,Ce(this)),me(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let o="";for(let s=0;s<n;s++){const n=O(s);if(void 0===n)continue;const r=e.names.get(n);if(void 0===r||!r.size)continue;const i=t.getGroup(s);if(0===i.length)continue;const a=l$1+".g"+s+'[id="'+n+'"]';let c="";for(const e of r)e.length>0&&(c+=e+",");o+=i+a+'{content:"'+c+'"}'+d$1;}return o})(this));}rehydrate(){!this.server&&h&&Ce(this);}reconstructWithOptions(e,t=true){const n=new Re(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&h&&e.target!==this.options.target&&we(this.options.target)!==we(e.target)&&Ce(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(({isServer:e,useCSSOMInjection:t,target:n,nonce:o})=>e?new _e(n):t?new Ie(n,o):new Ae(n,o))(this.options),new ge(e)));var e;}hasNameForId(e,t){var n,o;return null!==(o=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==o&&o}registerName(e,t){P(e),e.startsWith(g)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]));}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(P(e),n);}clearNames(e){this.names.has(e)&&this.names.get(e).clear();}clearRules(e){this.getTag().clearGroup(P(e)),this.clearNames(e);}clearTag(){this.tag=void 0;}}const je=new WeakSet,ke={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Te(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in ke||e.startsWith("--")?String(t).trim():t+"px"}const De=e=>e>="A"&&e<="Z";function Me(e){let t="";for(let n=0;n<e.length;n++){const o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;De(o)?t+="-"+o.toLowerCase():t+=o;}return t.startsWith("ms-")?"-"+t:t}const Ve=Symbol.for("sc-keyframes");function Ge(e){return "object"==typeof e&&null!==e&&Ve in e}function Fe$1(e){return ie(e)&&!(e.prototype&&e.prototype.isReactComponent)}const ze=e=>null==e||false===e||""===e,We$1=Symbol.for("react.client.reference");function Le(e){return e.$$typeof===We$1}function Be(e){const t=e.$$id,n=(t&&t.includes("#")?t.split("#").pop():t)||e.name||"unknown";console.warn(`Interpolating a client component (${n}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);}const qe=e=>{const t=[];for(const n in e){const o=e[n];e.hasOwnProperty(n)&&!ze(o)&&(Array.isArray(o)&&je.has(o)||ie(o)?t.push(Me(n)+":",o,";"):he(o)?t.push(n+" {",...qe(o),"}"):t.push(Me(n)+": "+Te(n,o)+";"));}return t};function He(e,t,n,o,s=[]){if(ze(e))return s;const r=typeof e;if("string"===r)return s.push(e),s;if("function"===r){if(Le(e))return "production"!==process.env.NODE_ENV&&Be(e),s;if(Fe$1(e)&&t){const r=e(t);return "production"===process.env.NODE_ENV||"object"!=typeof r||Array.isArray(r)||Ge(r)||he(r)||null===r||console.error(`${L(e)} is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.`),He(r,t,n,o,s)}return s.push(e),s}if(Array.isArray(e)){for(let r=0;r<e.length;r++)He(e[r],t,n,o,s);return s}if(le(e))return s.push(`.${e.styledComponentId}`),s;if(Ge(e))return n?(e.inject(n,o),s.push(e.getName(o))):s.push(e),s;if(Le(e))return "production"!==process.env.NODE_ENV&&Be(e),s;if(he(e)){const t=qe(e);for(let e=0;e<t.length;e++)s.push(t[e]);return s}return s.push(e.toString()),s}const Ye=z(u),Ue=p$1?new WeakMap:null;function Je(e,t){if(!Ue)return null;const n=Ue.get(e);if(!n)return null;const o=t.names.get(e.componentId);if(!o)return null;let s="";for(const e of o){const t=n.get(e);if(!t)return null;s+=t;}return s}class Ze{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=F(Ye,t),this.baseStyle=n,Re.registerId(t);}generateAndInjectStyles(e,t,n){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let s="";for(let o=0;o<this.rules.length;o++){const r=this.rules[o];if("string"==typeof r)s+=r;else if(r)if(Fe$1(r)){const o=r(e);"string"==typeof o?s+=o:null!=o&&false!==o&&("production"===process.env.NODE_ENV||"object"!=typeof o||Array.isArray(o)||Ge(o)||he(o)||console.error(`${L(r)} is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.`),s+=ce(He(o,e,t,n)));}else s+=ce(He(r,e,t,n));}if(s){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+s:s;let r=this.dynamicNameCache.get(e);if(!r){if(r=V(F(F(this.baseHash,n.hash),s)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e);}this.dynamicNameCache.set(e,r);}if(!t.hasNameForId(this.componentId,r))if(p$1&&function(e,t){var n,o;return null!==(o=null===(n=null==Ue?void 0:Ue.get(e))||void 0===n?void 0:n.has(t))&&void 0!==o&&o}(this,r))t.registerName(this.componentId,r);else {const e=n(s,"."+r,void 0,this.componentId);p$1&&function(e,t,n){if(!Ue)return;let o=Ue.get(e);o||(o=new Map,Ue.set(e,o)),o.set(t,ue(n));}(this,r,e),t.insertRules(this.componentId,r,e);}o=ae(o,r);}}return o}}const Xe=/&/g,Ke=47;function Qe(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return !(1&~n)}function et(e){const t=e.length;let n="",o=0,s=0,r=0,i=false,l=false;for(let a=0;a<t;a++){const c=e.charCodeAt(a);if(0!==r||i||c!==Ke||42!==e.charCodeAt(a+1))if(i)42===c&&e.charCodeAt(a+1)===Ke&&(i=false,a++);else if(34!==c&&39!==c||Qe(e,a)){if(0===r)if(123===c)s++;else if(125===c){if(s--,s<0){l=true;let n=a+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++;}n<t&&59===e.charCodeAt(n)&&n++,s=0,a=n-1,o=n;continue}0===s&&(n+=e.substring(o,a+1),o=a+1);}else 59===c&&0===s&&(n+=e.substring(o,a+1),o=a+1);}else 0===r?r=c:r===c&&(r=0);else i=true,a++;}return l||0!==s||0!==r?(o<t&&0===s&&0===r&&(n+=e.substring(o)),n):e}function tt$1(e,t){for(let n=0;n<e.length;n++){const o=e[n];if("rule"===o.type){o.value=t+" "+o.value,o.value=o.value.replaceAll(",",","+t+" ");const e=o.props,n=[];for(let o=0;o<e.length;o++)n[o]=t+" "+e[o];o.props=n;}Array.isArray(o.children)&&"@keyframes"!==o.type&&(o.children=tt$1(o.children,t));}return e}function nt$1({options:e=$,plugins:t=x}=$){let n,s,r;const i=(e,t,o)=>o.startsWith(s)&&o.endsWith(s)&&o.replaceAll(s,"").length>0?`.${n}`:e,l=t.slice();l.push(e=>{e.type===RULESET&&e.value.includes("&")&&(r||(r=new RegExp(`\\${s}\\b`,"g")),e.props[0]=e.props[0].replace(Xe,s).replace(r,i));}),e.prefix&&l.push(prefixer),l.push(stringify);let a=[];const c=middleware(l.concat(rulesheet(e=>a.push(e)))),u=(t,i="",l="",u="&")=>{n=u,s=i,r=void 0;const d=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return et(e);const o=e.length;let s="",r=0,i=0,l=0,a=0,c=0,u=false;for(;i<o;){const t=e.charCodeAt(i);if(34!==t&&39!==t||Qe(e,i))if(0===l)if(t===Ke&&i+1<o&&42===e.charCodeAt(i+1)){for(i+=2;i+1<o&&(42!==e.charCodeAt(i)||e.charCodeAt(i+1)!==Ke);)i++;i+=2;}else if(40!==t)if(41!==t)if(a>0)i++;else if(42===t&&i+1<o&&e.charCodeAt(i+1)===Ke)s+=e.substring(r,i),i+=2,r=i,u=true;else if(t===Ke&&i+1<o&&e.charCodeAt(i+1)===Ke){for(s+=e.substring(r,i);i<o&&10!==e.charCodeAt(i);)i++;r=i,u=true;}else 123===t?c++:125===t&&c--,i++;else a>0&&a--,i++;else a++,i++;else i++;else 0===l?l=t:l===t&&(l=0),i++;}return u?(r<o&&(s+=e.substring(r)),0===c?s:et(s)):0===c?e:et(e)}(t);let h=compile(l||i?l+" "+i+" { "+d+" }":d);return e.namespace&&(h=tt$1(h,e.namespace)),a=[],serialize(h,c),a},d=e;let h=G;for(let e=0;e<t.length;e++)t[e].name||S(15),h=F(h,t[e].name);return (null==d?void 0:d.namespace)&&(h=F(h,d.namespace)),(null==d?void 0:d.prefix)&&(h=F(h,"p")),u.hash=h!==G?h.toString():"",u}var ot,st,rt;const it=new Re,lt=nt$1();let ct=null;const dt$1=p$1&&null!==(rt=null===(st=(ot=t).cache)||void 0===st?void 0:st.call(ot,()=>{it.names.clear(),it.keyframeIds.clear(),it.clearTag(),ct=null;}))&&void 0!==rt?rt:null,ht={shouldForwardProp:void 0,styleSheet:it,stylis:lt,stylisPlugins:void 0},pt=p$1?{Provider:({children:e})=>e,Consumer:({children:e})=>e(ht)}:t.createContext(ht);pt.Consumer;function mt(){return p$1?(dt$1&&dt$1(),ct||ht):t.useContext(pt)}const yt=p$1?{Provider:({children:e})=>e,Consumer:({children:e})=>e(void 0)}:t.createContext(void 0);yt.Consumer;const bt={};function Nt(e,t){const n="string"!=typeof e?"sc":T$1(e);bt[n]=(bt[n]||0)+1;const o=n+"-"+W(u+n+bt[n]);return t?t+"-"+o:o}let Ct;const Pt=fe(()=>new Set),Ot=new Map;function Et(e){let t=Ot.get(e);return t||(t=new RegExp("\\."+e+"(?![a-zA-Z0-9_-])","g"),Ot.set(e,t)),t}function It(e,t,n){const o=n.names.get(t);if(o)for(const t of o){const n=Et(t);n.lastIndex=0,e=e.replace(n,":where(."+t+")");}return e}function At(o,s,r){const i=le(o),a=o,c=!B(o),{attrs:u=x,componentId:h=Nt(s.displayName,s.parentComponentId),displayName:f=q(o)}=s,m=s.displayName&&s.componentId?T$1(s.displayName)+"-"+s.componentId:s.componentId||h,g=i&&a.attrs?a.attrs.concat(u).filter(Boolean):u;let{shouldForwardProp:y}=s;if(i&&a.shouldForwardProp){const e=a.shouldForwardProp;if(s.shouldForwardProp){const t=s.shouldForwardProp;y=(n,o)=>e(n,o)&&t(n,o);}else y=e;}const v=new Ze(r,m,i?a.componentStyle:void 0);function S(o,s){return function(o,s,r){const{attrs:i,componentStyle:a,defaultProps:c,foldedComponentIds:u,styledComponentId:h,target:f}=o,m=p$1?void 0:t.useContext(yt),g=mt(),y=o.shouldForwardProp||g.shouldForwardProp;"production"!==process.env.NODE_ENV&&t.useDebugValue&&t.useDebugValue(h);const v=R(s,m,c)||(p$1?void 0:$);let S,w;S=function(e,t,n){const o=Object.assign(Object.assign({},t),{className:void 0,theme:n}),s=e.length>1;for(let n=0;n<e.length;n++){const r=e[n],i=ie(r)?r(s?Object.assign({},o):o):r;for(const e in i)"className"===e?o.className=ae(o.className,i[e]):"style"===e?o.style=Object.assign(Object.assign({},o.style),i[e]):e in t&&void 0===t[e]||(o[e]=i[e]);}return "className"in t&&"string"==typeof t.className&&(o.className=ae(o.className,t.className)),o}(i,s,v),w=function(e,n,o,s){const r=e.generateAndInjectStyles(n,o,s);return "production"!==process.env.NODE_ENV&&t.useDebugValue&&t.useDebugValue(r),r}(a,S,g.styleSheet,g.stylis),"production"!==process.env.NODE_ENV&&o.warnTooManyClasses&&o.warnTooManyClasses(w);const b=S.as||f,N=function(t,n,o,s){const r={};for(const i in t) void 0===t[i]||"$"===i[0]||"as"===i||"theme"===i&&t.theme===o||("forwardedAs"===i?r.as=t.forwardedAs:s&&!s(i,n)||(r[i]=t[i],s||"development"!==process.env.NODE_ENV||isPropValid(i)||(Ct||(Ct=new Set)).has(i)||!B(n)||n.includes("-")||(Ct.add(i),console.warn(`styled-components: it looks like an unknown prop "${i}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));return r}(S,b,v,y);let C=ae(u,h);w&&(C+=" "+w),S.className&&(C+=" "+S.className),N[B(b)&&b.includes("-")?"class":"className"]=C,r&&(N.ref=r);const O=t.createElement(b,N);if(p$1){const e=Pt?Pt():null;let n=null,o=0,s="",r=true,i=a;for(;i;){const t=g.styleSheet.names.get(i.componentId);if(t){o+=t.size;for(const o of t)e&&e.has(o)||(n||(n=[]),n.push(o),e&&e.add(o));}if(n&&r){let e=Je(i,g.styleSheet);null===e?r=false:(i!==a&&(e=It(e,i.componentId,g.styleSheet)),s=e+s);}i=i.baseStyle;}if(n&&!r){s="";const e=g.styleSheet.getTag();let t=a;for(;t;){let n=e.getGroup(P(t.componentId));n&&t!==a&&(n=It(n,t.componentId,g.styleSheet)),s=n+s,t=t.baseStyle;}}let c="";if(g.styleSheet.keyframeIds.size>0){const t=g.styleSheet.getTag();for(const n of g.styleSheet.keyframeIds){if(e&&e.has(n))continue;const o=t.getGroup(P(n));o&&(c+=o,e&&e.add(n));}}if(s&&e&&n&&n.length<o){const e=s.split(d$1);let t="";for(let o=0;o<e.length;o++){const s=e[o];if(s)for(let e=0;e<n.length;e++){const o=Et(n[e]);if(o.lastIndex=0,o.test(s)){t+=s+d$1;break}}}s=t;}const u=de(c+s);if(u){const e=t.createElement("style",{[l$1]:"",key:"sc-"+a.componentId,children:u});return t.createElement(t.Fragment,null,e,O)}}return O}(w,o,s)}S.displayName=f;let w=t.forwardRef(S);return w.attrs=g,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=y,w.foldedComponentIds=i?ae(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=m,w.target=i?a.target:o,Object.defineProperty(w,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=i?function(e,...t){for(const n of t)pe(e,n,true);return e}({},a.defaultProps,e):e;}}),"production"!==process.env.NODE_ENV&&(_(f,m),w.warnTooManyClasses=((e,t)=>{let n={},o=false;return s=>{!o&&(n[s]=true,Object.keys(n).length>=200)&&(console.warn(`Over 200 classes were generated for component ${e}${t?` with the id of "${t}"`:""}.\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))\`width: 100%;\`\n\n  <Component />`),o=true,n={});}})(f,m)),me(w,()=>`.${w.styledComponentId}`),c&&re(w,o,{attrs:true,componentStyle:true,displayName:true,foldedComponentIds:true,shouldForwardProp:true,styledComponentId:true,target:true}),w}var _t=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function xt(e,t){const n=[e[0]];for(let o=0,s=t.length;o<s;o+=1)n.push(t[o],e[o+1]);return n}const $t=e=>(je.add(e),e);function Rt(e,...t){if(ie(e)||he(e))return $t(He(xt(x,[e,...t])));const n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?He(n):$t(He(xt(n,t)))}function jt(e,t,n=$){if(!t)throw S(1,t);const o=(o,...s)=>e(t,n,Rt(o,...s));return o.attrs=o=>jt(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),o.withConfig=o=>jt(e,t,Object.assign(Object.assign({},n),o)),o}const kt=e=>jt(At,e),Tt=kt;_t.forEach(e=>{Tt[e]=kt(e);});fe(()=>new Set);var Wt;const Lt=p$1?new WeakMap:null;class Bt{constructor(e,t){this[Wt]=true,this.inject=(e,t=lt)=>{var n;const o=this.getName(t);if(!e.hasNameForId(this.id,o)){const s=t.hash||"",r=p$1?null===(n=null==Lt?void 0:Lt.get(this))||void 0===n?void 0:n.get(s):void 0;if(r)e.insertRules(this.id,o,r);else {const n=t(this.rules,o,"@keyframes");if(p$1&&Lt){let e=Lt.get(this);e||(e=new Map,Lt.set(this,e)),e.set(s,n);}e.insertRules(this.id,o,n);}}},this.name=e,this.id=g+e,this.rules=t,P(this.id),me(this,()=>{throw S(12,String(this.name))});}getName(e=lt){return e.hash?this.name+V(+e.hash>>>0):this.name}}function qt(e,...t){"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");const n=ce(Rt(e,...t)),o=W(n);return new Bt(o,n)}Wt=Ve;"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");const Zt=`__sc-${l$1}__`;"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window[Zt]||(window[Zt]=0),1===window[Zt]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."),window[Zt]+=1);

// This file is autogenerated. It's used to publish ESM to npm.

// Big List of Colors
// ------------------
// <https://www.w3.org/TR/css-color-4/#named-colors>
var names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
flip(names);

// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
  var flipped = {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      flipped[o[i]] = i;
    }
  }
  return flipped;
}

var p="#4fa94d",l={"aria-busy":true,role:"progressbar"};var d=Tt.div`
  display: ${t=>t.$visible?"flex":"none"};
`;var c="http://www.w3.org/2000/svg";var T=242.776657104492,Fe=1.6,We=qt`
12.5% {
  stroke-dasharray: ${T*.14}px, ${T}px;
  stroke-dashoffset: -${T*.11}px;
}
43.75% {
  stroke-dasharray: ${T*.35}px, ${T}px;
  stroke-dashoffset: -${T*.35}px;
}
100% {
  stroke-dasharray: ${T*.01}px, ${T}px;
  stroke-dashoffset: -${T*.99}px;
}
`;Tt.path`
  stroke-dasharray: ${T*.01}px, ${T};
  stroke-dashoffset: 0;
  animation: ${We} ${Fe}s linear infinite;
`;var tt=qt`
to {
   transform: rotate(360deg);
 }
`;Tt.svg`
  animation: ${tt} ${t=>String(t.$animationDuration).endsWith("s")?String(t.$animationDuration):`${t.$animationDuration}s`} steps(12, end) infinite;
`;Tt.polyline`
  stroke-width: ${t=>`${t.$strokeWidth}px`};
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;var nt=({height:t=80,width:s=80,strokeWidth:i=2,radius:r=1,color:a=p,ariaLabel:o="tail-spin-loading",wrapperStyle:e,wrapperClass:n,visible:g=true})=>{let u=parseInt(String(i)),w=u+36,L=u/2,ce=L+parseInt(String(r))-1;return jsxRuntime.jsx(d,{style:e,$visible:g,className:n,"data-testid":"tail-spin-loading","aria-label":o,...l,children:jsxRuntime.jsxs("svg",{width:s,height:t,viewBox:`0 0 ${w} ${w}`,xmlns:c,"data-testid":"tail-spin-svg",children:[jsxRuntime.jsx("defs",{children:jsxRuntime.jsxs("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a",children:[jsxRuntime.jsx("stop",{stopColor:a,stopOpacity:"0",offset:"0%"}),jsxRuntime.jsx("stop",{stopColor:a,stopOpacity:".631",offset:"63.146%"}),jsxRuntime.jsx("stop",{stopColor:a,offset:"100%"})]})}),jsxRuntime.jsx("g",{fill:"none",fillRule:"evenodd",children:jsxRuntime.jsxs("g",{transform:`translate(${L} ${L})`,children:[jsxRuntime.jsx("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:a,strokeWidth:i,children:jsxRuntime.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),jsxRuntime.jsx("circle",{fill:"#fff",cx:"36",cy:"18",r:ce,children:jsxRuntime.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})})};var dt=qt`
to {
   stroke-dashoffset: 136;
 }
`;Tt.polygon`
  stroke-dasharray: 17;
  animation: ${dt} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;Tt.svg`
  transform-origin: 50% 65%;
`;

/*
 * This is a Standard Panel with an info status, with a loading spinner and "Loading" message.
 * Uses [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) for the loading spinner.
 */
var ONSLoadingPanel = function ONSLoadingPanel(_ref) {
  var hidden = _ref.hidden,
    message = _ref.message;
  return jsxRuntime.jsx(ONSPanel, {
    hidden: hidden,
    children: jsxRuntime.jsxs("div", {
      style: {
        textAlign: "center"
      },
      children: [jsxRuntime.jsx(nt, {
        color: "#064868",
        height: 30,
        width: 30,
        ariaLabel: "loading-indicator"
      }), jsxRuntime.jsx("br", {}), message || "Loading"]
    })
  });
};

function Collapsible(_ref) {
  var children = _ref.children,
    title = _ref.title;
  var _useState = t.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    panelOpen = _useState2[0],
    setPanelOpen = _useState2[1];
  return jsxRuntime.jsxs("details", {
    id: "collapsible-with-save",
    className: "ons-collapsible ons-js-collapsible ons-u-mt-l",
    "data-save-state": "true",
    role: "group",
    children: [jsxRuntime.jsx("summary", {
      className: "ons-collapsible__heading ons-js-collapsible-heading",
      role: "link",
      "data-testid": "collapsible-heading",
      onClick: function onClick() {
        return setPanelOpen(!panelOpen);
      },
      onKeyPress: function onKeyPress() {
        return setPanelOpen(!panelOpen);
      },
      tabIndex: 0,
      "aria-expanded": panelOpen ? "true" : "false",
      "aria-controls": "collapsible-with-save",
      "data-ga-action": "".concat(panelOpen ? "Close" : "Open", " panel"),
      children: jsxRuntime.jsxs("div", {
        className: "ons-collapsible__controls",
        children: [jsxRuntime.jsx("h2", {
          className: "ons-collapsible__title",
          children: title
        }), jsxRuntime.jsx("span", {
          className: "ons-collapsible__icon",
          children: jsxRuntime.jsx("svg", {
            className: "ons-svg-icon",
            viewBox: "0 0 7.5 12.85",
            xmlns: "http://www.w3.org/2000/svg",
            focusable: "false",
            children: jsxRuntime.jsx("path", {
              d: "M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z",
              transform: "translate(-5.02 -1.59)"
            })
          })
        })]
      })
    }), jsxRuntime.jsx("div", {
      id: "collapsible-with-save-content",
      className: "ons-collapsible__content ons-js-collapsible-content",
      "aria-hidden": !panelOpen,
      "data-testid": "collapsible-content",
      children: children
    })]
  });
}

/*
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * Catches any issues and displays a error panel with a custom message provided. For example, you can wrap this around a
 * table, so if it fails to render this panel will show in its place on the page.
 */
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary() {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ErrorBoundary, [].concat(args));
    _defineProperty(_this, "state", {
      errorInfo: {
        componentStack: "Fine"
      }
    });
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(_, errorInfo) {
      this.setState({
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo.componentStack !== "Fine") {
        return jsxRuntime.jsx(ONSPanel, {
          status: "error",
          children: jsxRuntime.jsx("p", {
            children: this.props.errorMessageText
          })
        });
      }
      return jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: this.props.children
      });
    }
  }]);
}(t.Component);

/**
 * If an issue occurs in the render function of a React component, if not handled then the UI will fall over.
 * Wrappers will catch any error then display something else instead so if part of the page fails the
 * whole application does not break.
 *
 * This is useful for wrapping around the entire page to display a generic `Sorry, there is a problem with the service` message.
 */
var DefaultErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function DefaultErrorBoundary() {
    var _this;
    _classCallCheck(this, DefaultErrorBoundary);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DefaultErrorBoundary, [].concat(args));
    _defineProperty(_this, "state", {
      errorInfo: {
        componentStack: "Fine"
      }
    });
    return _this;
  }
  _inherits(DefaultErrorBoundary, _React$Component);
  return _createClass(DefaultErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo.componentStack !== "Fine") {
        return jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [jsxRuntime.jsx("h1", {
            children: "Sorry, there is a problem with the service"
          }), jsxRuntime.jsx("p", {
            children: "Try again later."
          }), jsxRuntime.jsx("p", {
            children: "If you have started a survey, your answers have been saved."
          }), jsxRuntime.jsxs("p", {
            children: [jsxRuntime.jsx("a", {
              href: "https://ons.service-now.com/",
              children: "Contact us"
            }), " ", "if you need to speak to someone about your survey."]
          })]
        });
      }
      return jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: this.props.children
      });
    }
  }]);
}(t.Component);

function ONSTable(_ref) {
  var columns = _ref.columns,
    children = _ref.children,
    tableCaption = _ref.tableCaption,
    tableID = _ref.tableID;
  return jsxRuntime.jsxs("table", {
    className: "ons-table",
    "data-testid": tableID,
    id: tableID,
    children: [tableCaption && jsxRuntime.jsx("caption", {
      className: "table__caption",
      children: tableCaption
    }), jsxRuntime.jsx("thead", {
      className: "ons-table__head",
      children: jsxRuntime.jsx("tr", {
        className: "ons-table__row",
        children: columns.map(function (title, index) {
          return jsxRuntime.jsx("th", {
            scope: "col",
            className: "ons-table__header",
            children: title
          }, "".concat(title, "-").concat(index));
        })
      })
    }), jsxRuntime.jsx("tbody", {
      className: "ons-table__body",
      children: children
    })]
  });
}

function replaceUnderscoreWithSpaces(text) {
  return text.split("_").join(" ");
}
function TitleCase(stringToConvert) {
  var firstCharacter = stringToConvert.substring(0, 1);
  var restString = stringToConvert.substring(1);
  return firstCharacter.toUpperCase() + restString;
}
function FormatTitle(text) {
  return TitleCase(replaceUnderscoreWithSpaces(text));
}
function FormatKey(text) {
  return text.split(" ").join("-");
}

var GroupedSummary = /*#__PURE__*/function () {
  function GroupedSummary(groups) {
    _classCallCheck(this, GroupedSummary);
    this.groups = groups;
  }
  return _createClass(GroupedSummary, [{
    key: "csv",
    value: function csv() {
      var records = [];
      var row = {};
      var _iterator = _createForOfIteratorHelper(this.groups),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          for (var record in group.records) {
            row[record] = group.records[record];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      records.push(row);
      return records;
    }
  }]);
}();
function SummaryItemRow(_ref) {
  var fieldName = _ref.fieldName,
    fieldValue = _ref.fieldValue;
  return jsxRuntime.jsx("tbody", {
    className: "ons-summary__item",
    children: jsxRuntime.jsxs("tr", {
      className: "ons-summary__row ons-summary__row--has-values",
      children: [jsxRuntime.jsx("td", {
        className: "ons-summary__item-title",
        children: jsxRuntime.jsx("div", {
          className: "ons-summary__item--text",
          children: FormatTitle(fieldName)
        })
      }), jsxRuntime.jsx("td", {
        className: "ons-summary__values",
        colSpan: 2,
        children: fieldValue
      })]
    })
  });
}
function SummaryGroupTable(_ref2) {
  var groupedSummary = _ref2.groupedSummary;
  var elementList = [];
  var _iterator2 = _createForOfIteratorHelper(groupedSummary.groups),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var group = _step2.value;
      elementList.push(jsxRuntime.jsx("h3", {
        className: "ons-summary__group-title",
        children: group.title
      }, "summary-group-heading-".concat(FormatKey(group.title))));
      var tableFieldsList = [];
      for (var field in group.records) {
        tableFieldsList.push(jsxRuntime.jsx(SummaryItemRow, {
          fieldName: field,
          fieldValue: group.records[field]
        }, "summary-table-row-".concat(FormatKey(field))));
      }
      elementList.push(jsxRuntime.jsx("table", {
        className: "ons-summary__items",
        children: tableFieldsList
      }, "summary-table-group-".concat(FormatKey(group.title))));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: elementList
  });
}

function Expandable(_ref) {
  var title = _ref.title,
    content = _ref.content,
    contentId = _ref.contentId,
    expandableIndex = _ref.expandableIndex,
    panelsOpen = _ref.panelsOpen,
    setPanelsOpen = _ref.setPanelsOpen;
  function togglePanel(event) {
    var newPanelsOpen = _toConsumableArray(panelsOpen);
    newPanelsOpen[expandableIndex] = !newPanelsOpen[expandableIndex];
    setPanelsOpen(newPanelsOpen);
    event.preventDefault();
  }
  function panelIsOpen() {
    return panelsOpen[expandableIndex];
  }
  return jsxRuntime.jsxs("details", {
    id: "".concat(contentId, "-accordion-").concat(expandableIndex),
    className: "ons-collapsible ons-js-collapsible ons-collapsible--accordion ",
    "data-btn-close": "Hide",
    "data-group": "accordion",
    open: panelIsOpen(),
    children: [jsxRuntime.jsx("summary", {
      className: "ons-collapsible__heading ons-js-collapsible-heading",
      role: "link",
      "data-testid": "".concat(contentId, "-accordion-").concat(expandableIndex, "-heading"),
      onClick: togglePanel,
      onKeyPress: togglePanel,
      "aria-expanded": panelIsOpen() ? "true" : "false",
      "aria-controls": "".concat(contentId, "-accordion-").concat(expandableIndex),
      "data-ga-action": panelIsOpen() ? "Close panel" : "Open panel",
      tabIndex: 0,
      children: jsxRuntime.jsxs("div", {
        className: "ons-collapsible__controls",
        children: [jsxRuntime.jsx("h2", {
          className: "ons-collapsible__title",
          children: title
        }), jsxRuntime.jsx("span", {
          className: "ons-collapsible__icon",
          children: jsxRuntime.jsx("svg", {
            className: "ons-svg-icon",
            viewBox: "0 0 7.5 12.85",
            xmlns: "http://www.w3.org/2000/svg",
            focusable: "false",
            children: jsxRuntime.jsx("path", {
              d: "M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z",
              transform: "translate(-5.02 -1.59)"
            })
          })
        })]
      })
    }), jsxRuntime.jsx("div", {
      id: "".concat(contentId, "-accordion-").concat(expandableIndex, "-content"),
      "data-testid": "".concat(contentId, "-accordion-").concat(expandableIndex, "-content"),
      className: "ons-collapsible__content ons-js-collapsible-content",
      "aria-hidden": panelIsOpen() ? "false" : "true",
      children: content
    })]
  });
}
function ShowAll(_ref2) {
  var showAllEnabled = _ref2.showAllEnabled,
    panelsOpen = _ref2.panelsOpen,
    setPanelsOpen = _ref2.setPanelsOpen,
    contentId = _ref2.contentId;
  var showing = !panelsOpen.includes(false);
  if (showAllEnabled) {
    return jsxRuntime.jsx("button", {
      "data-testid": "".concat(contentId, "-accordion-show-all"),
      type: "button",
      className: "ons-btn ons-js-collapsible-all ons-u-mb-s ons-btn--secondary ons-btn--small",
      "data-close-all": "Hide all",
      "data-group": "accordion",
      onClick: function onClick() {
        return setPanelsOpen(new Array(panelsOpen.length).fill(!showing));
      },
      children: jsxRuntime.jsx("span", {
        className: "ons-btn__inner ons-js-collapsible-all-inner",
        children: showing ? "Hide all" : "Show all"
      })
    });
  }
  return jsxRuntime.jsx(jsxRuntime.Fragment, {});
}
function Accordion(_ref3) {
  var ShowAllEnabled = _ref3.ShowAllEnabled,
    Expandables = _ref3.Expandables,
    ContentId = _ref3.ContentId,
    Expanded = _ref3.Expanded;
  var expandableStates = new Array(Expandables.length).fill(Expanded !== null && Expanded !== void 0 ? Expanded : false);
  var _useState = t.useState(expandableStates),
    _useState2 = _slicedToArray(_useState, 2),
    panelsOpen = _useState2[0],
    setPanelsOpen = _useState2[1];
  return jsxRuntime.jsxs("div", {
    id: "".concat(ContentId, "-accordion"),
    className: "ons-accordion",
    children: [jsxRuntime.jsx(ShowAll, {
      showAllEnabled: ShowAllEnabled,
      panelsOpen: panelsOpen,
      setPanelsOpen: setPanelsOpen,
      contentId: ContentId
    }), Expandables.map(function (expandable, index) {
      return jsxRuntime.jsx(Expandable, {
        content: expandable.content,
        contentId: expandable.contentId,
        title: expandable.title,
        expandableIndex: index,
        setPanelsOpen: setPanelsOpen,
        panelsOpen: panelsOpen
      }, "".concat(expandable.contentId, "-accordion-").concat(index));
    })]
  });
}

exports.Accordion = Accordion;
exports.BetaBanner = BetaBanner;
exports.Collapsible = Collapsible;
exports.DefaultErrorBoundary = DefaultErrorBoundary;
exports.ErrorBoundary = ErrorBoundary;
exports.ExternalLink = ExternalLink;
exports.Footer = Footer;
exports.FormatTitle = FormatTitle;
exports.GroupedSummary = GroupedSummary;
exports.Header = Header;
exports.NotProductionWarning = NotProductionWarning;
exports.ONSButton = ONSButton;
exports.ONSErrorPanel = ONSErrorPanel;
exports.ONSLoadingPanel = ONSLoadingPanel;
exports.ONSPanel = ONSPanel;
exports.ONSPasswordInput = ONSPasswordInput;
exports.ONSSelect = ONSSelect;
exports.ONSTable = ONSTable;
exports.ONSTextInput = ONSTextInput;
exports.ONSUpload = ONSUpload;
exports.StyledForm = StyledForm;
exports.StyledFormErrorSummary = StyledFormErrorSummary;
exports.StyledFormField = StyledFormField;
exports.SummaryGroupTable = SummaryGroupTable;
exports.SummaryItemRow = SummaryItemRow;
exports.TitleCase = TitleCase;
//# sourceMappingURL=index.js.map
