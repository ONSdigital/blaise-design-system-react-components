import {
  validateEmail,
  validateQuestionnaireName,
  validateName,
  validatePassword,
  validateRadio,
  validateInterviewerID,
  validateCheckbox,
} from "./FormValidation";

describe("FormValidation", () => {
  describe("validateQuestionnaireName", () => {
    it.each([
      { input: "", expected: "Enter a valid questionnaire name" },
      {
        input: "OPN2101",
        expected: "Enter a valid questionnaire name (longer than 7 characters)",
      },
      { input: "OPN2101A", expected: undefined },
    ])("should return '$expected' when input is '$input'", ({ input, expected }) => {
      expect(validateQuestionnaireName(input)).toBe(expected);
    });
  });

  describe("validateInterviewerID", () => {
    it.each([
      { input: "", expected: "Enter an Interviewer ID" },
      { input: "   ", expected: "Enter an Interviewer ID" },
      { input: "INT123", expected: undefined },
    ])("should return '$expected' when input is '$input'", ({ input, expected }) => {
      expect(validateInterviewerID(input)).toBe(expected);
    });
  });

  describe("validateName", () => {
    it.each([
      { input: "", expected: "Enter a name" },
      { input: "Ma", expected: "Enter a name longer than 2 characters" },
      { input: "Matthew", expected: undefined },
    ])("should return '$expected' when input is '$input'", ({ input, expected }) => {
      expect(validateName(input)).toBe(expected);
    });
  });

  describe("validatePassword", () => {
    it.each([
      { input: "", expected: "Enter a password" },
      { input: "Passw", expected: "Enter a password longer than 5 characters" },
      { input: "Password", expected: undefined },
    ])("should return '$expected' when input is '$input'", ({ input, expected }) => {
      expect(validatePassword(input)).toBe(expected);
    });
  });

  describe("validateEmail", () => {
    const invalidEmailMessage =
      "Enter an email address in the correct format, such as name@example.com";

    it.each([
      { input: "", expected: "Enter an email" },
      { input: "matthew", expected: invalidEmailMessage },
      { input: "matthew@example", expected: invalidEmailMessage },
      { input: "matthew@example.", expected: invalidEmailMessage },
      { input: "matthew@example.com", expected: undefined },
    ])(
      "should return the correct validation message for email input '$input'",
      ({ input, expected }) => {
        expect(validateEmail(input)).toBe(expected);
      },
    );
  });

  describe("validateRadio", () => {
    it.each([
      { input: "", expected: "Select an option" },
      { input: "Bacon", expected: undefined },
    ])("should return '$expected' when input is '$input'", ({ input, expected }) => {
      expect(validateRadio(input)).toBe(expected);
    });
  });

  describe("validateCheckbox", () => {
    it.each([
      { input: [], expected: "Select an option" },
      { input: ["Option 1"], expected: undefined },
      { input: ["Option 1", "Option 2"], expected: undefined },
    ])("should return '$expected' when input is %j", ({ input, expected }) => {
      expect(validateCheckbox(input as string[])).toBe(expected);
    });
  });
});
