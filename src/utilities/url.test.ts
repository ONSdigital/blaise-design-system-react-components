import { getSafeHref } from "./url";

describe("getSafeHref", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe("empty input", () => {
    it("returns '#' for an empty string", () => {
      expect(getSafeHref("")).toBe("#");
    });

    it("returns '#' for a whitespace-only string", () => {
      expect(getSafeHref("   ")).toBe("#");
    });
  });

  describe("relative paths", () => {
    it.each([
      { input: "/path/to/page", expected: "/path/to/page" },
      { input: "./relative", expected: "./relative" },
      { input: "../parent", expected: "../parent" },
      { input: "#anchor", expected: "#anchor" },
      { input: "?query=1", expected: "?query=1" },
    ])("returns '$expected' unchanged for '$input'", ({ input, expected }) => {
      expect(getSafeHref(input)).toBe(expected);
    });
  });

  describe("safe absolute URLs", () => {
    it.each([
      { input: "https://example.com" },
      { input: "http://example.com" },
      { input: "mailto:user@example.com" },
      { input: "tel:+1234567890" },
    ])("returns '$input' unchanged", ({ input }) => {
      expect(getSafeHref(input)).toBe(input);
    });
  });

  describe("unsafe protocols", () => {
    it.each([
      { input: "javascript:alert('xss')" },
      { input: "data:text/html,<h1>test</h1>" },
      { input: "vbscript:msgbox('xss')" },
    ])("returns '#' for '$input'", ({ input }) => {
      expect(getSafeHref(input)).toBe("#");
    });
  });

  describe("URL parsing failure", () => {
    it("returns '#' when the URL constructor throws", () => {
      vi.stubGlobal(
        "URL",
        class {
          constructor() {
            throw new TypeError("Invalid URL");
          }
        },
      );

      expect(getSafeHref("foobar")).toBe("#");
    });
  });
});
