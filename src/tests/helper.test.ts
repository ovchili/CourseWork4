import { describe, expect, it } from "@jest/globals";
import { compareString, formatNumber, generateCard } from "../ts/helper";
describe("generateCard function", () => {
    it("should cards have length", () => {
        const values: string[] = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const suits: string[] = ["C", "D", "H", "S"];
        const length: number = values.length * suits.length;
        expect(generateCard(values, suits)).toHaveLength(length);
    });

    it("should not card have length", () => {
        const values: string[] = [];
        const suits: string[] = [];
        expect(generateCard(values, suits)).toHaveLength(0);
    });
});

describe("formatNumber function", () => {
    it("should add 0 from number", () => {
        const number = 5;

        const rtn = formatNumber(number);
        const expected = `05`;
        expect(rtn).toBe(expected);
    });
    it("should not add 0 from number", () => {
        const number = 15;

        const rtn = formatNumber(number);
        const expected = `15`;
        expect(rtn).toBe(expected);
    });
});

describe("compareString function", () => {
    it("should compare two string and return true", () => {
        const str1 = "str";
        const str2 = "str";

        const expected = true;

        expect(compareString(str1, str2)).toEqual(expected);
    });

    it("should compare two string and return false", () => {
        const str1 = "str1";
        const str2 = "str";

        const expected = false;

        expect(compareString(str1, str2)).toEqual(expected);
    });
});
