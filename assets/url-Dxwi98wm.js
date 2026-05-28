import { i as __esmMin } from "./preload-helper-D6TR99Xr.js";
//#region src/utilities/url.ts
/** Returns a safe href for rendered anchors. */
function getSafeHref(href) {
	const trimmedHref = href.trim();
	if (!trimmedHref) return "#";
	if (trimmedHref.startsWith("/") || trimmedHref.startsWith("./") || trimmedHref.startsWith("../") || trimmedHref.startsWith("#") || trimmedHref.startsWith("?")) return trimmedHref;
	try {
		const parsedHref = new URL(trimmedHref, "http://localhost");
		return allowedProtocols.has(parsedHref.protocol) ? trimmedHref : "#";
	} catch {
		return "#";
	}
}
var allowedProtocols;
var init_url = __esmMin((() => {
	allowedProtocols = new Set([
		"http:",
		"https:",
		"mailto:",
		"tel:"
	]);
}));
//#endregion
export { init_url as n, getSafeHref as t };
