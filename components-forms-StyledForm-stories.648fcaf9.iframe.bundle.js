"use strict";(self.webpackChunkblaise_design_system_react_components=self.webpackChunkblaise_design_system_react_components||[]).push([[34],{"./src/components/forms/StyledForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StyledForm_stories});var react=__webpack_require__("./node_modules/react/index.js"),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function StyledFormErrorSummary(){var errorFocus,_useFormikContext=(0,formik_esm.u6)(),errors=_useFormikContext.errors,isValid=_useFormikContext.isValid;return(0,react.useEffect)((function(){var _errorFocus;null===(_errorFocus=errorFocus)||void 0===_errorFocus||_errorFocus.focus()}),[errors,isValid]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!isValid&&(0,jsx_runtime.jsxs)("div",{"aria-labelledby":"error-summary-title",role:"alert",tabIndex:-1,ref:function ref(inputEl){return errorFocus=inputEl},className:"ons-panel ons-panel--error",children:[(0,jsx_runtime.jsx)("div",{className:"ons-panel__header",children:(0,jsx_runtime.jsx)("h2",{id:"error-summary-title","data-qa":"error-header",className:"ons-panel__title ons-u-fs-r--b",children:1===Object.keys(errors).length?"There is 1 problem with your answer":"There are ".concat(Object.keys(errors).length," problems with your answer")})}),(0,jsx_runtime.jsx)("div",{className:"ons-panel__body",children:(0,jsx_runtime.jsx)("ol",{className:"ons-list",children:Object.keys(errors).map((function(field,index){return(0,jsx_runtime.jsx)("li",{className:"ons-list__item ",children:(0,jsx_runtime.jsx)("a",{href:"#".concat(field),className:"ons-list__link ons-js-inpagelink",children:errors[field]})},index)}))})})]})})}const forms_StyledFormErrorSummary=StyledFormErrorSummary;try{StyledFormErrorSummary.displayName="StyledFormErrorSummary",StyledFormErrorSummary.__docgenInfo={description:"Error summary list\n - Displayed when isValid is false.\n - Focuses div when error lists changes.",displayName:"StyledFormErrorSummary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/StyledFormErrorSummary.tsx#StyledFormErrorSummary"]={docgenInfo:StyledFormErrorSummary.__docgenInfo,name:"StyledFormErrorSummary",path:"src/components/forms/StyledFormErrorSummary.tsx#StyledFormErrorSummary"})}catch(__react_docgen_typescript_loader_error){}var ONSButton=__webpack_require__("./src/components/ONSButton.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function Fields_typeof(o){return Fields_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Fields_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=Fields_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Fields_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Fields_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function RadioFieldset(_ref){var description=_ref.description,name=_ref.name,radioOptions=_ref.radioOptions,props=_objectWithoutProperties(_ref,["description","name","radioOptions"]);return(0,jsx_runtime.jsxs)("fieldset",{className:"ons-fieldset",children:[(0,jsx_runtime.jsx)("legend",{className:"ons-fieldset__legend",children:description}),(0,jsx_runtime.jsx)("div",{className:"ons-radios__items",id:name,children:radioOptions&&radioOptions.length>0&&radioOptions.map((function(radioOption,radioOptionIndex){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("p",{className:"ons-radios__item",children:(0,jsx_runtime.jsxs)("span",{className:"ons-radio",children:[(0,jsx_runtime.jsx)(formik_esm.gN,_objectSpread(_objectSpread({type:"radio",id:radioOption.id,name,value:radioOption.value,className:"ons-radio__input js-radio"},props),{},{autoFocus:props.autoFocus&&0===radioOptionIndex})),(0,jsx_runtime.jsxs)("label",{className:"ons-radio__label ".concat(void 0!==radioOption.description?"ons-label--with-description":""),htmlFor:radioOption.id,id:"".concat(radioOption.id,"-label"),children:[radioOption.label,void 0!==radioOption.description&&(0,jsx_runtime.jsx)("span",{id:"white-label-description-hint",className:"ons-label__description ons-radio__label--with-description",children:radioOption.description})]}),radioOption.specifyOption&&(0,jsx_runtime.jsxs)("span",{className:"ons-radio__other ons-radio__other--open",id:"other-radio-other-wrap",children:[(0,jsx_runtime.jsx)("label",{className:"ons-label ons-u-fs-s--b ",htmlFor:radioOption.specifyOption.id,id:"other-textbox-label",children:radioOption.specifyOption.description}),(0,jsx_runtime.jsx)(formik_esm.gN,{type:radioOption.specifyOption.type,id:radioOption.specifyOption.id,name:radioOption.specifyOption.name,validate:radioOption.specifyOption.validate,min:radioOption.specifyOption.min,className:"ons-input ons-input--text ons-input-type__input ons-input--w-auto"})]})]})}),(0,jsx_runtime.jsx)("br",{})]},radioOption.id)}))})]})}function CheckboxesFieldset(_ref2){var description=_ref2.description,checkboxOptions=_ref2.checkboxOptions,name=_ref2.name,props=_objectWithoutProperties(_ref2,["description","checkboxOptions","name"]),_useFormikContext=(0,formik_esm.u6)(),values=_useFormikContext.values,setFieldValue=_useFormikContext.setFieldValue,allValues=(checkboxOptions||[]).map((function(checkboxOption){return checkboxOption.value}));function isAllSelected(){return function isObjectWithProperty(value,propertyName){return"object"===_typeof(value)&&null!=value&&propertyName in value}(values,name)?function areArraysEqual(array1,array2){return array1.length===array2.length&&array1.every((function(item){return array2.includes(item)}))}(values[name]||[],allValues):[]}return(0,jsx_runtime.jsxs)("fieldset",{className:"ons-fieldset",children:[(0,jsx_runtime.jsx)("legend",{className:"ons-fieldset__legend",children:description}),(0,jsx_runtime.jsx)("button",{type:"button",className:"ons-btn ons-u-mb-s js-auto-selector ons-btn--small ons-btn--secondary",onClick:function handleSelectAll(){isAllSelected()?setFieldValue(name,[]):setFieldValue(name,allValues)},children:(0,jsx_runtime.jsxs)("span",{className:"ons-btn__inner",children:[(0,jsx_runtime.jsx)("span",{className:"js-button-text",children:isAllSelected()?"Unselect All":"Select All"}),(0,jsx_runtime.jsx)("span",{className:"ons-u-vh",children:" following checkboxes"})]})}),(0,jsx_runtime.jsx)("div",{className:"checkboxes__items",id:name,children:checkboxOptions&&checkboxOptions.length>0&&checkboxOptions.map((function(checkboxOption,checkboxIndex){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("p",{className:"ons-checkboxes__item",children:(0,jsx_runtime.jsxs)("span",{className:"ons-checkbox",children:[(0,jsx_runtime.jsx)(formik_esm.gN,_objectSpread(_objectSpread({type:"checkbox",id:checkboxOption.id,name,value:checkboxOption.value,className:"ons-checkbox__input js-checkbox"},props),{},{autoFocus:props.autoFocus&&0===checkboxIndex})),(0,jsx_runtime.jsxs)("label",{className:"ons-checkbox__label ".concat(void 0!==checkboxOption.description?"ons-label--with-description":""),htmlFor:checkboxOption.id,id:"".concat(checkboxOption.id,"-label"),children:[checkboxOption.label,void 0!==checkboxOption.description&&(0,jsx_runtime.jsx)("span",{id:"white-label-description-hint",className:"ons-label__description checkbox__label--with-description",children:checkboxOption.description})]})]})}),(0,jsx_runtime.jsx)("br",{})]},checkboxOption.id)}))})]})}function ONSInputField(_ref3){var string,field=_ref3.field,description=_ref3.description,props=_objectWithoutProperties(_ref3,["field","description"]),id=props.id?props.id:field.name;return(0,jsx_runtime.jsxs)("div",{className:"ons-field",children:[(0,jsx_runtime.jsx)("label",{className:"ons-label ".concat(description?"ons-label--with-description":""),htmlFor:id,children:(string=field.name,string.trim().replace(/^\w/,(function(c){return c.toUpperCase()})))}),description&&(0,jsx_runtime.jsx)("span",{id:"description-hint",className:"ons-label__description ons-input--with-description",children:description}),(0,jsx_runtime.jsx)("input",_objectSpread(_objectSpread({id,className:"ons-input ons-input--text ons-input-type__input"},field),props))]})}RadioFieldset.displayName="RadioFieldset",CheckboxesFieldset.displayName="CheckboxesFieldset",ONSInputField.displayName="ONSInputField";try{RadioFieldset.displayName="RadioFieldset",RadioFieldset.__docgenInfo={description:"",displayName:"RadioFieldset",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},radioOptions:{defaultValue:null,description:"",name:"radioOptions",required:!1,type:{name:"RadioFieldsetObject[]"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!0,type:{name:"boolean"}},props:{defaultValue:null,description:"",name:"props",required:!0,type:{name:"Pick<any, string | number | symbol>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormElements/Fields.tsx#RadioFieldset"]={docgenInfo:RadioFieldset.__docgenInfo,name:"RadioFieldset",path:"src/components/forms/FormElements/Fields.tsx#RadioFieldset"})}catch(__react_docgen_typescript_loader_error){}try{CheckboxesFieldset.displayName="CheckboxesFieldset",CheckboxesFieldset.__docgenInfo={description:"",displayName:"CheckboxesFieldset",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},checkboxOptions:{defaultValue:null,description:"",name:"checkboxOptions",required:!1,type:{name:"CheckboxFieldsetObject[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!0,type:{name:"boolean"}},props:{defaultValue:null,description:"",name:"props",required:!0,type:{name:"Pick<any, string | number | symbol>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormElements/Fields.tsx#CheckboxesFieldset"]={docgenInfo:CheckboxesFieldset.__docgenInfo,name:"CheckboxesFieldset",path:"src/components/forms/FormElements/Fields.tsx#CheckboxesFieldset"})}catch(__react_docgen_typescript_loader_error){}try{ONSInputField.displayName="ONSInputField",ONSInputField.__docgenInfo={description:"",displayName:"ONSInputField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormElements/Fields.tsx#ONSInputField"]={docgenInfo:ONSInputField.__docgenInfo,name:"ONSInputField",path:"src/components/forms/FormElements/Fields.tsx#ONSInputField"})}catch(__react_docgen_typescript_loader_error){}function StyledFormFields_typeof(o){return StyledFormFields_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},StyledFormFields_typeof(o)}function StyledFormFields_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function StyledFormFields_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?StyledFormFields_ownKeys(Object(t),!0).forEach((function(r){StyledFormFields_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):StyledFormFields_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function StyledFormFields_defineProperty(obj,key,value){return(key=function StyledFormFields_toPropertyKey(t){var i=function StyledFormFields_toPrimitive(t,r){if("object"!=StyledFormFields_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=StyledFormFields_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==StyledFormFields_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StyledFormFields_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function StyledFormFields_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StyledFormFieldErrorWrapper(fieldError,fieldName,field){return(0,jsx_runtime.jsxs)("div",{className:"ons-panel ons-panel--error ons-panel--no-title ons-u-mb-s",id:"".concat(fieldName,"-error"),children:[(0,jsx_runtime.jsx)("span",{className:"ons-u-vh",children:"Error: "}),(0,jsx_runtime.jsxs)("div",{className:"ons-panel__body",children:[(0,jsx_runtime.jsx)("p",{className:"ons-panel__error",children:(0,jsx_runtime.jsx)("strong",{children:fieldError})}),field]})]})}StyledFormFieldErrorWrapper.displayName="StyledFormFieldErrorWrapper";var StyledFormField=function StyledFormField(_ref){var newField,name=_ref.name,description=_ref.description,_ref$radioOptions=_ref.radioOptions,radioOptions=void 0===_ref$radioOptions?[]:_ref$radioOptions,_ref$checkboxOptions=_ref.checkboxOptions,checkboxOptions=void 0===_ref$checkboxOptions?[]:_ref$checkboxOptions,props=StyledFormFields_objectWithoutProperties(_ref,["name","description","radioOptions","checkboxOptions"]),errors=(0,formik_esm.u6)().errors;return newField="radio"===props.type?(0,jsx_runtime.jsx)(RadioFieldset,StyledFormFields_objectSpread({description,name,radioOptions},props)):"checkbox"===props.type?(0,jsx_runtime.jsx)(CheckboxesFieldset,StyledFormFields_objectSpread({description,name,checkboxOptions},props)):(0,jsx_runtime.jsx)(formik_esm.gN,StyledFormFields_objectSpread(StyledFormFields_objectSpread({name,description},props),{},{component:ONSInputField})),(0,jsx_runtime.jsx)(react.Fragment,{children:errors[name]?StyledFormFieldErrorWrapper(errors[name],"name",newField):newField},name)};StyledFormField.displayName="StyledFormField";try{StyledFormField.displayName="StyledFormField",StyledFormField.__docgenInfo={description:"",displayName:"StyledFormField",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},radioOptions:{defaultValue:{value:"[]"},description:"",name:"radioOptions",required:!1,type:{name:"any[]"}},checkboxOptions:{defaultValue:{value:"[]"},description:"",name:"checkboxOptions",required:!1,type:{name:"any[]"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!0,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},props:{defaultValue:null,description:"",name:"props",required:!0,type:{name:"Pick<any, string | number | symbol>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/FormElements/StyledFormFields.tsx#StyledFormField"]={docgenInfo:StyledFormField.__docgenInfo,name:"StyledFormField",path:"src/components/forms/FormElements/StyledFormFields.tsx#StyledFormField"})}catch(__react_docgen_typescript_loader_error){}function StyledForm_typeof(o){return StyledForm_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},StyledForm_typeof(o)}function StyledForm_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function StyledForm_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?StyledForm_ownKeys(Object(t),!0).forEach((function(r){StyledForm_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):StyledForm_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function StyledForm_defineProperty(obj,key,value){return(key=function StyledForm_toPropertyKey(t){var i=function StyledForm_toPrimitive(t,r){if("object"!=StyledForm_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=StyledForm_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==StyledForm_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StyledForm(_ref){var fields=_ref.fields,onSubmitFunction=_ref.onSubmitFunction,submitLabel=_ref.submitLabel,initialFieldValues={};return fields.forEach((function(_ref2){var name=_ref2.name,initial_value=_ref2.initial_value;initialFieldValues[name]=initial_value})),(0,jsx_runtime.jsx)(formik_esm.J9,{validateOnBlur:!1,validateOnChange:!1,initialValues:initialFieldValues,onSubmit:function onSubmit(values,_ref3){var setSubmitting=_ref3.setSubmitting;onSubmitFunction(values,setSubmitting)},children:function children(_ref4){var isValid=_ref4.isValid,isSubmitting=_ref4.isSubmitting;return(0,jsx_runtime.jsxs)(formik_esm.l0,{placeholder:void 0,children:[(0,jsx_runtime.jsx)(forms_StyledFormErrorSummary,{}),fields.map((function(field,index){return field.autoFocus=isValid&&0===index,(0,jsx_runtime.jsx)(react.Fragment,{children:(0,jsx_runtime.jsx)(StyledFormField,StyledForm_objectSpread({},field))},field.name)})),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(ONSButton.B,{submit:!0,label:submitLabel||"Save and continue",primary:!0,testid:"submit",loading:isSubmitting})]})}})}StyledForm.displayName="StyledForm";const forms_StyledForm=StyledForm;try{StyledForm.displayName="StyledForm",StyledForm.__docgenInfo={description:"Formik form styled to ONS design guide with form error panel",displayName:"StyledForm",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"FormFieldObject[]"}},onSubmitFunction:{defaultValue:null,description:"",name:"onSubmitFunction",required:!0,type:{name:"(values: any, setSubmitting: (isSubmitting: boolean) => void) => void"}},submitLabel:{defaultValue:null,description:"",name:"submitLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/StyledForm.tsx#StyledForm"]={docgenInfo:StyledForm.__docgenInfo,name:"StyledForm",path:"src/components/forms/StyledForm.tsx#StyledForm"})}catch(__react_docgen_typescript_loader_error){}function StyledForm_stories_typeof(o){return StyledForm_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},StyledForm_stories_typeof(o)}function StyledForm_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function StyledForm_stories_defineProperty(obj,key,value){return(key=function StyledForm_stories_toPropertyKey(t){var i=function StyledForm_stories_toPrimitive(t,r){if("object"!=StyledForm_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=StyledForm_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==StyledForm_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const StyledForm_stories={component:forms_StyledForm,title:"Components/Forms/StyledForm"};var Template=function Template(args){return(0,jsx_runtime.jsx)(forms_StyledForm,function StyledForm_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?StyledForm_stories_ownKeys(Object(t),!0).forEach((function(r){StyledForm_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):StyledForm_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={fields:[{name:"Survey TLA",description:"Select survey",type:"radio",initial_value:"undefined",radioOptions:[{id:"all",value:"undefined",label:"Show all surveys"},{id:"lms",value:"lms",label:"LMS",description:"Labour Market Survey"},{id:"opn",value:"opn",label:"OPN",description:"Opinions and Lifestyle Survey"}]},{name:"Questionnaire",description:"Select questionnaires",type:"checkbox",initial_value:"undefined",checkboxOptions:[{id:"checkbox_1",value:"lms",label:"LMS"},{id:"checkbox_2",value:"opn",label:"OPN"},{id:"checkbox_3",value:"dst",label:"DST"}]},{name:"Interviewer ID",type:"text"},{name:"Start date",type:"date"},{name:"End date",type:"date"}],submitLabel:"Submit label"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <StyledForm {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/ONSButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>ONSButton});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ONSButton=function ONSButton(props){var className=["ons-btn ",props.action?"ons-btn--link":null,props.loading?"ons-btn--loader ons-is-loading":null,props.field?"ons-field":null,props.primary?null:"ons-btn--secondary",props.small?"ons-btn--small":null,props.disabled?"ons-btn--disabled":null].filter((function(name){return null!==name})).join(" ");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{id:props.id,style:function spacing(){return props.hidden?{display:"none"}:{marginRight:"".concat(String(props.marginRight),"px")}}(),type:props.submit?"submit":"button",disabled:props.loading||props.disabled,className,onClick:props.onClick,"data-testid":function testId(){return props.testid?"".concat(props.testid,"-button"):"button"}(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"ons-btn__inner",children:[props.label,props.loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{className:"ons-svg-icon uil-default",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(0 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(30 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.08333333333333333s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(60 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.16666666666666666s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(90 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.25s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(120 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.3333333333333333s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(150 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.4166666666666667s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(180 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(210 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5833333333333334s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(240 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.6666666666666666s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(270 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.75s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(300 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.8333333333333334s",repeatCount:"indefinite"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect",{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",transform:"rotate(330 50 50) translate(0 -30)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.9166666666666666s",repeatCount:"indefinite"})})]})]})})};ONSButton.displayName="ONSButton";try{ONSButton.displayName="ONSButton",ONSButton.__docgenInfo={description:"",displayName:"ONSButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},field:{defaultValue:null,description:"",name:"field",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"((...props: any[]) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"boolean"}},testid:{defaultValue:null,description:"",name:"testid",required:!1,type:{name:"string"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},submit:{defaultValue:null,description:"",name:"submit",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ONSButton.tsx#ONSButton"]={docgenInfo:ONSButton.__docgenInfo,name:"ONSButton",path:"src/components/ONSButton.tsx#ONSButton"})}catch(__react_docgen_typescript_loader_error){}}}]);