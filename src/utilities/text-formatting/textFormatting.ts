function replaceUnderscoreWithSpaces(text: string): string {
  return text.replaceAll("_", " ");
}

function TitleCase(stringToConvert: string): string {
  if (!stringToConvert) {
    return "";
  }

  return stringToConvert.charAt(0).toUpperCase() + stringToConvert.slice(1);
}

function FormatTitle(text: string): string {
  return TitleCase(replaceUnderscoreWithSpaces(text));
}

function FormatKey(text: string): string {
  return text.replaceAll(" ", "-");
}

export { FormatTitle, TitleCase, FormatKey };
