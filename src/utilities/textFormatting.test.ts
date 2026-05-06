import { capitaliseFirstLetter, formatKey, formatTitle } from "./textFormatting";

describe("formatTitle", () => {
  describe("when given snake_case text", () => {
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
    ])("returns '$expected' for '$input'", ({ input, expected }) => {
      const formattedText = formatTitle(input);

      expect(formattedText).toBe(expected);
    });
  });

  describe("edge cases", () => {
    it("returns an empty string for an empty string", () => {
      expect(formatTitle("")).toBe("");
    });
  });
});

describe("capitaliseFirstLetter", () => {
  describe("when given standard text", () => {
    it.each([
      { input: "hello", expected: "Hello" },
      { input: "world", expected: "World" },
      { input: "Already capitalised", expected: "Already capitalised" },
    ])("returns '$expected' for '$input'", ({ input, expected }) => {
      const formattedText = capitaliseFirstLetter(input);

      expect(formattedText).toBe(expected);
    });
  });

  describe("edge cases", () => {
    it("returns an empty string for an empty string", () => {
      expect(capitaliseFirstLetter("")).toBe("");
    });
  });
});

describe("formatKey", () => {
  describe("when given text with spaces", () => {
    it.each([
      { input: "hello world", expected: "hello-world" },
      { input: "a very long key name", expected: "a-very-long-key-name" },
      { input: " one leading space", expected: "-one-leading-space" },
    ])("returns '$expected' for '$input'", ({ input, expected }) => {
      const formattedText = formatKey(input);

      expect(formattedText).toBe(expected);
    });
  });

  describe("edge cases", () => {
    it("returns the original string when no spaces are present", () => {
      expect(formatKey("nospaceshere")).toBe("nospaceshere");
    });

    it("returns an empty string for an empty string", () => {
      expect(formatKey("")).toBe("");
    });
  });
});
