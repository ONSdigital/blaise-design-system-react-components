import { isObjectWithProperty } from "./Types";

describe("isObjectWithProperty", () => {
    describe("When provided with inputs that contain the property", () => {
        it.each([
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
        ])("should return true for $description", ({ input, property }) => {
            expect(isObjectWithProperty(input, property)).toBe(true);
        });
    });

    describe("When provided with inputs that lack the property or are invalid types", () => {
        it.each([
            {
                description: "a number primitive",
                input: 7,
                property: "anyProperty",
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
