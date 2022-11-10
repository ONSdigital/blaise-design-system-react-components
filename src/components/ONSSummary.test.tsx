import React from "react";
import Enzyme, { shallow, render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { SummaryGroupTable, SummaryItemRow, GroupedSummary } from "./ONSSummary";

describe("ONS Summary Group Table test", () => {
    Enzyme.configure({ adapter: new Adapter() });
    const groupedSummary = new GroupedSummary([{ title: "test", records: { foo: "bar" } }]);

    it("matches Snapshot", () => {
        expect(render(<SummaryGroupTable groupedSummary={groupedSummary} />)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        expect(shallow(<SummaryGroupTable groupedSummary={groupedSummary} />).exists()).toEqual(true);
    });
});

describe("ONS Summary Item Row test", () => {
    Enzyme.configure({ adapter: new Adapter() });

    it("matches Snapshot", () => {
        expect(render(<SummaryItemRow fieldName="foo" fieldValue="bar" />)).toMatchSnapshot();
    });

    it("should render correctly", () => {
        expect(shallow(<SummaryItemRow fieldName="foo" fieldValue="bar" />).exists()).toEqual(true);
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
