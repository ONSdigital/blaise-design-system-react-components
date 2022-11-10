function replaceUnderscoreWithSpaces(text: string): string {
    return text.split("_").join(" ");
}

function TitleCase(stringToConvert: string): string {
    const firstCharacter = stringToConvert.substring(0, 1);
    const restString = stringToConvert.substring(1);

    return firstCharacter.toUpperCase() + restString;
}

function FormatTitle(text: string): string {
    return TitleCase(replaceUnderscoreWithSpaces(text));
}

function FormatKey(text: string): string {
    return text.split(" ").join("-");
}

export { FormatTitle, TitleCase, FormatKey };
