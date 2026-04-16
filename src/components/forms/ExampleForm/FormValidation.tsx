const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

/**
 * Validates the Instrument Name field.
 * @param value - The raw string value from the input.
 * @returns An error message string if invalid, or undefined if valid.
 */
export function validateInstrumentName(value: string): string | undefined {
    if (!value) return "Enter a valid instrument name";
    if (value.length < 8) return "Enter a valid instrument name (longer than 7 characters)";
    return undefined;
}

/**
 * Validates the Name field.
 * @param value - The raw string value from the input.
 * @returns An error message string if invalid, or undefined if valid.
 */
export function validateName(value: string): string | undefined {
    if (!value) return "Enter a name";
    if (value.length < 3) return "Enter a name longer than 2 characters";
    return undefined;
}

/**
 * Validates the Password field.
 * @param value - The raw string value from the input.
 * @returns An error message string if invalid, or undefined if valid.
 */
export function validatePassword(value: string): string | undefined {
    if (!value) return "Enter a password";
    if (value.length < 6) return "Enter a password longer than 5 characters";
    return undefined;
}

/**
 * Validates the Email field using a standard regex pattern.
 * @param value - The raw string value from the input.
 * @returns An error message string if invalid, or undefined if valid.
 */
export function validateEmail(value: string): string | undefined {
    if (!value) return "Enter an email";
    if (!EMAIL_REGEX.test(value)) return "Enter an email address in the correct format, such as name@example.com";
    return undefined;
}

/**
 * Validates a Radio group selection.
 * @param value - The selected value string.
 * @returns An error message string if nothing is selected, or undefined if valid.
 */
export function validateRadio(value: string): string | undefined {
    if (!value || value.trim() === "") return "Select an option";
    return undefined;
}

/**
 * Validates a Checkbox group selection.
 * @param value - An array of selected strings.
 * @returns An error message string if the array is empty, or undefined if valid.
 */
export function validateCheckbox(value: string[]): string | undefined {
    if (!value || value.length === 0) return "Select an option";
    return undefined;
}
