import { isObjectWithProperty } from "./Types";

describe("isObjectWithProperty", () => {
    it("returns True when given an object with specified properties",() =>{
        const value = {
            name: "Callum"
        }
        expect(isObjectWithProperty(value, "name")).toBe(true);
    })
    it("returns false when given an value which is not an object",() =>{
        const value = 7;
        expect(isObjectWithProperty(value, "")).toBe(false);
    })
    it("returns false when given an value which is null",() =>{
        const value = null;
        expect(isObjectWithProperty(value, "")).toBe(false);
    })
    it("returns false if the property is not in the object",() =>{
        const value = {};
        expect(isObjectWithProperty(value, "name")).toBe(false);
    })
})

