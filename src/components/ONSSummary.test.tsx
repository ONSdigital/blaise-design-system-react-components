import React from "react";
import { SummaryGroupTable, SummaryItemRow, GroupedSummary } from "./ONSSummary";
import { render } from "@testing-library/react";

describe("ONS Summary Group Table test", () => {
    const groupedSummary = new GroupedSummary([{ title: "test", records: { foo: "bar" } }]);

    it("matches Snapshot", () => {
        expect(render(<SummaryGroupTable groupedSummary={groupedSummary} />)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        expect(render(<SummaryGroupTable groupedSummary={groupedSummary} />)).toBeDefined();
    });
});

describe("ONS Summary Item Row test", () => {

    it("matches Snapshot", () => {
        expect(render(<SummaryItemRow fieldName="foo" fieldValue="bar" />)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        expect(render(<SummaryItemRow fieldName="foo" fieldValue="bar" />)).toBeDefined();
    });
});

describe("GroupedSummary as CSV tests", () => {
    const groupedSummary = new GroupedSummary([
        { title: "test", records: { foo: "bar" } },
        { title: "test2", records: { fwibble: "fish" } },
    ]);

    it("converts a grouped summary to a csv type object", () => {
        expect(groupedSummary.csv()).toEqual([{
            foo: "bar",
            fwibble: "fish",
        }]);
    });
});
