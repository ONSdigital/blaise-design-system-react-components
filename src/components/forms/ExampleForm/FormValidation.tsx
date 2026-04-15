const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

/*
 * Validate instrument Name field
 *
 * @param {string} value Field value to validate
 */
export function validateInstrumentName(value: string): string | undefined {
    if (!value) return "Enter a valid instrument name";
    if (value.length < 7) return "Enter a valid instrument name (longer than 7 characters)";
    return undefined;
}

/*
 * Validate Name field
 *
 * @param {string} value Field value to validate
 */
export function validateName(value: string): string | undefined {
    if (!value) return "Enter a name";
    if (value.length < 3) return "Enter a name longer than 2 characters";
    return undefined;
}

/*
 * Validate Password field
 *
 * @param {string} value Field value to validate
 */
export function validatePassword(value: string): string | undefined {
    if (!value) return "Enter a password";
    if (value.length < 6) return "Enter a password longer than 6 characters";
    return undefined;
}

/*
 * Validate Email field
 *
 * @param {string} value Field value to validate
 */
export function validateEmail(value: string): string | undefined {
    if (!value) return "Enter an email";
    if (!EMAIL_REGEX.test(value)) return "Enter an email address in the correct format, such as name@example.com";
    return undefined;
}

/*
 * Validate Radio field
 *
 * @param {string} value Field value to validate
 */
export function validateRadio(value: string): string | undefined {
    if (!value) return "Select an option";
    return undefined;
}

/*
 * Validate Checkbox field
 *
 * @param {string[]} value Field value to validate
 */
export function validateCheckbox(value: string[]): string | undefined {
    if (!value || value.length === 0) return "Select an option";
    return undefined;
}
