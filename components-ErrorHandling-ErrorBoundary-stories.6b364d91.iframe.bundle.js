/*! For license information please see components-ErrorHandling-ErrorBoundary-stories.6b364d91.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkblaise_design_system_react_components=self.webpackChunkblaise_design_system_react_components||[]).push([[914],{"./src/components/ErrorHandling/ErrorBoundary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Panel:()=>Panel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ErrorBoundary_stories});var react=__webpack_require__("./node_modules/react/index.js"),ONSPanel=__webpack_require__("./src/components/ONSPanel.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var ErrorBoundary=function(_React$Component){function ErrorBoundary(){var _this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ErrorBoundary);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}(_this=_callSuper(this,ErrorBoundary,[].concat(args)),"state",{errorInfo:{componentStack:"Fine"}}),_this}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(ErrorBoundary,_React$Component),function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(ErrorBoundary,[{key:"componentDidCatch",value:function componentDidCatch(_,errorInfo){this.setState({errorInfo})}},{key:"render",value:function render(){return"Fine"!==this.state.errorInfo.componentStack?(0,jsx_runtime.jsx)(ONSPanel.X,{status:"error",children:(0,jsx_runtime.jsx)("p",{children:this.props.errorMessageText})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:this.props.children})}}])}(react.Component);ErrorBoundary.displayName="ErrorBoundary";try{ErrorBoundary.displayName="ErrorBoundary",ErrorBoundary.__docgenInfo={description:"If an issue occurs in the render function of a React component, if not handled then the UI will fall over.\nWrappers will catch any error then display something else instead so if part of the page fails the\nwhole application does not break.\n\nCatches any issues and displays a error panel with a custom message provided. For example, you can wrap this around a\ntable, so if it fails to render this panel will show in its place on the page.",displayName:"ErrorBoundary",props:{errorMessageText:{defaultValue:null,description:"",name:"errorMessageText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorHandling/ErrorBoundary.tsx#ErrorBoundary"]={docgenInfo:ErrorBoundary.__docgenInfo,name:"ErrorBoundary",path:"src/components/ErrorHandling/ErrorBoundary.tsx#ErrorBoundary"})}catch(__react_docgen_typescript_loader_error){}function ErrorBoundary_stories_typeof(o){return ErrorBoundary_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ErrorBoundary_stories_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ErrorBoundary_stories_defineProperty(e,r,t){return(r=function ErrorBoundary_stories_toPropertyKey(t){var i=function ErrorBoundary_stories_toPrimitive(t,r){if("object"!=ErrorBoundary_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=ErrorBoundary_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==ErrorBoundary_stories_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var DodgyComponent=function DodgyComponent(){var _useState2=_slicedToArray((0,react.useState)(!1),2),error=_useState2[0],setError=_useState2[1];if(error)throw new Error("I crashed!");return(0,jsx_runtime.jsx)("button",{type:"button",onClick:function onClick(){return setError(!0)},children:"Click Me"})};const ErrorBoundary_stories={component:ErrorBoundary,title:"Components/Error Boundary/Panel"};var Template=function Template(args){return(0,jsx_runtime.jsx)(ErrorBoundary,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){ErrorBoundary_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Template.displayName="Template";var Panel=Template.bind({});Panel.args={children:(0,jsx_runtime.jsx)(DodgyComponent,{}),errorMessageText:"D'oh!"},Panel.parameters={...Panel.parameters,docs:{...Panel.parameters?.docs,source:{originalSource:"args => <ErrorBoundary {...args} />",...Panel.parameters?.docs?.source}}};const __namedExportsOrder=["Panel"]},"./src/components/ONSPanel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>ONSPanel});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ONSPanel=function ONSPanel(props){var className="ons-panel ons-panel--".concat(props.status?props.status:"info"," ons-panel--no-title ").concat(props.spacious?"ons-panel--spacious":""," ons-u-mt-m");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{"data-testid":props.testID,id:props.id,className,hidden:props.hidden,children:["success"===props.status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"ons-panel__icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:"ons-svg-icon ".concat(!0===props.bigIcon?"ons-svg-icon--xl":""),viewBox:"0 0 13 10",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z",transform:"translate(-1.51 -3.04)"})})}),"warn"===props.status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"ons-panel__icon","aria-hidden":"true",children:"!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"ons-u-vh",children:"Warning: "})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"ons-panel__body ".concat(!0===props.bigIcon?"ons-svg-icon-margin--xl":""),children:props.children})]})};ONSPanel.displayName="ONSPanel";try{ONSPanel.displayName="ONSPanel",ONSPanel.__docgenInfo={description:"",displayName:"ONSPanel",props:{children:{defaultValue:null,description:"Render any standard HTML (or other React components) within the panel",name:"children",required:!0,type:{name:"any"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warn"'}]}},spacious:{defaultValue:null,description:"",name:"spacious",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},bigIcon:{defaultValue:null,description:"Uses a bigger tick icon for the success panel only.",name:"bigIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ONSPanel.tsx#ONSPanel"]={docgenInfo:ONSPanel.__docgenInfo,name:"ONSPanel",path:"src/components/ONSPanel.tsx#ONSPanel"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);