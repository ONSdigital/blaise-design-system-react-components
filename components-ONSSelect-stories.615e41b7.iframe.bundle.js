/*! For license information please see components-ONSSelect-stories.615e41b7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkblaise_design_system_react_components=self.webpackChunkblaise_design_system_react_components||[]).push([[462],{"./src/components/ONSSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ONSSelect_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var ONSSelect=function(_Component){function ONSSelect(props){var _this;return function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ONSSelect),_defineProperty(_this=_callSuper(this,ONSSelect,[props]),"value",void 0!==_this.props.value?_this.props.value:""),_defineProperty(_this,"handleChange",(function(e){void 0!==_this.props.onChange&&_this.props.onChange(e),_this.value=e.target.value,_this.setState({value:e.target.value})})),_this.state={value:void 0!==props.value?_this.props.value:""},_this}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(ONSSelect,_Component),function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(ONSSelect,[{key:"defaultValue",value:function defaultValue(){return this.props.defaultValue?this.props.defaultValue:""}},{key:"render",value:function render(){var _this2=this;return(0,jsx_runtime.jsxs)("div",{children:[void 0!==this.props.label&&(0,jsx_runtime.jsxs)("label",{className:"ons-label",htmlFor:this.props.id,children:[this.props.label," "]}),(0,jsx_runtime.jsxs)("select",{id:this.props.id,name:"select",defaultValue:this.defaultValue(),className:"ons-input ",onChange:function onChange(e){return _this2.handleChange(e)},"data-testid":this.props.testId,children:[(0,jsx_runtime.jsx)("option",{value:"",disabled:!0,"data-testid":"select-".concat(this.props.id),children:"Select an option"}),this.props.options.map((function(option,index){return(0,jsx_runtime.jsx)("option",{value:option.value,id:option.id,"data-testid":"option-".concat(_this2.props.id,"-").concat(option.value),children:option.label},index)}))]})]})}}])}(react.Component);ONSSelect.displayName="ONSSelect";try{ONSSelect.displayName="ONSSelect",ONSSelect.__docgenInfo={description:"",displayName:"ONSSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLSelectElement>, ...args: any[]) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ONSSelect.tsx#ONSSelect"]={docgenInfo:ONSSelect.__docgenInfo,name:"ONSSelect",path:"src/components/ONSSelect.tsx#ONSSelect"})}catch(__react_docgen_typescript_loader_error){}function ONSSelect_stories_typeof(o){return ONSSelect_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ONSSelect_stories_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ONSSelect_stories_defineProperty(e,r,t){return(r=function ONSSelect_stories_toPropertyKey(t){var i=function ONSSelect_stories_toPrimitive(t,r){if("object"!=ONSSelect_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=ONSSelect_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==ONSSelect_stories_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const ONSSelect_stories={component:ONSSelect,title:"Components/Select"};var Template=function Template(args){return(0,jsx_runtime.jsx)(ONSSelect,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){ONSSelect_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Template.displayName="Template";var Default=Template.bind({}),Selection=[{label:"LMS",value:"lms"},{label:"OPN",value:"opn"},{label:"DST",value:"dst"}];Default.args={id:"select-survey",label:"Select survey",options:Selection,defaultValue:Selection[0].value},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ONSSelect {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);