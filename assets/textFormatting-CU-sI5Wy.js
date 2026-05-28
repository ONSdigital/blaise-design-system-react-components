import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
//#region src/utilities/textFormatting.ts
/** Capitalises the first character. */
function capitaliseFirstLetter(text) {
	if (!text) return "";
	return text.charAt(0).toUpperCase() + text.slice(1);
}
/** Replaces underscores with spaces. */
function replaceUnderscoreWithSpaces(text) {
	return text.replaceAll("_", " ");
}
/** Formats an underscore-delimited key as a label. */
function formatTitle(text) {
	if (!text) return "";
	return capitaliseFirstLetter(replaceUnderscoreWithSpaces(text));
}
/** Replaces spaces with hyphens. */
function formatKey(text) {
	if (!text) return "";
	return text.replaceAll(" ", "-");
}
var init_textFormatting = __esmMin((() => {}));
//#endregion
export { init_textFormatting as i, formatKey as n, formatTitle as r, capitaliseFirstLetter as t };
