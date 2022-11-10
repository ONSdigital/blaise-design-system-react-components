import React from "react";
import {
    validateEmail, validateInstrumentName, validateName, validatePassword, validateRadio,
} from "./FormValidation";

test("Instrument name length validation", () => {
    let errorMessage = validateInstrumentName("");

    expect(errorMessage).toEqual("Enter a valid instrument name");

    errorMessage = validateInstrumentName("OPN210");

    expect(errorMessage).toEqual("Enter a valid instrument name (longer than 7 characters)");

    errorMessage = validateName("OPN2101");

    expect(errorMessage).toEqual(undefined);
});

test("name length validation", () => {
    let errorMessage = validateName("Ma");

    expect(errorMessage).toEqual("Enter a name longer than 2 characters");

    errorMessage = validateName("Matthew");

    expect(errorMessage).toEqual(undefined);
});

test("password length validation", () => {
    let errorMessage = validatePassword("Passw");

    expect(errorMessage).toEqual("Enter a password longer than 6 characters");

    errorMessage = validatePassword("Password");

    expect(errorMessage).toEqual(undefined);
});

test("email validation", () => {
    const invalidEmailMessage = "Enter an email address in the correct format, such as name@example.com";

    let errorMessage = validateEmail("matthew");
    expect(errorMessage).toEqual(invalidEmailMessage);

    errorMessage = validateEmail("matthew@email");
    expect(errorMessage).toEqual(invalidEmailMessage);

    errorMessage = validateEmail("matthew@email");
    expect(errorMessage).toEqual(invalidEmailMessage);

    errorMessage = validateEmail("matthew@email.");
    expect(errorMessage).toEqual(invalidEmailMessage);

    errorMessage = validateEmail("matthew@email.com");
    expect(errorMessage).toEqual(undefined);
});

test("radio validation", () => {
    // @ts-ignore
    let errorMessage = validateRadio(undefined);

    expect(errorMessage).toEqual("Select an option");

    errorMessage = validateRadio("Bcaon");

    expect(errorMessage).toEqual(undefined);
});
