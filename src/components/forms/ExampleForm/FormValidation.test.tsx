import {
    validateEmail,
    validateInstrumentName,
    validateName,
    validatePassword,
    validateRadio,
} from "./FormValidation";

describe("FormValidation", () => {
    test("Instrument name validation", () => {
        expect(validateInstrumentName("")).toBe("Enter a valid instrument name");
        expect(validateInstrumentName("OPN2101")).toBe(
            "Enter a valid instrument name (longer than 7 characters)",
        );
        expect(validateInstrumentName("OPN2101A")).toBeUndefined();
    });

    test("Name validation", () => {
        expect(validateName("")).toBe("Enter a name");
        expect(validateName("Ma")).toBe("Enter a name longer than 2 characters");
        expect(validateName("Matthew")).toBeUndefined();
    });

    test("Password validation", () => {
        expect(validatePassword("")).toBe("Enter a password");
        expect(validatePassword("Passw")).toBe("Enter a password longer than 5 characters");
        expect(validatePassword("Password")).toBeUndefined();
    });

    test("Email validation", () => {
        const invalidEmailMessage =
            "Enter an email address in the correct format, such as name@example.com";
        expect(validateEmail("")).toBe("Enter an email");
        expect(validateEmail("matthew")).toBe(invalidEmailMessage);
        expect(validateEmail("matthew@example")).toBe(invalidEmailMessage);
        expect(validateEmail("matthew@example.")).toBe(invalidEmailMessage);
        expect(validateEmail("matthew@example.com")).toBeUndefined();
    });

    test("Radio validation", () => {
        expect(validateRadio("")).toBe("Select an option");
        expect(validateRadio("Bacon")).toBeUndefined();
    });
});
