function replaceUnderscoreWithSpaces(text: string): string {
  return text.replaceAll("_", " ");
}

function capitaliseFirstLetter(text: string): string {
  if (!text) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatTitle(text: string): string {
  return capitaliseFirstLetter(replaceUnderscoreWithSpaces(text));
}

function formatKey(text: string): string {
  return text.replaceAll(" ", "-");
}

export { formatTitle, capitaliseFirstLetter, formatKey };
