const avg = require("../index");

describe("The average function", () => {
  test("can find the average of the array", () => {
    expect(avg([10, 20, 30, 40, 50, 30])).toBe(30);
  });

  test("can find the average of the negative numbers in an array", () => {
    expect(avg([-100, -200, -300])).toBe(-200);
  });

  test("will return NaN for an empty array", () => {
    expect(avg([])).toBe(NaN);
  });
});
