function replaceUnderscoreWithSpaces(text: string): string {
    return text.split("_").join(" ")
}

function FormatTitle(text: string): string {
    text = replaceUnderscoreWithSpaces(text);
    return TitleCase(text);
}

function TitleCase(stringToConvert: string): string {
    const firstCharacter = stringToConvert.substring(0, 1);
    const restString = stringToConvert.substring(1);

    return firstCharacter.toUpperCase() + restString;
}

export {FormatTitle, TitleCase};
