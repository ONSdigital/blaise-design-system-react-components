import { FormatTitle } from "./TextFormatting";

describe("FormatTitle", () => {
  describe("When processing snake_case strings", () => {
    it.each([
      { input: "call_time", expected: "Call time" },
      {
        input: "hours_on_calls_percentage",
        expected: "Hours on calls percentage",
      },
      { input: "average_calls_per_hour", expected: "Average calls per hour" },
      {
        input: "average_respondents_interviewed_per_hour",
        expected: "Average respondents interviewed per hour",
      },
      { input: "invalid_fields", expected: "Invalid fields" },
    ])("should format '$input' to '$expected'", ({ input, expected }) => {
      const formattedText = FormatTitle(input);

      expect(formattedText).toBe(expected);
    });
  });

  describe("When handling edge cases", () => {
    it("should return an empty string when provided with an empty string", () => {
      expect(FormatTitle("")).toBe("");
    });
  });
});
