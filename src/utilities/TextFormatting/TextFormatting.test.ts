import { FormatTitle } from "./TextFormatting";

describe("Text formatting", () => {
    const testCases = [
        {
            string: "call_time",
            expected: "Call time",
        },
        {
            string: "hours_on_calls_percentage",
            expected: "Hours on calls percentage",
        },
        {
            string: "average_calls_per_hour",
            expected: "Average calls per hour",
        },
        {
            string: "average_respondents_interviewed_per_hour",
            expected: "Average respondents interviewed per hour",
        },
        {
            string: "invalid_fields",
            expected: "Invalid fields",
        },
    ];

    testCases.forEach((test) => {
        it(`should correctly format the text: ${test.string} to: ${test.expected}`, () => {
            const formattedText = FormatTitle(test.string);

            expect(formattedText).toEqual(test.expected);
        });
    });
});
