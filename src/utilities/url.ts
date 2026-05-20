const allowedProtocols = new Set(["http:", "https:", "mailto:", "tel:"]);

/** Returns a safe href for rendered anchors. */
export function getSafeHref(href: string): string {
  const trimmedHref = href.trim();

  if (!trimmedHref) {
    return "#";
  }

  if (
    trimmedHref.startsWith("/") ||
    trimmedHref.startsWith("./") ||
    trimmedHref.startsWith("../") ||
    trimmedHref.startsWith("#") ||
    trimmedHref.startsWith("?")
  ) {
    return trimmedHref;
  }

  try {
    const parsedHref = new URL(trimmedHref, "http://localhost");

    return allowedProtocols.has(parsedHref.protocol) ? trimmedHref : "#";
  } catch {
    return "#";
  }
}
