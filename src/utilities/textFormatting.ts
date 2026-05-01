/**
 * Replaces underscores with spaces.
 */
function replaceUnderscoreWithSpaces(text: string): string {
  return text.replaceAll("_", " ");
}

/**
 * Capitalises the first character.
 */
export function capitaliseFirstLetter(text: string): string {
  if (!text) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Formats an underscore-delimited key as a label.
 */
export function formatTitle(text: string): string {
  if (!text) {
    return "";
  }

  return capitaliseFirstLetter(replaceUnderscoreWithSpaces(text));
}

/**
 * Replaces spaces with hyphens.
 */
export function formatKey(text: string): string {
  if (!text) {
    return "";
  }

  return text.replaceAll(" ", "-");
}
