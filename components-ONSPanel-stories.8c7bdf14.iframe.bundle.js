/*! For license information please see components-ONSPanel-stories.8c7bdf14.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkblaise_design_system_react_components=self.webpackChunkblaise_design_system_react_components||[]).push([[372],{"./src/components/ONSPanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Info:()=>Info,Spacious:()=>Spacious,Success:()=>Success,Warn:()=>Warn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _ONSPanel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ONSPanel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={component:_ONSPanel__WEBPACK_IMPORTED_MODULE_1__.d,title:"Components/Panel"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ONSPanel__WEBPACK_IMPORTED_MODULE_1__.d,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Template.displayName="Template";var Info=Template.bind({}),Success=Template.bind({}),Error=Template.bind({}),Warn=Template.bind({}),Spacious=Template.bind({});Info.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Some message in a panel"})},Success.args={status:"success",bigIcon:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"Title in a panel"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"And then some text"})]})},Error.args={status:"error",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Some message in a panel"})},Warn.args={status:"warn",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"All data will be removed"})},Spacious.args={status:"info",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Wow look at all this space"}),spacious:!0},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"args => <ONSPanel {...args} />",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <ONSPanel {...args} />",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <ONSPanel {...args} />",...Error.parameters?.docs?.source}}},Warn.parameters={...Warn.parameters,docs:{...Warn.parameters?.docs,source:{originalSource:"args => <ONSPanel {...args} />",...Warn.parameters?.docs?.source}}},Spacious.parameters={...Spacious.parameters,docs:{...Spacious.parameters?.docs,source:{originalSource:"args => <ONSPanel {...args} />",...Spacious.parameters?.docs?.source}}};const __namedExportsOrder=["Info","Success","Error","Warn","Spacious"]},"./src/components/ONSPanel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>ONSPanel});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ONSPanel=function ONSPanel(props){var className="ons-panel ons-panel--".concat(props.status?props.status:"info"," ons-panel--no-title ").concat(props.spacious?"ons-panel--spacious":""," ons-u-mt-m");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{"data-testid":props.testID,id:props.id,className,hidden:props.hidden,children:["success"===props.status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"ons-panel__icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:"ons-svg-icon ".concat(!0===props.bigIcon?"ons-svg-icon--xl":""),viewBox:"0 0 13 10",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z",transform:"translate(-1.51 -3.04)"})})}),"warn"===props.status&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"ons-panel__icon","aria-hidden":"true",children:"!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"ons-u-vh",children:"Warning: "})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"ons-panel__body ".concat(!0===props.bigIcon?"ons-svg-icon-margin--xl":""),children:props.children})]})};ONSPanel.displayName="ONSPanel";try{ONSPanel.displayName="ONSPanel",ONSPanel.__docgenInfo={description:"",displayName:"ONSPanel",props:{children:{defaultValue:null,description:"Render any standard HTML (or other React components) within the panel",name:"children",required:!0,type:{name:"any"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warn"'}]}},spacious:{defaultValue:null,description:"",name:"spacious",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},bigIcon:{defaultValue:null,description:"Uses a bigger tick icon for the success panel only.",name:"bigIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ONSPanel.tsx#ONSPanel"]={docgenInfo:ONSPanel.__docgenInfo,name:"ONSPanel",path:"src/components/ONSPanel.tsx#ONSPanel"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);