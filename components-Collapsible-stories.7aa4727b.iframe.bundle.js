/*! For license information please see components-Collapsible-stories.7aa4727b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkblaise_design_system_react_components=self.webpackChunkblaise_design_system_react_components||[]).push([[661],{"./src/components/Collapsible.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Collapsible_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Collapsible(_ref){var children=_ref.children,title=_ref.title,_useState2=_slicedToArray((0,react.useState)(!1),2),panelOpen=_useState2[0],setPanelOpen=_useState2[1];return(0,jsx_runtime.jsxs)("details",{id:"collapsible-with-save",className:"ons-collapsible ons-js-collapsible ons-u-mt-l","data-save-state":"true",role:"group",children:[(0,jsx_runtime.jsx)("summary",{className:"ons-collapsible__heading ons-js-collapsible-heading",role:"link","data-testid":"collapsible-heading",onClick:function onClick(){return setPanelOpen(!panelOpen)},onKeyPress:function onKeyPress(){return setPanelOpen(!panelOpen)},tabIndex:0,"aria-expanded":panelOpen?"true":"false","aria-controls":"collapsible-with-save","data-ga-action":"".concat(panelOpen?"Close":"Open"," panel"),children:(0,jsx_runtime.jsxs)("div",{className:"ons-collapsible__controls",children:[(0,jsx_runtime.jsx)("h2",{className:"ons-collapsible__title",children:title}),(0,jsx_runtime.jsx)("span",{className:"ons-collapsible__icon",children:(0,jsx_runtime.jsx)("svg",{className:"ons-svg-icon",viewBox:"0 0 7.5 12.85",xmlns:"http://www.w3.org/2000/svg",focusable:"false",children:(0,jsx_runtime.jsx)("path",{d:"M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z",transform:"translate(-5.02 -1.59)"})})})]})}),(0,jsx_runtime.jsx)("div",{id:"collapsible-with-save-content",className:"ons-collapsible__content ons-js-collapsible-content","aria-hidden":!panelOpen,"data-testid":"collapsible-content",children})]})}Collapsible.displayName="Collapsible";const components_Collapsible=Collapsible;try{Collapsible.displayName="Collapsible",Collapsible.__docgenInfo={description:"",displayName:"Collapsible",props:{children:{defaultValue:null,description:"Render any standard HTML (or other React components) within the Collapsible",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible.tsx#Collapsible"]={docgenInfo:Collapsible.__docgenInfo,name:"Collapsible",path:"src/components/Collapsible.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Collapsible_stories={component:components_Collapsible,title:"Components/Collapsible"};var Template=function Template(args){return(0,jsx_runtime.jsx)(components_Collapsible,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={title:"What is the meaning of life the universe and everything?",children:(0,jsx_runtime.jsx)("p",{children:"42"})},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Collapsible {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);