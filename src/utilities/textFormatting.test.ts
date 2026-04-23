import { formatTitle, capitaliseFirstLetter, formatKey } from "./textFormatting";

describe("formatTitle", () => {
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
      const formattedText = formatTitle(input);

      expect(formattedText).toBe(expected);
    });
  });

  describe("When handling edge cases", () => {
    it("should return an empty string when provided with an empty string", () => {
      expect(formatTitle("")).toBe("");
    });
  });
});

describe("capitaliseFirstLetter", () => {
  describe("When processing standard strings", () => {
    it.each([
      { input: "hello", expected: "Hello" },
      { input: "world", expected: "World" },
      { input: "Already capitalised", expected: "Already capitalised" },
    ])("should capitalise the first letter of '$input' to '$expected'", ({ input, expected }) => {
      const formattedText = capitaliseFirstLetter(input);

      expect(formattedText).toBe(expected);
    });
  });

  describe("When handling edge cases", () => {
    it("should return an empty string when provided with an empty string", () => {
      expect(capitaliseFirstLetter("")).toBe("");
    });
  });
});

describe("formatKey", () => {
  describe("When processing strings with spaces", () => {
    it.each([
      { input: "hello world", expected: "hello-world" },
      { input: "a very long key name", expected: "a-very-long-key-name" },
      { input: " one leading space", expected: "-one-leading-space" },
    ])(
      "should replace spaces in '$input' with hyphens resulting in '$expected'",
      ({ input, expected }) => {
        const formattedText = formatKey(input);

        expect(formattedText).toBe(expected);
      },
    );
  });

  describe("When handling edge cases", () => {
    it("should return the original string if no spaces are present", () => {
      expect(formatKey("nospaceshere")).toBe("nospaceshere");
    });

    it("should return an empty string when provided with an empty string", () => {
      expect(formatKey("")).toBe("");
    });
  });
});
