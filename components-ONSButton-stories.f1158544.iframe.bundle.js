/*! For license information please see components-ONSButton-stories.f1158544.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkblaise_design_system_react_components=self.webpackChunkblaise_design_system_react_components||[]).push([[176],{"./src/components/ONSButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Hidden:()=>Hidden,Loading:()=>Loading,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _ONSButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ONSButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={component:_ONSButton__WEBPACK_IMPORTED_MODULE_1__.B,title:"Components/Button"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ONSButton__WEBPACK_IMPORTED_MODULE_1__.B,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Template.displayName="Template";var Primary=Template.bind({}),Secondary=Template.bind({}),Small=Template.bind({}),Loading=Template.bind({}),Hidden=Template.bind({});Primary.args={primary:!0,label:"Button"},Secondary.args={primary:!1,label:"Button"},Small.args={primary:!0,label:"Button",small:!0},Loading.args={primary:!0,label:"Button",loading:!0},Hidden.args={primary:!0,label:"Button",hidden:!0},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <ONSButton {...args} />",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => <ONSButton {...args} />",...Secondary.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"args => <ONSButton {...args} />",...Small.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <ONSButton {...args} />",...Loading.parameters?.docs?.source}}},Hidden.parameters={...Hidden.parameters,docs:{...Hidden.parameters?.docs,source:{originalSource:"args => <ONSButton {...args} />",...Hidden.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Small","Loading","Hidden"]},"./src/components/ONSButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>ONSButton});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ONSButton=function ONSButton(props){var className=["ons-btn ",props.action?"ons-btn--link":null,props.loading?"ons-btn--loader ons-is-loading":null,props.field?"ons-field":null,props.primary?null:"ons-btn--secondary",props.small?"ons-btn--small":null,props.disabled?"ons-btn--disabled":null].filter((function(name){return null!==name})).join(" ");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{id:props.id,style:function spacing(){return props.hidden?{display:"none"}:{marginRight:"".concat(String(props.marginRight),"px")}}(),type:props.submit?"submit":"button",disabled:props.loading||props.disabled,className,onClick:props.onClick,"data-testid":function testId(){return props.testid?"".concat(props.testid,"-button"):"button"}(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"ons-btn__inner",children:[props.label,props.loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{className:"ons-svg-icon uil-default",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(0 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(30 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.08333333333333333s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(60 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.16666666666666666s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(90 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.25s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(120 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.3333333333333333s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(150 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.4166666666666667s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(180 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(210 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5833333333333334s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(240 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.6666666666666666s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(270 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.75s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(300 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.8333333333333334s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(330 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.9166666666666666s",repeatCount:"indefinite"})})]})]})})};ONSButton.displayName="ONSButton";try{ONSButton.displayName="ONSButton",ONSButton.__docgenInfo={description:"",displayName:"ONSButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},field:{defaultValue:null,description:"",name:"field",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"((...props: any[]) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"boolean"}},testid:{defaultValue:null,description:"",name:"testid",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},submit:{defaultValue:null,description:"",name:"submit",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ONSButton.tsx#ONSButton"]={docgenInfo:ONSButton.__docgenInfo,name:"ONSButton",path:"src/components/ONSButton.tsx#ONSButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);