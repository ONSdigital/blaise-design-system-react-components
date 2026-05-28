import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
//#region node_modules/@storybook/addon-docs/dist/_browser-chunks/chunk-S2IHWCOG.js
var getControlId, getControlSetterButtonId;
var init_chunk_S2IHWCOG = __esmMin((() => {
	getControlId = (value, storyId) => {
		let base = value.replace(/\s+/g, "-");
		return storyId ? `control-${storyId}-${base}` : `control-${base}`;
	}, getControlSetterButtonId = (value, storyId) => {
		let base = value.replace(/\s+/g, "-");
		return storyId ? `set-${storyId}-${base}` : `set-${base}`;
	};
}));
//#endregion
export { getControlSetterButtonId as n, init_chunk_S2IHWCOG as r, getControlId as t };
