import functions from "..";

describe("isLeapYear function test", () => {
  it("should return false when check 2001", () => {
    expect(functions.isLeapYear(2001)).toBe(false);
  });
});

describe("joinTwoArray functions test", () => {
  it("should join two array properly", () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    expect(functions.joinTwoArray(arr1, arr2)).toHaveLength(4);
    expect(functions.joinTwoArray(arr1, arr2)).toEqual([1, 2, 3, 4]);
  });
});

describe("sendMessage functions test", () => {
  it("should join two array properly", () => {
    expect(() => {
      functions.sendMessage("95990003");
    }).toThrow();
  });
});
