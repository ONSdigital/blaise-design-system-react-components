import { isObjectWithProperty } from "./types";

interface ValidPropertyTestCase {
  description: string;
  input: unknown;
  property: PropertyKey;
}

interface InvalidPropertyTestCase {
  description: string;
  input: unknown;
  property: string;
}

describe("isObjectWithProperty", () => {
  describe("When provided with inputs that contain the property", () => {
    const dummyFunction = () => {};

    dummyFunction.customProperty = "test";

    const mySymbol = Symbol("testSymbol");
    const objectWithSymbol = { [mySymbol]: true };

    it.each<ValidPropertyTestCase>([
      {
        description: "a standard object with the property",
        input: { name: "Callum" },
        property: "name",
      },
      {
        description: "an array testing for the 'length' property",
        input: [1, 2, 3],
        property: "length",
      },
      {
        description: "a function object with an attached property",
        input: dummyFunction,
        property: "customProperty",
      },
      {
        description: "an object with a Symbol property",
        input: objectWithSymbol,
        property: mySymbol,
      },
      {
        description: "an object where the property exists but is explicitly undefined",
        input: { explicitlyUndefined: undefined },
        property: "explicitlyUndefined",
      },
    ])("should return true for $description", ({ input, property }) => {
      expect(isObjectWithProperty(input, property)).toBe(true);
    });
  });

  describe("When provided with inputs that lack the property or are invalid types", () => {
    it.each<InvalidPropertyTestCase>([
      {
        description: "a number primitive",
        input: 7,
        property: "anyProperty",
      },
      {
        description: "a string primitive",
        input: "string",
        property: "length",
      },
      {
        description: "a null value",
        input: null,
        property: "anyProperty",
      },
      {
        description: "an undefined value",
        input: undefined,
        property: "anyProperty",
      },
      {
        description: "an empty object missing the property",
        input: {},
        property: "name",
      },
    ])("should return false for $description", ({ input, property }) => {
      expect(isObjectWithProperty(input, property)).toBe(false);
    });
  });
});
