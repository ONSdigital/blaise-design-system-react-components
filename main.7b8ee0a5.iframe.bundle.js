(self.webpackChunkblaise_design_system_react_components=self.webpackChunkblaise_design_system_react_components||[]).push([[179],{"./.storybook/preview.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{parameters:()=>parameters});var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./.storybook/preview.js")])})},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Accordion.stories":["./src/components/Accordion.stories.tsx",366],"./components/Accordion.stories.tsx":["./src/components/Accordion.stories.tsx",366],"./components/BetaBanner.stories":["./src/components/BetaBanner.stories.tsx",865],"./components/BetaBanner.stories.tsx":["./src/components/BetaBanner.stories.tsx",865],"./components/Collapsible.stories":["./src/components/Collapsible.stories.tsx",661],"./components/Collapsible.stories.tsx":["./src/components/Collapsible.stories.tsx",661],"./components/ErrorHandling/DefaultErrorBoundary.stories":["./src/components/ErrorHandling/DefaultErrorBoundary.stories.tsx",700],"./components/ErrorHandling/DefaultErrorBoundary.stories.tsx":["./src/components/ErrorHandling/DefaultErrorBoundary.stories.tsx",700],"./components/ErrorHandling/ErrorBoundary.stories":["./src/components/ErrorHandling/ErrorBoundary.stories.tsx",675],"./components/ErrorHandling/ErrorBoundary.stories.tsx":["./src/components/ErrorHandling/ErrorBoundary.stories.tsx",675],"./components/ExternalLink.stories":["./src/components/ExternalLink.stories.tsx",878],"./components/ExternalLink.stories.tsx":["./src/components/ExternalLink.stories.tsx",878],"./components/Footer.stories":["./src/components/Footer.stories.tsx",788],"./components/Footer.stories.tsx":["./src/components/Footer.stories.tsx",788],"./components/Header.stories":["./src/components/Header.stories.tsx",873],"./components/Header.stories.tsx":["./src/components/Header.stories.tsx",873],"./components/NotProductionWarning.stories":["./src/components/NotProductionWarning.stories.tsx",369],"./components/NotProductionWarning.stories.tsx":["./src/components/NotProductionWarning.stories.tsx",369],"./components/ONSButton.stories":["./src/components/ONSButton.stories.tsx",176],"./components/ONSButton.stories.tsx":["./src/components/ONSButton.stories.tsx",176],"./components/ONSErrorPanel.stories":["./src/components/ONSErrorPanel.stories.tsx",630],"./components/ONSErrorPanel.stories.tsx":["./src/components/ONSErrorPanel.stories.tsx",630],"./components/ONSLoadingPanel.stories":["./src/components/ONSLoadingPanel.stories.tsx",222,430],"./components/ONSLoadingPanel.stories.tsx":["./src/components/ONSLoadingPanel.stories.tsx",222,430],"./components/ONSPanel.stories":["./src/components/ONSPanel.stories.tsx",372],"./components/ONSPanel.stories.tsx":["./src/components/ONSPanel.stories.tsx",372],"./components/ONSPasswordInput.stories":["./src/components/ONSPasswordInput.stories.tsx",175],"./components/ONSPasswordInput.stories.tsx":["./src/components/ONSPasswordInput.stories.tsx",175],"./components/ONSSelect.stories":["./src/components/ONSSelect.stories.tsx",730],"./components/ONSSelect.stories.tsx":["./src/components/ONSSelect.stories.tsx",730],"./components/ONSSummary.stories":["./src/components/ONSSummary.stories.tsx",659],"./components/ONSSummary.stories.tsx":["./src/components/ONSSummary.stories.tsx",659],"./components/ONSTable.stories":["./src/components/ONSTable.stories.tsx",124],"./components/ONSTable.stories.tsx":["./src/components/ONSTable.stories.tsx",124],"./components/ONSTextInput.stories":["./src/components/ONSTextInput.stories.tsx",210],"./components/ONSTextInput.stories.tsx":["./src/components/ONSTextInput.stories.tsx",210],"./components/ONSUpload.stories":["./src/components/ONSUpload.stories.tsx",177],"./components/ONSUpload.stories.tsx":["./src/components/ONSUpload.stories.tsx",177],"./components/forms/StyledForm.stories":["./src/components/forms/StyledForm.stories.tsx",652,34],"./components/forms/StyledForm.stories.tsx":["./src/components/forms/StyledForm.stories.tsx",652,34]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Introduction.stories.mdx":["./src/stories/Introduction.stories.mdx",497,991]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[296],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);